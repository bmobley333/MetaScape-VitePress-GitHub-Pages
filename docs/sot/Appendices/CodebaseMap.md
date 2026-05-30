# MetaScape Codebase Map

**Status:** Reference Appendix  
**Purpose:** Preserve the project map that previously lived in `Prompts/SoT/Core/Manifest.md` without making this file compete with the current normative SoT. Use this appendix to understand where major systems live in the repo.

---

## 1. Infrastructure and Configuration

- `package.json`: root workspace metadata, scripts, and dependencies
- `package-lock.json`: dependency lockfile
- `render.yaml`: Render blueprint and deploy commands
- `masterServer.js`: root master entry point and proxy for `/`, `/turbo/*`, and `/flex/*`
- `scripts/masterColdStart.mjs`: root `npm run cold-start` orchestration, including Windows pre-build cleanup/retry for Prisma DLL lock failures
- `scripts/masterKillNodeWindows.js`: root Windows Node-process cleanup helper; supports targeted workspace-port cleanup for root cold-start recovery
- `turbo/tsconfig.json`: Turbo TypeScript server config
- `turbo/tsconfig.client.json`: Turbo client TypeScript config
- `turbo/vite.config.ts`: Turbo Vite client build config and aliases
- `turbo/tailwind.config.js`: Turbo Tailwind theme and Nord mappings
- `turbo/postcss.config.js`: Turbo PostCSS config
- `turbo/components.json`: Turbo shadcn/ui config
- `turbo/server.ts`: Turbo Express and Socket.IO entry point
- `turbo/prisma/schema.prisma`: Turbo database schema and data contract
- `flex/tsconfig.flex.json`: Flex isolated auth runtime TypeScript server config
- `flex/tsconfig.flexClient.json`: Flex isolated auth runtime client TypeScript config
- `flex/vite.flex.config.ts`: Flex isolated auth runtime Vite build config
- `flex/flexServer.ts`: Flex Express, Google auth, and Socket.IO entry point
- `.vscode/launch.json`: debug config
- `README.md`: setup and high-level overview

### Turbo Scripts

- `turbo/scripts/buildClient.mjs`: Turbo client build wrapper
- `turbo/scripts/coldStart.mjs`: legacy Turbo-local cold-start orchestration
- `turbo/scripts/backfillActiveAdventureUserId.ts`: ActiveAdventure userId backfill
- `turbo/scripts/wipeContentForReseed.ts`: optional content wipe before reseed
- `turbo/scripts/migrateF14Schema.ts`: legacy character/schema migration
- `turbo/scripts/migrateMonsterRosterSSOT.ts`: monster roster SSOT migration

---

## 2. Server Core

Unless otherwise noted below, the gameplay server, shared, client, public, and script paths in this appendix are rooted under `turbo/`.

### Core Libraries

- `lib/socketManager.ts`: socket registration, auth gating, request dispatch
- `lib/routeHandlers.ts`: handler export registry
- `lib/handlerResponses.ts`: reusable socket error/toast response helpers and lightweight handler wrapper
- `lib/schemas.ts`: shared Zod schema compatibility barrel and request validation entry point
- `lib/schemaPrimitives.ts`: shared primitive Zod schemas and common coercion helpers
- `lib/schemaContent.ts`: content, sheet, and codex-adjacent schemas
- `lib/schemaCharacter.ts`: character document and character action payload schemas
- `lib/schemaSocial.ts`: club, session, and roster payload schemas
- `lib/schemaAdventure.ts`: adventure editor payload and room/area schemas
- `lib/schemaGm.ts`: GM clone, publish, and runtime monster payload schemas
- `lib/schemaAi.ts`: AI generation request schemas
- `lib/schemaGameplay.ts`: roll, action, usage, and loot payload schemas
- `lib/schemaGeneric.ts`: chat, auth, and generic utility payload schemas
- `lib/validation.ts`: validation helpers
- `lib/db_utils.ts`: Prisma/database helpers and session payload builders
- `lib/game_math.ts`: tier math, derived stats, monster scaling helpers
- `lib/monsterProjection.ts`: shared encounter monster projection pipeline for draft and publish payloads
- `lib/RollEngine.ts`: roll execution and wounds/AR pipeline
- `lib/die.ts`: dice and RNG utilities
- `lib/server_types.ts`: backend-specific types
- `lib/server_utils.ts`: backend utility helpers
- `lib/sessionPresence.ts`: in-memory presence tracking
- `lib/lootEngine.ts`: loot selection and resolution engine
- `lib/googleSheets.ts`: sheet sync integration
- `lib/sheetBaseline.ts`: CSV baseline loader for sheet column order
- `lib/powerButtonValidator.ts`: inline button validation and parsing
- `lib/powerButtonExpression.ts`: safe expression evaluation for inline buttons
- `lib/advancementSlots.ts`: AP/GP/ArfP and slot math
- `lib/dualKeyEngine.ts`: tier calculation engine and legacy dual-key support

