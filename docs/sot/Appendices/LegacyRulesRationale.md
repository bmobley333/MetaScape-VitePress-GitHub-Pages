# Legacy Rules Rationale

**Status:** Reference Appendix  
**Purpose:** Preserve superseded mechanics, UI shapes, and transition-era rationale that should remain available for context, without leaving them mixed into the active SoT.

---

## 1. Legacy AMP Interchangeability

Older combat wording allowed:

- `A` to be spent as `M` or `P`
- `M` to be spent as `P`

This is **not** the current live authority. Current behavior uses siloed AMP spending with explicit exceptions documented in the active action and Move contracts.

**Why preserve it:** older docs and design discussions referenced a looser action economy, and some transitional wording still assumes that model.

---

## 2. Legacy Meta / Channel / Flood Economy

Older Flex/Turbo iterations used:

- `metaState`
- color/channel tracking
- flood behavior
- spend/channel/flood socket flows

This is **not** the current live runtime. Current gameplay uses `usageState` and X-Time usage.

**Why preserve it:** it explains historical references in older rules text and older implementation notes, especially when reading migration-era documents.

---

## 3. Legacy F-Tier Power Stripping

Older Dual-Key and advancement logic treated F-tier powers as illegal to learn or retain, and runtime updates could remove them from a character.

This is **not** the current live policy.

**Current state:** powers are retained; F-tier stripping and the removed-powers modal are not active runtime behavior.

**Why preserve it:** many transition documents, sheet cutover notes, and older advancement rules were written around this policy.

---

## 4. Legacy Party Log Expectations

Older planning and partial implementation notes assumed:

- a dedicated Character Sheet Party Log nav tab
- disconnected columns remaining visible with a gray frozen overlay
- earlier GM-screen placement experiments

This is **not** the current live UX.

**Current state:** Party Log is a bottom pane on the Character Sheet Game Sheet and a viewport overlay on the GM Screen; columns are driven by live presence.

---

## 5. Legacy Advancement UI Blocks

Earlier Advancement concepts included:

- Class/Race tag selector blocks
- Specialist block as a live sheet UI
- Training as an active UI section
- broader tag-slot editing inside the Character Sheet

This is **not** the current live UI.

**Current state:** current sheet UI centers on Dossier/Game Sheet, AP display, class/race text inputs, and the current quick-add / advancement modal flows.

---

## 6. Legacy Draft Labeling

Some docs stayed labeled as `Draft`, `Planning`, or similar after the corresponding systems shipped.

This appendix preserves that those labels once reflected reality, but active docs should be rewritten so their status matches the codebase.

---

## 7. Usage

- Keep active docs short and current.
- Move superseded but still-useful detail here when it would otherwise muddy the current contract.
- If a historical note is tied to a dated architecture shift, also add it to `Prompts/SoT/Decisions/DecisionLog.md`.
