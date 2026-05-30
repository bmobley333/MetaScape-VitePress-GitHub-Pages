# MS5 SoT: Adventure Architecture (Template & Clone Hierarchy)

**Status:** Active  
**Last Updated:** February 2026  
**Purpose:** Single source of truth for the relationship between Adventure templates, Areas, and Encounters, and how a template transitions into runtime `clonedAdventureData` for the GM. Clone lifecycle and per-(session, user) semantics: see [ClonedAdventures.md](ClonedAdventures.md).

---

## 0. This file Update Instructions

- **AdventureArchitecture.md Updates:** All updates to this file MUST be ADDITIVE and NON-DESTRUCTIVE.

---

## 1. Template Hierarchy (Adventure Library)

- **Source:** `prisma/schema.prisma` — Adventure, AdventureArea, AdventureEncounter, EncounterMonster.
- **Adventure:** Template owned by a user. Fields: `adventureName`, `party_size`, `party_level`, `plot_outline`, `plot_summary`, `plot_prompt`, `full_plot`, `map_style`, `area_context`. Optional: **`advLevel`** (integer 1–1000; when set, monster stats in AE and clone scale by tier at target level). Optional: `monsterRoster` (Json array of monster-shaped entries for AE Monster List; roster-only entries not yet in any encounter; each entry may include **`levelAdjustment`** -1000 to 1000, default 0). Relational: `areas` (AdventureArea[]), `encounters` (AdventureEncounter[]).
- **AdventureArea:** Belongs to one Adventure. Fields: `name`, `description`, `orderIndex`. Relational: `encounters` (AdventureEncounter[]). Ordering: by `orderIndex` ascending.
- **AdventureEncounter:** Belongs to one Adventure; optionally linked to one AdventureArea via `areaId`. Fields: `room_number`, `name`, `description`, `gm_notes`, `twist`, `type` (e.g. "Mixed"), `ai_prompt`, `trap`, `loot`. Relational: `monsters` (EncounterMonster[]).
- **EncounterMonster:** Belongs to one AdventureEncounter. **Canonical shape (SoT):** [MonsterRoster.md](../Core/MonsterRoster.md). Encounter monster holds a **pointer** to the Monster Roster (`rosterId` or equivalent), **`qty`**, and **narrative loadout** (`customWeaponsText`, `customArmorText`, `customPowersText`). Stats are resolved from the Monster Roster via the pointer. For migration or backward compatibility the schema may also store `monsterTemplateId` (optional Content ref), `name`, `alias`, `levelAdjustment` (-1000 to 1000, default 0; used with adventure `advLevel` for target level), and per-stat `overrides` (GlobalMultipliers shape); see MonsterRoster for deletion protection and pointer semantics. **Narrative-only loadout text:** `customWeaponsText`, `customArmorText`, `customPowersText` are initially populated from the template when a monster is added; after that they are independent. The AE Narrative Monsters table displays and edits only these custom fields. **Display name resolution:** When a template/roster pointer is set, the server resolves the current `name` from Content or roster so that renames are reflected in the Adventure Editor narrative and encounter list.

Template data is edited in Adventure Editor; it is not per-session. Clone flow copies template structure into runtime models (see §2).

---

## 2. Runtime Clone Hierarchy (Active Adventure)

- **Source:** `prisma/schema.prisma` — ActiveAdventure, ActiveArea, ActiveEncounter. Stored per **(sessionId, userId)**; one clone per user per session (`@@unique([sessionId, userId])`).
- **ActiveAdventure:** Created when GM clones a template. Fields: `sessionId`, `userId`, `sourceAdventureId`, `adventureName`, `cloneName`, `multipliers` (Json, global scaling). Optional **`advLevel`** (Int, 1–1000): when set, overrides source Adventure advLevel for this clone in `clonedAdventureData` and tier scaling. Relational: `areas` (ActiveArea[]), `encounters` (ActiveEncounter[]). No copy of plot text; only structure (areas, encounters) and multipliers.
- **ActiveArea:** Belongs to one ActiveAdventure. Fields: `name`, `description`, `orderIndex`. Relational: `encounters` (ActiveEncounter[]).
- **ActiveEncounter:** Belongs to one ActiveAdventure; optionally linked to one ActiveArea via `activeAreaId`. Fields mirror AdventureEncounter: `room_number`, `name`, `description`, `gm_notes`, `twist`, `type`, `trap`, `loot`, `ai_prompt`, `multipliers` (per-encounter), and a **monsters** payload (JSON array). Per [MonsterRoster.md](../Core/MonsterRoster.md), each monster in the payload follows the **pointer + qty + narrative loadout** model; full stats are derived from the roster when building display, publish, or session response (e.g. `normalizeMonsterStats`, `constructSessionResponse`). The payload may optionally include `active` for GM publish state, but that flag is distinct from encounter inclusion: a monster can belong to the encounter without being active/published. The stored blob may include legacy or denormalized fields for compatibility; the canonical contract is roster-as-SSOT.

Clone is created and updated by `lib/handlers/gm_adventure_handlers.ts` (clone, refresh, delete, and encounter/room CRUD). When the GM requests session data, the server builds `clonedAdventureData` from the active clone (see §3).

