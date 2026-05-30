# MS5 SoT: Communication Protocol

**Status:** Active  
**Purpose:** Standardize current socket payload patterns, response shapes, authorization expectations, and event naming without overstating validation guarantees that the code does not yet universally enforce.

For dated contract shifts, see [`Prompts/SoT/Decisions/DecisionLog.md`](../../../../Prompts/SoT/Decisions/DecisionLog.md).

---

## 1. Validation Reality

### Current truth

- `turbo/lib/schemas.ts` is the primary schema authority for validated request payloads.
- `turbo/lib/schemas.ts` is currently a compatibility barrel that re-exports the domain schema modules (`schemaCharacter.ts`, `schemaAdventure.ts`, `schemaGameplay.ts`, etc.); external callers should still import from `turbo/lib/schemas.ts` unless a refactor is intentionally narrowing scope inside the schema layer itself.
- Many protected gameplay and CRUD events do pass through the execute wrapper with Zod schemas.
- Some refactored handlers now share response helpers in `lib/handlerResponses.ts` so transport errors and toast-style feedback do not have to hand-roll identical `socket.emit(...)` branches.
- Some routes still use `execute(..., null, ...)` or no payload, so it is **not** currently true that every incoming socket event has a Zod payload schema.

### Current rule for new work

- New payload-bearing events should use a dedicated Zod schema in `lib/schemas.ts`.
- Existing null-schema routes should be treated as implementation debt, not as proof that bypass is desirable.
- Docs must describe the current mixed state accurately instead of claiming universal validation that the code does not yet implement.

---

## 2. Authorization Contract

- protected events must not be emitted until the client is authorized for the current socket
- reconnect flows must wait for `auth_success` for the current socket instance
- `request_reauth` may restore auth on reconnect
- the server does not rely on toast emission for unauthorized protected requests
- the client is responsible for auth gating before emission
- in the monorepo runtime, Turbo socket traffic is exposed through the path-prefixed route `/turbo/socket.io` behind the root master server

---

## 3. Response Shape Contract

### Success

- prefer the domain response event with the payload object
- a top-level `success: true` is optional when the event name already implies success

### Error

- either emit the primary response event with `error: string`
- or emit a dedicated error/toast event when that is the established pattern
- clients should check for `payload.error` first on the response they already expect

### UX feedback

- transient user feedback uses `fshow_message`
- payload shape: `{ message, type, title? }`
- blocking notices should use a modal path when the UX requires stronger visibility

---

## 4. Message Prefixes

Use these consistently in user-facing messages:

| Prefix | Meaning |
| :----- | :------ |
| `⏳` | pending / wait |
| `✅` | success |
| `❌` | error |
| `⚠️` | warning |
| `ℹ️` | info |

---

## 5. Naming Conventions

- request events normally use `request_<domain>_<action>`
- receive events normally use `receive_<domain>_<action>`
- long-lived broadcast channels may use established names such as:
  - `roll_result`
  - `receive_session_update`
  - `receive_encounter_update`
  - `session_presence_update`
  - `usage_updated`

---

## 6. High-Value Current Contracts

### Session and Lobby

- `request_club_sessions` returns only sessions that satisfy the current Lobby visibility rules
- `request_session_roster` / `receive_session_roster` remain the canonical roster response for Lobby role management
- roster responses may include both persisted roster members and pending roles by email

### Rolls and Usage

- `request_roll` may include `isNishRoll: true` for initiative handling
- `request_roll` may include `isPowerRoll: true` for inline feature-button rolls that should not double-charge actions or uses
- `usage_updated` is the current server confirmation event for usage-state and encounter/day state changes

### Feature Logging

- `log_power_to_roll_log` is for power-card log actions
- `log_feature_to_roll_log` is for `Power | Gear | Artifact | ChaosGem` feature entries
- `copy_power_to_roll_log` and `copy_feature_to_roll_log` are zero-cost log-copy flows

### Loot

- `loot_rnd_to_roll_log` is the current random/specific loot flow
- `request_loot_set_options` returns the current loot-set menu data
- **icon contract:** artifacts use `💫`; Chaos Gems use `🌀`

### Publish

- `gm_publish_encounter` uses the current baked publish snapshot contract
- players render published values directly rather than recalculating them

---

## 7. Inline Button Contract

- inline power/gear/artifact buttons reuse the standard roll channel
- dual inline buttons are resolved on the client into a synthetic typed Morph item
- when the parent feature name is known, the client prepends it to `rollName`
- server-side logging preserves that `rollName`

See [`Prompts/SoT/Core/PowerButtonSystem.md`](PowerButtonSystem.md).

---

## 8. Documentation Guardrail

When documenting socket behavior:

- describe the current runtime contract first
- label stricter desired behavior as a goal, not as current truth
- keep iconography aligned with current rule/UI contracts

---

## 9. Cross-References

- [`Prompts/SoT/Core/SessionArchitecture.md`](SessionArchitecture.md)
- [`Prompts/SoT/Core/PowerButtonSystem.md`](PowerButtonSystem.md)
- [`Prompts/SoT/Rules/LootRules.md`](../Rules/LootRules.md)
- [`Prompts/SoT/Decisions/DecisionLog.md`](../../../../Prompts/SoT/Decisions/DecisionLog.md)