### Domain Handlers

- `lib/handlers/authHandlers.ts`: Google auth, reauth, and pending invite reconciliation
- `lib/handlers/sessionHandlers.ts`: session lifecycle, roster, visibility, and join/leave
- `lib/handlers/characterHandlers.ts`: character CRUD and handler surface
- `lib/handlers/characterHandlerSupport.ts`: character enrichment, advancement filtering, and skill token support helpers
- `lib/handlers/gameplayHandlers.ts`: rolls, usage, day/encounter state, roll log, loot log
- `lib/handlers/adventureHandlers.ts`: adventure template CRUD
- `lib/handlers/gm_adventure_handlers.ts`: runtime clone and GM publish flows
- `lib/handlers/gm_core_handlers.ts`: GM session actions and sync
- `lib/handlers/sheetHandlers.ts`: Dev tab sheet ingest/export handler surface
- `lib/handlers/sheetHandlerSupport.ts`: sheet tab resolution, export row shaping, and deployer guard helpers
- `lib/handlers/clubHandlers.ts`: club CRUD and invitations
- `lib/handlers/chatHandlers.ts`: session chat
- `lib/handlers/aiHandlers.ts`: AI generation entry points

### Flex Runtime

- `flex/src/server/auth/flexAuthHandlers.ts`: Flex Google auth, reauth, and shared user reconciliation
- `flex/src/server/flexSocketManager.ts`: Flex socket auth lifecycle and logout reset wiring
- `flex/src/server/flexSchemas.ts`: Flex login and reauth payload schemas
- `flex/src/server/flexServerTypes.ts`: Flex socket user typing
- `flex/src/shared/flexAppRuntime.ts`: Flex base-path, API-base, and socket-path runtime config helpers
- `flex/public/css/global.css`: Flex-local copy of the shared shell variables and top-nav structural CSS
- `flex/postcss.config.js`: Flex PostCSS/Tailwind configuration
- `flex/tailwind.config.js`: Flex-local Tailwind theme and copied shell utility contract
- `flex/src/client/lib/flexUtils.ts`: Flex-local `cn()` helper for copied Tailwind UI components
- `flex/src/client/styles/globals.css`: Flex Tailwind entry for the copied shell utility bundle
- `flex/src/client/react/layout/FlexNavBar.tsx`: Flex-local copy of Turbo's top navigation shell

---

## 3. Shared and Client Architecture

### Shared

- `src/shared/types.ts`: shared interfaces and enums
- `src/shared/powerContracts.ts`: canonical power action/duration/usage literals and parsing helpers
- `src/shared/monsterScaling.ts`: shared monster multiplier, normalization, and adv-level scaling helpers

### Client Root

- `src/client/main.ts`: React mount entry
- `src/client/process_polyfill.ts`: minimal browser `process.env` fallback for legacy dependency probes; no user-facing logging and not the authority for build mode
- `src/client/styles/globals.css`: Tailwind entry
- `src/client/lib/utils.ts`: `cn()` and common helpers

### Global State Layers

- `src/client/react/GlobalContext.tsx`: auth, navigation, active session, global modals/toasts
- `src/client/react/hooks/useGlobalSelectionState.ts`: persistent session/club/lobby/first-name selection state for GlobalContext
- `src/client/react/features/session/SessionProvider.tsx`: session-wide presence, rolls, and shared state
- `src/client/react/features/character/CharacterContext.tsx`: per-sheet state and character actions
- `src/client/react/features/character/characterContextTypes.ts`: CharacterContext state and action type contracts
- `src/client/react/features/character/useCharacterEncounterSync.ts`: CharacterContext encounter sync helper
- `src/client/react/features/character/useHudActionState.ts`: CharacterContext HUD action-runtime helper
- `src/client/react/hooks/usePowerDetailsSidebar.ts`: shared power-details sidebar socket flow

### App Shell

- `src/client/react/App.tsx`: top-level app, tab mounting, reconnect flows
- `src/client/react/features/auth/LoginScreen.tsx`: unauthenticated login surface and Google credential POST handoff
- `src/client/react/features/auth/googleIdentityClient.ts`: page-global Google Identity Services init guard and remount-safe button rendering helper
- `src/client/react/layout/NavBar.tsx`: top navigation
- `src/client/react/layout/Sidebar.tsx`: sidebar container

---

## 4. Client Feature Areas

### Character

