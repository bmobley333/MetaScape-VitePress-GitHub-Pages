# MS5 Core Logic: Action Economy, Nish, and Session State

**Status:** Active  
**Purpose:** Centralize the rules governing runtime actions (AMP), initiative (Nish), combat state transitions, session persistence, and player presence.

---

## 1. Action Tracks & Spending

The runtime gameplay utilizes three action tracks represented visually on the HUD, Morph Drawer, and Game Sheet:

* **⚔️ (Attack `A`):** Pays for attack actions.
* **👣 (Move `M`):** Pays for movement actions.
* **✋ (Partial `P`):** Pays for partial or minor actions.

*Note: The legacy `C` (Cerebral) track is obsolete and is not part of the active runtime.*

### The Siloing Rule
Actions are strictly siloed and **not interchangeable** in standard rules:
* `A` can only pay for `A` requirements.
* `M` can only pay for `M` requirements.
* `P` can only pay for `P` requirements.
If a required action is unavailable, the action cannot be performed unless an explicit exception applies.

### Explicit Exceptions:
1. **The HUD MOVE Button:** 
   * If `M` is available, clicking MOVE consumes `M`.
   * If `M` is unavailable but `P` is available, clicking MOVE may consume `P` instead.
   * This exception applies **only** to the HUD MOVE button. Powers and other items do not inherit this flexibility.
2. **Secondary Rating Morph Rule:**
   * When rolling a secondary or follow-up rating (such as a follow-up Dmg or AR roll) in the Morph Drawer, the secondary roll is treated as **free**.
   * This prevents follow-up rolls from double-charging the originating action cost.
3. **Free Actions:**
   * Action fields containing `F`, empty strings, or missing keys are free. They bypass validation and spend no HUD actions.

### Multi-Letter Costs
Multi-letter costs (e.g., `AM`, `AMP`) are evaluated left-to-right. All required letters must be paid. If any required action is unavailable, the flow is interrupted, prompting the user for an override or cancellation.

---

## 2. Nish & Initiative

**Nish** is the initiative roll sourced from the **Motion** attribute:
* Characters may be **skilled** or **unskilled** in initiative.
* Unskilled characters use a synthetic unskilled initiative roll unless they have purchased the **Nish upskill path**, which elevates the synthetic initiative roll to behave as skilled.
* Nish rolls flow through the standard rolling and modifiers pipeline.

---

## 3. Combat & Time State Transitions

Encounter and round state clearing, as well as HUD action replenishment, are driven by specific events:

### A. When a Nish Roll is Made:
* **If NOT already in combat (encounter mode is false):**
  * Set `inNishEncounter` (combat encounter state) to `true`.
  * Clear encounter and round usage tracks (`usageState` cleared).
  * Refresh HUD action tracks (`A`, `M`, and `P` fully replenished).
* **If already in combat:**
  * Clear round usage tracks only.
  * Refresh HUD action tracks (`A`, `M`, and `P` replenished).

### B. When Combat Encounter Toggle is Changed Manually:
* Clear encounter and round usage tracks.
* Refresh HUD action tracks (`A`, `M`, and `P`).

### C. When "New Day" is Triggered:
* Set `inNishEncounter` (combat encounter state) to `false`.
* Clear day, encounter, and round usage tracks.
* Refresh HUD action tracks (`A`, `M`, and `P`).

---

## 4. Session & Presence Architecture

Sessions belong to social containers called **Clubs**. Roster memberships are relational and persistent, whereas character presence is ephemeral.

### A. Roster Persistence
* **`Club`**: Persistent social container and invitation boundary.
* **`Session`**: Persistent play container under a club.
* **`SessionMember`**: Relational join row mapping a user with `gm` or `player` roles to a session.
* **`PendingSessionRole`**: Email-based invitations for users who have not yet registered an account. Upon registration, matching emails automatically reconcile and convert these to `SessionMember` rows.

### B. Ephemeral Character Presence
Active character presence is in-memory only, managed by `turbo/lib/sessionPresence.ts`. It represents which character sheets are actively opened and connected to the session room.
* **Presence Joins/Leaves:** Emitted via `character_presence_join` and `character_presence_leave` socket messages. Reconnections automatically restore presence.
* **Data Payload:** Presence objects maintain `characterId`, `userId`, `username`, `characterName`, `identity`, `level`, `currentVit`, `maxVit`, and last initiative results. This data sources the Party Log and Nish Tracker rosters.

---

## 5. Lobby Visibility & Cross-Tab Synchronization

### Lobby Session Visibility
A session is visible in the Lobby only if:
1. The current user has a valid `SessionMember` row (role `gm` or `player`).
2. The session creator has joined the session, **or** the current user is that creator. Creator presence is tracked dynamically in memory.

### Cross-Tab & Socket Sync
* The active session ID is persisted in the browser's local storage.
* Session join/leave states synchronize across multiple open browser tabs using the `storage` event listener.
* Tab reconnects wait for `auth_success` before sending presence updates to prevent duplicate listeners or unauthorized socket spam.

---

## 6. Published Encounter Boundary

To keep character sheet rendering fast and decoupled from GM active combat edits, player-facing encounters are managed as a **published snapshot**:
* The GM prepares and mutates live clone encounters.
* Clicking "Publish" bakes the current state of the encounter and its monsters.
* Player clients receive this baked snapshot and render it directly without running dynamic scaling calculations on client-side loading.
