# MS5 UI/Layout Contract: HUD Vitality Section

**Status:** Active  
**Last Updated:** February 2026  
**Purpose:** Define the look (and later functionality) of the Vitality (Vit) portion of the Character HUD. This document is the authoritative source of truth for the HUD Vitality section layout, palette, and data contract.

---

## 0. This file Update Instructions

- **HUDVitality.md Updates:** All updates to this file MUST be ADDITIVE and NON-DESTRUCTIVE.

---

## 1. Architecture Overview

The Vitality HUD section uses a **horizontal Flexbox** (flex row) with `h-full` to prevent vertical expansion. All labels and values reside within the existing height of the section so the HUD maintains strict vertical constraints.

- **Container:** Horizontal flex container, `items-center`, `gap-2`, `px-2`, `h-full`.
- **Layout:** Single row: title (Vit) → globe → wounds group (stacked vertically) → Bns (label + input) → Max/Now values (labels above boxes).

### 1.1 Concentration (PAG duration)

The HUD includes a **Concentration** display between Section 1 (Actions) and Section 2 (Vitality). Section 1 (Actions) displays an "ACTIONS" label above the three action icons (⚔️👣✋), with the same style as the Concentration label. Concentration shows the name of the currently concentrated Power/Gear/Artifact (if any). State lives in CharacterContext (`concentration`, `setConcentration`); no new API or socket payload. Concentration is cleared on **New Day** and when **Combat (encounter)** is toggled.

---

## 2. Palette

Colors follow the Nord Palette and project standards. Implementation MUST use CSS variables (e.g. `var(--nord11)`) or Tailwind semantic/custom Nord utilities per [CodeInstructions.md](../../../../Prompts/CodeInstructions.md) and [NordPalette.md](../UI/NordPalette.md); hard-coding hex in TSX is forbidden.

| Purpose | Nord ID | Hex | Usage |
| :------ | :------ | :-- | :---- |
| Globe liquid | nord11 | #BF616A | Red liquid fill (Aurora / destructive); `var(--nord11)` or Tailwind semantic |
| Value wells / backgrounds | nord1 | #3B4252 | Elevated surface (legacy); Vit section uses nord2 for less-dark wells |
| Value wells (Vit section) | nord2 | #434C5E | Previous; Vit section now uses nord8 for mid-to-light blue |
| Value wells (Vit section) | nord8 | #88C0D0 | Vit inputs and readonly boxes (wound, Max, Bns); mid-to-light blue; `bg-nord8` |
| Now box background | background | #FFFFFF | Now readonly box only; white for emphasis; `bg-background` |
| Labels | nord4 | #D8DEE9 | Legacy; Vit section uses foreground for visibility on light HUD bar |
| Labels (Vit section) | nord6 | #ECEFF4 | Previous; Vit section now uses `text-foreground` for visibility on light HUD bar |
| Labels (Vit section) | foreground | #2E3440 | Section title "Vit", 1st, 2nd, 3rd, Bns, Max, Now; `text-foreground` on light bar |
| Values | nord6 | #ECEFF4 | Percentage overlay, wound values, primary value text |
| Borders | nord3 | #4C566A | Globe border, wound group dividers |
| Current Vit at or above half | nord14 | #A3BE8C | Success (green); Current Vit / Max Vit >= 0.5 |
| Current Vit below half, above zero | nord12 | #D08770 | Warm accent (orange) |
| Current Vit zero or below | nord11 | #BF616A | Destructive (red) |
| Wound box when positive | nord11 | #BF616A | Destructive (red); when value is 0 use nord6 |

---

## 3. Layout (Pseudo-Code)

Reference implementation structure for [CharacterHud.tsx](../../../src/client/react/features/character/CharacterHud.tsx). Implementers MUST use `cn()` from `@/lib/utils` for class merging and semantic/Tailwind color names per [CodeInstructions.md](../../../../Prompts/CodeInstructions.md) and [NordPalette.md](../UI/NordPalette.md); Nord IDs and hex in this section are for SoT reference only.

