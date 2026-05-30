# MS5 Logic Contract: Power Button System

**Status:** Active
**Last Updated:** March 2026
**Purpose:** Defines the current syntax, parsing rules, validation behavior, and interaction flow for dynamic in-line roll triggers inside Power, Gear, and Artifact descriptions. This is an implemented technical contract, not a planning draft.

**Implementation status:** validation, parsing, rendering, and authoring feedback are live in `lib/powerButtonValidator.ts`, `lib/schemas.ts`, `src/client/utils/powerButtonRenderer.tsx`, and `src/client/react/features/character/PowerButtonValidationModal.tsx`.

## 0. This file Update Instructions

- **PowerButtonSystem.md Updates:** All updates to this file MUST be ADDITIVE and NON-DESTRUCTIVE.

---

# Part I — The Five MS5 Attributes (Detailed)

This section defines each MS5 attribute with **name, abbreviation, emoji, and mechanical domain**. It is the single source of truth for parsing and button resolution. For full rules and play use, see [MS5Turbo.md](../Rules/MS5Turbo.md); this SoT is the **technical** definition for buttons and conversion.

## Canonical attribute table

| Attribute | Abbrev | Emoji | Domain (short) |
|-----------|--------|-------|----------------|
| Magic | Mag | ✨ | Energy, psionics, supernatural; saves/resistances; arcane power; spellcasting; channeling Powers⚡; magical items. |
| Might | Mgt | 💪 | Melee Atk⚔️ and Dmg💥; block Def; armor; shields; physical strength; lifting. |
| Mind | Mnd | 👁️ | Shot weapons Atk⚔️ and Dmg💥; logic; will; knowledge; awareness (mental); insight, deception, intimidation, persuasion. |
| Motion | Mot | 🏃 | Nish🚩; dodge; hurled weapons Atk⚔️ and Dmg💥; speed; agility; initiative; movement; awareness (physical); athletics, sneaking, acrobatics. |
| Moxie | Mox | 🫀 | Stamina; grit; Vitality governor; death checks. |

## Per-attribute summary

- **Magic✨ (Mag)** — Governs energy, psionics, and the supernatural. Used for saves/resistances, arcane power, spellcasting, channeling Powers⚡, and using magical items. The primary attribute for "spell-like" and resistance rolls in power descriptions.

- **Might💪 (Mgt)** — Governs melee weapons Atk⚔️ and Dmg💥, block Def, armor, shields, physical strength, and lifting. Use for melee attacks, block, and strength-based effects.

- **Mind👁️ (Mnd)** — Governs shot weapons Atk⚔️ and Dmg💥, logic, will, knowledge, and awareness (mental). Also governs insight, deception, intimidation, and persuasion. Use for ranged (shot) attacks and mental/social rolls.

- **Motion🏃 (Mot)** — Governs Nish🚩, dodge, hurled weapons Atk⚔️ and Dmg💥, speed, agility, initiative, movement, and awareness (physical). Covers athletics, sneaking, and acrobatics. Use for dodge, initiative, and agility-based effects.

- **Moxie🫀 (Mox)** — Governs stamina, grit, the Vitality governor, and death checks. Use for vitality-related or stamina-based rolls in power text.

## Stat reference: 🧥 (Armor/AR)

**🧥** is a **stat reference** (Armor rating) usable in button expressions alongside the five attributes above. It resolves to the character's current Armor Rating: the worn armor's AR at level, or F-tier at level if no armor is worn. See [CombatLogicCodified.md](CombatLogicCodified.md) §2.E for the full definition, fallback, and edge cases. Examples: `[AR(🧥)]`, `[AR(🧥*1.5)]`, `[Dmg(🧥/2)]`.

---

# Part II — Power Button Syntax and Parsing

## II.1 Syntax specifications

Buttons are identified by **square brackets `[]`**. There are three functional categories:

