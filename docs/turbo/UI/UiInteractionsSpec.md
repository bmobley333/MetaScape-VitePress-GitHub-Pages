# MS5 Front-End Interactions & Behaviors (UiInteractionsSpec.md)

**Status:** Active  
**Last Updated:** May 2026  
**Purpose:** This document serves as the unified Master Source of Truth (SoT) for interactive behaviors, context menus, tooltips, and troubleshooting rules within the MetaScape Turbo (MS5) front-end. It consolidates three legacy specifications into a single, cohesive, and DRY interactions standard.

---

## 1. The Kabob Menu & Context Menu Parity System

### A. The "Kabob Mirror" Pattern
To ensure a consistent and keyboard-accessible user experience, any component or container that exposes a right-click context menu **MUST** also expose a visible ⋮ (kabob) button in the upper-right corner that triggers the **exact same** context menu.

*   **Trigger Icon:** The trigger button MUST use the Lucide-react `MoreVertical` (⋮) icon. Do not use hamburger icons (☰).
*   **DRY Logic:** Both the right-click handler and the kabob button click handler MUST call the same underlying menu-open API (e.g. the same `ContextMenuTrigger`-backed menu items or the same `openContextMenu(e, items)` callback). A single source of truth (e.g. a shared `useMemo` or static array) must define the menu items for both triggers.
*   **Extreme Right Alignment:** The ⋮ button MUST be the rightmost element in its row or container header. Any other header controls (e.g. action buttons, toggles, close buttons) MUST reside to the left of the ⋮. Use flex grouping to ensure there is no significant gap between the ⋮ button and the right edge of the container.
    *   *HUD Exception:* In the Character HUD `NISH` and `MOVE` badges, the kabob triggers are placed inside the badge borders, right-aligned (e.g. `[ NISH       ⋮ ]` and `[ MOVE       ⋮ ]`).
*   **Parity Principle:** Every right-click context menu must have a corresponding kabob trigger. No surface may have a context-only or kabob-only menu options list. If the panel or drawer is closeable, a **"Close [Panel Name]"** option (e.g. `❌ Close Roll Log`) must appear in both menus.

### B. Styling Contract
*   **Utility Class:** Use `.kabob-menu-trigger` for all trigger instances.
*   **Colors:** Icon color defaults to `var(--text-dim)`. The hover state background is `var(--bg-shade-2)`. Colors must be retrieved from the Nord Palette variables inside `public/css/global.css`.
*   **Menu Highlights:** Context and kabob menu items are rendered using the shared `DropdownMenuItem` component. Hovering or focusing a menu item highlights it with Nord 10 blue (Tailwind: `bg-menuHighlight text-menuHighlight-foreground`).
*   **Danger Items:** Red text items (e.g. delete actions using `text-destructive` or `--error-main` in default state) MUST transition to the same blue menu highlight (`bg-menuHighlight text-menuHighlight-foreground`) on hover/focus to remain readable.

### C. Reference Implementations
1.  **Character Sheet Roll Log:** The header kabob matches right-click on the Roll Log body: (1) `🧹 Clear Roll Log`, (2) `Loot - Random`, (3) `Loot - Specific` (sub-menu of loot tables; rolls are prefixed with `⚠️SPECIFIC LOOT: [Name][Emoji]`).
2.  **Party Log Column Headers:** Kabob in column header matches column right-click, housing `Pick Header Color` (opens color picker Dialog; saves color to SessionProvider + localStorage).
3.  **Party Log Panel Header:** Rightmost header kabob offers `Refresh` to trigger session-wide presence sync (`requestPresenceRefresh`).
4.  **Nish Tracker Header:** Rightmost header kabob (after "Clear All") offers `Refresh` to trigger the same presence sync (`requestPresenceRefresh`).
5.  **Library Cards:** Character and Adventure cards have top-right kabobs matching card right-click (e.g., Open Sheet, Rename, Copy Adventure, Delete). *Copy Adventure* prompts for a new name and duplicates the record independently.
6.  **Ability Tab Cards:** Weapons, Skills, Feature (Power/Gear/Artifact), and Armor cards implement kabob-mirror headers. Blocking weapons have no context menus and thus no kabobs.
7.  **Monster Cards (EncounterList):** Top-right header kabobs match right-click (View Details, View Pic, and GM options: Clone Monster, Edit Stats, Remove Monster). *View Pic* opens the reference picture in a new tab.
8.  **Narrative Block Table Rows (AE Encounter Detail):** Each monster row has a ⋮ button in the rightmost column matching row right-click (contains `Remove Monster`).
9.  **AE Area Card:** Top-right kabob matches area card right-click (New Area, Rename, Delete).
10. **AE Encounter Card (Header):** Select dropdown card has a kabob matching right-click (New Encounter, Edit Encounter, AI Gen, Delete). *New Encounter* and *Edit Encounter* open a Room # + Encounter Name modal.
11. **AE Monster List (Roster Column):** Column header kabob matches empty column area right-click (Add Monster, Remove Monsters with No Encounter).
12. **Ability Table View Separators:** Category separators have kabobs matching row right-click (Change color + category-specific add/assign options).
13. **Ability Table View Data Rows:** Data rows have kabobs in the description cell matching row right-click (View Details, Remove, Advancement, and AP removal of Unskilled/Disadvantage).
14. **HUD Badges & CS Dossier Level Badge:** Badges contain internal kabobs matching right-click (e.g., NISH -> Open Initiative, Reset Actions, Remove Unskilled; MOVE -> Perm Morph Move; LEVEL -> +1 Level, Set Level). Guard click fall-throughs on containers that also open modals upon clicking.