```tsx
/* SECTION 3: Vitality (Redesigned) */
<div className="hud-section hud-vitality flex items-center gap-2 px-2 h-full">

    {/* TITLE: Vit */}
    <span className="text-xs font-bold text-foreground uppercase tracking-tighter">Vit</span>

    {/* COMPONENT: Vitality % Globe — diameter w-14 h-14 (~40% larger); rest of UI/UX unchanged */}
    <div className="relative w-14 h-14 rounded-full border-2 border-nord3 bg-nord0 overflow-hidden shadow-inner flex items-center justify-center flex-shrink-0">
        {/* Liquid Fill */}
        <div
            className="absolute bottom-0 w-full transition-all duration-500 ease-in-out"
            style={{
                height: `${(currentVit / maxVit) * 100}%`,
                backgroundColor: 'var(--nord11)',
                opacity: 0.8
            }}
        />
        {/* % Label Overlay */}
        <span className="relative text-[10px] font-black text-nord6 drop-shadow-md">
            {Math.round((currentVit / maxVit) * 100)}%
        </span>
    </div>

    {/* GROUP: Wounds (editable; stacked vertically; compact height to fit HUD; red when positive, normal when 0) */}
    <div className="flex flex-col gap-px border-l border-r border-nord3 px-1.5">
        <div className="flex items-center gap-1">
            <label className="text-[8px] text-foreground leading-none w-5">1st</label>
            <input type="number" min={0} ... className={cn('bg-nord8 px-1 py-px rounded text-xs font-mono w-9 text-center leading-tight', wounds1 > 0 ? 'text-nord11' : 'text-nord6')} value={wounds1} onChange={...} />
        </div>
        <div className="flex items-center gap-1">
            <label className="text-[8px] text-foreground leading-none w-5">2nd</label>
            <input type="number" min={0} ... className={cn('bg-nord8 px-1 py-px rounded text-xs font-mono w-9 text-center leading-tight', wounds2 > 0 ? 'text-nord11' : 'text-nord6')} value={wounds2} onChange={...} />
        </div>
        <div className="flex items-center gap-1">
            <label className="text-[8px] text-foreground leading-none w-5">3rd</label>
            <input type="number" min={0} ... className={cn('bg-nord8 px-1 py-px rounded text-xs font-mono w-9 text-center leading-tight', wounds3 > 0 ? 'text-nord11' : 'text-nord6')} value={wounds3} onChange={...} />
        </div>
    </div>

    {/* GROUP: Bns (editable; left of Max/Now; 3-digit width; for now always visible) */}
    <div className="flex flex-col items-center gap-0.5">
        <label className="text-[8px] text-foreground leading-none">Bns</label>
        <input type="number" ... className="bg-nord8 px-1 py-0.5 rounded text-sm text-nord6 font-mono w-9 text-center" value={bns} onChange={...} />
    </div>

    {/* GROUP: Max / Now (readonly; labels above boxes; 3-digit width; Now box white) */}
    <div className="flex items-center gap-1 font-bold">
        <div className="flex flex-col items-center gap-0.5">
            <span className="text-[8px] text-foreground leading-none">Max</span>
            <div className="bg-nord8 px-1 py-1 rounded text-base text-nord6 w-9 text-center" aria-readonly>{maxVit}</div>
        </div>
        <span className="text-foreground text-lg self-end pb-1">/</span>
        <div className="flex flex-col items-center gap-0.5">
            <span className="text-[8px] text-foreground leading-none">Now</span>
            <div className={cn('bg-background px-1 py-1 rounded text-base w-9 text-center border', currentVitColorClass)} aria-readonly>{currentVit}</div>
        </div>
    </div>

</div>
```

---

## 4. Layout Reasoning & Verification