| Category | Syntax | Example | Description |
|----------|--------|---------|-------------|
| Standard Roll | `[Type(Source)]` | `[Atk(✨)]` | Triggers Morph Drawer with specific Rating/Type. |
| Dual Standard Roll | `[Type1/Type2(Source1)/(Source2)]` | `[Atk/Dmg(👁️*2)/(👁️*3)]` | Triggers Morph Drawer as a dual-rating synthetic item using both resolved ratings. |
| RPG Die | `[NdS+B]` or `[dS+B]` | `[2d8+5]`, `[d4]`, `[d3+1]` | Pure dice roll, no Tier math. N optional (default 1); `d4` and `1d4` are identical. |
| Calculation | `[=(Expr)]` | `[=(✨/3)]` | Non-rolling; displays calculated value only. |

- **Standard Roll:** The content inside the brackets specifies a roll type (e.g. Atk, Dmg, Dod) and a rating source (attribute emoji, expression, or number). When the button is clicked, the Morph Drawer opens with that type and resolved rating.
- **Dual Standard Roll:** Supported dual labels are `Atk/Dmg`, `Dod/AR`, and `Blk/AR`. The first and second expressions are evaluated independently, then the click opens the Morph Drawer as a synthetic **weapon**, **armor**, or **shield** respectively so the existing dual-rating drawer UI is reused without changing stored character data.
- **RPG Die:** Pattern `N` dice of `S` sides plus optional modifier `B`. The number of dice `N` is optional; when omitted, 1 die is implied. So `d4`, `d8`, `d3+1` are valid; `d4` and `1d4` are identical, and `1d8` and `d8` are identical. Triggers a dice roll without Tier math (e.g. damage dice, luck rolls).
- **Calculation:** Prefix `=` followed by an expression. Resolves to a static string (e.g. "+6") for display only; no click handler and no Morph Drawer.

## II.2 Supported types

- **Combat:** Atk, Dmg, Dod (Dodge) 🤸, Blk (Block) 🧱, AR (Armor) 🧥. Legacy "Def" in power text maps to **Dod** (Dodge) in button syntax.
- **Skills:** Any valid Skill Label (e.g. Awareness, Stealth, Pit Trap). A button's label (Type) can be multiple words and may include punctuation such as `&` where it matches the skill name. Example: `[Motion & Skills(🏃*1.3)]` is a skill roll for the skill named "Motion & Skills" at the given rating. Resolves to the character's tier/rating for that skill.
- **Contested:** Syntax `Type^Atr` indicates a roll versus the target's attribute. Example: `[Trap(✨)]^👁️` — Trap roll (Magic source) contested by target's Mind👁️.

Gear and Artifact descriptions (Gear and Artifacts sheet tabs) use the same button syntax and validation as Power descriptions for consistency. The same parser and renderer apply to all three (Power, Gear, Artifact). In the Ability Table View, the Description column for Powers, Gear, and Artifacts displays that syntax as **read-only badges** (same styling as Roll Log, no click or hover).

## II.3 Rating sources and expression math

- **Attribute emojis:** ✨ 💪 👁️ 🏃 🫀 refer to the **current character rating** (tier score at level) for that attribute. These are the primary sources for scaling power text.
- **Stat reference 🧥:** 🧥 refers to the character's current Armor Rating (AR). It may be used in expressions such as `[AR(🧥)]`, `[AR(💪*1.2)]`, `[AR(🧥*1.5)]`, or `[Dmg(🧥/2)]`. AR (Armor) is a supported roll type; expressions may combine 🧥 with the five attribute emojis and math.
- **Temporary override:** The value used for a button is the **expression result** for that click only; it does not change the character's stored stats. The Morph Drawer receives that value as the roll rating and does not mutate base state.
- **Flat numbers in brackets:** e.g. `[Atk(12)]` — the value 12 is used as the rating source for that button. Plain text "Atk(12)" with **no** surrounding `[]` is **not** a button; it is player-facing narrative only.
- **Expressions:** Supported operators: `+`, `-`, `*`, `/`. Example: `[Dod(🏃*.67)]` uses 67% of the character's Motion rating for Dodge. Expression is evaluated using character ratings for any attribute emojis present. Decimal multipliers may be written with a leading dot (e.g. `.33`, `.67`) and are evaluated correctly.
- **Calculation buttons:** `[=(Expr)]` resolves to a static display string (e.g. "+6") and has **no** `onClick` handler; they do not open the Morph Drawer.

