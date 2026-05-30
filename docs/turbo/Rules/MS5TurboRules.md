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


### 2.1 Glossary & Definitions
This section serves as both the **abbreviation reference** and the **full word definition area** for the MetaScape Turbo system. 

*   **Ability** – All attributes, skills, and powers.
*   **Ability Roll / Check** – A roll curve based on attribute Tiers: 1-Turbo (Unskilled), 2H-Turbo (Skilled), 3H-Turbo (Advantage), or 2L-Turbo (Disadvantage).
*   **Action (⚔️A, 👣M, ✋P, F)** – Turbo uses the AMP (Attack, Move, Partial) action system with Free reactions.
*   **Adv (Advantage)** – Roll one more time, keeping the highest (e.g., Unskilled -> 2H-Turbo, Skilled -> 3H-Turbo).
*   **AP (Advancement Point) 🧩** – Milestone reward spent to learn powers, upgrade equipment, or raise stats.
*   **AR (Armor Rating) 🧥** – Represents how much damage armor can absorb. Wounds = Damage / AR result (min 1 wound, representing Fatigue).
*   **ArfP (Artifact Points)** – Currency earned at milestones to acquire magical artifacts.
*   **Atk (Attack) ⚔️** – Roll to hit (A-action; Atk rating 2H-Turbo vs Monster Defense) followed by a Dmg roll on success.
*   **Atr (Attribute) ✅** – The five core attributes: Magic✨, Might💪, Mind👁️, Motion🏃, Moxie🫀.
*   **Critical 💀** – A natural 1 on any d20 rolled during an Ability Roll. Triggers GM-determined setbacks.
*   **Day 📅** – A day in the character’s life; resets all 1/day abilities and Day rests.
*   **Def (Defense) 🛡️** – The avoidance rating (Dod/AR or Blk/AR) that an opponent must roll against to hit.
*   **Dif (Difficulty)** – A GM-assigned number that the player’s roll must tie or beat.
*   **Dis (Disadvantage) 📉** – Roll one fewer time (e.g., Unskilled -> 2L-Turbo, Skilled -> 1-Turbo).
*   **Dmg (Damage) 💥** – The raw amount of harm caused by an attack.
*   **Effect** – The outcome of using an ability or item.
*   **Enc (Encounter)** – A sequence of combat rounds (Combat Encounter) or a narrative scene (Roleplaying Encounter). Resets encounter-scoped usage.
*   **Fatigue** – A minimum of 1 wound suffered when hit, regardless of AR absorption.
*   **GP (Gear Points)** – Currency earned at milestones to acquire mundane weapons, shields, and armor.
*   **GM Intensity Die 🔎** – A single d20 used by the GM for snap questions, NPC actions, and Tremendous/Critical intensity checks.
*   **Hit** – When an attack check beats the target's Defense.
*   **Lvl (Level) ⭐** – A character's level, which matches their total earned milestone points.
*   **MR (Movement Rate) 👣** – The number of squares a character can move in one round.
*   **Nish (Initiative) 🚩** – Determines turn order in combat. Sourced from the Motion attribute.
*   **Opp Atk (Opportunity Attack)** – A Free reaction basic melee attack triggered when a foe disengages on or after your Nish.
*   **Power ⚡** – A learned ability with defined usage, action cost, and effects.
*   **Rng (Range) 🎯** – The distance an attack or power can cover.
*   **Rnd (Round)** – A turn sequence where everyone performs their AMP actions.
*   **Session** – A game session in the players' real lives; resets Luck to 3.
*   **Skill 🎓** – An ability roll using a Tier Rating, usually vs. a GM-set difficulty.
*   **Skill Set 🎓** – A logical collection of related skills (e.g., Thievery includes stealth, climbing, lockpicking).
*   **Tremendous 🌟** – A natural 20 on any d20 rolled during an Ability Roll. Triggers beneficial GM-determined twists.
*   **Vit (Vitality) ❤️** – Base health score, which matches the wielder's Moxie score at level 1.
*   **Wnd (Wounds) 🩸** – Damage sustained after AR reduction is applied.

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


#### 3.1 Tremendous & Critical Examples

##### 🌟 Tremendous (Natural 20 on a d20)
*   **Tremendous Attack ⚔️** – Your strike impales the target and carries through into an adjacent foe (roll Dmg on both).
*   **Tremendous Defense 🛡️** – A perfectly timed parry twists the attacker's blade from their grip, sending it clattering d4 squares away in a random d12 direction.
*   **Tremendous Skill Check 🎓** – Your climbing grip is flawless; you set a guide rope that allows all allies to climb at **📈 Advantage** for the rest of the encounter.

