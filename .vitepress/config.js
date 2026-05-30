export default {
  title: 'MetaScape',
  description: 'System Guidelines and Core Documentation',
  base: '/MetaScape-VitePress-GitHub-Pages/',
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/docs/getting-started' },
      { text: 'Manifest', link: '/docs/sot/Core/Manifest' },
      { text: 'Turbo Rules', link: '/docs/turbo/Rules/MS5TurboRules' }
    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/docs/getting-started' },
          { text: 'SoT Manifest', link: '/docs/sot/Core/Manifest' },
          { text: 'Tech Stack', link: '/docs/sot/Core/TechStack' },
          { text: 'Emoji Conventions', link: '/docs/sot/Core/EmojiConventions' }
        ]
      },
      {
        text: 'Rules & Design',
        items: [
          { text: 'MS5 Turbo Rules', link: '/docs/turbo/Rules/MS5TurboRules' },
          { text: 'Flexify-Turbo Transition', link: '/docs/sot/Rules/MS5FlexifyTurbo' }
        ]
      },
      {
        text: 'Core Logic (Turbo)',
        items: [
          { text: 'Action Economy', link: '/docs/turbo/Core/ActionEconomy' },
          { text: 'Combat & Monsters', link: '/docs/turbo/Core/CombatAndMonsters' },
          { text: 'HUD & Vitality', link: '/docs/turbo/Core/HUDVitality' },
          { text: 'State Management', link: '/docs/turbo/Core/StateManagementSOP' },
          { text: 'Move Button logic', link: '/docs/turbo/Core/MoveButton' },
          { text: 'Power Button system', link: '/docs/turbo/Core/PowerButtonSystem' },
          { text: 'AI Persona Contracts', link: '/docs/turbo/Core/AIPersonaContracts' },
          { text: 'Communication Protocol', link: '/docs/turbo/Core/CommunicationProtocol' }
        ]
      },
      {
        text: 'UI Specifications',
        items: [
          { text: 'UI Layouts', link: '/docs/turbo/UI/UiLayoutsSpec' },
          { text: 'UI Interactions', link: '/docs/turbo/UI/UiInteractionsSpec' },
          { text: 'Nord Color Palette', link: '/docs/turbo/UI/NordPalette' },
          { text: 'Party Log spec', link: '/docs/turbo/UI/PartyLog' }
        ]
      },
      {
        text: 'Character & World',
        items: [
          { text: 'Character Advancement', link: '/docs/turbo/Character/CSAdvancement' },
          { text: 'Dual Key Logic', link: '/docs/turbo/Character/DualKeyLogic' },
          { text: 'Adventure Architecture', link: '/docs/turbo/World/AdventureArchitecture' },
          { text: 'Cloned Adventures', link: '/docs/turbo/World/ClonedAdventures' }
        ]
      },
      {
        text: 'Appendices & Operations',
        items: [
          { text: 'Decision Log', link: '/docs/sot/Decisions/DecisionLog' },
          { text: 'Codebase Map', link: '/docs/sot/Appendices/CodebaseMap' },
          { text: 'Legacy Rules Rationale', link: '/docs/sot/Appendices/LegacyRulesRationale' },
          { text: 'Sheet Cutover Runbook', link: '/docs/sot/Runbooks/SheetCutoverRunbook' }
        ]
      }
    ]
  }
}
