# MS5 Core Rules & Loot Engine Specification (MS5TurboRules.md)

**Status:** Active  
**Last Updated:** May 2026  
**Purpose:** This document is the consolidated Master Source of Truth (SoT) for the gameplay rules, die mechanics, character creation/advancement guides, and randomized loot engines of MetaScape Turbo (MS5). It merges `MS5Turbo.md` and `LootRules.md` into a single DRY, AI-readable standard.

---

## Part I — System Rules & Mechanics

### 1. Core Philosophy & Guiding Principles
*   **Cinematic:** Rolls should create dramatic highs and lows worth remembering.
*   **Fast:** Creation, advancement, and play stay quick; simplify when in doubt.
*   **Open:** Any concept works with GM approval; avoid rigid class or build restrictions.
*   **Inclusive:** Anyone can attempt weapons, armor, or skills; Powers⚡ must still be learned.
*   **Tactical:** Choices such as Block🧱 vs Dodge🏃 should matter round to round.
*   **GM-Light:** GM sets difficulty and situational modifiers; players do all rolling except for GM Intensity die.
*   **Unified:** Attributes and Tiers drive skills, combat, gear, and advancement.
*   **Clean:** Emojis and labels stay easy to read. Track as little as possible beyond Vit❤️, Luck🍀, and explicit usage check boxes.
*   **AI-Native Design:** Structures are optimized for AI generation, validation, and context loading.

---

### 2. Emoji & Symbol Language
Emojis are a core part of the rules and UI contract.
*   Emojis come **before** keywords in headings/titles.
*   Emojis come **after** keywords in running text/labels.
*   Attribute emojis appear after skill names to show the governing attribute (e.g. `Stealth🏃`).
*   Monster stat lines prefix emojis to values: `🚩14, 👣10, ⚔️18/12, 🛡️16/2, ❤️12`.
*   **Roll Modifiers:** **📉** = Disadvantage (roll one fewer time); **📈** = Advantage (roll one more time); **🔰** = Unskilled (never learned with AP; 1-Turbo).
*   **Context Emojis:** `🧥` = Armor/AR, `👣` = Move/MR, `🚩` = Nish, `🎲` = Rating, `🔮` = Result, `➡` = transition, `➡️` = comparison/final total, `⚔️` = Attack, `✋` = Partial action, `🛡️` = general Defense (Dod/AR or Blk/AR).

#### Term-to-Emoji Index:
| Term | Emoji | Emoji | Term |
| :--- | :---: | :---: | :--- |
| Action / GP | 🔷 / 🧰 | 🔄 | Usage |
| Affliction / Critical / Hazard | 💀 | ⏳ | Duration |
| AP (Advancement Point) | 🧩 | ⚡ | Power |
| ArfP / Artifact | 💫 | ✅ | Attribute |
| AR / Armor | 🧥 | ❤️ | Vitality |
| Art | 🎨 | ⭐ | Level |
| Block / Shield / Weapon & Shield | 🧱 | 🌟 | Tremendous |
| Camp Gear | 🏕️ | 🌀 | Chaos Gems |
| Clothing | 👕 | 🍀 | Luck |
| Combat / Dual Wield / Weapon | ⚔️ | 🍺 | Minor Item |
| Containers | 🧺 | 🔎 | GM |
| Days | 📅 | ✒️ | Writing |
| Damage | 💥 | 📜 | Notes |
| Duration | ⏳ | 🎨 | Art |
| Food & Drink | 🥖 | 🏃 | Motion |
| Greater Artifact | 🪬 | 👁️ | Mind |
| Junk | 🗑️ | 💪 | Might |
| Lesser Item | 🪄 | 💰 | Money |
| Magic / Resist / Save | ✨ | 👣 | Movement (MR) |
| Martial Arts | 🥋 | 🗡️ | Single Weapon |
| Medical | ⚕️ | 🥊 | Unarmed / Brawl |
| Moxie | 🫀 | 🎓 | Skill / Skill Set |