---

## 3. GM Payload: clonedAdventureData Shape

- **Built in:** `lib/db_utils.ts` — `constructSessionResponse(db, sessionId, 'gm', userId)`. When view is `'gm'` and `userId` is provided, the active clone for (sessionId, userId) is loaded and transformed into the payload shape below.
- **When sent:** In response to `request_session_data` (e.g. from GM Screen mount); server emits `receive_session_data` with session object including `clonedAdventureData`. Also sent on `receive_session_update` after clone/encounter updates.
- **Shape:**

  - `adventureId`: sourceAdventureId (template reference).
  - `adventureName`, `cloneName`: display names.
  - `multipliers`: global multiplier object (GlobalMultipliers shape).
  - **`advLevel`**: (optional) from the clone (ActiveAdventure.advLevel) when set, otherwise from source Adventure; when set, GM Monster List shows Monster Level and scales stats; client uses it for Level + input and tier math.
  - `areas`: array of `{ _id, name, description, orderIndex }` (from ActiveArea, ordered by orderIndex).
  - `rooms`: array of encounter objects, each:
    - `_id`, `area_id` (activeAreaId), `room_number`, `name`, `type`, `description`, `gm_notes`, `twist`, `trap`, `loot`, `ai_prompt`
  - `encounter`: `{ monsters: [...], pointerMonsters?: [...] }` — `monsters` is the GM-facing hydrated display list; `pointerMonsters` is the canonical raw pointer list used for safe encounter mutation. Each pointer monster follows the pointer + qty + narrative loadout model per [MonsterRoster.md](../Core/MonsterRoster.md); stats are derived from roster when building display/publish.
    - `multipliers`: per-encounter multiplier overrides.

- **Consumer:** SessionProvider stores in `sessionData.clonedAdventureData`; GmScreen, GmAdventureLoader, GmGameTimePanel use it for Adventure Clone tab and Game Time (Areas and Encounters). See [ClonedAdventures.md](ClonedAdventures.md) and [GMScreenGameTimeUI.md](../UI/GMScreenGameTimeUI.md).

**GM Game Time Monster List (roster derivation):** The clone **does** have **`monsterRoster`** (ActiveAdventure.monsterRoster; see `lib/db_utils.ts`, `lib/handlers/gm_adventure_handlers.ts`). The GM Monster List in Game Time derives its **display list** by aggregating unique monsters from all rooms (encounters’ `encounter.monsters`, which are resolved from the clone roster by the server). **Level adjustment** (Level+), rename, Edit Stats, Clone, and Remove from roster persist via the **clone roster** where applicable: Level+ is persisted via **`gm_update_clone_roster_entry`** (sessionId, rosterEntryId or name, levelAdjustment); **Edit Stats** is persisted via **`gm_update_clone_roster_entry`** with optional overrides and optional base stat fields (same payload shape as AE roster update). The server updates ActiveAdventure.monsterRoster and emits `receive_session_update`, so `constructSessionResponse` resolves levelAdjustment and overrides from the roster. Level adjustment and Edit Stats do **not** cascade via `gm_update_encounter` (encounter payloads are pointer-only). This achieves parity with the Adventure Editor Monster List UI.

---

## 4. March 2026 Addendum - Selection vs Encounter Mutation

For GM runtime clones, the following ownership boundary is current:

- selecting a room/encounter in Game Time is a client view-state change, not an encounter mutation
- the client may derive local active/highlight state from the selected encounter's current monster membership without persisting anything
- encounter persistence happens only on explicit mutations such as active checkbox changes, bulk active actions, add/remove, qty updates, and narrative loadout edits
- when the client serializes encounter monsters back to pointer form, serialization must be lossless for the currently viewed roster-backed members; if that cannot be guaranteed, the write must abort rather than shrinking the stored encounter blob

This addendum supersedes older behavior assumptions that treated encounter selection itself as a `gm_update_encounter` boundary.

---

## 5. March 2026 Addendum - Add Encounter Pointer Merge

For GM Game Time, the Encounter Monsters header action `Add Encounter` imports the source encounter by **canonical pointer membership**.

- the merge source is the source encounter's raw pointer rows, not its hydrated display rows
- hydrated display rows may continue to drive the narrative UI, but they are not the mutation SSOT
- if a legacy runtime pointer row is missing `rosterId`, the merge path may relink it to the clone roster by unique name before strict serialization
- if relinking fails, the merge must abort rather than silently shrinking or partially importing the source encounter

This addendum keeps `Add Encounter` aligned with the roster-as-SSOT rule and the lossless-write contract.

---

## 6. Adventure Editor: Monster List vs Narrative Monsters

Monster roster and encounter pointer semantics (rosterId, qty, narrative loadout only; stats from roster) are defined in [MonsterRoster.md](../Core/MonsterRoster.md).

