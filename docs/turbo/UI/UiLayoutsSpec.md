# MS5 UI Layouts & Specifications (UiLayoutsSpec.md)

**Status:** Active  
**Last Updated:** May 2026  
**Purpose:** This document serves as the unified Master Source of Truth (SoT) for all layout architectures, components, navigation systems, and user interfaces within the MetaScape Turbo (MS5) front-end. It consolidates six legacy specifications into a single, cohesive, and DRY layout standard optimized for human developers and the Antigravity 2.0 agentic environment.

---

## 1. Main Tab-Bar Navigation

### A. High-Level Overview & Philosophy
The Main Tab-Bar provides primary navigation across permanent system dashboards and dynamic contextual instances (such as character sheets). It implements a **Tiered Visual Hierarchy** that uses shadows and Nord Palette accent colors to communicate the nature and importance of each tab:
*   **Tier 1 - Permanent System Tabs:** Flat design (no shadows) for permanent views (Lobby, Characters, Adventures, Dev).
*   **Tier 2 - Dynamic Contextual Tabs:** Subtle bottom shadows for closable contextual panels (GM Screen, Adventure Editor).
*   **Tier 3 - Character Sheet Tabs:** Prominent top shadows with a Nord blue tint and a 4px top border to call out player-specific sheets.

### B. Dual CSS Specificity & Cascade Contract
MetaScape Turbo uses a hybrid CSS loading architecture during its incremental migration to Tailwind CSS. To resolve specificity conflicts where legacy stylesheets would otherwise override Tailwind utilities (e.g. `.codex-nav button.active` overriding `.bg-secondary`), the CSS files **MUST** load in this exact order in `public/index.html`:
```html
<link rel="stylesheet" href="/css/global.css" />                 <!-- 1. Nord base variables & structure -->
<link rel="stylesheet" href="/css/codex_style.css" />            <!-- 2. Legacy codex views -->
<link rel="stylesheet" href="/css/gm_screen_style.css" />        <!-- 3. Legacy GM screen styles -->
<link rel="stylesheet" href="/css/character_sheet_style.css" />  <!-- 4. Legacy character sheets -->
<link rel="stylesheet" href="/css/session_chat.css" />           <!-- 5. Legacy session chat container -->
<link rel="stylesheet" href="/css/roll_log.css" />               <!-- 6. Legacy roll log container -->
<link rel="stylesheet" href="/dist/style.css" />                 <!-- 7. Tailwind CSS Bundle (LOADED LAST) -->
```
> [!IMPORTANT]
> The Tailwind stylesheet `/dist/style.css` must remain last. Any deviation in this loading order will break the cascade and cause components (such as active tab indicators and custom borders) to fallback to unstyled legacy layouts.

### C. Custom Nord Colors and Shadows
The tab bar relies on custom definitions extended in `tailwind.config.js`:
*   `nord-gray`: `#eceff4` (Snow Storm 1 base background for inactive tabs)
*   `nord-gray-hover`: `#e5e9f0` (Snow Storm 2 hover state background)
*   `shadow-top`: `0 -2px 4px rgba(94, 129, 172, 0.15)` (Nord 9 primary blue tint top shadow)
*   `shadow-top-md`: `0 -3px 6px rgba(94, 129, 172, 0.2)` (Nord 9 primary blue tint top shadow when active)

To prevent the custom top shadows from being clipped by their containers:
1.  `.codex-nav-container` must have at least `padding-top: 10px` in `public/css/global.css`.
2.  Never add `overflow: hidden` to `.codex-nav-container` or `.codex-nav`.

### D. Component Logic & State
The tab bar is rendered by `src/client/react/layout/NavBar.tsx`.
*   **Base Styles (All Tabs):** `border border-border border-b-0 px-4 py-2 cursor-pointer rounded-t-md transition-all duration-200 inline-flex items-center gap-2 mr-1 font-medium text-base`
*   **Active Tab:** `bg-secondary text-foreground font-bold border-t-2 border-t-primary z-10` (`bg-secondary` maps to Nord 10 `#81a1c1`, `border-t-primary` maps to Nord 9 `#5e81ac`).
*   **Inactive Tab:** `bg-nord-gray text-muted hover:bg-nord-gray-hover` (`text-muted` maps to Nord 3 `#4c566a`).
*   **Character Sheet Tab Detection:** `const isCsTab = isDynamic && tab.id.startsWith("cs-")`.
*   **Character Sheet Tab Styles:** `border-t-4 border-t-primary shadow-top` (and `shadow-top-md` if active).
*   **Focus Ring (Accessibility):** `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`.

