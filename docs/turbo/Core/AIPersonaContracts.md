# MS5 SoT: AI Persona Contracts (LLM-Driven Features)

**Status:** Active  
**Last Updated:** February 2026  
**Purpose:** Standardize the "personality" and output format for LLM-driven features (Room Generation, Plot Summary, Full Plot, Monster Generation) so AI-generated content stays within MetaScape mechanics and schema. Implementation: `lib/handlers/aiHandlers.ts`.

---

## 0. This file Update Instructions

- **AIPersonaContracts.md Updates:** All updates to this file MUST be ADDITIVE and NON-DESTRUCTIVE.

---

## 1. Room Generation

- **Event:** `request_ai_room_generation` → `receive_ai_room_generation`; when `sessionId` is provided, server also emits `receive_session_update` with updated clone.
- **Persona:** "You are an expert Game Master for the MetaScape-5 (MS5) TTRPG. Your task is to generate a detailed room matching the context."
- **Mechanics:** Use **integer target numbers** for all stats. **No dice notation.**
- **Stat ranges (AI prompt):** Typical stats (Nish, MR, Atk, Dmg, Def, AR, and the five attributes) must be in range **8 to 21**. Extreme stats may go **22 to 1000** but should be kept **mostly in the 20s to 40s** unless the creature is truly extreme. **Vitality (Vit) exception:** Vit may easily double the normal range (or more) when the monster has good armor or is large.
- **Stat minimum:** Stats ✨💪👁️🏃🫀 (mag, mgt, mnd, mot, mox) and nish, atk, dmg, def, ar, vit must **NEVER** be 1 unless explicitly requested with heavy justification. Minimum 8 for typical monsters; **MR** is typically 1–21; 0 only for non-combatants. The server normalizes and clamps generated stats per [MonsterEngineering.md](../World/MonsterEngineering.md) §5.
- **Never all 8s + MR 0:** The AI must **never** output a monster with all stats equal to 8 and MR 0. For variants of roster or core monsters (e.g. Officer, Commander), prefer reusing by `rosterEntryId`; the system will clone and scale.
- **Output:** JSON only (`response_format: { type: "json_object" }`). Strict **camelCase** for stat keys.
- **Schema (room):** `description`, optional `gm_notes`, `twist`, `trap`, `loot`. Optional `encounter.monsters` array.
- **Schema (loot):** `loot` must be an array of objects: each with `name` (string), optional `quantity` (number), optional `description` (string). The client normalizes this for display (array-of-objects or legacy array-of-strings).
- **Schema (each monster):** `name`; optional **`rosterEntryId`** (UUID—when reusing an existing roster entry); stats as integers: `nish`, `mr`, `atk`, `dmg`, `def`, `ar`, `vit`, **`mag`, `mgt`, `mnd`, `mot`, `mox`** (five attributes); optional `weapons`, `armor`, `powers`, `quantity` (default 1). For **reused** monsters the AI outputs only `rosterEntryId`, `name`, and `quantity` (no full stats). For new or variant monsters the AI omits `rosterEntryId` and provides full stats; the name must be unique.
- **Existing roster injection:** Before the LLM call, the server injects the current adventure monster roster (name + `rosterEntryId` per entry) into the system prompt. The AI **must reuse** by `rosterEntryId` when the encounter calls for a monster already on that list; new or variant monsters must have unique names (server enforces uniqueness by appending " 2", " 3", etc. on collision).
- **Monster resolution hierarchy:** The server resolves each needed monster in a **5-step priority** (roster exact/similar, roster variant, **Content exact/similar**, Content variant, create new). When there is no roster match, a **Content-by-name** lookup is used before creating a new roster entry: if a monster in the global Content collection (Codex) matches the requested name (exact or normalized), that Content monster is added to the roster and a pointer is added to the encounter, so the system prefers existing Codex monsters over inventing new ones.
- **Naming rule:** Monster names must **start with their base race/type** (e.g. "Orc Guard", "Handguard Pilot"); base race without a role (e.g. just "Orc") is acceptable unless the prompt asks for a variant or different stats.
- **Deduplication:** The server does **not** add a clone-from-DB when the LLM already reused that monster (by `rosterEntryId` or by name match); prompt-derived clones are only added when the LLM did not already reference that monster.
- **Variant name resolution:** When the LLM returns a new monster with a variant-style name (e.g. "Ogrind Guard") but omits or sends only default stats, the server resolves it by **cloning the base monster's stats** (from roster or Content, by base name derived from the variant name) and applying the role multiplier (e.g. **Guard → 1.2**); MR is never scaled. So "X Guard" gets base X's stats × 1.2 (except MR). See [MonsterEngineering.md](../World/MonsterEngineering.md) §5 (Variant-from-base cloning).
- **User message:** Includes `globalContext.plot_outline` (or "Standard Fantasy"), `globalContext.party_level`, room name, and user notes.
- **Core monster list:** Before calling the LLM, the server fetches the core Content monster list (MongoDB, type `monster`, capped for prompt size, **including five attributes**) and injects it into the system prompt. The AI **must use a core monster from this list when possible**; if no exact match fits, **choose the most similar as the statistical baseline** and adjust as needed. See [MonsterEngineering.md](../World/MonsterEngineering.md) §5.
- **Baseline reference:** Optional. Server may also inject a single name-matched baseline string from `fFindRelevantBaseMonster` (including five attributes) when the room notes match a core monster name. See [MonsterEngineering.md](../World/MonsterEngineering.md) §5.
- **Clone-from-DB:** When the user’s prompt mentions a monster type that exists in the Content collection (e.g. "Rexar"), the server **clones that monster** from the DB, renames it with **race-first** convention (e.g. "Rexar Commander Klyss" or "Klyss, Rexar Commander"), applies a role-based stat multiplier (MR excluded), and adds it to the encounter monster list only when the LLM did **not** already include that monster (by `rosterEntryId` or name). The LLM then generates the rest of the room and any additional monsters. See [MonsterEngineering.md](../World/MonsterEngineering.md) §5 (Database-aware cloning).
- **On failure:** Emit `fshow_message` with `{ title: 'AI Error', message: 'Generation failed.', type: 'error' }` (❌). No persona change for errors.