##### 💀 Critical (Natural 1 on a d20)
*   **Critical Attack ⚔️** – Your weapon lodges in the enemy's shield; you deal no damage and must spend a Partial (✋P) action on your next turn to wrench it free.
*   **Critical Defense 🛡️** – A mistimed dodge sends you sprawling; you fall prone and incoming damage from the attack is doubled.
*   **Critical Skill Check 🎓** – You trigger a trap catastrophically; the noise alerts all monsters, giving them **📈 Advantage** on their next rolls.

##### 🌟🌟 Double Tremendous (Two Natural 20s)
*   **Double Tremendous Attack ⚔️** – A strike obliterates the target, ricocheting with force into 1d4 nearby enemies for maximum damage before returning to your hand.
*   **Double Tremendous Defense 🛡️** – You deflect the blow completely and rebound it; the attacker suffers their own damage, and you immediately step 3 squares and gain +3 Block for the encounter.
*   **Double Tremendous Skill Check 🎓** – Your persuasion sways the guards so completely that they fight at your side for the encounter and remain lifelong allies.

##### 💀💀 Double Critical (Two Natural 1s)
*   **Double Critical Attack ⚔️** – Your bowstring snaps, slicing your hand; you take 1 wound and cannot use ranged attacks for the rest of the encounter.
*   **Double Critical Defense 🛡️** – Your shield arm collapses under the blow; your shield shatters and you suffer double damage.
*   **Double Critical Skill Check 🎓** – While disarming a trap, it explodes for full damage and causes a partial ceiling collapse (everyone Dodge vs. Hard difficulty or take 10 damage).

##### 🌟🌟🌟 Triple Tremendous (Three Natural 20s)
*   **Triple Tremendous Attack ⚔️** – Reality bends; the strike slays the target, arcs lightning to all enemies in sight for triple damage, and grants all allies +1 Luck.
*   **Triple Tremendous Defense 🛡️** – You absorb the attack's force, unleashing it back as an auto-hit against all adjacent foes equal to your maximum damage, instantly slaying the attacker.
*   **Triple Tremendous Skill Check 🎓** – Your leap clears the chasm so perfectly that time freezes; allies may cross freely this round as if flying.

##### 💀💀💀 Triple Critical (Three Natural 1s)
*   **Triple Critical Attack ⚔️** – Your weapon fails catastrophically, shattering beyond repair, and you injure yourself for half your Vitality in wounds.
*   **Triple Critical Defense 🛡️** – You stumble directly into the attack; take double damage, fall 20 feet into a pit, and suffer the Stunned and Weakened afflictions.
*   **Triple Critical Skill Check 🎓** – A magical surge backfires, causing an explosion that inflicts 12 damage to all nearby, afflicting them with random conditions.

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


#### 4.1 Detailed Character Creation Checklist
1.  **Concept**: Define Player, Character, Race/Class, positive/negative traits, appearance, and a unique visual Flair.
2.  **Attribute Assignment**: Assign starting Tiers (**S, A, B, C, D, F**) across Magic✨, Might💪, Mind👁️, Motion🏃, Moxie🫀. Order of assignment resolves ties.
3.  **Skills**: Select 1 starting Skill Set from the Skill Sets table. All skills in this set are Skilled (2H-Turbo).
4.  **Weapons & Armor**: Select 1 mundane weapon and 1 armor. You are Skilled (2H-Turbo) in their use. Brawl🥊 and Throw Object are auto-granted (Unskilled 🔰).
5.  **Powers**: Select 3 starting powers (recommended: one A-action, one P-action, one 1-Day).
6.  **Vitality**: Matches your Moxie score at Level 1 (e.g. Moxie B rating of 15 means 15 Vit).
7.  **Luck**: Start with 3 Luck chits (max 5).
8.  **AP & GP/ArfP**: Start at Level 1 with 1 AP (spent on skills/powers) and 2 GP/ArfP.
9.  **Currency**: 1g + 1d100s. Free basic gear, plus 1 random Minor🍺 magic item.

### 4.2 The Skill System & Open-Ended Negotiation
Abilities are Unskilled (1-Turbo) unless learned with AP. Magic items are always Skilled. 

#### Skill Negotiation Flow:
1.  **Stating Intent**: The player states what they want to achieve.
2.  **GM Setting Difficulty**: The GM sets a Difficulty rating (Easy, Medium, Hard, Very Hard, Extreme).
3.  **Negotiation**: The player can propose tools, narrative context, background, or staged attempts to reduce the Difficulty.
4.  **The Roll**: Once agreed, the player rolls (Skilled = 2H-Turbo, Unskilled = 1-Turbo).