#### Close Button specifications:
Dynamic tabs render a close button (`&times;` / "×") absolute-positioned on the right side.
*   **Layout:** Tab uses `padding-right: 28px` to protect text. Close button styling: `absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground opacity-60 hover:opacity-100 hover:bg-nord-gray-hover hover:text-destructive rounded px-1 py-0.5 text-lg transition-all`.
*   **Interaction:** Clicking the close button must call `e.stopPropagation()` to prevent triggering the tab switch handler.

---

## 2. CardGrid Layout Pattern

### A. General Concept
The CardGrid pattern organizes vertical stacks of cards (e.g. Attributes or Powers) to mimic an "invisible spreadsheet." This guarantees that identical data types are strictly aligned across cards, optimizing horizontal scannability and maximizing information density.

### B. Coordinates & Layout Standard
We utilize a 1-indexed `(row, column)` coordinate system:
*   `row` defines the vertical slice inside the card.
*   `column` defines the horizontal slice inside the card.

#### Key Styling Rules:
1.  **Text Overflow:** Grid cells must wrap text. Never clip content with `overflow: hidden` or truncate with ellipses unless specified.
2.  **Implementation:** Build card interiors using CSS Grid with fixed or proportional columns (e.g. `grid grid-cols-[100px_1fr]` or `grid-cols-[minmax(120px,160px)_1fr]`). Avoid flexboxes for multi-card column definitions.
3.  **Horizontal Gaps:** Use `gap-x-1` as the default column separation.

### C. Canonical Example: Attributes List
The Attributes list (`AttributeList.tsx`) implements the CardGrid pattern:
*   `(1,1)`: Attribute Emoji, Rating (e.g. `calculateTierScore`), and Name (e.g. `Might💪`, `Moxie🫀`).
*   `(1,2)`: Description text (baseline-aligned to the Name).
*   `(2,2)`: Skill Cloud buttons (wrapped badges).

---

## 3. Ability Tab View & Game Sheet Table

### A. Layout Splits: Dossier, Notes, and Game Sheet
The Character Sheet (`CharacterSheet.tsx`) manages tab routing between:
1.  **Dossier (`DossierView.tsx`):** Profile details (Level, Name, Class, Race, Description, AP HUD).
2.  **Notes (`NotesView.tsx`):** Free-form character journals.
3.  **Game Sheet (`GameSheetView.tsx`):** Ability Table View and combat systems.

*   The RPG die-roller panel (4 rows, custom dice strings, e.g. `3d27+5`) renders below the nav buttons ONLY while the **Game Sheet** is active.

### B. Draggable Column Table View (`AbilityTableView.tsx`)
The Game Sheet always presents the **Ability Table View** showing Attributes, Skills, Powers, Chaos Gems, Weapons, Armor, Shields, Gear, and Artifacts.
*   **Header Controls (Row 1):** Flat sort-mode pills (**Rating**, **Name**, **Action**), a **Usable** filter toggle (hides spent or unaffordable items), and **Jump to** category icons that scroll the viewport to the target category header.
*   **Labels (Row 2):** Column labels: Type | Use | Act | Rating | Name | Stats | Description.
*   **Column Resizers:** The first six columns (Type, Use, Act, Rating, Name, Stats) support horizontal drag-resizing with vertical dividers (`border-r cursor-col-resize`). Column widths are persisted in localStorage (`ms5_ability_table_column_widths_<characterId>`). The Description column stretches dynamically (`1.5fr`).
*   **Type Column Emojis:** Hardcoded `🧬` for Attributes; category emojis (🎓, ⚡, ⚔️, 🧥, 🧱, 🧰, 🌀, 💫) for others.
*   **Solid White Backgrounds:** Data rows use `bg-background` and a thin border `border-b border-border`. Row hovers apply warning-yellow highlights (`var(--nord13)`).

