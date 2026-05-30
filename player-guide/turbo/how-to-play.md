# Core Mechanics (Turbo Engine)

The **MetaScape Turbo Engine** is a high-performance, automated rule system built for tactical depth, scaling characters, and precise state management. It uses computer-generated probability curves and structured action budgets to create a fast, balanced gameplay loop.

---

## 🚀 System Philosophy & Guiding Principles

* **Cinematic**: Dramatic highs and lows are resolved through unified roll formulas.
* **Tactical Depth**: Splitting defense between **Dodge** (Motion) and **Block** (Might/Gear) forces round-to-round choices.
* **Milestone Progression**: Characters earn Levels and **Advancement Points (AP)** to learn powers, upgrade equipment, or raise stats.
* **Unified Formatting**: Emojis and labels are standardized so they can be parsed easily by companion interfaces.

---

## 📊 Emoji & Symbol Language

Emojis are integrated into rules, stats, and logs:
* `⚔️` = Attack / Weapon / Combat Style
* `🛡️` = Block / Shield / Defense Rating
* `🧥` = Armor Rating (AR)
* `👣` = Movement Rate (MR) / Move Action
* `❤️` = Vitality (Vit)
* `🍀` = Luck
* `⚡` = Power
* `🧩` = Advancement Point (AP)
* `🔷` = Attack Action (A)
* `✋` = Partial Action (P)
* `🔰` = Unskilled
* `🎓` = Skilled
* `📉` = Disadvantage (roll 1 fewer time)
* `📈` = Advantage (roll 1 more time)

---

## 🎲 The Multi-Turbo Roll Curves

Rather than adding flat bonuses to a single die roll, Turbo uses your attribute's level-scaled **Rating** to run multiple roll checks.

| Proficiency / Status | Roll Notation | Resolution Method |
| :--- | :---: | :--- |
| **Unskilled** | `1-Turbo` | Roll your Rating once. |
| **Skilled** or **Unskilled + Advantage** | `2H-Turbo` | Roll your Rating twice, keep the highest. |
| **Skilled + Advantage** | `3H-Turbo` | Roll your Rating three times, keep the highest. |
| **Unskilled + Disadvantage** | `2L-Turbo` | Roll your Rating twice, keep the lowest. |

*   **Modifiers**: Applied as a flat value (e.g. `+2` or `-3`) to the Rating before rolling. Ratings are clamped to a minimum of 1.
*   **Tremendous (T)**: Triggered by rolling a natural 20 on a d20. Grants beneficial twists based on the GM's Intensity Die.
*   **Critical (C)**: Triggered by rolling a natural 1 on a d20. Grants complications or setbacks.
*   **GM Intensity Die**: A d20 rolled by the GM to determine the strength of player twists or resolve narrative actions.

### Tier Growth Table (Rating Calculation)
Your level-adjusted rating is calculated dynamically:

$$\text{Rating} = \text{Base} + (\text{Multiplier} \times \text{Level})$$

*(Rounded to the nearest integer, minimum 1)*

| Tier | Base Value | Multiplier | Level 1 Rating | Level 5 Rating | Level 10 Rating |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **S** | 20 | +1.0 | **21** | **25** | **30** |
| **A** | 17 | +0.8 | **18** | **21** | **25** |
| **B** | 14 | +0.6 | **15** | **17** | **20** |
| **C** | 12 | +0.4 | **12** | **14** | **16** |
| **D** | 10 | +0.2 | **10** | **11** | **12** |
| **F** | 8 | +0.1 | **8** | **9** | **9** |

---

## ✅ The Five Attributes

Turbo characters assign starting **Tiers** (S, A, B, C, D, F) across five core attributes:

1. **Might💪**: governs melee attacks/damage, Block defense rating, and heavy armor/shield requirements.
2. **Motion🏃**: governs initiative (Nish), Dodge defense rating, athletics, and hurled weapons.
3. **Mind👁️**: governs ranged shot weapons, mental awareness, unconsciousness checks, and social skills.
4. **Magic✨**: governs supernatural spells, magic item activation, and arcane resistances.
5. **Moxie🫀**: governs stamina, physical resistances, death checks, and base Vitality (Vit❤️).

---

## 🔷 The AMP Action Economy

Combat rounds are governed by the **AMP** action system: Characters have three action tracks represented visually on the HUD:
* **Attack (⚔️A)**: Pays for attack actions.
* **Move (👣M)**: Pays for movement actions.
* **Partial (✋P)**: Pays for partial or minor actions.

