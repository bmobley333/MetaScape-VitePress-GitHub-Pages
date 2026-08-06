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
  // ─────────────────────────────────────────────────────────────────────────────
  // CUSTOM EMOJI-STRIPPING ANCHOR SLUGIFIER
  // ─────────────────────────────────────────────────────────────────────────────
  // PURPOSE: VitePress's default slugifier includes Unicode emoji characters in
  // heading IDs and URL hash fragments. A heading like "## ⭐ Leveling/Advancement"
  // produces id="⭐-leveling-advancement" → URL-encoded as #%E2%AD%90-leveling-advancement.
  // This breaks deep-linking from the SupaFlex app popovers and is untypeable.
  //
  // This custom slugifier strips ALL emoji codepoints from heading IDs while
  // preserving them 100% in the visible heading text and sidebar TOC.
  //
  // RESULT:  Heading text = "⭐ Leveling/Advancement" (emoji visible)
  //          HTML element = <h2 id="leveling-advancement">
  //          Clean URL    = rules.html#leveling-advancement
  //
  // DOCS: See Jodar SoT → Popover_Blueprint.md § "VitePress Clean URL Anchor Standard"
  // HISTORY: Added 2026-08-06 to fix #%E2%AD%90 emoji encoding in live URLs.
  // ─────────────────────────────────────────────────────────────────────────────
  markdown: {
    anchor: {
      slugify: (str: string) =>
        str
          .replace(/[\/\\]/g, '-')                     // Step 1: Convert forward/back slashes to hyphens
          .replace(/\{#[\w-]+\}/g, '')                 // Step 2: Strip VitePress {#custom-id} attribute tags
          .replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2B05}-\u{2B07}]|[\u{2934}-\u{2935}]|[\u{3297}-\u{3299}]|[\u{3030}]|[\u{303D}]|[\u{203C}]|[\u{2049}]|[\u{2122}]|[\u{2139}]/gu, '')  // Step 3: Strip all Unicode emoji ranges
          .toLowerCase()                               // Step 4: Lowercase everything
          .trim()                                      // Step 5: Trim whitespace
          .replace(/[^\w\s-]/g, '')                    // Step 6: Remove remaining non-word chars (except hyphens)
          .replace(/[\s_]+/g, '-')                     // Step 7: Convert spaces/underscores to hyphens
          .replace(/^-+|-+$/g, '')                     // Step 8: Trim leading/trailing hyphens
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