*   **Character Assists**: When one PC helps another, the GM may grant a reduced Difficulty or **📈 Advantage** (3H-Turbo) based on the description of the help.
*   **Skills vs. Powers**: Powers have strict mechanical limits and action costs. Skills are narrative, flexible tools that adjust difficulties or create minor boons, but must not overshadow powers.

#### 🎓 General Skill Set Table
| Skill Set 🎓 | Skills 🎓 |
| :--- | :--- |
| **Agility** | Acrobatics🏃, balance🏃, escape bonds🏃, falling🏃, climb🏃 |
| **Alchemy** | Identify👁️, mix👁️, apply potions/substances👁️, ID/Forage plants👁️ |
| **Arcana** | ID magic item👁️, spells👁️, runes👁️, magical beasts👁️, detect enchantments✨ |
| **Athletics** | Climb🏃, swim🏃, jump🏃, lift💪, feats of strength💪 |
| **Bardic** | Performance👁️, music👁️, persuasion👁️, inspiration👁️ |
| **Crafting** | Build/repair gear (weapons💪, armor💪, carpentry🏃, leatherwork🏃) |
| **Diplomacy** | Negotiate👁️, persuade👁️, charm👁️, intimidate👁️, fast talk👁️, languages👁️ |
| **Druidic** | ID plants👁️, talk to plants👁️, befriend animal👁️, talk to animal👁️, endure weather✨ |
| **Dungeoneering** | Direction Sense👁️, detect trap/hazard👁️, assess stonework👁️, climb🏃 |
| **Guard Skills** | Intimidation💪, interrogate💪, repair weapons/armor💪, danger sense👁️ |
| **Husbandry** | Riding🏃, animal training🏃, befriend animal👁️, talk to animal✨ |
| **Medicine** | Bind wounds👁️, set bones👁️, treat disease👁️, treat poison👁️, basic healing👁️ |
| **Mercantile** | Appraise👁️, haggle👁️, gamble👁️, fast talk👁️ |
| **Mountaineering** | Climb🏃, falling🏃, find route👁️, danger sense👁️, endure weather✨ |
| **Rogue** | Pickpockets🏃, disguise👁️, stealth🏃, gambling🏃, languages👁️ |
| **Sailing** | Ships🏃, navigation👁️, weather👁️, swim🏃, fishing🏃 |
| **Scholar** | Lore👁️, History👁️, ID magic item👁️, religion👁️, politics👁️, monster knowledge👁️ |
| **Scout** | Track👁️, forage👁️, stealth🏃, climb🏃, fishing🏃, set traps🏃 |
| **Survival** | Build shelter👁️, hunt🏃, find water👁️, identify plants👁️, endure weather✨ |
| **Thievery** | Stealth🏃, climb🏃, open locks👁️, detect/remove traps👁️, pick pockets🏃 |

#### 🧬 Racial Skill Set Table
| Race 🧬 | Skills 🎓 |
| :--- | :--- |
| **Dwarven Skills** | Stonecraft👁️, mining💪, brewing👁️, underground lore👁️, repair gear💪, Poison Save✨, Infrared👁️ |
| **Elven Skills** | Fletcher👁️, forest lore👁️, stealth🏃, artistry👁️, tracking👁️, Charm Save✨, Starlight👁️ |
| **Gnomish Skills** | Inventor👁️, small illusions✨, solve puzzles👁️, repairs👁️, Illusion Save✨, Infrared👁️ |
| **Goblin Skills** | Scavenging👁️, set traps🏃, stealth🏃, ambush setup👁️, Disease Save✨, Starlight👁️ |
| **Halfling Skills** | Stealth🏃, throw rocks👁️, cooking👁️, community lore👁️, Fear Save✨, Starlight👁️ |
| **Orc Skills** | Hunt🏃, ambush👁️, intimidation👁️, crafting💪, endure weather✨, Weather Save✨, Infrared👁️ |
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


### 8.1 Additional GM Rules & Narrative Treasure

#### Avoid Auto-Hazards
Always grant players at least one check (Dodge, Block, or Save) to avoid hazards or damage. Pit traps allow an Awareness check, trapped chests allow a Poison Save (Moxie), and falling off cliffs is preceded by climbing checks.

#### Falling, Climbing, and Jumping Down
When falling, the GM assigns damage (e.g. 10 or 20). The player rolls AR only (no Dodge/Block). Intentional drops or successful climbing/falling checks can reduce the falling damage.