---

### 3. Core Die Mechanics & Die Notation
Dice notation follows standard TTRPG shorthand (e.g., `2d8+12` -> roll two d8, sum them, add 12).
*   MetaScape Turbo uses computer-generated roll curves.
*   **1-Turbo (Unskilled):** Roll the tier rating once.
*   **2H-Turbo (Skilled):** Roll the tier rating twice, keep highest.
*   **3H-Turbo (Advantage):** Roll the tier rating three times, keep highest.
*   **2L-Turbo (Disadvantage/Unskilled):** Roll twice, keep lowest.
*   **Tiers and Ratings:** Tier (S, A, B, C, D, F) determines the base score. Rating is the level-adjusted value used for rolls: `calculateTierScore(tier, level) = Base + (Multiplier * Level)` rounded (`Math.round`), min 1.

#### Tier Growth Table:
| Tier | Base Value | Multiplier (Level 1) | Level 1 Rating |
| :--- | :---: | :---: | :---: |
| **S** | 20 | +1.0 | **21** |
| **A** | 17 | +0.8 | **18** |
| **B** | 14 | +0.6 | **15** |
| **C** | 12 | +0.4 | **12** |
| **D** | 10 | +0.2 | **10** |
| **F** | 8 | +0.1 | **8** |

*   **Status/Proficiency Roll Combinations:**
    *   *Unskilled + Normal:* 1-Turbo
    *   *Unskilled + Advantage:* 2H-Turbo
    *   *Unskilled + Disadvantage:* 2L-Turbo
    *   *Skilled + Normal:* 2H-Turbo
    *   *Skilled + Advantage:* 3H-Turbo
    *   *Skilled + Disadvantage:* 1-Turbo
*   **Modifiers:** Modified by a single flat value (`+` or `-`) applied directly to the Rating before rolling. Clamped to minimum 1.
*   **Tremendous (T) & Critical (C):**
    *   *Tremendous (T):* Triggered by rolling a natural 20 on any d20. Grants beneficial narrative twists determined by the GM (dependent on GM Intensity Die value).
    *   *Critical (C):* Triggered by rolling a natural 1 on any d20. Grants detrimental narrative complications determined by the GM.
    *   *Note:* Critical and Tremendous flags do not override the numeric result; success or failure is still determined by the total vs. Difficulty.
*   **GM Intensity Die:** A single d20 rolled by the GM to resolve NPC-vs-NPC actions, snap narrative questions, or determine the strength/intensity of a player's Tremendous or Critical twist (higher rolls = greater intensity; 1 cancels the effect).

---

