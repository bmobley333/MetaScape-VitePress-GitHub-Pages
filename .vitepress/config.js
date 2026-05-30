export default {
  title: "MetaScape Hub",
  description: "Core Rules & Technical Reference Engine",
  base: '/MetaScape-VitePress-GitHub-Pages/',
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: 'Player Portal', link: '/player-guide/welcome' },
      { text: 'Developer System', link: '/docs/getting-started' },
      { text: 'Legacy MS3 (Old Flex)', link: 'https://sites.google.com/view/metascape/home' }
    ],
    sidebar: {
      // THE DEVELOPER ZONE SIDEBAR (Keeps the technical reference intact)
      '/docs/': [
        {
          text: 'Technical Architecture',
          collapsed: false,
          items: [
            { text: 'System Manifesto', link: '/docs/getting-started' },
            { text: 'Variable Contracts', link: '/docs/architecture/contracts' }
          ]
        }
      ],
      // THE PLAYER ZONE SIDEBAR (Swaps completely to user-friendly layouts)
      '/player-guide/': [
        {
          text: '👋 Overview',
          collapsed: false,
          items: [
            { text: 'Welcome Portal', link: '/player-guide/welcome' }
          ]
        },
        {
          text: '⚡ Flex Engine Guide',
          collapsed: false,
          items: [
            { text: 'How to Play (Flex)', link: '/player-guide/flex/how-to-play' },
            { text: 'Weapons & Gear', link: '/player-guide/flex/equipment' },
            { text: 'Using the Flex Web App', link: '/player-guide/flex/web-app-guide' }
          ]
        },
        {
          text: '🚀 Turbo Engine Guide',
          collapsed: false,
          items: [
            { text: 'Core Mechanics (Turbo)', link: '/player-guide/turbo/how-to-play' },
            { text: 'Powers & Class Manual', link: '/player-guide/turbo/powers' },
            { text: 'Using the Turbo Web App', link: '/player-guide/turbo/web-app-guide' }
          ]
        }
      ]
    }
  }
}
