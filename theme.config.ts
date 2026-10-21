import type { UserConfig } from 'astro-theme-retyped/types/index.ts'

const config: UserConfig = {
  site: {
    title: '如若不燃',
    subtitle: 'Armyja',
    author: 'Armyja',
    description: '酷爱蹦跶，穿梭堂狱',
    website: 'https://blog.armyja-online.uk',
    pageSize: 8,
    navLinks: [
      { name: '首页', href: '/' },
      { name: '博文', href: '/posts/' },
      { name: '标签', href: '/tags/' },
      { name: 'Memos', href: 'https://memos.armyja-online.uk/u/armyja', external: true },
    ],
    socialLinks: [
      { name: 'GitHub', href: 'https://github.com/armyja', icon: 'github' },
      { name: '微博', href: 'https://weibo.com/armyja', icon: 'sina-weibo' },
      { name: 'RSS', href: '/atom.xml', icon: 'rss' },
    ],
    footer: [
      '© %year <a href="%website">%author</a>',
      'Powered by <a href="https://astro.build" target="_blank" rel="noopener noreferrer">Astro</a> & <a href="https://github.com/armyja/astro-theme-retyped" target="_blank" rel="noopener noreferrer">Retyped</a>',
    ],
  },
  appearance: {
    theme: 'system',
    locale: 'zh-cn',
  },
  comment: {
    giscus: {
      repo: 'armyja/blog',
      repoId: 'R_kgDOHL4kuA',
      category: 'Announcements',
      categoryId: 'DIC_kwDOHL4kuM4CefTw',
      mapping: 'pathname',
      strict: '0',
      reactionsEnabled: '1',
      emitMetadata: '0',
      inputPosition: 'top',
      // 跟随站点明暗模式：组件会用 postMessage 同步 iframe 主题
      theme: 'preferred_color_scheme',
      lang: 'zh-CN',
      loading: 'lazy',
    },
  },
  rss: {
    fullText: true,
  },
}

export default config
