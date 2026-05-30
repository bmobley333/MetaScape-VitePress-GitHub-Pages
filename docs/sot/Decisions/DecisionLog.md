# SoT Decision Log

**Status:** Reference / Decision Record  
**Purpose:** Preserve dated architecture shifts, deprecations, and authority changes that still matter for context, without leaving those notes embedded in current normative docs.

---

## March 2026

### 0. Defense & Emoji Standardization

**Current authority:** Defense is reserved for the defense event only (always Dod/AR or Blk/AR). The notation "Def/AR" is removed everywhere in favor of Dod/AR (default) or Blk/AR.

- **Emoji:** 🛡️ = Defense (category only); 🤸 = Dodge (Dod); 🧱 = Block/Shield (Blk); 🧥 = Armor (AR). Monster stat line remains 🛡️#/# (Defense category).
- **Loot category SHIELD:** emoji changed from 🛡️ to 🧱 (Block/Shield = blocking defenses).
- SoT and code (excluding .csv) updated; .csv left for a separate plan.

### 1. Root Master / Child Runtime Split

**Current authority:** the repo now uses a root workspace with a master entry point plus isolated child runtimes.

- `masterServer.js` owns `/` and proxies `/turbo/*` and `/flex/*`.
- the current full gameplay implementation moved under `turbo/`
- `flex/` is now a runnable isolated auth landing runtime rather than only a rules reference
- Turbo socket traffic is path-prefixed at `/turbo/socket.io`
- Flex auth socket traffic is path-prefixed at `/flex/socket.io`

This decision superseded older architecture prose that described the repository as a single root app with one root `server.ts`, one root `src/`, and one root `public/`.

### 2. GM Publish Snapshot Authority

**Current authority:** published encounter data is a baked snapshot, not a player-side recalculation target.

- The GM client now prepares the publish snapshot before emitting `gm_publish_encounter`.
- `lib/schemas.ts` validates the baked snapshot payload.
- The server remains responsible for auth, persistence, and broadcast.
- Player views render published monster values verbatim.

This decision superseded older prose that described publish as a raw monster list with server-side rebaking as the primary contract.

### 3. Session Provider Lifecycle Clarification

**Current authority:** `SessionProvider` mounts for any logged-in user and receives `sessionId: null` when no session is active.

- Earlier architecture prose described the provider as mounting only when `activeSessionId` became non-null.
- The live React structure keeps the provider mounted for logged-in users so socket listeners and session-bound state management remain centralized.

### 4. Pending Invite and Pending Session Role Reconciliation

**Current authority:** pending club invites and pending session roles are reconciled during auth and reauth, not by a special one-off lobby event path.

- Club `pendingInvites` convert to membership on matching login.
- `PendingSessionRole` records convert to `SessionMember` rows on matching login.
- Existing lobby invalidation events remain the refresh contract.

### 5. Party Log Placement Shift

**Current authority:** the Character Sheet Party Log is a bottom split pane on the Game Sheet, not a nav tab.

- Older roadmap and implementation notes referred to a dedicated Character Sheet Party Log tab.
- Current implementation mounts `PartyLogPanel` at the root of `CharacterSheet` when `activeTab === 'game'`.

### 6. F-Tier Power Stripping Removal

**Current authority:** powers are retained; F-tier stripping is not an active runtime rule.

- Older Dual-Key and advancement logic removed powers when calculated tiers fell to F.
- Current code keeps powers and no longer applies F-tier stripping or the removed-powers modal.

### 7. Artifact Icon Migration

**Current authority:** `💫` is the artifact icon and `🌀` is reserved for Chaos Gems.

- Older SoT and task-history text used `🌀` for artifacts.
- Current rules/UI/logging reserve `🌀` for Chaos Gems and use `💫` for artifacts.

### 8. Power Button System Promotion

**Current authority:** the inline button parser/validator/renderer is implemented and is no longer merely a draft plan.

- Validation is wired into Dev sheet analysis and commit paths.
- Validation also runs in advancement and custom power authoring flows.
- Rendering and synthetic Morph flows are live in the client.

### 9. Prompt Ownership Split

**Current authority:** root `Prompts/` is now the shared discovery/governance layer, while current runtime-owned SoT and sheet exports live with the owning app.

- `Prompts/SoT/README.md` and `Prompts/SoT/Core/Manifest.md` remain the shared monorepo discovery chain.
- current Turbo gameplay SoT now lives under `turbo/Prompts/SoT/`
- current sheet-data exports now live under `turbo/Prompts/sheet_data/` for Turbo and `flex/Prompts/sheet_data/` for Flex
- `flex/Prompts/Rules/MS4Flex.md` is the immutable Flex legacy rulebook path
- `Prompts/SoT/Rules/MS5FlexifyTurbo.md` remains a shared root transition/objectives record

### 10. Universal Emoji Authority

**Current authority:** shared emoji meanings now live in `Prompts/SoT/Core/EmojiConventions.md`, with code and sheet-data remaining the conflict tiebreaker.

- `💫` remains the generic artifact family icon
- artifact tier/category icons are `🍺` minor, `🪄` lesser, `🪬` greater
- `🌀` remains reserved for Chaos Gems
- `📉` remains the disadvantage / requirement-not-met state
- `🔰` remains the unskilled state only

This decision reduces repeated emoji mini-dictionaries across Turbo docs and provides a manual reference point for any future Flex rulebook sync.

### 11. Gear Icon Consolidation And Monster Stat Clarification

**Current authority:** active Gear icon usage now consolidates on `🧰`, while monster stat-line display uses `🛡️` for the monster defense-and-armor pair.

- older historical Gear roll-log entries may still contain `🎒`, and current readers should preserve backward-compatible parsing for those entries
- active shared/Turbo docs should use `🧰` for Gear instead of maintaining a split between feature and taxonomy icons
- `🧥` remains valid for armor and player armor-rating contexts
- monster stat-line `🛡️` does not replace player armor-expression syntax; it only clarifies monster stat display language

### 12. Flex Runtime Deep-Copy Activation

**Current authority:** `flex/` is no longer an auth-plus-placeholder shell. It is now a Flex-local copy of the Turbo runtime structure, hosted independently at `/flex`.

- `flex/src/client/react/` now owns a local `App.tsx`, `GlobalContext.tsx`, `SessionProvider.tsx`, copied feature domains, and compatibility `Flex*` wrappers.
- `flex/src/server/` and `flex/src/shared/` now own Flex-local copies of the Turbo socket/event/contracts layer, instead of the earlier auth-only subset.
- Flex keeps isolated runtime boundaries (`/flex`, `/flex/socket.io`) and must not import Turbo runtime files directly as implementation dependencies.
- Future Flex divergence should happen in Flex-local files, not by editing Turbo runtime files to behave differently under `/flex`.

---

## February 2026

### 9. Meta Economy Deactivation

**Current authority:** `metaState`, `spend_meta`, `channel_meta`, and `meta_flood` are removed from active runtime behavior.

- X-Time `usageState` replaced the live Meta/Channel/Flood runtime.
- Legacy Meta behavior remains useful as rules-history context only.

### 10. Action Tracking Modernization

**Current authority:** active action handling is implemented in the HUD and client action-cost utilities; old prose that described tracking as future work is obsolete.

- AMP tracking exists in the current HUD and roll flows.
- Current exceptions should be documented as explicit current rules, not as “planned UI.”

---

## How To Use This File

- Put **dated authority changes** here after integrating their conclusions into the active docs.
- Do **not** use this file as a substitute for current SoT.
- When a concept is preserved only for historical context, also consider linking to `Prompts/SoT/Appendices/LegacyRulesRationale.md`.
