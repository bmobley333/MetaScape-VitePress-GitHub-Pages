# Core Mechanics (Turbo Engine)

The **MetaScape Turbo Engine** is a high-performance, automated rule system built for tactical depth, scaling characters, and precise state management.

---

## 🚀 System Philosophy & Guiding Principles

* **Tactical Depth**: Splitting defense between **Dodge** (Motion) and **Block** (Might) forces players to evaluate threat types.
* **Cinematic Curves**: The Multi-Turbo dice system replaces traditional flat additions with probability curves.
* **AP Progression**: Growth is milestone-driven. Earn **Levels** and **Advancement Points (AP)** to unlock powers, training, or raw stats.
* **AI-Native Specifications**: Rules are formatted cleanly with standardized headings and emojis so they are fully parsed by AI game logs.

---

## ⚡ The Five Attributes

Turbo characters assign starting **Tiers** (S, A, B, C, D, F) across five attributes:

1. **Might💪**: Melee attack rolls, melee damage, Block defense rating, heavy armor requirements.
2. **Motion🏃**: Initiative (Nish), Dodge defense rating, athletics, and hurled weapons.
3. **Mind👁️**: Ranged shot weapons, mental awareness, unconsciousness checks, and social skills.
4. **Magic✨**: Supernatural powers, spellcasting, arcane resistances, and magic item activation.
5. **Moxie🫀**: Stamina, bodily resistances, death checks, and base Vitality (Vit❤️).

---

## 🎲 The Multi-Turbo Roll Curves

Instead of rolling raw dice and adding stats, Turbo uses your attribute's level-scaled **Rating** to run multiple roll checks.

| Proficiency / Status | Roll Notation | Resolution Method |
| :--- | :---: | :--- |
| **Unskilled** | `1-Turbo` | Roll your Tier Rating once. |
| **Skilled** or **Unskilled + Advantage** | `2H-Turbo` | Roll your Tier Rating twice, keep the highest. |
| **Skilled + Advantage** | `3H-Turbo` | Roll your Tier Rating three times, keep the highest. |
| **Unskilled + Disadvantage** | `2L-Turbo` | Roll your Tier Rating twice, keep the lowest. |

### Tier Growth Table (Rating Calculation)
Your level-adjusted rating is calculated dynamically:

$$\text{Rating} = \text{Base} + (\text{Multiplier} \times \text{Level})$$

*(Rounded to the nearest integer, minimum 1)*

| Tier | Base Value | Multiplier | Level 1 Rating | Level 5 Rating |
| :---: | :---: | :---: | :---: | :---: |
| **S** | 20 | +1.0 | **21** | **25** |
| **A** | 17 | +0.8 | **18** | **21** |
| **B** | 14 | +0.6 | **15** | **17** |
| **C** | 12 | +0.4 | **12** | **14** |
| **D** | 10 | +0.2 | **10** | **11** |
| **F** | 8 | +0.1 | **8** | **9** |

---

## ⚔️ Combat & Action Economy

Combat rounds are governed by the **AMP** action system: Characters have three action types per round: Attack (⚔️A), Move (👣M), and Partial (✋P), plus reactions.

### Combat Styles
How you equip your character alters your tactics and damage output:

1. **Single Weapon🗡️**: Wielding one one-handed weapon. Promotes accuracy and enables damage uplifting (weapon damage die is raised to match wielder's Might/Motion/Mind).
2. **Multi-Attack**: Sum of damage dice must be less than or equal to attribute Tier. Uplifting is **disabled**.
3. **Dual Wield⚔️**: Best block rating of the two weapons is used. One attack per round default. Uplifting is **disabled**.
4. **Two-Handed**: Heavy damage, requires both hands.
5. **Weapon & Shield🛡️**: Weapon + shield. High block rating but reduces Movement Rate (MR).
6. **Martial Arts🥋**: Unarmed Brawl. Cannot Block. Damage is 1 Tier below Might (min F-Tier).

---

## 🛡️ Defending & Vitality Wounds

When an enemy declares an attack against you:

1. **Roll Defense**: Roll Dodge (Motion) or Block (Might/Shield) using `2H-Turbo` against the monster's attack roll.
2. **Resist Check**: If hit by magic or poison, roll Magic (arcane saves) or Moxie (bodily saves) to resist.
3. **Resolve Armor (AR)**: If defense fails, roll your Armor Rating die (AR🧥). Wounds are calculated as:

$$\text{Wounds} = \frac{\text{Damage}}{\text{AR Result}}$$

*(Minimum 1 wound, representing Fatigue. Final Wounds are added to your tracker).*

### Unconsciousness & Death
* **Unconscious Check (Mind)**: If Wounds $\ge$ Vit, roll Mind against $\text{Difficulty} = 5 \times (\text{Wounds} - \text{Vit})$.
* **Death Check (Moxie)**: If Wounds $>$ Vit, roll Moxie against $\text{Difficulty} = 10 + (\text{Wounds} - \text{Vit})$ at the start of each of your turns. Failure is permanent death.
