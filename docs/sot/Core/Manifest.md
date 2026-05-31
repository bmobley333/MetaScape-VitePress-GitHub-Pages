# METASCAPE CODEX: SoT Manifest

**Status:** Active  
**Purpose:** This file is the shared monorepo discovery registry for Source of Truth documents. It tells an AI or developer which SoT files to read for a given task and where preserved history now lives.

For the high-level authority ladder, start with [`Prompts/SoT/README.md`](../README.md).  
For the preserved codebase inventory that used to live here, use [`Prompts/SoT/Appendices/CodebaseMap.md`](../Appendices/CodebaseMap.md).  
For dated authority shifts and superseded addenda, use [`Prompts/SoT/Decisions/DecisionLog.md`](../Decisions/DecisionLog.md).

---

## 1. How To Use This Manifest

1. Identify the task domain.
2. Read the relevant current SoT docs listed below.
3. When a current doc references legacy or transition context, follow its link to the relevant appendix or decision log.
4. Do not treat appendices or runbooks as current gameplay authority unless a current doc explicitly directs you there.

---

## 2. Authority Notes

- **Executable contract authority:** `turbo/prisma/schema.prisma`, `turbo/lib/schemas.ts`, `turbo/src/shared/types.ts`; for `/flex` runtime tasks also read `flex/src/server/schemas.ts`, `flex/src/server/socketManager.ts`, and `flex/src/shared/types.ts`. Both runtimes share schema authority, but their live data sources are strictly app-scoped: Turbo requires `TURBO_DATABASE_URL` and Flex requires `FLEX_DATABASE_URL`; sheet env lookup also remains app-specific (`TURBO_GOOGLE_SHEET_ID` / `FLEX_GOOGLE_SHEET_ID`) with no shared env fallback.
- **Current Flex runtime docs:** `flex/Prompts/SoT/Core/*.md` when the task targets `/flex`
- **Current rulebook:** `turbo/Prompts/SoT/Rules/MS5Turbo.md`
- **Transition rationale:** `Prompts/SoT/Rules/MS5FlexifyTurbo.md`
- **Legacy rulebook (rarely altered):** `flex/Prompts/Rules/MS4Flex.md` — edit only when the user specifically requests; additive unless the user requests otherwise.
- **Legacy rationale appendix:** `Prompts/SoT/Appendices/LegacyRulesRationale.md`
- **Operational runbooks:** `Prompts/SoT/Runbooks/`

---

## 3. UI Specifications (`turbo/Prompts/SoT/UI`)

Read these for layout, component behavior, and visual contracts.

- `UiLayoutsSpec.md`: Consolidated Master SoT for front-end layouts (TabBar navigation, Ability Tab view/table, Morph Drawer UI, Nish Tracker layout, GM Screen Game Time 4-column layout, and CardGrid)
- `UiInteractionsSpec.md`: Consolidated Master SoT for front-end interactions (Kabob Menu System, Tooltip System, and UI edit tricks)
- `NordPalette.md`: authoritative color and semantic palette rules
- `PartyLog.md`: Party Log current behavior and layout contract

---

## 4. Core Logic Contracts (`turbo/Prompts/SoT/Core`)

Read these for current mechanics, socket behavior, and architecture.

- `ActionEconomy.md`: Consolidated Master SoT for core actions (AMP spending rules, legacy meta costs, Nish initiative rules, and session/presence architecture)
- `CombatAndMonsters.md`: Consolidated Master SoT for combat mechanics, monster roster, and scaling/attributes engineering
- `AIPersonaContracts.md`: AI generation schemas and response contracts
- `CommunicationProtocol.md`: socket payload and response contracts
- `HUDVitality.md`: HUD vitality contract
- `MoveButton.md`: MOVE button exception handling and roll-log behavior
- `PowerButtonSystem.md`: inline button syntax and technical behavior
- `StateManagementSOP.md`: `useGlobal`, `useSession`, and `useCharacter` ownership rules

Shared root technical reference:

- `Prompts/SoT/Core/MetaScape_Versions_SoT.md`: overarching root architecture baseline defining MS3, MS4, and MS5 versions
- `Prompts/SoT/Core/EmojiConventions.md`: shared monorepo emoji meanings and reserved icon semantics
- `Prompts/SoT/Core/TechStack.md`: stack, build, and tooling reference

Shared operational material remains at root:

- `Prompts/SoT/Runbooks/SheetCutoverRunbook.md`

---

## 5. Character Domain (`turbo/Prompts/SoT/Character`)

- `CSAdvancement.md`: current character advancement, AP/GP/ArfP, and related UI rules
- `DualKeyLogic.md`: current dual-key implementation notes and constraints

---

## 6. World Domain (`turbo/Prompts/SoT/World`)

- `AdventureArchitecture.md`: adventure template and runtime hierarchy
- `ClonedAdventures.md`: clone semantics and runtime ownership

---

## 7. Rules Reference (`turbo/Prompts/SoT/Rules` plus shared root transition docs)

- `turbo/Prompts/SoT/Rules/MS5TurboRules.md`: Consolidated Master SoT for Core Rules and Randomized Loot Engine
- `Prompts/SoT/Rules/MS5FlexifyTurbo.md`: transition/objectives record
- `flex/Prompts/Rules/MS4Flex.md`: legacy rulebook, reference only; rarely altered — edit only when the user specifically requests; additive unless the user requests otherwise.

---

## 8. Flex Runtime (`flex/Prompts/SoT/Core`)

Read these when the task targets the isolated Flex runtime at `/flex`.

- `FlexAuthLanding.md`: current Flex login, reauth, and full Flex-local Turbo-runtime clone contract
- `FlexAttributeRatings.md`: Flex level-band attribute ratings (five primary attributes); Assign Attributes modal and level-up behavior; display as numbers only (no "d")
- `FlexRollLogic.md`: Flex MS4Flex roll formula (Skill/Atk/Def = #d20 + d(Atr) + bonus; Dmg/AR = d(Atr) only); payload and engine contract
- `SheetSyncColumns.md`: Dev tab sheet sync column contract; Commit to DB / Export DB to Sheet; baseline and schema consistency

---

## 9. Appendices and Decisions

- `Prompts/SoT/Appendices/CodebaseMap.md`: preserved project map
- `Prompts/SoT/Appendices/LegacyRulesRationale.md`: preserved superseded logic and UI rationale
- `Prompts/SoT/Decisions/DecisionLog.md`: dated authority changes

---

## 10. Sheet Data References

When a task touches Google Sheets, imports, exports, or content templates, also consult:

- `turbo/Prompts/sheet_data/README.md` and the relevant CSV in `turbo/Prompts/sheet_data/` for Turbo work
- `flex/Prompts/sheet_data/README.md` and the relevant CSV in `flex/Prompts/sheet_data/` for Flex work
- `Prompts/SoT/Runbooks/SheetCutoverRunbook.md` for operational cutover work

---

## 11. Maintenance Rule

Update this file whenever:

- a current SoT file is created, deleted, or moved
- a doc changes ownership from current authority to appendix/decision/runbook
- a new domain doc becomes a required discovery path
