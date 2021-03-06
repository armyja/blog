import { bundleMDX } from 'mdx-bundler'
import fs from 'fs'
import path from 'path'
import readingTime from 'reading-time'
import matter from 'gray-matter'
import getAllFilesRecursively from './utils/files'
// Remark packages
import remarkGfm from 'remark-gfm'
import remarkFootnotes from 'remark-footnotes'
import remarkMath from 'remark-math'
import remarkExtractFrontmatter from './remark-extract-frontmatter'
import remarkCodeTitles from './remark-code-title'
import remarkTocHeadings from './remark-toc-headings'
// Rehype packages
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeKatex from 'rehype-katex'
import rehypeCitation from 'rehype-citation'
import rehypePrismPlus from 'rehype-prism-plus'
import rehypePresetMinify from 'rehype-preset-minify'
import { Blog, Pagination as P } from '@/lib/types'
import convertStringTagToArray from './utils/formatTags'
import { Toc } from 'types/Toc'
import { getDefaultLocale, getLanguageByFileName } from './languageDetector'

type Frontmatter = {
  [key: string]: any
}
const root = process.cwd()
export function getFiles(type: string) {
  const prefixPaths = path.join(root, 'data', type)
  const files = getAllFilesRecursively(prefixPaths)
  // Only want to return blog/path and ignore root, replace is needed to work on Windows
  return files.map((file) => file.slice(prefixPaths.length + 1).replace(/\\/g, '/'))
}

export function formatSlug(slug: string) {
  return (slug + '').replace(/\.en/, '').replace(/\.(mdx|md)/, '')
}

export function dateSortDesc(a: string, b: string) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

export async function getFileBySlug(
  type: string,
  slug: string | string[],
  locale = getDefaultLocale()
) {
  const fileLanguageSuffix = locale === getDefaultLocale() ? '' : `.${locale}`
  const mdxPath = path.join(root, 'data', type, `${slug}${fileLanguageSuffix}.mdx`)
  const mdPath = path.join(root, 'data', type, `${slug}${fileLanguageSuffix}.md`)
  const source = fs.existsSync(mdxPath)
    ? fs.readFileSync(mdxPath, 'utf8')
    : fs.readFileSync(mdPath, 'utf8')

  // https://github.com/kentcdodds/mdx-bundler#nextjs-esbuild-enoent
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(root, 'node_modules', 'esbuild', 'esbuild.exe')
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(root, 'node_modules', 'esbuild', 'bin', 'esbuild')
  }

  let toc: Toc = []
  const { code, frontmatter } = await bundleMDX({
    source,
    // mdx imports can be automatically source from the components directory
    cwd: path.join(root, 'components'),
    xdmOptions: (options, frontmatter) => {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkExtractFrontmatter,
        [remarkTocHeadings, { exportRef: toc }],
        remarkGfm,
        remarkCodeTitles,
        [remarkFootnotes, { inlineNotes: true }],
        remarkMath,
      ]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        rehypeAutolinkHeadings,
        rehypeKatex,
        [rehypeCitation, { path: path.join(root, 'data') }],
        [rehypePrismPlus, { ignoreMissing: true }],
        rehypePresetMinify,
      ]
      return options
    },
    esbuildOptions: (options) => {
      options.loader = {
        ...options.loader,
        '.js': 'jsx',
      }
      return options
    },
  })
  convertDateToString(frontmatter)
  convertStringTagToArray(frontmatter)
  return {
    mdxSource: code,
    toc,
    frontMatter: {
      authors: null,
      readingTime: readingTime(code),
      slug: slug || null,
      fileName: fs.existsSync(mdxPath)
        ? `${slug}${fileLanguageSuffix}.mdx`
        : `${slug}${fileLanguageSuffix}.md`,
      locale,
      ...frontmatter,
    },
  }
}

export async function getAllFilesFrontMatter(folder: string, locale: string = '') {
  const prefixPaths = path.join(root, 'data', folder)
  const files = getAllFilesRecursively(prefixPaths)
  const allFrontMatter: Blog[] = []

  let blog: Blog = {
    title: '',
    summary: '',
    tags: [],
    slug: '',
    date_published: '',
    date_updated: '',
    draft: false,
  }
  files.forEach((file) => {
    // Replace is needed to work on Windows
    const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, '/')
    if (locale !== '' && getLanguageByFileName(fileName) !== locale) {
      return
    }
    // Remove Unexpected File
    if (path.extname(fileName) !== '.md' && path.extname(fileName) !== '.mdx') {
      return
    }
    const source = fs.readFileSync(file, 'utf8')
    const { data: frontmatter } = matter(source)
    convertDateToString(frontmatter)
    convertStringTagToArray(frontmatter)

    if (frontmatter.draft !== true) {
      allFrontMatter.push({
        ...blog,
        ...frontmatter,
        locale: locale || getLanguageByFileName(fileName),
      })
    }
  })
  return allFrontMatter.sort((a, b) => dateSortDesc(a.date_published, b.date_published))
}

function convertDateToString(frontmatter: { [key: string]: any }) {
  for (let key of Object.keys(frontmatter)) {
    if (frontmatter[key] instanceof Date) {
      frontmatter[key] = frontmatter[key].toISOString()
      continue
    }
  }
}