#### Ranged into Melee
Missing a ranged attack on a target engaged in melee has a 1-3 (on d6) chance to hit an ally instead. Roll normal damage vs. the ally's AR.

#### Random Direction (d12 Clock)
Determine random direction (e.g. dropped items) by rolling a d12. 12 = away from GM, 3 = right, 6 = toward GM, 9 = left. Distance is rolled via GM Intensity die.

#### 8.2 Narrative Treasure Tables (GM Reference)
These tables provide GMs with ideas for narrative loot (non-system items).

| d100 | Treasure |
| :--- | :--- |
| **01–09** | Nothing Found |
| **10–24** | Junk / Funny One-Off (ice frog sculpture, cursed spoon, sack of bent nails, etc.) |
| **25–27** | Coins -> 1d6s |
| **28–30** | Coins -> 1d20s |
| **31–33** | Coins -> 1d100s |
| **34–36** | Coins -> 1d4 g |
| **37–39** | Coins -> 2d6 x 10s + 1d4 g |
| **40–49** | Art Object (necklace, chalice, painting, tapestry) worth 1d4+1 g |
| **50–59** | Gem / Jewel (sapphire, ruby, emerald, etc.) worth 2d6 g |
| **60–64** | Curio / Document (map, deed, spellbook, IOU, royal letter) |
| **65–74** | Collectible (figurine, rare coin, idol, old toy, weird antique) 1d20 g |
| **75–83** | Minor Magic Item |
| **84–89** | Lesser Magic Item |
| **90–93** | Greater Magic Item |
| **94–95** | Artifact (extremely rare) |
| **96–99** | Double Roll (roll twice, ignore 96+) |
| **100** | Epic Hoard -> 1 Artifact + d100g + 1 additional roll |

##### 🎨 Art, Gems, Jewelry (d8)
1.  Elaborate tapestry (10g, bulky)
2.  Gem cluster (sapphires, emeralds, etc.) (2d6 g)
3.  Ivory figurine of a knight (3g)
4.  Jeweled circlet, delicate gold wire (8g)
5.  Ornate ring with carved sigil (4g)
6.  Ruby-studded chalice (5g)
7.  Silver necklace with tiny bells (2g)
8.  Small painting of a noble’s hunting party (2g)

##### 📜 Curios, Maps, Documents (d6)
1.  Bestiary notes (hint at monster weakness)
2.  Deed to a crumbling farmstead
3.  Map fragment to a dungeon or cave
4.  Odd contract, owed favor, or IOU
5.  Royal letter, sealed with wax (political intrigue)
6.  Spellbook with 1 usable ritual

##### 🗑️ Junk & One-Offs (d6)
1.  “Cursed” spoon (just bent metal)
2.  Fake gem made of glass
3.  Ice sculpture of a frog leaping from a crocodile’s mouth (melts in hours)
4.  Pouch of colorful sand
5.  Sack of bent nails
6.  Wooden puppet missing an arm

#### 8.3 GM Helper Roles

##### Tremendous & Critical Nish Tables
To speed up play when natural 1s and 20s are rolled on initiative:

