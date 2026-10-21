// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import UnoCSS from '@unocss/astro'
import retyped from 'astro-theme-retyped'

export default defineConfig({
  site: 'https://blog.armyja-online.uk',
  trailingSlash: 'ignore',
  integrations: [
    UnoCSS({ injectReset: true }),
    retyped(),
    sitemap(),
  ],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
})
