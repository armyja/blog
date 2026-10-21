import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { postsSchema, specSchema } from 'astro-theme-retyped/content-schema.ts'

export const collections = {
  posts: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
    schema: postsSchema,
  }),
  spec: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/spec' }),
    schema: specSchema,
  }),
}