| d50 | Tremendous Nish 🌟 | Effect |
| :---: | :--- | :--- |
| **1** | Quick Step | Gain +1 to MR for this round. |
| **2** | Sharp Eyes | One Free Awareness roll this round. |
| **3** | Steady Grip | Auto-succeed next simple task. |
| **4** | Lucky Break | Cancel 1 Minor penalty this round. |
| **5** | Flair Move | Gain Advantage on personality Mind checks. |
| **6** | Catch Breath | Regain 1 Vit immediately. |
| **7** | Loose Stone | On hit; Auto-disarm or unshield d2sq. |
| **8** | Smooth Draw | Equip or switch weapon/shield without P action. |
| **9** | Quick Call | Advantage vs next trap for encounter. |
| **10** | Easy Dodge | Your next Dodge roll has Advantage. |
| **11** | Nimble Feet | Step d4 squares without using MR. |
| **12** | Quick Hand | Free Luck of 1 skill (not weapon/armor). |
| **13** | Guard Shift | Gain +1 Def for 1 rnd. |
| **14** | Extra Glance | Auto-spot 1 hidden or unseen detail. |
| **15** | Rally Breath | An ally of choice gets +3 Nish next round. |
| **16** | Keep Pace | Match Nish of any ally this round. |
| **17** | Lucky Timing | Nish is minimum of +1 more than best monster. |
| **18** | Swift Stand | Stand from prone without P action. |
| **19** | Quick Step Back | Step 1 sq away when targeted for 1 rnd. |
| **20** | Duck Low | Avoid next ranged Atk. |
| **21** | Push Forward | Gain Nish Advantage next round. |
| **22** | Quick Swap | Change held gear instantly once. |
| **23** | Cover Dash | Gain +2 AR this round. |
| **24** | Double Time | Move full MR plus +d4 extra this round. |
| **25** | Haste Pulse | Allies within 3 sq gain +1 Nish next round. |
| **26** | Inspire Action | One ally gains an extra P action this round. |
| **27** | Speed Echo | You gain an extra P action this round. |
| **28** | Deflect | Block with Advantage for 1 rnd. |
| **29** | Dash First | Move before enemy group regardless of Nish. |
| **30** | Strike True | Add +1d to your next Atk roll this rnd. |
| **31** | Step In Sync | You and chosen ally act simultaneously. |
| **32** | Call Shot | Add +2 Dmg to your first successful Atk this rnd. |
| **33** | Rally Cry | Allies within earshot gain +1 to first roll. |
| **34** | Slip Free | Escape 1 grapple, hold, or slow effect. |
| **35** | Quick Cast | Reduce casting action to P instead of A this rnd. |
| **36** | Swap Order | Your Nish matches ally of choice. |
| **37** | Strike Again | After successful Atk, Opportunity Atk at -2. |
| **38** | Blur Dash | Gain Dodge Advantage for all Dodges until next turn. |
| **39** | Flow Motion | Perform A-M-A sequence this rnd. |
| **40** | Pinpoint | Your Atk ignores AR on first strike this rnd. |
| **41** | Nimble Surge | Gain extra M Action this rnd. |
| **42** | Flash Counter | If struck in melee, gain one Opportunity Atk back. |
| **43** | Fast Hands | One P Action is Free this rnd. |
| **44** | Nish Lock | Your Nish stays the same next round (no roll). |
| **45** | Momentum | Bonus of +5 to your next Atk roll. |
| **46** | Surge Order | All allies act before monsters this round. |
| **47** | Push the Line | Foes adjacent to you suffer -1 Def this rnd. |
| **48** | Masters Surge | Gain extra A Action this rnd. |
| **49** | Heroic Dash | Up to MR; May M-A-M this rnd. |
| **50** | Lead the Charge | Allies add +2 MR if moving toward you. |

| d50 | Critical Nish 💀 | Effect |
| :---: | :--- | :--- |
| **1** | Squirrel!!! | Your Nish = 1 this round. |
| **2** | Stumbler | You slip and fall prone. |
| **3** | Doh… So Close | Your Nish is 1 less than the slowest opponent. |
| **4** | Quick Fumble | Drop 1 held item in reach of foes. |
| **5** | Clumsy Hands | Random gear item is lost. |
| **6** | Random Act | Roll random skill; must use as next action. |
| **7** | Friendly Fire | Your planned Atk hits nearest ally. |
| **8** | Wrong Weapon | Next Atk uses random weapon from Weapons Table. |
| **9** | I NEED POWER! | You may ONLY move this round. |
| **10** | So Thirsty! | Cannot drink anything this encounter. |
| **11** | Flat Footed | Lose your M Action this round. |
| **12** | Frozen | Only Attack, Move, or Defend this rnd. Pick one. |
| **13** | Passive | You may not Attack or cause harm this rnd. |
| **14** | Random Thought | Lose your P action this rnd. |
| **15** | No Sudden Movements | Next Resistance roll auto-fails. |
| **16** | Save Me! | All Resistance rolls Disadvantaged for encounter. |
| **17** | Bumbling | Def and Motion rolls Disadvantaged for 1 rnd. |
| **18** | Bumbling Fool | Halve your Nish and closest ally's Nish. |
| **19** | Lack of Focus | All rolls at -4 this round. |
| **20** | Wait What? | Cannot use Skills for this encounter. |
| **21** | No Senses | No Awareness rolls for encounter; silent for 1 rnd. |
| **22** | Slacker | No Luck use for encounter. |
| **23** | Head Headache | Lose 1 Luck chit. |
| **24** | Oh So Drained | Lose d4 Vit. |
| **25** | Half Power | Take d(half of Max Vit) as Wounds. |
| **26** | No Power! | Lose all Luck chits. |
| **27** | Glass Weapon | Next failed Atk breaks weapon until repaired. |
| **28** | Glass Armor | Next hit you take reduces AR to 1 until repaired. |
| **29** | Glass Jaw | Fall unconscious on next hit (awake Magic Dif 20). |
| **30** | Glass Jaw 2 | All Wounds taken are doubled this encounter. |
| **31** | Collide | Fall into nearest ally; Motion Dif 15 or both prone. |
| **32** | Hey Stupid! | You shout and become most likely monster target. |
| **33** | Half a Man | All your rolls Disadvantaged this round. |
| **34** | Crit Be Gone | You got Lucky - no effect. |
| **35** | Empty Pockets | You only have a P Action this rnd. |
| **36** | No Relics | Cannot use Magic Item effects this encounter. |
| **37** | Trap Step | You stumble into the nearest logical trap. |
| **38** | Clang & Bang | Stealth rolls Disadvantaged this encounter. |
| **39** | Spell Addict | A Action may ONLY be for spell-like powers. |
| **40** | Ranged Addict | A Action may ONLY be for ranged weapon attacks. |
| **41** | Melee Addict | A Action may ONLY be for melee attacks. |
| **42** | Punchy | You may only deal damage via Brawl this round. |
| **43** | Bad Weapon | Will not use current weapon for encounter. |
| **44** | Overkill | Next Atk must be your strongest possible combo. |
| **45** | Stuck Reload | Main weapon useless until A action spent to free it. |
| **46** | Weapon Slip | Disarm self; weapon skitters 2d4 squares away. |
| **47** | Armor Pinch | MR reduced by half this round. |
| **48** | Overextend | Your next Def is at Disadvantage. |
| **49** | Sudden Fatigue | Lose 1 action this round (choose M or A). |
| **50** | Head Rush | Lose 1 action each round for encounter. |

