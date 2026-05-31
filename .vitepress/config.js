export default {
  title: "MetaScape Hub",
  description: "Core Rules & Technical Reference Engine",
  base: '/MetaScape-VitePress-GitHub-Pages/',
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: 'Flex Legacy (MS3)', link: '/player-guide/ms3/rules' },
      { text: 'Flex Engine (MS4)', link: '/player-guide/flex/how-to-play' },
      { text: 'Turbo Engine (MS5)', link: '/player-guide/turbo/how-to-play' }
    ],
    sidebar: {
      // THE PLAYER ZONE SIDEBAR (Swaps completely to user-friendly layouts)
      '/player-guide/': [
        {
          text: '📜 Flex Legacy (MS3)',
          collapsed: false,
          items: [
            { text: 'Core Rules Manual', link: '/player-guide/ms3/rules' },
            { text: 'Character Sheet Options', link: '/player-guide/ms3/character-sheets' },
            { text: 'Designer Portal Workbench', link: '/player-guide/ms3/designer' }
          ]
        },
        {
          text: '⚡ Flex Engine (MS4)',
          collapsed: false,
          items: [
            { text: 'Core Rules Manual', link: '/player-guide/flex/how-to-play' },
            { text: 'Weapons & Gear Specs', link: '/player-guide/flex/equipment' },
            { text: 'Companion Web App Guide', link: '/player-guide/flex/web-app-guide' }
          ]
        },
        {
          text: '🚀 Turbo Engine (MS5)',
          collapsed: false,
          items: [
            { text: 'Core Rules Manual', link: '/player-guide/turbo/how-to-play' },
            { text: 'Powers & Class Specs', link: '/player-guide/turbo/powers' },
            { text: 'Companion Web App Guide', link: '/player-guide/turbo/web-app-guide' }
          ]
        }
      ]
    }
  }
}