**Content convention (sheet data):** For Power, Gear, and Artifact Description content in sheet data, prefer modifier notation using only **+N**, **-N**, **+Nd**, **-Nd** (N integer, typically 1–5; rare 6 for very large; d = die-step) for attributes and stats (✨💪👁️🏃🫀, Wounds, Block, AR). Movement Rate (MR, 👣) modifiers are exempt and may use other notation (e.g. MR(12), MR(½)).

## II.4 Editor affordances

The **Power Advancement** modal (Edit tab) and the **Power Hub Custom** tab both provide a Description (tactical) field with quick-insert controls to the right of the label: five attribute emoji buttons (✨ 💪 👁️ 🏃 🫀) and a dropdown for roll types (Atk, Dmg, Dod, Blk, AR). Choosing an emoji or type inserts that token at the cursor in the Description textarea only; if the field is not focused, the token is inserted at the end. Implementation: the roll-type dropdown is styled (z-index) to render above modal/overlay stacking contexts so it remains visible when used inside Power Advancement Dialog or Power Hub overlay.

---

# Part III — Attribute and Legacy Migration

When updating legacy power text (e.g. from Content `description`, `notes`, or `rules` that use old attribute names and no bracket buttons), apply the following mapping:

| Old attribute / term | New MS5 attribute / button reference |
|---------------------|--------------------------------------|
| Str (Strength) | Might💪 (Mgt) |
| Awa (Awareness) | Mind👁️ (Mnd) |
| Cha (Charisma) | Mind👁️ (Mnd) |
| Def (Defense) | Dod (Dodge) — use Motion🏃 for Dodge in button source |
| Dex (Dexterity) / Agi (Agility) | Motion🏃 (Mot) |
| Other physical | Might💪 or Motion🏃 as appropriate by context |

Legacy **Content** for powers may have `description`, `notes`, and `rules` with these old terms and no bracket syntax. The **AI conversion contract** (Part V.2) uses this mapping when generating new descriptions from existing data.

---

# Part IV — Interaction and Execution Logic

## IV.1 Two-step activation

**Primary click (the card):**

- Deduct Action cost (A/M/P) from the HUD and 1 Use (X-Time) for the power.
- Post the Power name, duration, and the **Parsed Description** to the Roll Log. (Parsed Description = description with buttons recognized; rendering may show inline buttons on the client.)
- Do **not** open the Morph Drawer on card click.

**Secondary click (the button):**

- Clicking a **Button** in the Game Sheet (power card body or Row 3) OR in the Roll Log opens the **Morph Drawer** for **Standard Roll** buttons (e.g. `[Atk(✨)]`, `[Dmg(💪)]`).
- When the caller knows the originating feature name (e.g. Power, Gear, or Artifact name in Game Sheet or Roll Log), the inline button click payload prepends that parent name to the synthetic `rollName`. Example: clicking `Atk(👁️*2)` inside **Assassinate** yields `Assassinate Atk(👁️*2)` in the Morph Drawer title and the final roll result.
- Clicking a **Dual Standard Roll** button (e.g. `[Atk/Dmg(👁️*2)/(👁️*3)]`, `[Dod/AR(🏃)/(🧥)]`, `[Blk/AR(💪*1.5)/(🧥)]`) opens the Morph Drawer as a synthetic dual-rating typed item:
  - `Atk/Dmg` -> weapon
  - `Dod/AR` -> armor
  - `Blk/AR` -> shield / block mode context
- **RPG Die buttons** (`[NdS+B]` / `[dS+B]`, e.g. `[2d8+5]`, `[d6]`): Use the **same code path** as the Nav Rail "🎲 Roll [text box]" inputs. Clicking an RPG Die button **posts the roll directly to the Roll Log** and **does not** open the Morph Drawer. Implementation: shared `emitRpgDiceRoll` in `src/client/utils/rpgDiceRoll.ts`.
- **Logic gate:** The roll context must pass `isPowerRoll: true` so the drawer knows the roll is from a power.
- **Cost suppression:** When `isPowerRoll` is true, the Morph Drawer must **not** deduct further Actions or Uses; cost was already paid on card click. The Morph Drawer for power in-line buttons supports the same **# Rolls**, **Dif**, and **Monster List** behavior as other abilities; only action/use cost is suppressed (see [MorphDrawer.md](../UI/MorphDrawer.md) Row 4). The **selected** roll type in the drawer (dropdown) is used for the roll and for monster targeting; the button's initial type is only the default.