### C. Category Separator Cards
A thin colored separator separates each category group. 
*   **Colors (RPG themes):** Attributes (`#991b1b`), Skills (`#1e3a8a`), Powers (`#6b21a8`), Weapons (`#92400e`), Armor (`#3f6212`), Shields (`#88c0d0`), Gear (`#854d0e`), Artifacts (`#0f766e`). Users can override colors via the separator meatball menu.
*   **Separator Layout:** Reduced height (`min-h-[1.25rem] py-0.5`). 
    *   *Left:* Category Emoji inside a white background (`bg-background`) rounded pill.
    *   *Center:* Category name in all caps (e.g. `SHIELDS & BLOCK`).
    *   *Right:* Gear and Artifacts display `GP [used]/[max]` and `ArfP [used]/[max]`. Other separators only show the category kabob (⋮).
*   **Category Kabobs:** Trigger actions like "Assign Attributes / Respec", "+ Add Skill(s)", "+ Add Power", "+ Add Weapon", "+ Add Armor", "+ Add Shield", "+ Add Gear / Mundane Gear / +1GP", "+ Add Artifact / +1ArfP".

### D. Category-Specific Specifications
*   **Attributes:** Rating only. The separator kabob handles **Assign Attributes** (forced on creation, free) and **Respec** (costs 1 AP, verifies unused AP client-side). Row 2 Description contains baseline-aligned text and the alphabetized **Skill Cloud** (SkillBadge flex wrap row; click opens skill Morph Drawer).
*   **Skills:** Ratings display blank or `—`. Individual skills show an info popup advising that GM-assigned attributes govern rolls. Skill Set cards list member skills alphabetically as badges.
*   **Powers:** Name in Row 1. Action cost and Duration in Row 2. Description and bracket-syntax roll buttons (e.g. `[Atk(✨)]`) in Row 3. Power cards display a **Uses** checkbox tracker (1-3 boxes) between the lightning bolt icon and details. Checking spent boxes displays a bold red `☒` (Nord 11). Insufficient AP/uses greys out the power. Clicking the power card spends actions/uses and appends the description to the Roll Log (no Morph Drawer).
*   **Weapons:** Two rows. Row 1 lists `Name (Type and emoji)`. Row 2 lists `🎲 [Atk Rating]/[Dmg Rating]`, Action, Duration. Click opens Morph Drawer in Atk/Dmg mode.
*   **Armor:** Two rows. Row 1 has a `🧥` icon, name, and `📉` prefix if might requirements are unmet. Row 2 lists `🎲 [Dod Rating]/[AR Rating]`, Action, Duration, max MR. Selecting the **WORN** radio button marks it active (only one worn armor allowed). Non-worn armor is greyed out.
*   **Shields & Block:** Displayed under **SHIELDS & BLOCK** category. Shows shield items and weapons that support block. Checkbox **DON** marks the active shield. Checking DON spends one **Partial Action** (P) from HUD. Clicking a DON'ed shield opens the Morph Drawer in Block Mode (Rtg1 = Block (Might), Rtg2 = Armor). Clicking a non-DON'ed shield auto-triggers DON (checking actions first).
*   **Chaos Gems:** Renders only filled slots. Name column displays `Slot: [Name]` (e.g. `F1: Gem`). Uses columns show 1-6 checkboxes in a `2x3` grid. Separator kabob offers "Move to Empty Finger Slot" and "Move to Mega Slot" with validation.
*   **Mundane Gear:** Sep kabob triggers a modal to persist notes in `character.mundaneGearNotes`.

