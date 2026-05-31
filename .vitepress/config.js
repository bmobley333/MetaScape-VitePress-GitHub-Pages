export default {
  title: "MetaScape Hub",
  description: "Core Rules & Technical Reference Engine",
  base: '/MetaScape-VitePress-GitHub-Pages/',
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: 'Legacy MS3', link: '/player-guide/ms3/rules' },
      { text: 'Flex Engine (MS4)', link: '/player-guide/flex/how-to-play' },
      { text: 'Turbo Engine (MS5)', link: '/player-guide/turbo/how-to-play' }
    ],
    sidebar: {
      // THE PLAYER ZONE SIDEBAR (Swaps completely to user-friendly layouts)
      '/player-guide/': [
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
        },
        {
          text: '📜 Legacy MS3 Engine',
          collapsed: false,
          items: [
            { text: 'Rules Manual', link: '/player-guide/ms3/rules' },
            { text: 'Character Sheets', link: '/player-guide/ms3/character-sheets' },
            { text: 'Designer Portal', link: '/player-guide/ms3/designer' }
          ]
        }
      ]
    }
  }
}