- `src/client/react/features/character/CharacterSheet.tsx`: character sheet shell
- `src/client/react/features/character/CharacterSheetNav.tsx`: sheet nav and dice rows
- `src/client/react/features/character/GameSheetView.tsx`: game-sheet composition
- `src/client/react/features/character/DossierView.tsx`: dossier layout
- `src/client/react/features/character/NotesView.tsx`: notes tab
- `src/client/react/features/character/CharacterHud.tsx`: HUD and action/vitality display
- `src/client/react/features/character/AbilityTableView.tsx`: unified abilities table
- `src/client/react/features/character/abilityTableRows.ts`: extracted ability-table row/type helpers
- `src/client/react/features/character/PartyLogPanel.tsx`: Party Log wrapper and header
- `src/client/react/features/character/PartyLog.tsx`: Party Log column renderer
- `src/client/react/features/character/CharacterRollLog.tsx`: roll log
- `src/client/react/features/character/AssignAttributesModal.tsx`: initial attribute assignment/respec
- `src/client/react/features/character/AdvancementModals.tsx`: feature advancement/versioning modals
- `src/client/react/features/character/PowerButtonValidationModal.tsx`: validation feedback for inline buttons

### Morph

- `src/client/react/features/morph/MorphPanel.tsx`: Morph Drawer
- `src/client/react/features/morph/morphPanelSupport.ts`: Morph Drawer identity/state helper utilities
- `src/client/react/features/morph/morphContextResolver.ts`: type-first drawer context resolution
- `src/client/react/features/morph/weaponMorphFactory.ts`: weapon synthetic rating sources
- `src/client/react/features/morph/armorMorphFactory.ts`: armor synthetic rating sources

### GM / Encounters / Adventures

- `src/client/react/features/gm/GmScreen.tsx`: GM dashboard shell
- `src/client/react/features/gm/GmGameTimePanel.tsx`: Game Time panel
- `src/client/react/features/ae/AdventureEditor.tsx`: adventure template editor
- `src/client/react/features/encounter/encounterEditorShared.tsx`: shared AE/GM encounter modal and pointer-shaping helpers
- `src/client/react/features/encounter/SharedEncounterDetail.tsx`: shared narrative/encounter column
- `src/client/react/features/encounter/EncounterList.tsx`: roster/encounter monster list
- `src/client/react/features/encounter/MonsterCard.tsx`: monster card
- `src/client/react/features/encounter/MonsterListHeader.tsx`: shared header for AE/GM monster lists
- `src/client/react/components/IndividualMonsterStatEditor.tsx`: AE/GM stat editor
- `src/client/react/components/NarrativeBlock.tsx`: narrative and encounter content

### Lobby / Library / Chat / Dev

- `src/client/react/features/lobby/*.tsx`: clubs, sessions, roster, lobby flows
- `src/client/react/features/library/*.tsx`: character, content, adventure, monster, power, and chaos gem hubs
- `src/client/react/features/library/powerHubSupport.ts`: Power Hub config and codex sort helpers
- `src/client/react/features/chat/SessionChat.tsx`: session chat
- `src/client/react/features/dev/DevTools.tsx`: deployer-only dev tools

---

## 5. Client Utilities

- `src/client/utils/actionCostUtils.ts`: action affordability and spend logic
- `src/client/utils/powerButtonRenderer.tsx`: inline button rendering
- `src/client/utils/weaponDamageTier.ts`: client weapon tier helpers
- `src/client/utils/armorRequirement.ts`: armor requirement helpers
- `src/client/utils/monsterMultipliers.ts`: monster display scaling
- `src/client/utils/monsterDataUtils.ts`: monster normalization and healing helpers
- `src/client/utils/skillBucketUtils.ts`: skill bucket parsing
- `src/client/utils/clientFormatters.ts`: shared display formatting

---

## 6. Public Assets

- `public/index.html`: SPA host page
- `public/css/global.css`: base resets and layout
- `public/css/codex_style.css`: app skin
- `public/css/character_sheet_style.css`: sheet visuals
- `public/css/gm_screen_style.css`: GM visuals
- `public/css/roll_log.css`: roll log styling
- `public/css/session_chat.css`: chat styling

---

## 7. Documentation Map

- `Prompts/CodeInstructions.md`: mandatory shared coding instructions
- `Prompts/SoT/README.md`: SoT entry point and authority ladder
- `Prompts/SoT/Core/Manifest.md`: shared SoT registry and discovery map
- `flex/Prompts/SoT/Core/FlexAuthLanding.md`: current Flex auth landing/runtime contract
- `turbo/Prompts/SoT/Rules/MS5Turbo.md`: current Turbo rulebook
- `Prompts/SoT/Rules/MS5FlexifyTurbo.md`: transition/objectives record
- `flex/Prompts/Rules/MS4Flex.md`: immutable Flex legacy rulebook
- `Prompts/SoT/Appendices/LegacyRulesRationale.md`: preserved superseded logic and UI rationale
- `Prompts/SoT/Decisions/DecisionLog.md`: dated authority changes
- `Prompts/SoT/Runbooks/SheetCutoverRunbook.md`: shared sheet migration runbook
- `turbo/Prompts/sheet_data/README.md`: current Turbo sheet-data exports
- `flex/Prompts/sheet_data/README.md`: current Flex sheet-data exports

This appendix is intentionally descriptive, not normative. When it conflicts with code or current SoT, prefer the authority ladder in `Prompts/SoT/README.md`.