### E. Quick-Add & Hub Modals
*   **AP Budget Badge:** Bottom of modals show a colored badge `Cost: X AP | Current AP: Y`. Green/normal if affordable, red/destructive if unaffordable.
*   **Power Hub Modal:** Contains three tab views (fixed footer with Cancel/Save outside scrollable tabs):
    1.  *Codex Tab:* Search bar and power card list.
    2.  *Custom Tab:* Form to configure custom power name, action, duration, usage, description (includes quick-insert emoji toolbar), and notes.
    3.  *AI Creator Tab:* Placeholder panel.
*   **Feature Advancement Modal:** Reaches version upgrades. Upgrades cost GM-approved AP. Displays draft flags and version suffixes (e.g., `v2`).

---

## 4. Morph Drawer UI Specification

The Morph Drawer (`MorphPanel.tsx`) slides open when an ability row is clicked.

```
┌────────────────────────────────────────────────────────┐
│ Morph Roll: Combat Knife (Me💪) 🎲21/15, 🔷A, ⏳I        │ <-- Row 1: Title
├────────────────────────────────────────────────────────┤
│ [ ROLL ]   [ FREE ]   [ LUCK ]               [ CLOSE ] │ <-- Row 2: Action Buttons
├────────────────────────────────────────────────────────┤
│ (⚪) Atk (A: 21) [Attack ▾]  ( ) Dmg (B: 15) [Damage ▾] │ <-- Row 3: Rating Sources
├────────────────────────────────────────────────────────┤
│ Proficiency: [Skilled 🎓] [Unskilled 🔰]               │ <-- Row 4: Prof / Status
│ Status:      [Normal] [Advantage 📈] [Disadvantage 📉] │
├────────────────────────────────────────────────────────┤
│ # Rolls: [ 1 ▾ ]               Dif: [   ]             │ <-- Row 5: Roll Config
├────────────────────────────────────────────────────────┤
│ 👤 Temp Morph (Prof / Status Moved to Header)           │ <-- Temp Morph Panel
│    Combine With: [  🛈 ]  Rating (+,-): [  🛈 ]          │
│    Rating (*,/): [  🛈 ]  Set Rating:   [  🛈 ]          │
│    ────────────────────────────────────────────────    │
│    Result (+,-): [  🛈 ]  Result (*,/): [  🛈 ]          │
│    Set Result:   [  🛈 ]                                │
├────────────────────────────────────────────────────────┤
│ 🔒 Perm Morph (Rating-Bound; Notes Shared)             │ <-- Perm Morph Panel
│    Combine With: [  🛈 ]  Rating (+,-): [  🛈 ]          │
│    Rating (*,/): [  🛈 ]  Notes: [                  ]   │
├────────────────────────────────────────────────────────┤
│ 😈 Monster List (Targeting Batch Mode)                 │ <-- Monster List
│    [Clear Targets]                                     │
│    Goblin Scamp (Encounter 1)      [ - ] [ 0 ] [ + ]   │
│    Orc Warrior (Encounter 1)       [ - ] [ 2 ] [ + ]   │
└────────────────────────────────────────────────────────┘
```

### A. Header Panel
*   **Row 1 - Title:** Displays `Morph Roll: [Name] [Rating/Stats]`.
    *   *Weapons:* Uses name form `Name (Type Emoji)` (e.g., `Combat Knife (Me💪)`) and shows both ratings.
    *   *Armor:* Shows Def (Motion Rating) and AR. Prepend `📉` if might requirements are unmet.
    *   *Block Mode:* Displays name, bold-red **Max**🛡️[Max Block Rating], then `[Might]/[Worn Armor AR]`, 🔷F, ⏳Instant.
    *   *Attributes:* Displays `Morph Roll: [Attribute Name] 🎲[Rating]`.
    *   *Individual Skills:* Displays `Morph Roll: [Skill Name] ([Attr Tier]: [Attr Rating])`.
*   **Row 2 - Action Buttons:**
    *   *Roll:* Deducts actions/uses, executes roll payload, keeps drawer open.
    *   *Free:* Executes roll with no action cost, keeps drawer open.
    *   *Luck:* Deducts action cost, rolls, resets **Temp Morph** states, keeps drawer open.
    *   *Close:* Saves current morph states (Temp + Perm) and closes/unmounts drawer.