- **Vertical preservation:** The wounds group is a **vertical stack** (flex-col) with minimal gap (`gap-px`) and compact row styling so 1st, 2nd, 3rd (label + input per row) fit within HUD height (~72px) and do not extend below the HUD. Wound inputs use `text-xs`, `py-px`, `leading-tight` to reduce vertical height. The section remains a single horizontal row; wounds use vertical room to save horizontal space.
- **Horizontal compaction:** Container uses `gap-2`; wound inputs, Max/Now boxes, and Bns use narrow width (`w-9`) for 3-digit values and reduced padding (`px-1`) so the Vit area uses less horizontal space.
- **Label visibility:** All Vit labels (Vit, 1st, 2nd, 3rd, Bns, Max, Now) use `text-foreground` for visibility on the light HUD bar (`.cs-hud-container` uses a light background); darker text improves contrast.
- **Value wells:** Wound inputs, Max box, and Bns input use `bg-nord8` (mid-to-light blue, Nord Frost). The **Now** readonly box uses `bg-background` (white) for emphasis.
- **Bns position:** Bns (label + input) is placed to the **left** of Max/Now so the order is: … → wounds group → Bns → Max/Now.
- **Max / Now labels:** Small labels "Max" and "Now" appear above the two readonly value boxes; "/" remains between them.
- **Globe diameter:** The Vitality % globe uses `w-14 h-14` (~40% larger than the original w-10 h-10) so it fits within the HUD vertical space (72px); liquid fill, % overlay, border, and shadow are unchanged.
- **Modern visuals:** `shadow-inner` on the globe and `drop-shadow-md` on the percentage text provide depth without external CSS files. The Vitality % globe UI/UX (other than diameter) is unchanged.
- **Logic mapping:**
  - Max Vit is the lead value (first numeric box).
  - "/" acts as both separator and label for the current state.
  - Current Vit color is green/orange/red by ratio (see Section 5A).
- **Bns:** The Bns control uses the same compact layout (label above, narrow input). For now it is always visible; it may be conditionally hidden when zero in a future update.

---

## 5. Data and State Contract

The Vitality section displays the following; no new APIs are required.

| Field | Source | Description |
| :---- | :----- | :----------- |
| currentVit | Derived: Max Vit - 1st - 2nd - 3rd (readonly) | Current vitality; always ≤ Max Vit |
| maxVit | Derived: Moxie Rtg + Bns (readonly) | Maximum vitality |
| wounds1 | character.wounds1 | First-degree wound count (editable; 0 or positive integers only) |
| wounds2 | character.wounds2 | Second-degree wound count (editable; 0 or positive integers only) |
| wounds3 | character.wounds3 | Third-degree wound count (editable; 0 or positive integers only) |
| bns (Bns) | character.vitBonus | Bonus to Max Vit (editable; whole number, positive/negative/zero). Used in Max Vit formula. |

**Persistence:** Editable fields (wounds1–3, vitBonus) are persisted via `request_character_update`; the client may also receive server-push updates via `vit_updated` (e.g. when a GM applies wounds). Editable fields sync to the server **on blur** (or when the user presses Enter); an empty field on blur is treated as **0**.

**Implementation:** [CharacterHud.tsx](../../../src/client/react/features/character/CharacterHud.tsx) derives `vitState` (current, max, wounds1–3, bns) from character and listens to `vit_updated`. Max Vit and Current Vit are computed per Section 5A. Editable fields and constraints are defined in Section 5B.

**Session presence and Party Log:** The server computes the same Max Vit and Current Vit (Moxie Rtg + Bns; Current = Max - wounds) when building session presence and when character vit-related fields are updated. Party Log Row 3 (Vitality) therefore displays the same values as the character HUD; see [PartyLog.md](../UI/PartyLog.md).

---

## 5A. Computation and Formulas

