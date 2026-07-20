export default {
  title: "MetaScape Hub",
  description: "Core Rules & Technical Reference Engine",
  base: '/MetaScape-VitePress-GitHub-Pages/',
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: '/MetaScape-VitePress-GitHub-Pages/jodar.ico' }]
  ],
  themeConfig: {
    logo: '/jodar.ico',
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          searchOptions: {
            filter: (result) => {
              if (typeof window === 'undefined') return true;
              const path = window.location.pathname;
              if (path.includes('/ms3/')) return result.id.includes('ms3/');
              if (path.includes('/flex/')) return result.id.includes('flex/');
              if (path.includes('/supaflex/')) return result.id.includes('supaflex/');
              if (path.includes('/turbo/')) return result.id.includes('turbo/');
              return true;
            }
          }
        }
      }
    },
    nav: [
      { text: 'Flex Legacy (MS3)', link: '/player-guide/ms3/rules' },
      { text: 'Flex Engine (MS4)', link: '/player-guide/flex/how-to-play' },
      { text: 'Flex Moxie', link: '/player-guide/moxie/rules' },
      { text: 'SupaFlex', link: '/player-guide/supaflex/rules' },
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
            { text: 'Character Sheet Options', link: '/player-guide/ms3/character-sheets' }
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
          text: '🌸 Flex Moxie',
          collapsed: false,
          items: [
            { text: 'Core Rules Manual', link: '/player-guide/moxie/rules' }
          ]
        },
        {
          text: '🌌 SupaFlex',
          collapsed: false,
          items: [
            { text: 'Core Rules Manual', link: '/player-guide/supaflex/rules' }
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
