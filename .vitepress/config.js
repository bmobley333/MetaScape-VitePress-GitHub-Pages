export default {
  title: 'MetaScape',
  description: 'System Guidelines and Core Documentation',
  base: '/MetaScape-VitePress-GitHub-Pages/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/getting-started' }
    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/docs/getting-started' }
        ]
      }
    ]
  }
}