### 4. Character Creation & Leveling
*   **Traits:** Concept first. Define Player, Character, Race/Class, positive/negative traits, appearance, Adventuring Goal, and a visual Flair.
*   **Attributes:** Magic✨, Might💪, Mind👁️, Motion🏃, Moxie🫀. Assign starting Tiers (S, A, B, C, D, F).
*   **Skills:** Trained in 1 Skill Set. 
*   **Weapons & Armor:** Trained in 1 weapon and 1 armor. Brawl🥊 and Throw Object are auto-granted natural weapons (Unskilled 🔰). Natural armor is auto-granted.
*   **Powers:** Select 3 starting powers (recommended: 1 A-action, 1 P-action, 1 #-day).
*   **Stats:** Vitality (Vit❤️) matches Moxie score at level 1. Starting Luck is 3 (max 5). Save/Resist are Unskilled.
*   **Currency & Items:** 1g + 1d100s. Free basic gear, plus 1 random Minor🍺 magic item.
*   **Leveling Up:** Earn 1 Level and 1 AP per milestone. AP matches Level. Ratings scale automatically based on Level.
*   **AP Expenditures:** Learn 1 Power (1 AP), upgrade Power (1 AP), learn Weapon/Armor/Skill (1 AP), learn Skill Set (2 AP), convert 1 AP to 1 GP/ArfP (1 AP), increase Vit by +2 (1 AP), or Reshuffle attribute Tiers (1 AP).
*   **GP & ArfP:** GP buys Gear; ArfP buys Artifacts. Gain 2 GP/ArfP at level 1, and +1 at milestones 5, 10, 20, 40, 80... (doubling scale).

---

### 5. Ability Requirements & Uplifting
*   **Weapons, Armor, and Shields:** Any character can use any gear, but they are Unskilled (1-Turbo) unless they spend AP to learn it.
*   **Requirement Check:** When learned with AP, the character's Attribute Tier must meet the item's Might💪/Motion🏃/Mind👁️ requirement. If they do not meet it, they roll with **📉 Disadvantage** (Skilled + Disadvantage = 1-Turbo).
*   **Requirement Overrides:** When adding gear, spending **2 AP** instead of 1 AP permanently deletes the requirement constraint (no disadvantage applied). Unskilled gear can be learned for **0 AP** via the "Learn Unskilled" checkbox (saved with `🔰` prefix).
*   **Natural Items:** Natural weapons/armor have `isNatural` set to true. Natural weapon Damage Tier is always **one tier below** the governing attribute, minimum F-Tier (ignores combat styles).
*   **Uplifting Damage:** Weapon Damage Tiers are raised to match the character's governing attack attribute rating. This applies to Melee, Hurled, and Shot weapons under the Single Weapon, Two-Handed, Weapon & Shield, and Martial Arts styles. Uplifting is **disabled** for Multi-Attack and Dual Wield styles.

---

### 6. Combat & Actions
*   **AMP Action System:** Characters have three actions per round: Attack (⚔️A), Move (👣M), Partial (✋P), plus Free (F) actions.
*   **Combat Styles:**
    1.  *Single Weapon🗡️:* One one-handed weapon. Promotes accuracy, and enables damage uplift.
    2.  *Multi-Attack:* Multiple smaller attacks; sum of weapon damage dice must be ≤ attribute Tier. No damage uplift.
    3.  *Dual Wield⚔️:* Weapon in each hand. Block uses the best Block score. One attack per round default. No damage uplift.
    4.  *Two-Handed:* Heavy weapon held in both hands. Heavy damage.
    5.  *Weapon & Shield🛡️:* Weapon + shield. High block rating. MR reduced, off-hand locked.
    6.  *Martial Arts🥋:* Unarmed Brawl🥊 (punch, kick, grab). Brawl cannot Block unless a power allows. Damage is 1 tier below Might (min F).
*   **Combat Sequence:**
    1.  *Attack:* Choose target, roll to Hit (A-action; Atk rating 2H-Turbo vs Monster Defense) -> roll Dmg on success.
    2.  *Defense:* Roll Dodge (Motion) or Block (Might/Gear) against Monster Attack result.
    3.  *Resist:* Roll Magic or Moxie vs. magical/poison/area hazards.
    4.  *Wounds:* Fail to defend -> roll Armor (AR). Final Wounds = `Damage / AR result` (min 1 wound if hit, representing Fatigue). Once Wounds ≥ Vit, characters fall unconscious and begin Death checks.
    5.  *Death Checks (Moxie):* Roll vs. `Dif = 10 + (Wounds - Vit)`. Failure is death. Bleeding adds +1 wound/round.
    6.  *Unconscious Checks (Mind):* Roll vs. `Dif = 5 * (Wounds - Vit)`.
*   **Opportunity Attacks:** Free reaction (no action cost) triggered when a foe disengages on or after your Nish. Uses basic melee attack (no powers/item effects).
*   **Concentration:** On round 2+, automatically consumes the character's Partial (✋P) action to maintain.
*   **State Transitions:**
    *   *Combat Initiation (Nish Roll):* Instantly resets all three HUD actions (ON) and refreshes 1/round usage boxes. Sets state to Combat Encounter.
    *   *Encounter Transition:* Switching between Combat and Roleplay resets all three HUD actions and refreshes both 1/round and #/encounter usage boxes.

---

### 7. Hazards & Afflictions
*   **Afflictions:** Stunned (lose AM actions), Weakened (-2 rolls & MR -2), Immobilized (cannot move), Frozen, Paralyzed, Poisoned, Burning, Held.
*   **Resolution:** Afflictions have no fixed duration. The target rolls a Free save check against each active affliction on their Nish.
*   **Skin Contact:** Fatigue wounds do not trigger contact afflictions unless the weapon damage pierced the armor completely (i.e. AR failed to absorb all damage).

---

### 8. Luck & General GM Rules
*   **Luck:** Spend 1 Luck chit to reroll all dice in a roll (keep best). Cannot reroll if a Critical (1) occurred. Cannot double-reroll. Spent to trigger specific Luck powers.
*   **Ranged into Melee:** Missing a ranged attack on a target engaged in melee has a 1-3 (on d6) chance to auto-hit an ally (roll Dmg vs ally's AR).
*   **Random Direction (d12 Clock):** Used for disarms/thrown items. 12 = away, 3 = right, 6 = toward GM, 9 = left. Distance rolled via GM Intensity die.
*   **Falling:** Fall damage (e.g. 10 or 20) is resisted by AR only (no Dodge/Block). Narrative skills (falling, roll) can reduce damage.
*   **Duration Restrictions:** Keep durations simple: Instant, This Round, 1 Round, For Encounter, Permanent, Concentration. Multi-round tracking is banned.
*   **Usage Constraints:** Permitted usage intervals: 1/day, 2/day, 3/day, 1/enc, 2/enc, 3/enc, 1/rnd, 1/Luck, Constant. Upgrades advance on this scale (e.g., 3/day -> 1/enc).

---

## Part II — Random Loot Engine Specification

### 1. Engine Flow (`runLootEngine`)
The loot engine resolves random or specific loot selections in `lib/lootEngine.ts`.
```typescript
interface RunLootEngineOptions {
  specificSetKey?: string; // Optional LootSet enumKey
}
```
1.  **When `specificSetKey` is provided (Loot - Specific):**
    *   Query `db.lootSet.findUnique({ where: { enumKey: specificSetKey } })`. If null, return `null`.
    *   Ignore probability calculations. Parse the row's `members` and `directive`.
    *   Extract the `emoji` from the LootSet row and attach it to the result as `lootSetEmoji`.
2.  **Otherwise (Loot - Random):**
    *   Query all LootSet rows: `db.lootSet.findMany({ orderBy: { id: 'asc' } })`. Return `null` if empty.
    *   Sum all `row.probability` values as `total`. Return `null` if total is 0.
    *   Roll a probability index: `selectLootSetRowIndex(rows, total)`. Return `null` if index is -1.
    *   Set `members` and `directive` from the chosen row.
3.  **Resolution Hierarchy:**
    *   *Directive-in-members:* If `members` is a single token (no commas) and represents a type-directive, resolve it as a type-directive (`resolveTypeDirective`).
    *   *Members:* If `members` is not empty, resolve it (`resolveMembers`).
    *   *Type Directive:* If `directive` is not empty, resolve it (`resolveTypeDirective`).
    *   Otherwise, return `null`.

---

### 2. Probability Selection (`selectLootSetRowIndex`)
*   To resolve weighted probabilities, calculate `total` as the sum of all row weights.
*   Roll `1d[total]` using `fRollRPGDieString`. Clamp the result to `[1, total]`.
*   Iterate through the rows in order, accumulating probability weights.
*   Return the index of the first row where the cumulative weight is ≥ the roll result.

---

### 3. Member & Type Directive Resolution
#### A. Member Resolution (`resolveMembers`):
1.  Split `membersStr` by commas and trim keys. If empty, return `null`.
2.  Select one key at random: `chosenKey = keys[random_index]`.
3.  **LootList Query (with normalization):**
    *   Query `db.lootList.findUnique({ where: { enumKey: chosenKey } })`.
    *   If null and `chosenKey` begins with `LOOTLIST_` (case-insensitive), repeat query removing the prefix: `enumKey: chosenKey.replace(/^LOOTLIST_/i, '')`.
    *   If found, return `ResolvedLootResult` (name, description, `rollType: 'Power'`).
4.  **Content Fallback:**
    *   If LootList query returns null, search Content: `db.content.findFirst({ where: { enumKey: chosenKey } })`.
    *   Map the Content record by `type` (power, gear, artifact) to a `ResolvedLootResult`.

#### B. Type Directive Resolution (`resolveTypeDirective`):
Directives use the format `TYPE(Category)` (parsed via regex: `^([A-Za-z]+)\(([^)]*)\)$`).
*   **`ARTIFACTS(Minor | Lesser | Greater)`:** Queries Content `type: 'artifact'` and `category: Category`. Selects one at random.
*   **`WEAPON(all)`, `ARMOR(all)`, `GEAR(all)`, `SHIELD(all)`:** Queries Content matching that `type`. Selects one at random and prepends a random quality adjective: `Ruined`, `Used`, `Normal`, `Good`, `Excellent`, or `Ornate`.
*   **Mundane Gear (`LOOTSET_MUNDANEGEAR`):** If the selected LootSet's `enumKey` is `LOOTSET_MUNDANEGEAR`, follow the same adjective treatment: resolve via members (LootList), prepend a random quality adjective to the name, and force `itemCategory` and `rollType` to `GEAR`.

---

### 4. Database Contracts
*   **LootSet:** Holds `members` (keys or single directive), `typeDirective`, `probability`, and `emoji`. The `emoji` field is used as the Roll Log name-line icon when rolled, overriding category defaults.
*   **LootList:** Holds `enumKey` (normalizes `LOOTLIST_` prefix) and text parameters.
*   **Content:** Holds item parameters (`enumKey`, `type`, `category`).

---

### 5. UI Integration & Roll Log Outputs
*   **Client Sub-Menu:** Character Roll Log emits `request_loot_set_options` on mount. Server returns `{ sets: { enumKey, name, emoji }[] }` ordered by database ID. The client sorts the sub-menu items alphabetically by `(name ?? enumKey)` for display.
*   **Roll Log Output Formatting:**
    *   *Standard Loot:* Name prefixed with `LOOT:` (e.g., `LOOT: [Item Name] [icon]`).
    *   *Specific Loot:* Roll Log database fields `powerName` and `rollName` are saved across two lines:
        *   Row 1: `⚠️SPECIFIC LOOT:`
        *   Row 2: `[Item Name] [icon]` (no "LOOT:" prefix, no set name or emoji).
    *   *Description Block:* If the source item has a description, Row 1 of the description block renders the stat line (Action, Uses, Duration: `🔷🔄⏳` emojis). Row 2 renders the item description.
    *   *No-Description Fallbacks:* Source items without descriptions (e.g. Weapons, Armor, Shields) show only name and icon. Do **not** append fluff notes as fallbacks.
*   **Loot Category to Emoji Mappings:**
    *   If a LootSet row does not contain an overriding `emoji` value, map the resolved item category to the following emojis in the Roll Log:
        *   `ARMOR` -> 🧥
        *   `ART` -> 🎨
        *   `COLLECTIBLE` -> 🏺
        *   `CURRENCY` -> 💰
        *   `DOCUMENTCURIO` -> 📜
        *   `GEAR` -> 🧰
        *   `GEMJEWEL` -> 💎
        *   `GREATERARTIFACT` -> 🪬
        *   `JUNKFUNNY` -> 🗑️
        *   `LESSERARTIFACT` -> 🪄
        *   `MINORARTIFACT` -> 🍺
        *   `NOTHING` -> 🚫
        *   `SHIELD` -> 🛡️
        *   `WEAPON` -> ⚔️
        *   `CHAOSGEM` -> 🌀
