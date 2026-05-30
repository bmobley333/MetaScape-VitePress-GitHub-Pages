# MS5 UI Specification: Party Log

**Status:** Active  
**Purpose:** Define the current Party Log behavior and placement so the UI contract matches the code that is actually shipping.

For superseded Party Log tab/overlay plans, see [`Prompts/SoT/Appendices/LegacyRulesRationale.md`](../../../../Prompts/SoT/Appendices/LegacyRulesRationale.md).

---

## 1. Current Locations

The Party Log appears in two current contexts:

- **GM Screen:** viewport-level bottom overlay via `PartyLogPanel` with `variant="overlay"`
- **Character Sheet:** bottom split pane at the root of `CharacterSheet` when the active tab is `Game Sheet`, via `PartyLogPanel` with `variant="inline"`

The Character Sheet Party Log is **not** a nav tab.

---

## 2. Current Data Contract

Party Log is session-scoped and uses shared session state, not large prop payloads.

### Current sources

- `useSession().playerPresence`
- `useSession().rollResults`
- `useGlobal()` only for ownership/user identity details when needed

### Current displayed summary fields

- player display name
- character name
- identity
- level
- current vitality
- max vitality
- roll log history

---

## 3. Current Header / Wrapper Contract

`PartyLogPanel` owns the shared wrapper behavior:

- expand/collapse header
- height persistence
- drag-to-resize behavior
- Chat trigger placement
- header-level refresh affordance when present in the implementation

Persisted height keys currently differ by context:

- GM overlay height key
- Character Sheet inline height key

---

## 4. Character Sheet Contract

When the user is on `Game Sheet` and in a session:

- the Party Log mounts at the root of the Character Sheet panel
- it spans the sheet width, including over the nav rail region
- the sheet applies bottom padding based on the Party Log height callback so content is not hidden behind the panel

This is the current Character Sheet contract.

---

## 5. GM Contract

On the GM Screen:

- Party Log is not rendered inside `SharedEncounterDetail`
- it is a viewport-level bottom overlay owned by the GM screen wrapper

This keeps the encounter narrative column and Party Log as separate layout layers.

---

## 6. Current Column Behavior

### Presence-driven columns

- columns are derived from current presence
- Party Log is a live session view, not a historical frozen roster board

### Ownership highlight

- player view may tint owned columns
- GM view remains neutral

### Roll content

- columns render roll history using the current shared session roll data
- embedded roll-log rendering is read-only in the Party Log context

---

## 7. Current Empty And Missing-State Rules

- if there is no party activity, show the Party Log empty state
- if identity is missing, fall back to the current missing-identity display
- if vitality data is missing, show the current placeholder display

The exact text can evolve, but these states must remain explicit and readable.

---

## 8. Current Non-Goals

The following are **not** current authority:

- a Character Sheet Party Log nav tab
- a requirement that disconnected columns remain frozen on-screen with a gray overlay
- older rollout-phase notes that described Party Log as not yet integrated

Those ideas are historical only.

---

## 9. Cross-References

- [`Prompts/SoT/UI/GMScreenGameTimeUI.md`](GMScreenGameTimeUI.md)
- [`Prompts/SoT/Core/SessionArchitecture.md`](../Core/SessionArchitecture.md)
- [`Prompts/SoT/Core/PowerButtonSystem.md`](../Core/PowerButtonSystem.md)
- [`Prompts/SoT/Appendices/LegacyRulesRationale.md`](../../../../Prompts/SoT/Appendices/LegacyRulesRationale.md)