## IV.2 Rendering rules

- Buttons must render as **inline-block** elements so they sit inline with surrounding text but can be styled and clicked independently.
- Styling must match the Nord Theme **StatusBadge** or **SkillBadge** components. See [NordPalette.md](../UI/NordPalette.md) and [AbilityTabView.md](../UI/AbilityTabView.md) for visual contract. **Interactive** inline buttons (when `onRollButtonClick` is provided and not read-only) use accent styling and pointer cursor; **non-interactive** (read-only) buttons and calculation spans use muted styling and default cursor.
- **Dual Standard Roll labels:** The visible badge text for a dual button includes both source expressions, e.g. `Atk/Dmg(👁️*2)/(👁️*3)` or `Dod/AR(🏃)/(🧥)`, not just the bare type pair.
- **Calculation buttons** `[=(Expr)]`: resolve to a static string (e.g. "+6"); **no** `onClick` handler.

## IV.3 Log interactivity (Roll Log and Party Log)

- Power entries in the Roll Log and Party Log display the **parsed description with inline buttons** (same as on the power card). Implementation uses **`renderDescription`** (client: `src/client/utils/powerButtonRenderer.tsx`) with the segment parser from **`lib/powerButtonValidator.ts`** (`parsePowerButtonSegments`).
- When a Roll Log or Party Log feature entry has a known parent feature name, inline **Standard Roll** and **Dual Standard Roll** buttons must preserve that feature name in the emitted click payload so subsequent Morph Drawer titles and `roll_result` entries remain feature-scoped instead of showing only the bare button label.
- **Roll Log UX:** In Roll Log (and Party Log), the power name, duration, and description (and thus inline buttons) use the **same font size as a typical roll** (roll log content, 0.9em). The power description uses black text (`--text-darkest`), and inline buttons match the description font size and color with tight padding so they closely hug the text (highlight-with-border style). The description and duration **flow to the right edge** of the Roll Log with **no reserved column** below the Copy button; Copy appears only on the first row beside the power name. The stats line for feature entries (Power, Gear, Artifact, Chaos Gem) uses the format **🔄[Uses] ⏳[Duration]** when uses are tracked.
- Stored roll entry shape for Power: `rollType: 'Power'`, `rollName` (name + duration + description, backward compatible), and optionally **`powerName`**, **`powerDescription`**, **`powerDuration`** for rich rendering with buttons.
- **Copy Power to My Log:** A "Copy" control on Power entries adds the same Power (name, duration, description with buttons) to the current user's character Roll Log with **zero** cost (no Actions, no Uses). Socket event: `copy_power_to_roll_log`; payload: `charId` (target), `powerName`, `powerDescription`, `powerDuration`. Once copied, the user can click buttons in that entry to trigger Morph Drawer rolls using their own stats.
- **Synthetic dual prep reconstruction:** When a Roll Log batch roll originated from a dual inline button, its `rollKey` may be synthetic (`inline-dual:power-btn-dual:...`, with support for raw `power-btn-dual:...` transition cases). Prep actions reconstruct the same temporary weapon/armor/shield item client-side by parsing the stored dual key, re-evaluating `sourcePart1` and `sourcePart2` against the current character rating map, and then opening the Morph Drawer with that synthetic typed item.

## IV.4 Cross-references

- [MorphDrawer.md](../UI/MorphDrawer.md): Drawer behavior, roll payloads, and 3-line log; **isPowerRoll** and cost suppression.
- [ActionCostCodified.md](ActionCostCodified.md): A/M/P spending and power action cost.
- [AbilityTabView.md](../UI/AbilityTabView.md) §4 (Powers): Card click vs button click behavior and Row 3 description display.
- [PartyLog.md](../UI/PartyLog.md): Power entries in Party Log show inline buttons and Copy Power.

---

# Part V — Implementation Examples and AI Conversion Contract

## V.1 Example button strings