##### Bleeder Role
Assign one player as the "Bleeder" to track monster wounds for the GM. Give them a red marker to write wounds next to monster tokens, updating and moving them as necessary.

##### Relational Seat Tracking & Nish Tracking
The GM paper-clips an index card to the GM screen representing player seating layout (e.g. Mary across, Steve left, Mike right). Nish numbers are written in the same pattern, crossed off as turns are resolved, making turn order tracking instantaneous.

##### Using AI (NotebookLM & LLMs)
- **NotebookLM**: Supply rules and campaign notes for instant query of room specifications, stats, magic items, and lore.
- **LLMs**: Generate detailed character concepts, portraits, adventure plotlines, map-specific encounter formatting, and dialogue.

#### 8.4 Skill Negotiation Examples

##### 🧗 Example 1 – Climbing a Sheer Cliff
*   **Basic**: Player: "I want to climb that 100ft sheer cliff." GM: "OK, Dif 22."
*   **Negotiated**: Player: "If I use my climbing check to plan a route first, can I lower the Dif?" GM: "Yes — make your roll... the Dif is now 18 with planning."
*   **Alternate**: Player: "I'll climb in two stages, using rope and spikes at half MR." GM: "First roll to the ledge (Dif 14). If you fail, you get a second roll to catch yourself on the rope. Then we proceed with the final ascent."

##### 🕳️ Example 2 – Falling into a Pit
*   **Basic**: GM: "You fall into a pit trap. Make your AR check vs Dmg 10." Player: "I have falling skill. I rolled X." GM: "OK, damage is reduced to 8."
*   **Narrative**: Player: "On the way down I pick my landing and grab the edges. I'm a highland monk used to mountaineering." GM: "Good description — damage is reduced to 4. Make your AR check."

##### ⚕️ Example 3 – Healing Fredo
*   **Basic**: Player: "I use healing on Fredo at -1 Vit." GM: "You stop bleeding, but he remains critical."
*   **Narrative**: Player: "Fredo took a blow to the arm. I splint, bandage, and stabilize, hoping to heal +1 Vit. I trained in the Temple ward." GM: "Dif 10 to both stop bleeding and restore +1 Vit."

##### 🥷 Example 4 – Sneaking Past Orc Guards
*   **Basic**: Player: "Stealth 12 to slip past guards." GM: "Their Mind rating is 13. You fail."
*   **Narrative**: Player: "I study the guards, plan my route, and toss a pebble to the far side to distract them." GM: "OK — roll Stealth vs Dif 9."

##### ⚔️ Example 5 – Battlefield Tactics
*   **Basic**: Player: "Tactics check. I want +1 Atk for the party this whole encounter." GM: "Too broad. Try a smaller effect."
*   **Narrative**: Player: "I analyze the Troll's movement to help Fredo. I want +2 Dmg on his next dagger attack vs that Troll." GM: "Open check vs Dif 13. Rolled 19? Fredo gets +3 Dmg on his next hit."