---

## 2. Plot Summary

- **Event:** `request_ai_plot_summary` (payload: `notes`) → `receiveAI_PlotSummary` with `{ summary }`.
- **Persona:** "You are a lead campaign writer. Summarize the notes into a cohesive 2-paragraph summary."
- **Output:** Free text; no JSON. **max_tokens: 2000.**
- **On failure:** Handler logs error; no explicit toast in current implementation. Prefer emitting `fshow_message` with ❌ and type `'error'` for consistency.

---

## 3. Full Plot

- **Event:** `request_ai_full_plot` (payload: `plotSummary`) → `receiveAI_FullPlot` with `{ fullPlot }`.
- **Persona:** "You are a master storyteller. Expand this summary into a detailed campaign plot with 3 acts."
- **Output:** Free text; no JSON. **max_tokens: 3000.**
- **On failure:** Handler logs error; no explicit toast in current implementation. Prefer emitting `fshow_message` with ❌ and type `'error'` for consistency.

---

## 4. Monster Generation

- **Event:** `request_ai_monster_generation` (payload: `prompt`) → `monster-generation-response` with `{ monster }` (normalized) or `{ error: string }`.
- **Persona:** "Generate a single TAG RPG monster stats. Integers only. Output JSON matching schema: ..."
- **Schema:** `{ "name": "...", "nish": 10, "mr": 10, "atk": 10, "dmg": 10, "def": 10, "ar": 10, "vit": 10, "weapons": "...", "powers": "...", "description": "..." }`. All combat stats **integers**; optional flavor fields.
- **Output:** JSON only. Stats are normalized (camelCase, parseInt) before emit; see [MonsterEngineering.md](MonsterEngineering.md) §3.
- **Baseline reference:** Optional. Server may inject baseline from `fFindRelevantBaseMonster(db, payload.prompt)` into system prompt.
- **On failure:** Emit `monster-generation-response` with `{ error: 'Generation failed.' }`; handler logs with ❌. Client should handle `payload.error`.

---

## 5. Emoji and Error Handling

- **User-facing errors:** Use **❌** prefix and `fshow_message` with `type: 'error'` (and optional `title`) when the handler reports failure. See [CommunicationProtocol.md](CommunicationProtocol.md) §2 and §3.
- **Persona:** No change for error paths; personas apply only to successful LLM request/response. Error messages are developer- or user-facing, not LLM-facing.

---

## 6. Cross-References

- [MonsterEngineering.md](../World/MonsterEngineering.md): Monster stat DNA, normalization, and AI guardrails.
- [CommunicationProtocol.md](CommunicationProtocol.md): Response shape and toast/error contract.
- `lib/handlers/aiHandlers.ts`: Implementation; Zod schemas (e.g. AiRoomResponseSchema, AiLootItemSchema), normalizeMonsterKeys, fFindRelevantBaseMonster, fGetCoreMonsterListForAi.
