# MS5 UI Specification: Nord Palette (The Arctic Core)

**Status:** Active  
**Ver:** 26.02.04  
**Purpose:** This document is the authoritative Source of Truth for the Nord Palette colors and their semantic applications within MetaScape Turbo. It ensures visual parity and consistent color usage across all React components and legacy styles.

---

## 0. This file Update Instructions

- **NordPalette.md Updates:** All updates to this file MUST be ADDITIVE and NON-DESTRUCTIVE.

---

## 1. Overview & Philosophy

The Nord Palette is an arctic, north-bluish color palette created for optimal focus and readability. In MetaScape Turbo, color is used functionally to communicate state and hierarchy, rather than for pure decoration.

---

## 2. Polar Night (Foundations)

Used for backgrounds, surface elevation, and structural foundations.

| Nord ID   | Hex Code  | Purpose in MS5   | Default Usage                               |
| :-------- | :-------- | :--------------- | :------------------------------------------ |
| **nord0** | `#2e3440` | Base Background  | App background, `foreground` text color     |
| **nord1** | `#3b4252` | Elevated Surface | Modals, floating popups, sidebars           |
| **nord2** | `#434c5e` | Selection/Focus  | Active line highlighting, focus states      |
| **nord3** | `#4c566a` | Muted Elements   | `muted` text, comments, inactive UI details |

---

## 3. Snow Storm (Surfaces & Text)

Used for bright UI components, active states, and high-readability text.

| Nord ID   | Hex Code  | Purpose in MS5  | Default Usage                            |
| :-------- | :-------- | :-------------- | :--------------------------------------- |
| **nord4** | `#d8dee9` | Body Text       | Standard text in dark ambiance           |
| **nord5** | `#e5e9f0` | Hover States    | `nord-gray-hover` utility in navigation  |
| **nord6** | `#eceff4` | Primary Surface | `nord-gray` background for inactive tabs |

---

## 4. Frost (Branding & Accents)

The core brand colors for MetaScape Turbo features and interactions.

| Nord ID    | Hex Code  | Purpose in MS5 | Default Usage                             |
| :--------- | :-------- | :------------- | :---------------------------------------- |
| **nord7**  | `#8fbcbb` | Info Highlight | Secondary information accents             |
| **nord8**  | `#88c0d0` | `accent`       | Secondary branding, sky-blue highlights   |
| **nord9**  | `#81a1c1` | `secondary`    | Active tab backgrounds                    |
| **nord10** | `#5e81ac` | `primary`      | Top borders, focus rings, primary actions |

---

## 5. Aurora (Semantic Feedback)

Used for status indicators, error handling, and visual feedback.

| Nord ID    | Hex Code  | Purpose in MS5 | Default Usage                                 |
| :--------- | :-------- | :------------- | :-------------------------------------------- |
| **nord11** | `#bf616a` | `destructive`  | Error states, delete buttons, close hover     |
| **nord12** | `#d08770` | Warm Accent    | Auxiliary warnings or orange highlights       |
| **nord13** | `#ebcb8b` | `warning`      | Warning banners, yellow status bars           |
| **nord14** | `#a3be8c` | `success`      | Confirmation buttons, green status indicators |
| **nord15** | `#b48ead` | Specialty      | Purple accents for unique UI features         |

---

## 5.1 Visual Reference (Swatches)

Use these names and hex values when communicating which Nord color to use. Swatches render in Markdown preview (e.g. VS Code / Cursor).