- **Moxie Rating:** The character's Moxie attribute rating (Vitality governor per MS5Turbo). Resolve from `character.attributes.moxie`; implementation may fall back to `Vit` or `vitality` for legacy. Formula: `calculateTierScore(moxie.tier, level)` (Training has been removed).
- **Max Vit:** `Max Vit = Moxie Rtg + Bns`. Bns is a whole number (positive or negative). Max Vit is **readonly**; computed by code only.
- **Current Vit:** `Current Vit = Max Vit - 1st - 2nd - 3rd`. Always a number less than or equal to Max Vit. **Readonly**; computed by code only.
- **Wound application:** When wounds are applied to the character (e.g. from combat), they **accumulate in the 1st-degree box only**. The player may then manually redistribute by editing 1st, 2nd, 3rd (see Section 5B). **Roll Log "Apply Wnds":** When an Armor (AR) batch roll shows "Total Wounds to PC = +N", the Roll Log displays an in-line **Apply Wnds** button. Clicking it adds N to the character’s 1st-degree wounds and persists via `request_character_update` (same as manual HUD wound edits).

### Current Vit color by ratio

- **Green:** Current Vit is **greater than or equal to half** of Max Vit (i.e. Current Vit / Max Vit >= 0.5, with safe handling for Max Vit 0). Use nord14 / success.
- **Orange:** Current Vit is **below half** of Max Vit but **greater than zero**. Use nord12 / warm accent.
- **Red:** Current Vit is **zero or less**. Use nord11 / destructive.

Implementation MUST use CSS variables or Tailwind semantic names per [NordPalette.md](../UI/NordPalette.md); no hex in TSX.

### Vitality globe when Current Vit &lt; 0

- When **Current Vit &lt; 0**, the Vitality % globe is displayed as **empty** (0% liquid, 0% label). No other globe UI/UX changes (border, overlay styling, shadow, size unchanged).

### Wound box visual state

The **1st, 2nd, 3rd** value boxes:

- **Normal color** (nord6 / default value styling) when the value is **0**.
- **Red** (nord11 / destructive) when the value is **positive**.

---

## 5B. Editability and Input Constraints

**Editable (player can edit):**

- **Bns:** Bonus to Max Vit. Allowed values: any **whole number** (positive, negative, or zero). For now the Bns label and text box are **always shown**; later they may be hidden when Bns is zero.
- **1st, 2nd, 3rd:** Degree wound counts. Allowed values: **0 or positive integers only**. Negative integers are invalid and must be rejected or clamped.

**Readonly (code-managed only, user must not edit):**

- **Max Vit** (computed from Moxie Rtg + Bns).
- **Current Vit** (computed from Max Vit - 1st - 2nd - 3rd).

**Input constraints:** All editable boxes MUST enforce the above value rules (Bns: whole number; 1st/2nd/3rd: non-negative integers). Validation (e.g. Zod) and UI (e.g. input type, onBlur clamp) are implementation details; the SoT states the rules.

---

## 6. Cross-References

### Implementation

- **`src/client/react/features/character/CharacterHud.tsx`** – Character HUD; Vitality section implementation.

### Standards

- **`Prompts/CodeInstructions.md`** – Coding standards, Nord Palette, React-first, no hex in TSX.
- **`turbo/Prompts/SoT/UI/NordPalette.md`** – Nord colors, semantic mapping, implementation contract.
- **`Prompts/SoT/Core/TechStack.md`** – Stack and Tailwind usage.

### Related HUD and Mechanics

- **`turbo/Prompts/SoT/Core/MoveButton.md`** – HUD Move button contract (same HUD).
- **`turbo/Prompts/SoT/Core/CombatLogicCodified.md`** – Wounds and Vitality mechanics.
- **`turbo/Prompts/SoT/UI/MorphDrawer.md`** – Tier score (calculateTierScore). The HUD uses Moxie (Vitality governor) for Max Vit.
- **`turbo/Prompts/SoT/UI/PartyLog.md`** – Vitality display in Party Log (different context).

---

## 7. Authority

This document is the single source of truth for the HUD Vitality section. Any code that contradicts this specification is incorrect and must be updated to align with it.

---