##### 👑 Example 6 – Persuasion in the Great Hall
*   **Basic**: Player: "I plea to everyone at once." GM: "One Persuasion roll vs Dif 20 to sway the hall. Success = broad support; failure = total rejection."
*   **Narrative**: Player: "I mingle first, quietly approaching three key nobles to build momentum." GM: "Make individual Persuasion rolls. One court member backs you, granting **📈 Advantage** (3H-Turbo) and reducing the final full-hall Dif to 15."

### 8.5 Personal Characters Reference (Turbo Translation)

#### Jesse (Maddy)
*   **Attributes**: Might💪 B, Moxie🫀 B, Mind👁️ C, Motion🏃 C, Magic✨ D.
*   **Skill Set**: Punk Fighter: `Streetwise Survival` (stealth, urban navigation), `Bareknuckle Combat` (brawl, improvised weapons, moxie endurance), `Intimidation & Presence`.
*   **Powers (Punk Fighter)**:
    *   *Adrenaline Surge* (1-Enc, ⚔️A): Heal self [2d4] Vit.
    *   *Bareknuckle Brawling* (1-Enc, ⚔️A): Make 2 unarmed strikes at **[Atk/Dmg(💪)/(💪)]**; suffer [d4] self wounds.
    *   *Crossbow Snap* (1-Rnd, ⚔️A): Quick ranged shot at **[Atk/Dmg(👁️-1)/(👁️-1)]**.
    *   *Defiance Stance* (1-Day, ⚔️A): For 1 rnd, AR is [=AR+2] and weapon Dmg is [=Dmg+2].
    *   *Mohawk Menace* (1-Rnd, ⚔️A): Flash aggression; adjacent targets make Mind check or flee 1sq.
    *   *Punk Rally Cry* (1-Enc, ⚔️A): Allies in earshot gain +2 Nish next round.
    *   *Smoke Bomb Toss* (1-Enc, ⚔️A): Create 3x3sq smoke cloud; targets inside roll Atk/Dodge at **Disadvantage 📉**.
    *   *Chain Punk Fury* (1-Enc, ✋P): If weapon attack hits; make 1 immediate off-hand strike at **[Atk/Dmg(💪)/(💪)]**.
    *   *Gambler's Edge* (1-Enc, ✋P): Next attack or skill check gains **Advantage 📈** (3H-Turbo if skilled).
    *   *Improvised Arsenal* (1-Rnd, ✋P): Grab random object; functions as melee weapon at **[Atk/Dmg(💪)/(💪)]** for round.
    *   *Oops, Insult!* (1-Enc, ✋P): Target makes Mind check or focuses attacks on you this round.
    *   *You Look Kinda Nice...* (1-Enc, ✋P): When ally is hit, choose: ally AR is [=AR+d4] or next Dmg is [=Dmg+d4].
    *   *Garbage Can Gods* (1-Day, Free): Reroll 1 failed check (self or ally).
    *   *PA-TING!* (1-Enc, Free): On successful Dodge; make 1 immediate counter-attack at **[Atk(💪)-2]**.
    *   *Street Instincts* (1-Enc, Free): Spot ambush; Nish gains +2.

#### Kaeleon (Merrill)
*   **Attributes**: Might💪 A, Moxie🫀 B, Motion🏃 B, Magic✨ C, Mind👁️ C.
*   **Skill Set**: Iron Lotus Discipline: `Brawl (🥋)`, `Awareness (👁️)`, `Mountaineering (🏃)`, `Healing Arts (👁️)`.
*   **Powers (Blade Saint)**:
    *   *Crushing Lotus* (1-Day, ⚔️A): Strike at **[Atk/Dmg(💪+2)/(💪+2)]**.
    *   *Cyclone Kick* (1-Rnd, ⚔️A): On unarmed hit; target makes Motion check or knocked back [d4] squares.
    *   *Defiance Stance* (1-Day, ⚔️A): For 1 rnd, AR is [=AR+2] and weapon Dmg is [=Dmg+2].
    *   *Flurry of Blows* (1-Enc, ⚔️A): Multi-Atk with katars at **[Atk/Dmg(💪-1)/(💪-1)]**.
    *   *Pressure Point Strike* (1-Enc, ⚔️A): On hit; target makes Moxie check or Stunned 1 rnd.
    *   *Twin Katar Sweep* (1-Enc, ⚔️A): Strike with both katars; if both hit, target falls Prone.
    *   *Unbending Steel* (1-Day, ⚔️A): On hit; target's attacks are at **Disadvantage 📉** for 1 rnd.
    *   *Ascetic Agility* (1-Enc, 👣M): Motion check for climbing/leaping at **Advantage 📈** this round.
    *   *Balance of Steel* (1-Enc, ✋P): Nish gains +2.
    *   *Breath Control* (1-Enc, ✋P): For 1 rnd, Resist (Moxie) vs Afflictions at **Advantage 📈**.
    *   *Herbal Poultice* (1-Enc, ✋P): Heal self or ally for [1d4] Vit.
    *   *Iron Body Meditation* (1-Enc, ✋P): Ignore wound penalties for unconscious/death checks for 1 rnd.
    *   *Lotus Focus* (1-Enc, ✋P): Next Atk roll gains **Advantage 📈**.
    *   *Blade Parry* (1-Enc, Free): If hit in melee; auto Block up to Max Block 12.
    *   *Stance Shift* (1-Enc, Free): Switch stance; Atk+1 or Def+1 until next turn.
    *   *Steel Lotus Counter* (1-Enc, Free): After successful Block; make 1 immediate attack at **[Atk(💪)]**.