|                                                                         Swatch                                                                         | Nord ID    | Hex       |
| :----------------------------------------------------------------------------------------------------------------------------------------------------: | :--------- | :-------- |
| <span style="display:inline-block;width:24px;height:20px;background:#2e3440;border:1px solid #4c566a;vertical-align:middle;border-radius:2px;"></span> | **nord0**  | `#2e3440` |
| <span style="display:inline-block;width:24px;height:20px;background:#3b4252;border:1px solid #4c566a;vertical-align:middle;border-radius:2px;"></span> | **nord1**  | `#3b4252` |
| <span style="display:inline-block;width:24px;height:20px;background:#434c5e;border:1px solid #4c566a;vertical-align:middle;border-radius:2px;"></span> | **nord2**  | `#434c5e` |
| <span style="display:inline-block;width:24px;height:20px;background:#4c566a;border:1px solid #2e3440;vertical-align:middle;border-radius:2px;"></span> | **nord3**  | `#4c566a` |
| <span style="display:inline-block;width:24px;height:20px;background:#d8dee9;border:1px solid #4c566a;vertical-align:middle;border-radius:2px;"></span> | **nord4**  | `#d8dee9` |
| <span style="display:inline-block;width:24px;height:20px;background:#e5e9f0;border:1px solid #4c566a;vertical-align:middle;border-radius:2px;"></span> | **nord5**  | `#e5e9f0` |
| <span style="display:inline-block;width:24px;height:20px;background:#eceff4;border:1px solid #4c566a;vertical-align:middle;border-radius:2px;"></span> | **nord6**  | `#eceff4` |
| <span style="display:inline-block;width:24px;height:20px;background:#8fbcbb;border:1px solid #4c566a;vertical-align:middle;border-radius:2px;"></span> | **nord7**  | `#8fbcbb` |
| <span style="display:inline-block;width:24px;height:20px;background:#88c0d0;border:1px solid #4c566a;vertical-align:middle;border-radius:2px;"></span> | **nord8**  | `#88c0d0` |
| <span style="display:inline-block;width:24px;height:20px;background:#81a1c1;border:1px solid #4c566a;vertical-align:middle;border-radius:2px;"></span> | **nord9**  | `#81a1c1` |
| <span style="display:inline-block;width:24px;height:20px;background:#5e81ac;border:1px solid #4c566a;vertical-align:middle;border-radius:2px;"></span> | **nord10** | `#5e81ac` |
| <span style="display:inline-block;width:24px;height:20px;background:#bf616a;border:1px solid #4c566a;vertical-align:middle;border-radius:2px;"></span> | **nord11** | `#bf616a` |
| <span style="display:inline-block;width:24px;height:20px;background:#d08770;border:1px solid #4c566a;vertical-align:middle;border-radius:2px;"></span> | **nord12** | `#d08770` |
| <span style="display:inline-block;width:24px;height:20px;background:#ebcb8b;border:1px solid #4c566a;vertical-align:middle;border-radius:2px;"></span> | **nord13** | `#ebcb8b` |
| <span style="display:inline-block;width:24px;height:20px;background:#a3be8c;border:1px solid #4c566a;vertical-align:middle;border-radius:2px;"></span> | **nord14** | `#a3be8c` |
| <span style="display:inline-block;width:24px;height:20px;background:#b48ead;border:1px solid #4c566a;vertical-align:middle;border-radius:2px;"></span> | **nord15** | `#b48ead` |

---

## 5.2 MS5 Implementation Mapping

Map Nord IDs to the variables and Tailwind names used in code. Both semantic CSS variables and `--nord0`…`--nord15` (defined in `global.css`) are valid; **prefer semantic names** (e.g. `--text-muted`, `--primary-main`) and Tailwind utilities in new code. The `--nordN` set exists for SoT parity and legacy/SoT doc references (e.g. NishTracker.md, GMScreenGameTimeUI.md).

