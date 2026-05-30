# MS5 Logic Contract: Move Button Action Economy

**Status:** Active
**Last Updated:** February 2026
**Purpose:** This document defines the immutable rules for **HUD Move Button Behavior**, including Action Point spending hierarchy, UI behavior constraints, and Roll Log integration. This contract extends the base Action Point economy defined in `Prompts/SoT/Core/ActionCostCodified.md`.

**Phase 1b note:** Character state now uses `usageState`; `metaState` and `actionState` are deprecated and removed from schema/code. This file remains an **active move-button-specific exception contract**, with implementation following the current MS5 FlexifyTurbo `usageState` model.

## 0. This file Update Instructions

- **MoveButton.md Updates:** All updates to this file MUST be ADDITIVE and NON-DESTRUCTIVE.

---

## 1. Action Definition

### A. Core Intent

Clicking the **HUD Move Button** is an attempt to spend a **🔷M (Move Action)**.

### B. The Non-Toggle Contract

**CRITICAL:** The Move Button is NOT a toggle operation. It is a **spending operation** governed by the Flex Hierarchy Protocol.

- **Allowed:** Consuming (dimming) available Action Point icons.
- **Forbidden:** Toggling icons from dim state back to bright state via this button.
- **Restoration Path:** Icons can only be restored to bright state through direct manual clicks on the action icons themselves or via the "Reset All Actions" command.

### C. Turbo Exception

**Move is the only exception** to the MS5 Turbo rule that A, M, and P are not interchangeable. For the Move Button only, M may be used for full move or P for partial move (when M is already used), as defined in this contract. All other abilities and powers require the exact action type (siloed per ActionCostCodified.md Section 2).

### D. Cross-Reference

This button-specific implementation extends the action cost rules in `Prompts/SoT/Core/ActionCostCodified.md` Section 2 (Move Button exception).

---

## 2. The Spending Hierarchy

The Move Button follows a strict Primary → Fallback → Failure protocol when attempting to spend a Move Action.

### A. Spending Order

When the Move Button is clicked, the system MUST evaluate Action Point availability in the following order:

#### Step 1: Primary Resource (👣 Foot Icon)

- **Check:** Is the M (Move) action available (bright)?
- **If Yes:** Consume 1 M action point (dim the 👣 icon).
- **If No:** Proceed to Step 2.

#### Step 2: Fallback Resource (✋ Hand Icon)

- **Check:** Is the P (Partial) action available (bright)?
- **If Yes:** Consume 1 P action point (dim the ✋ icon). Roll Log shows **Move [roll] via ✋** where [roll] is a random integer from 1 to MR.
- **If No:** Proceed to Step 3.

#### Step 3: Failure State

- **Condition:** Both M and P are unavailable (both icons are dim).
- **Action:** Trigger the Insufficient Action modal (Section 4).
- **Result:** No action points are spent, no Roll Log entry is created.

### B. Hierarchy Notation

**M → P**

The Move Button uses this fallback hierarchy (see `Prompts/SoT/Core/ActionCostCodified.md` for general cost rules; Move Button specifically uses M → P per this contract).

### C. Single-Spend Rule

The Move Button consumes **exactly one** Action Point per click:

- It will spend either M or P (via fallback), never both.
- Multiple clicks require multiple evaluations of the hierarchy.

---

## 3. UI Behavior Contract

### A. The Dim-Only Rule (Non-Negotiable)

The Move Button interaction with Action Point icons is **unidirectional**:

- **MUST:** Dim (mark as used) the consumed icon.
- **MUST NOT:** Toggle any icon from dim back to bright.
- **MUST NOT:** Affect any Action Point icons other than the one being consumed.

### B. Visual State Mapping

Action Point icons have two states:

| State     | Visual           | Data                         | Interaction                       |
| --------- | ---------------- | ---------------------------- | --------------------------------- |
| Available | Bright/Clickable | `actionState[key] === false` | Can be consumed by Move Button    |
| Used      | Dim/Disabled     | `actionState[key] === true`  | Cannot be consumed by Move Button |