#### Solen (Phill)
*   **Attributes**: Magic✨ A, Moxie🫀 B, Mind👁️ B, Motion🏃 C, Might💪 D.
*   **Skill Set**: Sunblessed Fey Devotion (Healing, Agility, Arcana, Survival).
*   **Powers (Healer)**:
    *   *Healing Light* (1-Enc, ⚔️A): Restore [1d4] Vit to ally on touch.
    *   *Healing Light (Greater)* (3-Enc, ⚔️A): Restore [1d4+2] Vit to ally.
    *   *Purging Breath* (2-Day, ⚔️A): Cleanse 1 condition (Poison, Disease, Stun, Fear, etc.).
    *   *Sanctuary* (1-Enc, ✋P): Target ally cannot be targeted by attacks until they act.
    *   *Radiant Smite* (1-Enc, ⚔️A): Melee strike; adds **[Dmg(✨+d6)]** radiant damage.
    *   *Solar Burst* (1-Enc, ⚔️A): Magic blast at **[Atk/Dmg(✨)/(✨)]** (AOE 2sqR).
    *   *Blinding Wings* (1-Enc, 👣M): Emit light; adjacent targets make Moxie check or Blind 1 rnd.
    *   *Radiant Presence* (1-Enc, ✋P): Adjacent allies heal 1 Vit at start of their turn.
    *   *Uncanny Dodge* (1-Enc, ✋P): Next Dodge roll has **Advantage 📈**.
    *   *Resist Corruption* (1-Day, ✋P): Resist (Moxie) has **Advantage 📈** vs poison/disease for Enc.
    *   *Solar Rally* (1-Enc, ✋P): Up to 2 allies in 3sq heal [d4] Vit.
    *   *Dawn's Aegis* (1-Day, ✋P): Allies in 3sq gain AR+1 for Encounter.
    *   *Solara's Vow* (1-Day, Free): Revive ally at ≤0 Vit to 1 Vit.

#### Jake & Brooke (Blackaxe Clan)
*   **Attributes**: Might💪 A, Moxie🫀 B, Mind👁️ C, Motion🏃 D, Magic✨ D.
*   **Skill Set**: Engineering & Siegecraft.
*   **Powers (Shield Warrior)**:
    *   *Shield Rush* (1-Enc, ⚔️A+👣M): Move double MR; Atk with shield at **[Atk/Dmg(💪)/(💪)]**; target falls Prone.
    *   *Shield Break Line* (1-Enc, ⚔️A+👣M): Move 3sq; Might check vs each target or they fall Prone.
    *   *Blackaxe Slam* (1-Enc, ⚔️A): Strike at **[Atk/Dmg(💪)/(💪)]**; target makes Might check or Stunned.
    *   *Taunt of Stone* (2-Enc, ⚔️A): Targets in 2sq make Mind check or focus attacks on you.
    *   *Hamstring Strike* (1-Enc, ⚔️A): Strike at **[Atk/Dmg(💪)/(💪)]**; target makes Motion check or MR halved.
    *   *Stone Form* (1-Day, ⚔️A): AR gains [=AR+2] and immune to poison/disease for Encounter.
    *   *Ignore the Pain* (1-Enc, ✋P): Take 1 wound; ignore next [d6] wounds.
    *   *Rage Regen* (1-Enc, ✋P): Heal self [1d4] Vit.
    *   *Blind Fighter's Poise* (1-Day, ✋P): No darkness penalties for Encounter.
    *   *Veteran of the Deeps* (2-Day, Free): Reroll 1 failed Might/Motion check.

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