| Nord ID | Hex       | global.css variable                          | Tailwind semantic |
| :------ | :-------- | :------------------------------------------- | :---------------- |
| nord0   | `#2e3440` | `--text-darkest`                             | `foreground`      |
| nord1   | `#3b4252` | `--text-main`                                | —                 |
| nord2   | `#434c5e` | `--nord2`                                    | —                 |
| nord3   | `#4c566a` | `--text-muted`, `--surface-header-dark`      | `muted`           |
| nord4   | `#d8dee9` | `--bg-shade-3`                               | —                 |
| nord5   | `#e5e9f0` | `--bg-shade-2`                               | `nord-gray-hover` |
| nord6   | `#eceff4` | `--bg-shade-1`, `--surface-header-dark-text` | `nord-gray`       |
| nord7   | `#8fbcbb` | —                                            | —                 |
| nord8   | `#88c0d0` | `--primary-dim`                              | `accent`          |
| nord9   | `#81a1c1` | `--primary-light`                            | `secondary`       |
| nord10  | `#5e81ac` | `--primary-main`                             | `primary`, `ring` |
| —       | —         | `--menu-highlight-bg` (nord10), `--menu-highlight-text` (nord6) | `menuHighlight`, `menuHighlight-foreground` (Dropdown/Select/Context menu item highlight) |
| nord11  | `#bf616a` | `--error-main`                               | `destructive`     |
| nord12  | `#d08770` | `--warning-accent`                           | —                 |
| nord13  | `#ebcb8b` | `--warning-main`                             | `warning`         |
| nord14  | `#a3be8c` | `--success-main`                             | `success`         |
| nord15  | `#b48ead` | —                                            | —                 |

---

## 6. Implementation Contract

1.  **Tailwind Reference:** All colors MUST be referenced via their semantic names (e.g., `bg-primary`, `text-muted`) or the custom Nord utilities (`bg-nord-gray`) defined in `tailwind.config.js`.
2.  **Hard-Code Prohibition:** Manual hex values are strictly forbidden in `.tsx` files to ensure theme consistency.
3.  **Menu item highlight:** Dropdown, Select, and Context Menu item hover/focus (highlight) MUST use `bg-menuHighlight` and `text-menuHighlight-foreground` (semantic tokens mapping to nord10 background and nord6 text). Do not hard-code hex in menu items; change `--menu-highlight-bg` / `--menu-highlight-text` in `global.css` to switch the global menu highlight (e.g. to nord9).
4.  **Shadows:** Shadows should use Nord blue tints instead of generic black to maintain the arctic aesthetic. Use Tailwind utilities `shadow-top` (`0 -2px 4px rgba(94, 129, 172, 0.15)`), `shadow-top-md` (`0 -3px 6px rgba(94, 129, 172, 0.2)`), `shadow-nord` (`0 2px 8px rgba(94, 129, 172, 0.18)`), and `shadow-nord-md` (`0 4px 12px rgba(94, 129, 172, 0.22)`), or equivalent Nord 10 `rgba(94, 129, 172, …)` in custom CSS.

---

## 6.1 Emphasis Panels (Class Block & Tag Badges)

The Dossier header **Class** block is visually emphasized so the entire Class area reads as more important:

- **Container:** Primary border (`border-primary/50`), light Nord fill (`bg-nord-gray`), and Nord drop shadow (`shadow-nord`) to lift the block.
- **Main title:** The "Class:" label uses main-title typography: larger size (`text-lg`), bold weight, and primary color (`text-primary`) per Nord primary usage (focus, primary actions).
- **Signature tag badges (Archetype, Domain, Focus):** Pill-style badges with accent tint (`bg-accent/15`), accent border (`border-accent/40`), rounded-full shape, and medium font weight so they read as distinct tags rather than plain input-style boxes.

---

## 6.2 Specialist Badges

Specialist badges (in the Dossier header **Specialist** block) are **visually distinct** from Class and Race tag badges so users can tell specialist designations from Archetype/Domain/Focus at a glance. Use **nord15 (Specialty)** for fill and border: e.g. `bg-nord15/15`, `border-nord15/40`. Same pill-style shape (rounded-full) and structure as tag badges; only the color differs.

---

## 6.3 Race Block (Dossier Header)

The Dossier header **Race** block is visually distinct from the Class and Specialist blocks so the three areas read as separate. Use **nord14 (faint green / success)** for the Race block container and label: e.g. **label** `text-nord14`, **border** `border-nord14/50`, **fill** `bg-nord14/10`. Same overall block language (rounded-lg, shadow-nord) as the Class block. Race tag badges (Domain, Focus) use nord14 pill style (`bg-nord14/15`, `border-nord14/40`) for consistency within the block.

---