- `[Atk(✨)][Dmg(✨*1.5)]` — Standard power scaling: Attack and Damage from Magic, Damage at 1.5× rating.
- `[Atk(✨)][Dmg(✨)], [Dod(✨/2)][AR(✨/2)] [Vit(✨)]` — Summon stats scaling: Atk/Dmg and Dodge/AR/Vit from Magic at full or half.
- `[AR(🧥)]`, `[AR(🧥*1.5)]`, `[Dmg(🧥/2)]` — Armor stat reference: roll type AR or Dmg using current 🧥 (worn armor AR or F-tier fallback); expressions are temporary override for that button only.
- `[Atk/Dmg(👁️*2)/(👁️*3)]` — Dual inline button: one click opens a weapon-style Morph Drawer with Atk = Mind x2 and Dmg = Mind x3.
- `[Dod/AR(🏃)/(🧥)]` — Dual inline button: one click opens an armor-style Morph Drawer with Dod = Motion and AR = current armor rating.
- `[Blk/AR(💪*1.5)/(🧥)]` — Dual inline button: one click opens a shield/block-style Morph Drawer with Block = Might x1.5 and AR = current armor rating.
- `+[=(✨/3)] bonus to melee Atk/Dmg` — Static bonus display: one-third of Magic rating shown as a fixed number (e.g. "+6"), no roll on click.
- `[Motion & Skills(🏃*1.3)]` — Multi-word skill label: skill roll for "Motion & Skills" at 1.3× Motion rating.
- `[d4]`, `[d3+1]` — RPG die shorthand: N optional (same as `[1d4]`, `[1d3+1]`).

## V.2 AI conversion contract (for Cursor AI)

This SoT is the **authoritative reference** for:

1. **Identifying** powers with "old" descriptions: Content where `type === 'power'` and `description` (and optionally `notes`, `rules`) use legacy attribute/ability names and **no** bracket button syntax.
2. **Converting** those descriptions into the **new** format: preserve Name, Duration, Uses, Action, and other metadata; rewrite description text to use **buttons** and **MS5 attribute references** (✨💪👁️🏃🫀 and terms from Part I and Part III).

**Conversion rules:**

- Use **Name, Description, Notes, and Rules** (and any other Content fields for powers) to infer intent. For example, "Str-based attack" or "Strength check" → `[Atk(💪)]` or `[Dmg(💪)]` as appropriate; "Dex save" → `[Dod(🏃)]` or a Save type with Motion source.
- Apply the legacy migration table (Part III) for every old term encountered.
- Output description text that conforms to the syntax in Part II (Standard Roll, RPG Die, Calculation) so that future parsing and rendering can recognize and render buttons correctly.

This document **does not** implement the conversion (no scripts or DB updates here). It defines the contract so a future Cursor AI task can implement a migration or tool that reads the Powers DB and updates descriptions per this SoT.

---

# Part VI — Validation (Dev Sheet)

The Dev tab **Analyze** and **Commit** flows validate Power rows against the button syntax in Part II. Description, Notes, and Rules are checked by a verifying parser before any row is considered valid.

- **When it runs:** For each Power row, after the base sheet schema passes, button syntax is validated. Invalid button syntax (e.g. unclosed brackets, invalid Type such as legacy "Def", malformed expressions, or content that does not match Standard Roll, RPG Die, or Calculation) produces validation errors.
- **Effect:** Rows with button errors get Sync Status ❌ and a Sync Message naming the field and error. "Commit to DB" remains disabled until analysis reports zero errors, so corrupt button syntax cannot be written to MongoDB.
- **Implementation:** `lib/powerButtonValidator.ts` exports `validatePowerButtonSyntax` (single text) and `validatePowerDescriptionButtons` (Description, Notes, Rules). `PowerSheetSchema` in `lib/schemas.ts` uses a Zod `superRefine` that calls `validatePowerDescriptionButtons` and adds one issue per error, so both Analyze and Commit use the same validation.

The same validation (same `validatePowerDescriptionButtons` contract) is used in (1) **Power Advancement modal** for "Save Draft" and "Upgrade", and (2) **Power Hub Custom** tab for "Save". In both places, the action is blocked when validation fails, and a modal displays the same field/message format as the Dev sheet Sync Message (e.g. "Description: Unclosed bracket \"[\""). The reusable UI is `PowerButtonValidationModal` in `src/client/react/features/character/PowerButtonValidationModal.tsx`.
