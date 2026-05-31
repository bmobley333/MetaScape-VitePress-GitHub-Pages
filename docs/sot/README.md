# MetaScape SoT Guide

**Status:** Active  
**Purpose:** This is the shared monorepo entry point for Source of Truth discovery. It explains which documents are current authority, which documents are preserved rationale or operations, and where an AI or developer should start reading.

---

## 1. Authority Ladder

When documents disagree, use this precedence:

1. **Executable contract authority**
   - `turbo/prisma/schema.prisma`
   - `turbo/lib/schemas.ts`
   - `turbo/src/shared/types.ts`
   - Runtime data sources are app-scoped and fail-fast: Turbo requires `TURBO_DATABASE_URL` and resolves `TURBO_GOOGLE_SHEET_ID` without shared env fallback; Flex requires `FLEX_DATABASE_URL` and resolves `FLEX_GOOGLE_SHEET_ID` without shared env fallback
2. **Google Sheets Game Data Source of Truth**
   - The Google Sheets (Turbo and Flex) are the absolute Source of Truth (SoT) for all sheet-driven game content (Monsters, Weapons, Armor, Powers, Gear, Artifacts, Chaos Gems, Skill Sets, Power Sets, Attributes, Shields, Loot List, Loot Sets, Enums). Any conflicting data between MongoDB and the Sheets must be verified by the user/GM, and MongoDB should then be updated to match the Sheets (using `npm run pull-sheets` and `npm run sync-db`).
3. **Current normative SoT**
   - Current Turbo behavior, UI contracts, game logic, and active rule text under `turbo/Prompts/SoT/`
   - Current Flex runtime behavior under `flex/Prompts/SoT/`
4. **Rules authority**
   - `turbo/Prompts/SoT/Rules/MS5TurboRules.md`
5. **Decision and transition records**
   - `Prompts/SoT/Decisions/DecisionLog.md`
   - `Prompts/SoT/Rules/MS5FlexifyTurbo.md`
6. **Runbooks**
   - Operational and one-time migration docs under `Prompts/SoT/Runbooks/`
7. **Appendices**
   - Preserved maps, legacy rationale, and reference material under `Prompts/SoT/Appendices/`
8. **Legacy rulebook (rarely altered)**
   - `flex/Prompts/Rules/MS4Flex.md` is rarely altered; edit only when the user specifically requests it; prefer additive (non-destructive) changes unless the user requests otherwise.

If a current SoT statement contradicts working code, update the SoT to match the code unless the code is explicitly wrong relative to the executable contract authority or Google Sheets game data authority.

---

## 2. SoT Layers

### Current Normative SoT

Use these when implementing or reviewing current behavior:

- `Prompts/SoT/Core/Manifest.md`: shared discovery registry for SoT documents
- `Prompts/SoT/Core/MetaScape_Versions_SoT.md`: overarching root architecture baseline defining MS3, MS4, and MS5 versions
- `turbo/Prompts/SoT/Core/ActionEconomy.md` & `CombatAndMonsters.md`: consolidated core mechanics, session/presence architecture, and monster engineering
- `flex/Prompts/SoT/Core/*.md`: current Flex runtime and auth contracts
- `turbo/Prompts/SoT/UI/UiLayoutsSpec.md` & `UiInteractionsSpec.md`: consolidated front-end layouts and behaviors
- `turbo/Prompts/SoT/Character/*.md`: current character and advancement contracts
- `turbo/Prompts/SoT/World/*.md`: current adventure and clone contracts
- `turbo/Prompts/SoT/Rules/MS5TurboRules.md`: consolidated playable rules and loot engine reference

### Decisions / Transition Rationale

Use these to understand why authority changed or why older text still exists:

- `Decisions/DecisionLog.md`
- `Rules/MS5FlexifyTurbo.md`

### Runbooks

Use these for one-time or operator workflows, not current gameplay truth:

- `Runbooks/SheetCutoverRunbook.md`
  - apply the runbook to the app-local data roots: `turbo/Prompts/sheet_data/` for Turbo, `flex/Prompts/sheet_data/` for Flex

### Appendices

Use these when you need preserved context that should not compete with active contracts:

- `Appendices/CodebaseMap.md`
- `Appendices/LegacyRulesRationale.md`

---

## 3. Reading Order By Task

### Socket or payload work

Read:

1. `turbo/prisma/schema.prisma` when data shape matters
2. `turbo/lib/schemas.ts`
3. `turbo/Prompts/SoT/Core/CommunicationProtocol.md`
4. `turbo/Prompts/SoT/Core/SessionArchitecture.md` if session or presence is involved

### Character sheet or HUD work

Read:

1. `Prompts/SoT/Core/Manifest.md`
2. `turbo/Prompts/SoT/UI/UiLayoutsSpec.md` and `UiInteractionsSpec.md`
3. Relevant `turbo/Prompts/SoT/Character/*.md`
4. `turbo/Prompts/SoT/Core/ActionEconomy.md` when roll/action or session behavior is involved

### Adventure, GM, or monster work

Read:

1. `Prompts/SoT/Core/Manifest.md`
2. `turbo/Prompts/SoT/World/AdventureArchitecture.md`
3. `turbo/Prompts/SoT/Core/CombatAndMonsters.md`
4. `turbo/Prompts/SoT/World/ClonedAdventures.md`

### Rules or content-generation work

Read:

1. `turbo/Prompts/SoT/Rules/MS5TurboRules.md`
2. `Prompts/SoT/Rules/MS5FlexifyTurbo.md` for transition intent
3. `flex/Prompts/Rules/MS4Flex.md` as reference; edit only when the user specifically requests it; prefer additive changes unless the user requests otherwise.

---

## 4. Editing Rules For SoT

- Preserve concepts unless they directly contradict the current codebase or executable contract authority.
- Prefer moving superseded material into `DecisionLog.md` or `LegacyRulesRationale.md` instead of deleting it.
- Keep active docs short enough that an AI can trust them quickly.
- Keep historical rationale out of current normative sections unless it is needed to understand a live constraint.
- Update `Core/Manifest.md` whenever SoT file locations or ownership change.

---

## 5. Quick Map

- Start here: `Prompts/SoT/README.md`
- Discover active docs: `Prompts/SoT/Core/Manifest.md`
- Understand version architecture: `Prompts/SoT/Core/MetaScape_Versions_SoT.md`
- Understand code layout: `Prompts/SoT/Appendices/CodebaseMap.md`
- Understand superseded ideas: `Prompts/SoT/Appendices/LegacyRulesRationale.md`
- Understand why authority changed: `Prompts/SoT/Decisions/DecisionLog.md`
- Read the active rulebook: `turbo/Prompts/SoT/Rules/MS5TurboRules.md`
- Rarely edit: `flex/Prompts/Rules/MS4Flex.md` — only when the user specifically requests; prefer additive changes.