### C. Icon Restoration Paths

Action Point icons can only return to "Available" (bright) state via:

1. **Direct Manual Click:** Clicking the dim action icon itself toggles it back to bright.
2. **Reset All Actions:** Context menu or HUD reset action that sets all action points to available.
3. **Round Reset:** (Future) Automatic reset on round transition.

**FORBIDDEN:** The Move Button cannot restore icons to bright state.

### D. Visual Contract Reference

This behavior aligns with the Action HUD visual contract defined in `Prompts/SoT/Core/ActionCostCodified.md` Section 7.

---

## 4. The Insufficient Action Modal

When both M and P action points are unavailable (dim), the system MUST interrupt the Move action and display a blocking modal.

### A. Trigger Condition

**Occurs When:**

- User clicks the Move Button.
- M action point is unavailable (dim).
- P action point is unavailable (dim).

**Result:** No action points are spent, no Roll Log entry is created, and the modal is displayed.

### B. Modal Specifications

#### Visual Design

- **Theme:** Nord Palette (enforced by `Prompts/CodeInstructions.md` Section II.3).
- **Component:** shadcn/ui `Dialog` component with `hideClose` prop to prevent dismissal via X button.

#### Title

`"Action Required"`

#### Message Content

`"No 👣 or ✋ actions available."`

#### Button Layout

- **Layout:** Horizontal row with `gap-4` spacing and a visual separator.
- **Separator:** A `<span>` with text `"—"` (em dash) and `text-muted-foreground` class.
- **Button:**
  - **"Close":** `variant="secondary"` → Closes the modal, cancels the Move action.

**CRITICAL DIFFERENCE:** Unlike the override modals in `Prompts/SoT/Core/ActionCostCodified.md` Section 4, this modal does NOT include a "Yes" button. There is no override option—the Move action cannot proceed without available resources.

### C. Modal Flow

1. **User Clicks Move Button:** When both M and A are dim.
2. **Modal Opens:** Displays the "Action Required" warning.
3. **User Clicks "Close":** Modal closes, no state changes occur.
4. **No Alternative:** The Move action is abandoned.

---

## 5. Roll Log Integration

When the Move Button successfully consumes an action point (M or A via fallback), it MUST emit a Roll Log entry.

### A. Format Specification

**Template:** `Move [MR] via [Icon]`

**Log Type:** Message Only (no dice notation, no roll calculations)

#### Components

| Component | Description                                                                   | Example Values                       |
| --------- | ----------------------------------------------------------------------------- | ------------------------------------ |
| `Move`    | Literal prefix string                                                         | `Move`                               |
| `[MR]`    | Movement Rate display value: **5 + Motion tier (F=1, D=2, C=3, B=4, A=5, S=6)** → 6–11, **or** the minimum of that value and the **worn armor's Max MR** when the character has exactly one armor marked Worn with a Max MR. See **Prompts/SoT/Character/CSAdvancement.md** §VII and `lib/game_math.calculateMovementRateDisplay`. When P (✋) is consumed, the log shows a random integer 1..MR in place of [MR]. | `6`–`11`                             |
| `via`     | Literal connector string                                                      | `via`                                |
| `[Icon]`  | Emoji of the **consumed action** (always the action icon, not the armor cap icon) | `👣` (M consumed), `✋` (P consumed) |

**CRITICAL:** Move log entries MUST NOT include dice icons (🎲), roll math, or any "undefined" prefixes. The log entry is a pure string message displaying only the formatted `rollName`.

### B. Roll Log Examples

#### Example 1: Primary Resource Consumed (MR from Motion)

- **Scenario:** M action available; no worn armor or worn armor has no Max MR cap.
- **Resolution:** M (👣) is consumed.
- **Log Entry:** `Move 12 via 👣`

#### Example 1b: Primary Resource Consumed (MR Capped by Worn Armor)

