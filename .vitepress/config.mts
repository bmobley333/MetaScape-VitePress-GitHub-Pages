import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "MetaScape Hub",
  description: "Core Rules & Technical Reference Engine",
  base: '/MetaScape-VitePress-GitHub-Pages/',
  appearance: 'dark',
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: '/MetaScape-VitePress-GitHub-Pages/jodar.ico' }]
  ],
  markdown: {
    anchor: {
      slugify: (str: string) =>
        str
          .replace(/[\/\\]/g, '-')
          .replace(/\{#[\w-]+\}/g, '')
          .replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2B05}-\u{2B07}]|[\u{2934}-\u{2935}]|[\u{3297}-\u{3299}]|[\u{3030}]|[\u{303D}]|[\u{203C}]|[\u{2049}]|[\u{2122}]|[\u{2139}]/gu, '')
          .toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, '')
          .replace(/[\s_]+/g, '-')
          .replace(/^-+|-+$/g, '')
    }
  },
  themeConfig: {
    outline: [2, 2],
    logo: '/jodar.ico',
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          searchOptions: {
            filter: (result: any) => {
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
    nav: [],
    sidebar: {
      '/player-guide/supaflex/': [
        { text: '📖 Core Rules Manual', link: '/player-guide/supaflex/rules' },
        { text: '──────────────', link: '/player-guide/supaflex/rules#sep' },
        { text: '🧥 Armor Reference', link: '/player-guide/supaflex/armor' },
        { text: '🧰 Gear Catalog', link: '/player-guide/supaflex/gear' },
        { text: '✨ Magic Items Reference', link: '/player-guide/supaflex/magic-items' },
        { text: '🐉 Monsters Bestiary', link: '/player-guide/supaflex/monsters' },
        { text: '🔥 Powers Reference', link: '/player-guide/supaflex/powers' },
        { text: '🛡️ Shields Reference', link: '/player-guide/supaflex/shields' },
        { text: '🎓 Skill Sets Reference', link: '/player-guide/supaflex/skillsets' },
        { text: '⚔️ Weapons Reference', link: '/player-guide/supaflex/weapons' },
        { text: '── OR ──', link: '/player-guide/supaflex/tables#divider' },
        { text: '📊 Interactive Tables Catalog', link: '/player-guide/supaflex/tables' }
      ],
      '/player-guide/ms3/': [
        {
          text: '📜 Flex Legacy (MS3)',
          collapsed: false,
          items: [
            { text: 'Core Rules Manual', link: '/player-guide/ms3/rules' },
            { text: 'Character Sheet Options', link: '/player-guide/ms3/character-sheets' }
          ]
        }
      ],
      '/player-guide/flex/': [
        {
          text: '⚡ Flex Engine (MS4)',
          collapsed: false,
          items: [
            { text: 'Core Rules Manual', link: '/player-guide/flex/how-to-play' },
            { text: 'Weapons & Gear Specs', link: '/player-guide/flex/equipment' },
            { text: 'Companion Web App Guide', link: '/player-guide/flex/web-app-guide' }
          ]
        }
      ],
      '/player-guide/moxie/': [
        {
          text: '🌸 Flex Moxie',
          collapsed: false,
          items: [
            { text: 'Core Rules Manual', link: '/player-guide/moxie/rules' }
          ]
        }
      ],
      '/player-guide/turbo/': [
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
})