*   **Row 3 - Rating Sources:** One or two rating blocks. Each block has a radio button selector (defaults to Rating 1), the name/tier/rating (e.g., `Atk (S: 20)`), and a dropdown to select the target `rollType` (Attack, Damage, Defense, Armor, Skill). Block mode rating blocks are `Block` and `AR` (Block dropdown selection determines target difficulty map).
*   **Row 4 - Proficiency & Status:**
    *   *Proficiency:* **Skilled** vs **Unskilled** radios. Defaults to Unskilled for attributes, or Unskilled if the inventory card has a `🔰` prefix. Defaults to Skilled + Disadvantage (`📉`) if requirements are unmet.
    *   *Status:* **Normal**, **Advantage (+1 roll)**, and **Disadvantage (-1 roll)**.
*   **Row 5 - Roll Config:** `# Rolls` dropdown (1-20, disabled in batch mode) and `Dif` number input (disabled in batch mode).

### B. Morph & Targeting Containers
*   **Temp Morph:** Fields: Combine With, Rating (+,-), Rating (*,/), Set Rating, Result (+,-), Result (*,/), Set Result. Placeholder text is **prohibited**; instead, place a Nord-themed info icon (**🛈**) inside the input field at the right edge. Temp morph is not saved and resets on close.
*   **Perm Morph:** Fields: Combine With, Rating (+,-), Rating (*,/), Notes/Sources (textarea). Notes/Sources is shared; other fields are **unique to the active rating radio selection**. Switches save the current values and load the targeted rating's values (`morph` vs `morphRating2`). Info tooltip icons (**🛈**) sit inside inputs on the right edge.
*   **Monster List (Targeting):** Lists monsters in active encounters with increment controls. Selecting any monster quantity > 0 enables batch mode (disables manual `# Rolls` and `Dif`).

### C. Prep Flows from Roll Log
Roll Log buttons can pre-hydrate the Morph Drawer:
*   **Prep Dmg:** Clicked on an **Attack** batch roll. Opens the drawer for that ability with **Rating 2 (Dmg)** selected, and pre-populates target counts with the number of successful hits (resultDelta ≥ 0).
*   **Prep AR:** Clicked on a **Defense/Dodge/Block** batch roll. Opens the drawer with **Rating 2 (AR)** selected and populates target counts with the number of failed defenses (resultDelta < 0). If block is clicked, opens in Block Mode.

---

## 5. Nish (Initiative) Tracker

### A. Scope and Visibility
The Nish Tracker resides in Column 2 of the GM Screen Game Time tab. It is **GM-only**; player clients never receive presence data. 

### B. Data Aggregation
The tracker aggregates initiative values from players and active monsters:
1.  **Player Data:** Consumed from `SessionProvider` presence (`playerPresence`). Reads character names and `lastInitiativeResult` (e.g. `"22A"` -> `22`, `null/""` -> `0`). Player and character names are truncated to 10 chars or the first word (using `truncateName`).
2.  **Monster Data:** Filtered from the selected encounter where `active: true`. Calculated as `Math.round(baseNish * globalMultipliers.nish * overrides.nish)` (min 1). If the parent provides `activeMonsters` explicitly, the tracker maps from that array directly.

### C. UI & Sort Logic
*   **Layout:** Three columns: Checkbox (`☐`/`☑` local state only) | Nish Value | Identity. Player rows use a distinct background color (`.nish-tracker-row-character`) and bold character names with colored player names in parentheses (`.nish-tracker-character-name`).
*   **Sorting:** Auto-sorted descending by initiative score. Entries with no roll (`"—"`) sort to the bottom. Ties preserve insertion order.
*   **Controls:** **"🧹 Clear All"** resets all local checkbox states. The header kabob (⋮) features a **Refresh** item to trigger `requestPresenceRefresh`.

---

## 6. GM Screen Game Time Layout

### A. Four-Column Workspace Layout
When `gmActiveTab === 'gametime'`, the screen displays:
*   **Column 1:** Navigation Rail (out of scope).
*   **Column 2:** Nish Tracker (sidebar, full height).
*   **Column 3:** SharedEncounterDetail (center pane, encounter data, narrative text, editable monsters table).
*   **Column 4:** Monster List (full adventure roster cards, active switches, multipliers).