- **Scenario:** M action available; character has one armor marked Worn with Max MR (e.g. 5); Motion MR would be 8.
- **Resolution:** M is consumed; displayed MR is min(8, 5) = 5. The Move button may show the coat icon 🧥 when MR is capped by worn armor; the **Roll Log entry** uses the **action icon** 👣 (M consumed).
- **Log Entry:** `Move 5 via 👣`

#### Example 2: Fallback Resource Consumed (P)

- **Scenario:** M action unavailable (dim), P action available.
- **Resolution:** P (✋) is consumed via fallback; move distance = random integer 1..MR.
- **Log Entry:** `Move [roll] via ✋` (e.g. `Move 7 via ✋` when MR is 10)

#### Example 3: Failure (No Log Entry)

- **Scenario:** M action unavailable (dim), P action unavailable (dim).
- **Resolution:** Insufficient Action modal is triggered.
- **Log Entry:** None (action does not proceed).

### C. Roll Log Emission

The Move Button MUST emit a Move action payload to the server via the `move_action` socket event.

#### Socket Event

`move_action`

#### Payload Schema

Uses the `MoveActionPayload` schema from `lib/schemas.ts`. Required fields:

- `charId`: Character ID (string, MongoDB ObjectId)
- `actionKey`: The action key being consumed (`'M'` or `'P'`)
- `rollName`: The formatted Move string (e.g., `"Move 12 via 👣"` or `"Move 7 via ✋"` when P is used; the number is random 1..MR when P)
- `total`: The MR value (e.g., `12`)

#### Server Processing

The server handler (`handleMoveAction` in `lib/handlers/gameplayHandlers.ts`):

1. Validates the character ownership
2. Verifies the action is available (not already used)
3. Updates the action state (marks the action as used)
4. Creates a Roll Log entry with `rollType: 'Move'`
5. Emits `actions_updated` to sync action state
6. Emits `roll_result` to display the log entry

#### Roll Log Rendering

The Roll Log formatter (`formatRollResult` in `src/client/utils/clientFormatters.ts`) detects `rollType: 'Move'` and renders it as a **message-only** entry, displaying only the `rollName` without dice notation.

---

## 6. Implementation Reference

This section provides quick navigation to the key files and functions involved in the Move Button logic.

**HUD action state (dim/bright):** The HUD action icon state is held in **CharacterContext** as client-side state (`actionState` / `hudActionUsed`). It is updated on icon click (toggle), when the Move button consumes M or P, on Reset All Actions, and when starting an encounter. The server does not persist A/M/P/C; the contract is satisfied by this client-side state and restoration paths (MoveButton.md Section 3).

### A. Key Files & Functions

| Component               | File                                                       | Lines/Notes | Purpose                                            |
| ----------------------- | ---------------------------------------------------------- | ----------- | -------------------------------------------------- |
| Move Button UI          | `src/client/react/features/character/CharacterHud.tsx`     | 286-294     | Current toggle implementation (to be replaced)     |
| MR Calculation          | `src/client/react/features/character/CharacterHud.tsx`     | 152-155     | Existing MR score calculation (useMemo)            |
| Action State Management | `src/client/react/features/character/CharacterContext.tsx` | N/A         | `toggleAction`, `resolveAndSpendActions` functions |
| Roll Log Emission       | `MorphPanel.tsx`                                           | N/A         | Standard socket emit pattern reference             |

### B. New Logic Requirements

To implement this contract, the following changes are required:

1. **Create `handleMoveClick` Function:**

   - Location: `CharacterHud.tsx`
   - Logic: Implement spending hierarchy check (M → P → Modal).

2. **Spending Hierarchy Check:**

   - Evaluate `actionState.M` (false = available, true = used).
   - If M unavailable, evaluate `actionState.P`.
   - If both unavailable, trigger modal (Section 4).

3. **Action Point Update:**

   - Call `toggleAction('M')` if M is available.
   - Call `toggleAction('P')` if M is unavailable but P is available.