- **Monster List (right column):** In Adventure Editor, the Monster List is an **adventure-wide roster** and is **always visible** on the Encounters tab in a dedicated right column (expanded width for roster workspace; not only when an encounter is selected). It is populated from the **adventure's monster roster** (`monsterRoster`) and, for backward compatibility, **unique monsters from all encounters** (deduplicated by name, sorted A–Z). Roster entries (and EncounterMonster) may store **`overrides`** (GlobalMultipliers shape per Task 100.8); the AE **"🔢 Edit Stats"** context menu option opens a modal to edit final stat integers and persists overrides to the roster entry and cascades to all encounter monsters that reference that entry. **Adding a monster via "+ Add Monster" adds only to the roster** (adventure-level `monsterRoster`); it does **not** add the monster to the current encounter's Narrative Monster table. To add a monster to the current encounter's Narrative Monster table, the user must **drag** it from the roster and **drop** it onto the Narrative Monsters section. Monster List cards are draggable; the list has no quantity dropdown in roster mode and no active/publish checkbox behavior in AE. **Unique names:** The roster enforces **unique monster names** (case-insensitive) across the roster and all encounter monsters. When the Monster Hub is opened from AE, it receives the current set of roster+encounter names (`existingNames`) and **blocks** adding or saving a monster whose name already exists (Custom save, AI save, and Codex click/drag); no variant dialog is shown from the Hub. **Inline rename:** The monster name in the list is editable inline (blur or Enter); the rename cascades to the roster and to every encounter that references that monster. **Clone Monster:** The card context menu includes "🐑 Clone Monster", which prompts for a unique name and adds a full copy as a new roster variant. **Remove Monsters with No Encounter:** The list header kabob includes "🧹 Remove Monsters with No Encounter", which bulk-removes roster entries not placed in any narrative encounter (with confirmation). **Remove from roster:** When the monster is not in any encounter, it can be removed from the roster via the card context menu (server removes from `monsterRoster`). When the monster is placed in one or more encounters, the user must remove it from those encounters first before it can be removed from the roster.
- **Roster entry identity and variants:** Each roster entry may carry a unique **`rosterEntryId`** (UUID). New entries (normal add and variant add) receive a new UUID; the server assigns one on append if the client omits it. **Variants** are created as **full copies** of the chosen monster with no `templateId` link to Content—they are standalone roster entities. Removing a roster entry is by **`rosterEntryId`** when present (removes only that entry); for legacy entries without `rosterEntryId`, removal falls back to `templateId` or name. **Removal identity (no templateId):** To ensure removing one monster (e.g. a variant) does not remove others that share the same Content templateId, removal uses only **rosterEntryId** when present, otherwise **name** (case-insensitive); templateId is not used for removal. **Drag-from-roster** for Content-backed entries uses `templateId` (24-char MongoId) and name; for roster-only variants (no Content `templateId`), drag uses `rosterEntryId` and full monster data so the drop target can add the variant to the encounter without a Content lookup.
- **Narrative Monsters table (#, Name, Loadout):** The Narrative block's Monsters section is **per-encounter**. Columns: **#** (quantity dropdown 1–20), **Name** (bold, read-only), **Loadout** (three narrative-only text areas: ⚔️ Weapons, 🧥 Armor, ⚡ Powers). The Loadout fields are backed by EncounterMonster `customWeaponsText`, `customArmorText`, `customPowersText`. When a monster is first added (drag-and-drop), these are pre-populated from the template's weapons/armor/powers; after that they are **decoupled**—editing them does not affect game engine, roll logic, or the global monster database. The **# (Number) column** has **no impact** on the backend `EncounterMonster` table or row count; it is strictly narrative/display data. The Narrative Monster table is populated via **drag-and-drop** from the Monster List (roster) onto the Monsters section and via the **Add Encounter** select in the Monsters header, which imports all roster pointers from another encounter in the same area without affecting active/publish state.
- **One-way dependency:** Every monster row in the Narrative must reference a monster that exists in the roster (by name). Adding a new monster via "+ Add Monster" adds it to the roster only; no auto-sync from list to narrative.

---

**Encounters tab selection persistence:** When the user returns to the Encounters nav rail of Adventure Editor, the last selected Area and Encounter for that adventure are restored from localStorage (key `ms5_ae_selection_<adventureId>`). If no prior state exists or stored IDs are invalid (e.g. area/encounter deleted), the UI defaults to the first Area and that area's first Encounter. Hydration and persistence are implemented in AdventureEditor; selection state remains in GlobalContext.

---

## 7. Cross-References

- [MonsterRoster.md](../Core/MonsterRoster.md): SSOT for roster vs encounter model, monster list header/kabob, monster card UI, and stat editor behavior.
- [ClonedAdventures.md](ClonedAdventures.md): Clone persistence rules, session/user semantics, GM Screen behavior.
- [SessionArchitecture.md](../Core/SessionArchitecture.md): Session and ActiveAdventure data model, SessionProvider, cold start.
- [lib/db_utils.ts](../../../lib/db_utils.ts): `constructSessionResponse` — authoritative builder of `clonedAdventureData`.
- [lib/handlers/gm_adventure_handlers.ts](../../../lib/handlers/gm_adventure_handlers.ts): Clone lifecycle and encounter CRUD.
