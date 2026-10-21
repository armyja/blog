import type { APIContext } from 'astro'
import rss from '@astrojs/rss'
import MarkdownIt from 'markdown-it'
import sanitizeHtml from 'sanitize-html'
import { themeConfig } from 'astro-theme-retyped/config.ts'
import { getPosts } from 'astro-theme-retyped/utils'

const parser = new MarkdownIt()
const { title, description, website, author } = themeConfig.site
const allowedTags = sanitizeHtml.defaults.allowedTags.concat(['img'])

export async function GET(_context: APIContext) {
  const posts = await getPosts()
  return rss({
    title,
    description,
    site: website,
    items: posts.map(getPostItem),
  })
}

function getPostItem(post: any) {
  return {
    link: `/posts/${post.id}`,
    author: post.data.author ?? author,
    content: themeConfig.rss.fullText ? getPostContent(post) : undefined,
    title: post.data.title,
    pubDate: post.data.pubDate,
    description: post.data.description,
  }
}

function getPostContent(post: any) {
  const html = parser.render(post.body ?? '')
  return sanitizeHtml(html, { allowedTags })
}