4. **Roll Log Emission:**

   - Construct `rollName` string: `"Move [MR] via [Icon]"`.
   - Emit `roll_result` socket event with standard payload.

5. **Rapid Click Protection:**
   - Disable the Move Button during roll emission to prevent double-spend.
   - Re-enable after emission completes.

### C. Data Flow

```
User Clicks Move Button
    ↓
Check actionState.M (false = available)
    ↓
If M Available:
    → Dim M icon (toggleAction('M'))
    → Emit move_action / roll_result with "Move [MR] via 👣"
    → DONE
    ↓
If M Unavailable, Check actionState.P (false = available)
    ↓
If P Available:
    → Dim P icon (toggleAction('P'))
    → Roll = random integer 1..MR
    → Emit move_action / roll_result with "Move [roll] via ✋"
    → DONE
    ↓
If Both M and P Unavailable:
    → Show Insufficient Action Modal ("No 👣 or ✋ actions available.")
    → User clicks "Close"
    → Modal closes, no state changes
    → DONE
```

---

## 7. Edge Cases & Special Behaviors

### A. Case 1: M Available, A Dim

**Scenario:** Character has M action available (bright) but A action is unavailable (dim).

**Resolution:**

1. Move Button consumes M (👣).
2. M icon is dimmed.
3. Roll Log entry: `Move 12 via 👣`

**Note:** The fallback resource (A) is not evaluated because the primary resource (M) is available.

### B. Case 2: M Dim, P Available

**Scenario:** Character has M action unavailable (dim) but P action is available (bright).

**Resolution:**

1. Move Button checks M (unavailable) → checks P (available).
2. Move Button consumes P (✋) via fallback.
3. P icon is dimmed.
4. Roll Log entry: `Move [roll] via ✋` where [roll] is a random integer from 1 to MR.

**Note:** This demonstrates the fallback hierarchy in action.

### C. Case 3: Both M and P Dim

**Scenario:** Character has both M and P actions unavailable (both dim).

**Resolution:**

1. Move Button checks M (unavailable) → checks P (unavailable).
2. Insufficient Action modal is triggered ("No 👣 or ✋ actions available.").
3. User clicks "Close" to dismiss modal.
4. No action points are spent.
5. No Roll Log entry is created.

**Note:** This is a hard block—there is no override option.

### D. Case 4: Rapid Clicking

**Scenario:** User rapidly clicks the Move Button multiple times in quick succession.

**Protection:**

1. **First Click:** Initiates spending hierarchy check and roll emission.
2. **Button Disable:** Move Button is disabled during roll emission processing.
3. **Subsequent Clicks:** Ignored while button is disabled.
4. **Re-Enable:** Button becomes clickable again after emission completes.

**Implementation:** Use a `isProcessing` state flag to track emission status and conditionally disable the button.

### E. Case 5: Only A Available

**Scenario:** M and P are both dim; only A (⚔️) is available.

**Resolution:**

- A is NOT part of the Move Button's spending hierarchy (hierarchy is M → P only).
- The system treats this as "Both M and P Dim" (Case 3).
- Insufficient Action modal is triggered ("No 👣 or ✋ actions available.").

---

## 8. Cross-References

This document extends and integrates with the following Source of Truth contracts:

- **`Prompts/SoT/Core/ActionCostCodified.md`**

  - Section 2.A (Cost M hierarchy): Move Button uses `M → P` fallback per this contract.
  - Section 7 (Visual Contract): Defines Action HUD icon states.
  - Section 4 (Insufficient Points & Override Protocol): Provides modal design patterns (though Move Button uses a no-override variant).

- **`Prompts/CodeInstructions.md`**

  - Section II.3 (Visual Identity): Enforces Nord Palette usage for all UI components.
  - Section IV.2 (Zod Front Door): Requires validated socket payloads.

- **`lib/schemas.ts`**
  - `rollResult` schema: Defines the payload structure for Roll Log emissions.