### B. Area & Encounter Selectors (Column 3 Header)
*   Rendered via `AreaEncounterCards.tsx`.
*   Displays **Area: [Select ▾] ⋮** and **Encounter: [Select ▾] ⋮** cards. Cards have rounded corners (`rounded-lg`), `bg-nord-gray` background, `border-primary` borders, and `shadow-nord-md` shadows. Select text is strictly left-aligned.
*   Kabob menus support "New Area/Encounter", "Rename", "Change Room #", "AI Gen", and "Delete". Standalone "+" buttons are removed. Dropdown selection shifts automatically to new areas/encounters upon creation (`receive_new_area_id` / `receive_new_encounter_id`).
*   **New Encounter Modal:** Requires Room # and Encounter Name. Action buttons in order: **AI Gen** (Nord red), **Save**, **Cancel**. Save and AI Gen are disabled if Name is empty.

### C. Roster and Combat Multipliers (Column 4)
*   **Row 1 (GM only):** Contains the **Destructive Red Button "📡 Publish"** (emits active monsters) and the **Mon Mult** label + input. Mon Mult multiplies non-MR monster card stats for display, clamping results to `[1, 1000]`.
*   **Row 2:** Sort dropdown (Name, Encounter, Active), Monster Level input, and the column header kabob (⋮) hosting bulk functions ("Show/Hide all ⚔️🧥⚡", "+ Add Monster", "🧹 Remove Monsters with No Encounter").
*   **Monster Cards:** Active checkbox on the left acts as the single source of truth for combat readiness, syncing changes via `gm_update_encounter`. Includes inline level adjustments, renaming, and loadout editing.
*   Weapons, Armor, and Powers are shown on hover or when expanded via the outline **"⚔️🧥⚡"** button. The card header row uses 2px padding for high information density.

### D. Viewport-Level Party Log Overlay
*   **Rendering:** Fixed at the bottom of the screen (`bottom: 0`, `left: 0`, `z-index: 50`) covering the full viewport width.
*   **Height States:** Collapsed state fits the handle bar exactly (40px) at the bottom viewport edge. Expanded state slides up to `45vh` or a user-dragged height (clamped `120px` to `80vh`).
*   **Header Controls:** Displays "Party Log 🛈" with a resize grip cursor. The right side features a compact **Chat** button and the expand/collapse chevron. Info icon (🛈) triggers a tooltip explaining overlay controls.
*   **Narrative Scroll Adjustment:** When the overlay is expanded, the center Encounter details and the right Monster List append a `padding-bottom` offset matching the overlay's height so that bottom elements can be scrolled fully into view.

---

## 7. Formatting & Icon Conventions

All numeric ratings and calculations in these layouts must align with standard symbols:
*   `🎲`: Rating (base tier score in parentheses, e.g. `🎲27`).
*   `🔮`: Die roll result (parenthesized if modified, e.g. `🔮(15➡20)`).
*   `➡`: Inner-parentheses transition arrow.
*   `➡️`: Final total separator arrow.
*   `🔷`: Action economy icon (followed by letters: A, M, P, F).
*   `⏳`: Duration icon.
*   `🔄`: Usage tracker icon (checkboxes with red `☒` consumed marks).
*   `🧬`: Attributes category symbol (Magic✨, Might💪, Mind👁️, Motion🏃, Moxie🫀).
*   `🎓`: Skills category symbol.
*   `⚡`: Powers category symbol.
*   `⚔️`: Weapons category symbol.
*   `🧥`: Armor category symbol.
*   `🧱`: Shields category symbol.
*   `🧰`: Gear category symbol.
*   `💫`: Artifacts category symbol.
*   `🌀`: Chaos Gems category symbol.
*   `🔰`: Unskilled proficiency icon.
*   `📉`: Disadvantage / Requirement-unmet modifier icon.
*   `📈`: Advantage modifier icon.
*   `🛈`: Info tooltips (placed on the right inside textboxes or next to headers).
