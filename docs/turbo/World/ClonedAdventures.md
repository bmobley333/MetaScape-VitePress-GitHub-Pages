# Cloned Adventures

**Status:** Active  
**Purpose:** Define the current runtime clone contract for GM use without claiming that this document outranks the current schema or code.

Current code/model authority is shared with:

- `prisma/schema.prisma`
- `turbo/Prompts/SoT/Core/SessionArchitecture.md`
- `turbo/Prompts/SoT/World/AdventureArchitecture.md`

---

## 1. Current Clone Identity

Runtime clones are keyed by:

- `sessionId`
- `userId`

The current semantic contract is **one clone per (session, user)**.

---

## 2. Current Behavioral Rules

- a GM can maintain their own clone for a session over time
- switching sessions switches the active clone context
- two GMs in the same session may each have their own separate clone
- the GM Screen and Game Time views should load the clone for the current `(session, user)` pair

---

## 3. Current Client / Server Contract

### Server

- clone creation, lookup, and replacement are scoped to the requesting GM's session/user identity
- GM session payload building resolves the current user's clone for GM view

### Client

- GM-facing session data consumes the clone supplied for the current session/user context
- when the active session changes, old session clone state must not remain displayed as if it belonged to the new session

---

## 4. Boundary Rules

- template adventures remain separate from runtime clones
- clone roster data is the runtime authority for GM-side editing and publishing
- player-facing published encounter data is a separate baked snapshot boundary

---

## 5. Historical Note

Older wording in this area claimed that cloned-adventure rules should override current code or schema. That is not the current documentation model. Current SoT should track the live implementation and the executable contract authority.

For dated authority changes, see [`Prompts/SoT/Decisions/DecisionLog.md`](../../../../Prompts/SoT/Decisions/DecisionLog.md).

---

## 6. Cross-References

- [`Prompts/SoT/Core/SessionArchitecture.md`](../Core/SessionArchitecture.md)
- [`Prompts/SoT/World/AdventureArchitecture.md`](AdventureArchitecture.md)
- [`Prompts/SoT/Core/MonsterRoster.md`](../Core/MonsterRoster.md)