---

## 9. Shield Donning and Move Button

- **Donning cost:** Donning a shield (checking the DON checkbox on a shield card in the Character Sheet Armor tab) consumes one P (✋) action when available. If P is not available, the UI may offer an override to don without spending P.
- **Shield MR modifier:** When a shield is donned, the shield's MR modifier (`shield_mr`) is applied to the Move button's displayed MR: effective MR = max(1, base/capped MR + shield_mr). The Move button value and any Move action roll use this effective MR.
- **Move icon with shield:** When a shield is donned, the Move button icon shows the current move icon plus 🛡️ (e.g. 👣🛡️4 or 🧥🛡️4).

---

## 10. Future Considerations

### A. Planned Features

- **Auto-Disable on Empty Actions:** Visually disable the Move Button when both M and P are dim (pre-click feedback).
- **Move Distance Calculation:** Integrate MR value with map grid movement (if tactical maps are added).
- **Move History Tracking:** Log cumulative movement per round for encounter analytics.

### B. Open Questions

- **Should Move consume additional resources?** (e.g., Stamina, Meta points for enhanced movement)
- **How should Difficult Terrain interact with the Move Button?** (Potential MR reduction or additional costs)
- **Should there be a "Sprint" variant?** (Double movement at double cost: 2M or 2A or MA)

---

## 11. Perm Morph Move (Kabob)

A **kabob menu** in the **top-right of the MOVE container**, **inside the container border** at the right edge (not the section-level kabob), provides one option: **"Perm Morph Move"**. Selecting it opens a modal to set or clear a **permanent morph operator string** that modifies the displayed (and rolled) Movement Rate.

- **Operator string:** Comma-separated segments; each segment is one of `+` `-` `*` `/` followed by a number (decimals allowed). Example: `+2, *1.2, -8`. Empty string clears the morph.
- **Storage:** Stored on the character as `permMorphMoveString` (Prisma, UpdateCharacterPayload, shared Character type). Persisted via `request_character_update`; empty string clears.
- **Application:** After base MR (tier + armor cap + shield) is computed, if `permMorphMoveString` is non-empty, the value is passed to `lib/game_math.applyPermMorphMove(baseMR, permMorphMoveString)`. The result is rounded and floored at 0; that value is used for display and for Move action roll emission.
- **Visual indicator:** When `permMorphMoveString` is set, the MOVE label shows **MOVE🛈**. The label is wrapped in the standard Tooltip; on hover, the tooltip displays the exact operator string.
- **Modal:** `PermMorphMoveModal.tsx` (or equivalent) provides the input, validation (regex: leading operator + number, comma-separated; empty allowed), and Save/Cancel. Save emits `request_character_update` with `permMorphMoveString` (or `''` to clear).

**Implementation reference:** `lib/game_math.applyPermMorphMove`, `src/client/react/features/character/CharacterHud.tsx` (MOVE container, kabob, tooltip, useMemo MR), `src/client/react/features/character/PermMorphMoveModal.tsx`. The kabob menu content is rendered with a z-index above the sticky HUD container so it is not occluded.

---

## Appendix: Glossary

- **🔷M:** Move Action cost notation (action emoji prefix per ActionCostCodified.md).
- **MR:** HUD Move Rate = 5 + Motion Attribute tier (F=1 through S=6), yielding 6–11.
- **👣 (Foot Icon):** Visual representation of the M (Move) action point in the HUD.
- **✋ (Hand Icon):** Visual representation of the P (Partial) action point in the HUD; Move Button fallback when 👣 is unavailable.
- **Bright:** Visual state indicating an action point is available (unused).
- **Dim:** Visual state indicating an action point has been used (consumed).
- **Spending Operation:** A unidirectional action that consumes resources (as opposed to a toggle).
- **Flex Hierarchy:** The substitution cascade allowing higher-tier action points to pay for lower-tier costs.
- **Hard Block:** A failure condition with no override option (user cannot bypass the requirement).