---

## 2. The Tooltip System

### A. Icon and Placement Standard
*   **Canonical Unicode Symbol:** **🛈** (Unicode U+1F6C8, Information Source). No alternative help symbols are permitted.
*   **Inline Input Placement:** When providing tooltips for input text boxes, the icon MUST be placed inside the text box at the right edge:
    1.  Wrap the input field in a container `div` styled with `relative flex-grow min-w-0`.
    2.  Position the 🛈 icon absolutely inside the container: `absolute right-2 top-1/2 -translate-y-1/2 z-10`.
    3.  Give the input field right padding (`pr-8` or `pr-9`) so typed characters do not flow under the icon.
    4.  Set the cursor on the 🛈 icon to `cursor-help` or `cursor-pointer`.

### B. Tooltip Popup Styling
Tooltips must utilize a high-contrast **light background and dark text** style to guarantee readability:
*   **Popup Tailwind Classes:** `bg-nord6 text-foreground border border-border` (Nord 6 is Primary Surface `#eceff4`, text is Polar Night `#2e3440`).
*   **Prohibition:** Never use dark backgrounds like `bg-nord1` (`#3b4252`) for the tooltip popup, as it clashes with the dark foreground text and becomes unreadable.

### C. Component API
The system uses the Radix-based tooltip wrapper (`src/client/react/ui/tooltip.tsx`):
*   `TooltipProvider` must wrap the application root (e.g., inside `App.tsx`).
*   Wrap triggers in `<TooltipProvider>`, `<Tooltip>`, `<TooltipTrigger>`, and `<TooltipContent>`.
*   **Hover Delay:** To prevent accidental activation when mouse-sweeping, set `delayDuration` on the tooltip root (e.g. `delayDuration={1000}` for a 1-second delay).

### D. Canonical Tooltip Locations
1.  **Morph Drawer Inputs:** Temp Morph and Perm Morph text inputs (`MorphPanel.tsx` / `MorphInput`) display the 🛈 icon inside their right borders.
2.  **Header Labels:** Section headers like the GM Screen Party Log overlay ("Party Log 🛈") and the Abilities Table Description column ("Description 🛈") append the Unicode symbol as their tooltip trigger.
3.  **Nav Rail RPG Dice Input:** The first RPG dice input in `CharacterSheetNav.tsx` displays the 🛈 icon on the right edge, explaining dice formats (e.g. `3d27+5`). The input strictly validates inputs: only `0`–`9`, `d`, `+`, and `-` characters are allowed; all other letters, spaces, or pasted symbols are blocked.
4.  **GM Monster Cards:** The weapon/armor/power loadout button **"⚔️🧥⚡"** triggers a tooltip on hover displaying details, and toggles three expandable rows when clicked.

---

## 3. UI Edit & Layout Troubleshooting Tricks

### A. General Layout Rules
When resolving flexbox, grid, or text wrapping bugs, apply these CSS rules:
*   **Grid Containers:** Often require `w-full` and `overflow-hidden` to prevent scaling overflow.
*   **Grid/Flex Children:** Often require `min-w-0` to allow the children to shrink below their content size.
*   **Flex Columns with Scrollable Children:** Often require `min-h-0` to establish a boundary for inner scroll containers.
*   **Scroll Containers:** Set `overflow-y-auto` and `overflow-x-hidden` on scroll containers to avoid dual-axis scrolling.

### B. Input Forms
*   Input boxes inside dense grids must specify `min-w-0`.
*   Avoid inline styles for layout margins and paddings; leverage tailwind classes.
*   Suppress browser-default number spinner arrows on numeric inputs where they disrupt alignment.

### C. Dialogs & Overlays
*   Dialog containers must have a constrained max height (e.g., `max-h-[85vh]`) and scrollable inner content areas (`overflow-y-auto`).
*   If dropdown menus inside a dialog cut off or hide under the modal frame, ensure dropdown z-indices are explicitly raised above the dialog z-index.
*   Stick to Tailwind/shadcn utilities. Avoid creating custom CSS classes unless utility overrides are blocked by specificity cascade issues.

### D. Build & Verification Checklist
If UI modifications are not displaying locally:
1.  Verify you are modifying the correct component path (e.g. MS5 vs MS4 folders).
2.  Verify the updated layout conforms to the consolidated Master SoT file (`UiLayoutsSpec.md` or this document).
3.  Ensure the dev build generated updated CSS bundles (`npm run build:client`).
4.  Execute `npm run cold-start` (cleans caches and runs Jest tests) to verify the build before manual testing.