### The Siloing Rule
Actions are strictly siloed and **not interchangeable** in standard rules:
* `A` can only pay for `A` requirements.
* `M` can only pay for `M` requirements.
* `P` can only pay for `P` requirements.

### Action Economy Exceptions
1. **The HUD MOVE Button**: If `M` is unavailable but `P` is available, clicking the HUD MOVE button may consume `P` instead of `M`. This exception applies *only* to the HUD button.
2. **Secondary Rating Morphs**: When rolling a secondary or follow-up rating (such as a follow-up Damage or Armor roll), the roll is treated as **free** (bypassing action costs).
3. **Free Actions (F)**: Actions designated as free bypass validation and spend no HUD actions.
4. **Initiative (Nish)**: Sourced from the Motion attribute. Making a Nish roll at the start of combat clears usage tracks and fully replenishes your `A`, `M`, and `P` actions.

---

## ⚔️ Combat Styles & Tactics

How you equip your character alters your combat style and capabilities:

1. **Single Weapon🗡️**: Wielding one one-handed weapon. Promotes accuracy and enables *Damage Uplifting* (weapon damage rating is raised to match the wielder's Might/Motion/Mind).
2. **Multi-Attack**: Sum of weapon damage ratings must be less than or equal to the governing attribute Tier. Damage uplifting is disabled.
3. **Dual Wield⚔️**: Attack with a weapon in each hand (one attack roll per round). Block uses the best Block score of the two. Damage uplifting is disabled.
4. **Two-Handed**: Heavy weapon held in both hands. High damage.
5. **Weapon & Shield🛡️**: Weapon + shield. Provides a high block rating but reduces Movement Rate (MR) and locks the off-hand.
6. **Martial Arts🥋**: Unarmed Brawl🥊 (punch, kick, grab). Cannot Block unless a power allows. Damage is 1 Tier below Might (min F-Tier).

---

## 🛡️ Defending & Resolving Wounds

When an enemy attacks you, follow this sequence:

1. **Defense Check**: Roll Dodge (Motion) or Block (Might/Gear) using `2H-Turbo` against the monster's attack roll.
2. **Resist Check**: If targeted by magic or hazards, roll Magic (arcane saves) or Moxie (bodily saves) to resist.
3. **Armor Absorption**: If defense fails, roll your Armor Rating (AR🧥) die. Wounds are calculated as:

$$\text{Wounds} = \frac{\text{Damage}}{\text{AR Result}}$$

*(Minimum 1 wound, representing Fatigue. Wounds are added to your tracker).*

### Unconsciousness & Death
* **Unconscious Check (Mind)**: If Wounds $\ge$ Vit, roll Mind against $\text{Difficulty} = 5 \times (\text{Wounds} - \text{Vit})$ to remain conscious.
* **Death Check (Moxie)**: If Wounds $>$ Vit, roll Moxie against $\text{Difficulty} = 10 + (\text{Wounds} - \text{Vit})$ at the start of each turn. Failure is permanent death. Bleeding conditions add 1 wound per round.

---

## 🍀 Luck & GM Rules

* **Luck**: Spend 1 Luck chit (start session with 3, max 5) to reroll all dice in a roll (keep best). Cannot reroll if a Critical (1) occurred.
* **Ranged into Melee**: Missing a ranged attack on a target engaged in melee has a 1-3 (on d6) chance to hit an ally instead.
* **Random Direction**: For disarms or thrown items, roll a d12 (clock directions: 12 is away, 6 is toward GM). Distance is determined by the GM's Intensity Die.
* **Falling**: Fall damage is resisted by AR only (no Dodge/Block).
* **Durations**: Standard durations are Instant, This Round, 1 Round, For Encounter, Permanent, or Concentration. Concentration automatically consumes your Partial action (✋P) on subsequent rounds.
* **Usage Constraints**: Abilities are constrained by interval checks: 1/day, 2/day, 3/day, 1/enc, 2/enc, 3/enc, 1/rnd, 1/Luck, or Constant.
* **Afflictions**: Stunned (lose AM actions), Weakened (-2 rolls & MR -2), Immobilized (cannot move), Frozen, Paralyzed, Poisoned, Burning, Held. Save checks are rolled for free at the start of your turn (on your Nish).