## 6.4 Specialist Block (Dossier Header)

The Dossier header **Specialist** block (right ⅓) holds all specialist UI: one "+ Specialist" button and one always-visible Specialist badge row. Use **nord15 (Specialty)** for the Specialist block container and label: e.g. **label** `text-nord15`, **border** `border-nord15/50`, **fill** `bg-nord15/10`. Specialist badges within this block use nord15 pill style (`bg-nord15/15`, `border-nord15/40`) per §6.2.

---

## 6.5 Block Max Label

The word **Max** on Block cards (Armor tab Shields & Blocking subsection and Morph Drawer in Block Mode) uses **pure red** `#ff0000` for maximum visibility. This is the only exception to Nord destructive (nord11) for this specific label. Implementation: CSS variable `--block-max-red` in `global.css`; reference via `style=&#123;&#123; color: 'var(--block-max-red)' &#125;&#125;` in `CharacterArmorList.tsx` and `MorphPanel.tsx`.

---

## 6.6 Ability Table Type Separator Cards

The Ability Table View (Game Sheet) renders **Type Separator** rows at the top of each category group. These separator cards use **RPG-themed default background hex colors** (see AbilityTabView.md §10) rather than Nord palette values. The **Shields** category uses an additional Nord-compliant default (e.g. nord8 `#88c0d0`) for its separator. This is the only exception to the no-hex rule for this feature. A small **white or lightest background** (`bg-background` or `var(--bg-lightest)`) may be applied behind the category emoji only so the emoji remains legible on the colored separator. User-overridable via the separator’s meatball menu → "Change color" → ColorPickerGrid in a Dialog; overrides are persisted per character in localStorage.

---

## 6.7 Ability Table Description Badges (Clickable vs Non-Clickable)

In the Ability Table View **Description** column, inline badges are visually distinguished by interactivity:

- **Clickable badges** (e.g. Attributes row Skill Cloud, Skills row skill badges): Use **accent** semantics (nord8)—`bg-accent/15`, `border-accent/40`, `hover:bg-accent/25`—and `cursor-pointer`. Implementation: `SkillBadge` with `onClick` and without `readOnly`.
- **Non-clickable badges** (Powers, Gear, Artifacts description; Roll Log read-only power description): Use **muted** semantics (nord3)—`bg-muted/30`, `border-border`, `text-muted-foreground`—and `cursor-default`. Implementation: `SkillBadge` with `readOnly` (or no `onClick`), and calculation spans (`[=(Expr)]`) in `powerButtonRenderer.tsx` use the same non-clickable style.

---

## 6.8 AE Monster List In-Encounter Row Highlight

Monsters in the AE Encounters far-right Monster List that also appear in the active encounter's Narrative Monster Table are highlighted so they read as "in this encounter." Use **nord10 (primary)** as a **solid dark blue** title-bar background with **light text** for contrast: `bg-primary` and `text-primary-foreground` in MonsterCard (GM view header row when `inActiveEncounter` is true). Controls and icons in that row (name, qty, gear button, Edit, kabob) use `text-primary-foreground` or equivalent light styling so they remain readable on the dark blue bar. When the monster name is inline-editable and the input is focused, it uses `focus:bg-background` and `focus:text-foreground` so the text remains readable on the light background. This makes in-encounter rows clearly pop against the default background while staying within the Nord palette.

---

## 6.9 Ability Table Name Cell

The **Name** column in the Character Sheet Ability Table (Game Sheet) is visually emphasized so ability names read as the primary identifier in each row. The name cell background **matches the Type Separator bar color** for that row's category (user override from separator "Change color" or the RPG-themed default per category). Text is **pure white** (`text-white`) with `font-bold` and `rounded px-0.5`. Implementation: `AbilityTableView.tsx` Name column cell uses `style=&#123;&#123; backgroundColor: separatorColors[row.category] ?? SEPARATOR_DEFAULT_COLORS[row.category] &#125;&#125;`; keep `truncate` and `title={row.name}` for overflow and tooltip. This ties each ability name to its category header visually.
