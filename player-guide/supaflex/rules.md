---
outline: 2
---

# ⚡ SupaFlex Rules Manual

## 🔝 Top of Rules

## ✅ System Philosophy & Guiding Principles

🎬 Cinematic – Big swing dice (d20 + Atr Die) create dramatic highs and lows that feel like movie moments. Every roll should carry weight, producing stories worth retelling.

⚡ Fast – Rules are built for speed: creation, advancement, and play should never bog down. When in doubt, simplify to keep the momentum alive.

🎭 Open – Any concept works with GM approval; avoid rigid class/level tracks. MetaScape thrives on unusual ideas, and the rules bend to fit imagination, not restrict it.

🧩 Inclusive – Anyone can attempt weapons, armor, or skills. Unskilled = 1d20, Skilled = 2H20; but Powers🔥 (Powers🔥) must be learned. This ensures new players can always contribute and veterans can experiment.

🎲 Tactical – Defense split (Block, Dodge, Resist) forces meaningful, moment-to-moment choices. Every defense is a gamble that shapes combat’s flow.

🧑‍🤝‍🧑 GM-Light – GM sets difficulties and advantage/disadvantage; no dice rolling other than the GM Intensity die. This frees the GM to run the story and spotlight creativity instead of crunching math.

📏 Unified – Attributes govern skills, damage, and armor; one backbone supports all mechanics. Everything connects cleanly, making the system easy to teach and expand.

🧹 Clean – Clear action types (A, M, P, F) and Atr tags keep the table legible. Players should always know what they can do at a glance.

📉 Minimal Tracking – Players should track only Vit and Luck chits whenever possible. Low overhead means more energy spent on roleplay, tactics, and fun.

🎯 KISS & Data De-Duplication – Keep It Simple & Single-source-of-truth. Never duplicate database-backed tables (Weapons, Armor, Shields, Gear, Powers, Magic Items, Skill Sets, Monsters, and Treasure) as static text in markdown rules documents; query Supabase or link to interactive catalogs to maintain single-source-of-truth DRY alignment.

📇 Character Card 2-Row Layout Standard – Character selection cards (`UnifiedLaunchHubModal.tsx`) MUST enforce a 2-column flexbox grid layout (`flex items-center justify-between gap-3`), placing Name and Badges in the left column (Rows 1 & 2) and the `Active Hero` badge and Edit/Delete buttons in the right column (Rows 1 & 2) to eliminate vertical overlapping.



## 🙂Emojis

Emojis🙂 are used in MetaScape for rapid identification of key stats and words. They are used in several ways and formats:

Emojis🙂 come BEFORE their key word(s) in titles and headings

Emojis🙂 are to follow their key word(s) in nearly every case (other than headings)

The five Attribute✅ (Atr) emojis🙂 can be used both following their key words as in: Might💪, Motion🏃, Mind👁️, Magic✨, and Moxie🫀, but also following any ability as an indicator as to which of the five attributes to roll for that ability. (e.g., “Stealth🏃” is the shorthand version of, and means the same thing as “Stealth roll using Motion🏃” or “Motion🏃 Stealth” and this shorthand is the preferred method.

Monster stats place the emojis before key numbers or number sets as in:

4 Orc Guards (Heavy Leather, Scimitars, Bucklers) 🚩14, 👣10, ⚔️18/12(2), 🛡️16/2, ❤️12 – [💪18/🏃12/👁️10/✨10/🫀12] (Poisoned blades Magic✨ or Weakened).

| Sorted by Term📖 |  |  | Sorted by Emoji🙂 |  |
| --- | --- | --- | --- | --- |
| 📖Term | 🙂Emoji |  | 🙂Emoji | 📖Term |
| Actions🔷 | 🔷 |  | 🔄 | Usage🔄 |
| Affliction💀 | 💀 |  | ⏳ | Duration⏳ |
| AP🧩 | 🧩 |  | ⚕️ | Medical & Healing Supplies⚕️ |
| AR🧥 | 🧥 |  | 🔥 | Power🔥 |
| Armor🧥 | 🧥 |  | ✅ | Atr✅ |
| Art🎨 | 🎨 |  | ✒️ | Writing & Communication✒️ |
| Artifact💫 (Magic Item) | 💫 |  | ❤️ | Vit❤️ |
| Atr✅ | ✅ |  | ⭐ | Level⭐ |
| Block🧱 | 🛡️ |  | 💫 | Artifact💫 (Magic Item) |
| Camp Gear🏕️ | 🏕️ |  | 🌟 | Tremendous🌟 |
| Clothing & Personal👕 | 👕 |  | 🍀 | Luck🍀 |
| Combat ⚔️ | ⚔️ |  | 🍺 | Minor🍺(Magic Item) |
| Containers🧺 | 🧺 |  | 🙂 | Emoji🙂 |
| Critical💀 | 💀 |  | 📖 | Term📖 |
| Days📅 | 📅 |  | 🎨 | Art🎨 |
| Dmg💥 | 💥 |  | 💥 | Dmg💥 💥 |
| Dual Wield⚔️ | ⚔️ |  | 🎭 | Traits🎭 |
| Duration⏳ | ⏳ |  | 🎯 | Range🎯 |
| Emoji🙂 | 🙂 |  | 🎵 | Entertainment & Instruments🎵 |
| Entertainment & Instruments🎵 | 🎵 |  | 🏃 | Motion🏃 |
| Food & Drink🥖 | 🥖 |  | 🏕️ | Camp Gear🏕️ |
| Gear🧰 | 🧰 |  | 🐉 | Monster 🐉 |
| GM🔎 | 🔎 |  | 🐴 | Travel & Animals🐴 |
| Greater🪬 (Magic Item) | 🪬 |  | 👁️ | Mind👁️ |
| Hazard💀 | 💀 |  | 👕 | Clothing & Personal👕 |
| Junk🗑️ | 🗑️ |  | 👣 | MR👣 |
| Lesser🪄 (Magic Item) | 🪄 |  | 💪 | Might💪 |
| Level⭐ | ⭐ |  | 💰 | Money💰 |
| Luck🍀 | 🍀 |  | 📅 | Days📅 |
| Magic Item✨ | ✨ |  | 📜 | Notes📜 |
| Magic✨ | ✨ |  | 🔷 | Actions🔷 |
| Martial Arts🥋 | 🥋 |  | 🔎 | GM🔎 |
| Medical & Healing Supplies⚕️ | ⚕️ |  | 🪄 | Lesser🪄 (Magic Item) |
| Might💪 | 💪 |  | 🗑️ | Junk🗑️ |
| Mind👁️ | 👁️ |  | 🗡️ | Single Weapon🗡️ |
| Minor🍺(Magic Item) | 🍺 |  | 🥋 | Martial Arts🥋 |
| Money💰 | 💰 |  | 🥖 | Food & Drink🥖 |
| Monster 🐉 | 🐉 |  | 🧩 | AP🧩 |
| Motion🏃 | 🏃 |  | 🫀 | Moxie🫀 |
| Moxie🫀 | 🫀 |  | 🧬 | Racial 🧬 |
| MR👣 | 👣 |  | 🧰 | Gear🧰 |
| Natural Weapons🥊 | 🥊 |  | 🧺 | Containers🧺 |
| Nish🚩 | 🚩 |  | 🚩 | Nish🚩 |
| Notes📜 | 📜 |  | 🪬 | Greater🪬 (Magic Item) |
| Power🔥 | 🔥 |  | 🛠️ | Tools & Equipment🛠️ |
| Racial 🧬 | 🧬 |  | 🩸 | Wnd🩸 |
| Range🎯 | 🎯 |  | 🧥 | AR🧥 |
| Resist✨ | ✨ |  | 🧥 | Armor🧥 |
| Save✨ | ✨ |  | 🛡️ | Weapon & Shield🛡️ |
| Shields🛡️ | 🛡️ |  | 🛡️ | Shields🛡️ |
| Single Weapon🗡️ | 🗡️ |  | 🛡️ | Block🧱 |
| Skill Set🎓 | 🎓 |  | 🥊 | Natural Weapons🥊 |
| Skill🎓 | 🎓 |  | 🥊 | Unarmed 🥊 |
| Term📖 | 📖 |  | 💀 | Affliction💀 |
| Tools & Equipment🛠️ | 🛠️ |  | 💀 | Critical💀 |
| Traits🎭 | 🎭 |  | 💀 | Hazard💀 |
| Travel & Animals🐴 | 🐴 |  | 🎓 | Skill Set🎓 |
| Tremendous🌟 | 🌟 |  | 🎓 | Skill🎓 |
| Unarmed 🥊 | 🥊 |  | ⚔️ | Combat ⚔️ |
| Usage🔄 | 🔄 |  | ⚔️ | Dual Wield⚔️ |
| Vit❤️ | ❤️ |  | ⚔️ | Weapon⚔️ |
| Weapon & Shield🛡️ | 🛡️ |  | ✨ | Magic Item✨ |
| Weapon⚔️ | ⚔️ |  | ✨ | Magic✨ |
| Wnd🩸🩸 | 🩸 |  | ✨ | Save✨ |
| Writing & Communication✒️ | ✒️ |  | ✨ | Resist✨ |

| 🐉Monster Stats | 🙂Emoji |
| --- | --- |
| Nish🚩 | 🚩 |
| MR👣 | 👣 |
| Atk/Dmg⚔️ | ⚔️ |
| Dod/AR🛡️ (Defense) | 🛡️ |
| Vit❤️ | ❤️ |
| Attributes [💪#/🏃#/👁️#/✨#/🫀#] |  |

Example Monster Stats:

4 Orc Guards (Heavy Leather, Scimitars, Bucklers) 🚩14, 👣10, ⚔️18/12(2), 🛡️16/2, ❤️12 – [💪18/🏃12/👁️10/✨10/🫀12] (Poisoned blades Magic✨ or Weakened).

### 📝 Definitions

This section serves as both the abbreviation reference and the full word definition area for the system. Each entry begins with the common abbreviation (if any), followed by the full term in parentheses. All entries are alphabetized for quick reference.

Ability – All attributes✅, skills🎓, and powers🔥 are abilities.

Ability Roll – Roll #d20 + d(Atr) + Bonus versus a difficulty to determine success or failure. The number of d20 is specified by skilled/unskilled, advantage/disadvantage.

Action🔷 (A, M, P, F) – MetaScape uses the AMP (Attack, Move, Partial) action system that also includes Free actions.

Adv (Advantage) – Gain an extra d20 during an ability roll.

AP🧩 (Adventure Point) – Earned resource spent to advance, learn new powers🔥, or improve stats.

AR🧥 (Armor Rating) – Represents how much damage armor can absorb. Defense is always Dod/AR or Blk/AR; armor is the AR part.

Atk (Attack) – Any offensive roll or strike made with a weapon, power🔥, or ability.

Atr✅ (Attribute) – The five core attributes: Might💪, Motion🏃, Mind👁️, Magic✨, and Moxie🫀.

Critical💀 – A natural 1 on any d20 in an ability roll.

Day – A day in the character’s life (a day in the player’s life is a Session).

Dod (Dodge) / Blk (Block) – The avoidance value an opponent must roll against to land a successful attack. Defense 🛡️ is the category (Dod/AR or Blk/AR).

Dif (Difficulty) – A GM-assigned number that the player’s ability roll must tie or beat to succeed.

Dis (Disadvantage) – Roll one fewer d20 (or 2L20 if unskilled) during an ability roll.

Dmg (Damage) – The raw amount of harm caused by an attack or ability.

Effect – The outcome of using an ability or magic item.

Enc (Encounter) – The series of rounds that make up a combat event.

Equipment – Another word for Gear🧰 (non-magical).

Ext Rng (Extended/Long Range) – A greater range (at disadvantage) that a weapon, ability, or item can reach.

Fatigue – A Minimal amount of Wnds🩸 a PC suffers IF HIT by a monster regardless of PC’s AR🧥 roll.

Focus Die – A resource die (d4–d12) that can be spent to boost a roll, stepping down when used and stepping up on Flood triggers.

g / gp (Gold Piece) – A gold coin; 100 silver (s) = 1 gold (g).

Gear🧰 – Non-magical equipment.

GM (Game Master) – The person running the game and story.

GM Intensity Die – A single d20 used by the GM for fast intensity or NPC vs NPC rolls.

Hit – When an attack successfully lands.

H, Hu (Hurled) – Physically thrown weapons (daggers, axes, javelins, etc.).

Lvl⭐ (Level) – A character’s level, equal to their total AP🧩.

M/H/S (Melee, Hurled, Shot) – Shorthand for weapon types.

Magic Item✨ – Magical items categorized as Minor🍺, Lesser🪄, Greater🪬, or Artifact💫.

Max Block🧱 – The maximum monster damage a melee weapon or shield can block.

Mgt💪 (Might💪) – Attribute✅ for brute force, melee weapons Atk⚔️ and Dmg💥, armor size (Strength Saves), block Def, shields, physical strength, lifting

Mot🏃 (Motion🏃) – Attribute✅ for agility, Nish🚩, movement, hurled weapons Atk⚔️ and Dmg💥 (Reflex Saves), dodge, athletics, dexterity, balance, reflexes, sneaking, acrobatics

Mnd👁️ (Mind👁️ ) – Attribute✅ for logic, knowledge, shot weapons Atk⚔️ and Dmg💥, awareness (Mental Saves), intelligence, personality, wit, charm, persuade, reason, cunning, and mental presence. Governs insight👁️, deception, intimidation, persuasion

Mag✨ ( Magic✨ ) – Attribute✅ for super-natural abilities, Gear, Tech, Cyber (Arcane Saves). Governs spellcasting, channeling Powers🔥and using magical items

Mox🫀 (Moxie🫀) – Attribute✅ for stamina, grit, vitality (Stamina Saves, Death Checks). Governs Vit❤️, death checks, unconscious checks, and most bodily resistance checks

M, Me (Melee) – Weapons swung or stabbed in close combat (swords, daggers, fists, etc.).

MR👣 (Movement Rate) – The number of squares a character or monster can move in one round.

Nish🚩 (Initiative) – Determines turn order in combat.

Opp Atk (Opportunity Attack) – An F action attack using only the weapon in hand (no powers or magic item enhancements).

PC (Player Character) – A player-controlled character.

Player – A person running a character (not the GM).

Power🔥 – An ability that must be learned with AP🧩, has defined usage/action/effect, and modifies rules.

Rng🎯 (Range) – The distance a weapon, ability, or magic item can cover.

Rng🎯 (Ranged) – Weapon group that includes all abilities with notable ranges (i.e. hurled and shot weapons⚔️, Powers🔥 with ranges, etc.)

Rnd (Round) – A single turn in combat in which every monster and every PC performs their AMP actions.

Session – A day in the player’s life, referring to one game session.

S, Sh (Shot) – Ranged weapons that are not thrown (bows, crossbows, blowguns, etc.).

s / sp (Silver Piece) – A silver coin; 100s = 1g.

Skill🎓 – An ability roll using #d20 + d(Atr) + Bonus, usually vs. a GM-set difficulty. Not supernatural; does not alter the world’s rules.

Skill Set🎓 – A logical collection of related skills (e.g., Thievery includes climb, pick locks, stealth).

Stats – All recorded values: Atr, Vit, MR, Def, Atk, Max Block, Actions, Usage, etc.

Tremendous🌟 – A natural 20 on any d20 in an ability roll.

Usage🔄 – The frequency an ability can be used (e.g., 1-Enc = once per encounter).

Vit❤️ (Vitality) – The amount of wounds a character or monster can sustain before death (monsters) or death checks (characters).

Wnd🩸 (Wounds) – Damage sustained after AR🧥 or other reduction is applied.

Wpn⚔️ (Weapon) – A held weapon such as a sword

### 🎲 Die Mechanics

#### Die Notation

Dice notation follows standard TTRPG shorthand. For example, 2d8+12 means roll two eight-sided dice, add the results together, then add +12.

MetaScape uses the classic RPG dice: d4, d6, d8, d10, d12, and d20 (three d20 are useful for Skilled rolls with Adv).

MetaScape also uses the d100, rolled with two d10 (one for tens, one for ones).

Example: a roll of 8 and 2 = 82; a roll of 0 and 8 = 8; a roll of 0 and 0 = 100.

Some d10 use 0–9, others 1–10. In either case, treat 10 as 0.

3H20 → Roll three d20, keep the highest.

2L20 → Roll two d20, keep the lowest.

+#d / –#d → Increase or decrease the die type by # steps, within d4–d12.

Example: d6 +1d → d8; d10 –2d → d6.

d4 is always the minimum; d12 is always the maximum.

Odd Dice (d7, d32, etc.) → Roll the next higher die type, reroll results above the desired range.

Examples: d2 → use d4 (reroll 3–4), d7 → use d8 (reroll 8), d24 or d32 → use d100.

For d14: roll a d20 until you get 1–14, reroll 15+.

If any die is cocked, rolls off the table, is the wrong type, or you forgot a die: reroll the ENTIRE set.

#### Ability Check / Ability Roll

An Ability Roll (also called Ability Check) is:

#d20 + d(Atr) + Bonus vs. Dif

#d20: 2H20 if Skilled, 1d20 if Unskilled. Other options exist for Adv/Dis (see below).

d(Atr) or d💪, d🏃, d👁️, d✨, or d🫀: Roll the base Atr die of the relevant Attribute — (e.g. a simple d4, d6, d8, d10, or d12).

Bonus: From gear🧰, traits🎭, Powers🔥, or situational modifiers. Bonuses may be combined to a Max +5. However, a single bonus can be any number, even beyond +5, such as +8 but such bonuses may not be combined with any other.

Focus Die spends are not flat bonuses and do not touch the +5 cap. They are a separate resource-based die addition, tracked independently.

Penalty :A negative such as -2. There is no max penalty and they ALWAYS combine. However, a penalty to an Atr die or to an ability check may not reduce the roll below 0. So a d✨-2, where the Magic Atr die 4 will result in a roll between 0 and 2 (e.g. d4 rolls a 4 minus 2 is 2, d4 rolls a 1 minus 2 is 0).

Example: A Skilled dagger Atk⚔️ with Might💪 d8 and +1 bonus:

2H20 (rolled 3, 17) → keep 17; d8 (rolled 5); +1 Bonus.

Result = 17 + 5 + 1 = 23.

#### Exploding Attribute Dice

Whenever an Attribute die (or Armor/Damage die) rolls its maximum face, reroll that die and add the new result.

Comparison Rolls: On any check that resolves as a comparison vs. a target (such as skill, attack, or defense rolls vs. Difficulty/Target), this explosion can chain indefinitely — if the reroll is also the max face, roll again, keep adding.

Single Die Rolls: On rolls that yield a single value (such as Damage and Armor rolls), the die follows the Single Die Rule (single-explode capped) — it rerolls once on max face and adds, but that reroll cannot itself explode.

#### Difficulty Ladder

Easy = 10

Medium = 13

Hard = 18

Very Hard = 20

Extreme = 24 Note: Ties always go to PCs.

#### Skilled, Unskilled, Advantage, Disadvantage

Examples use for all of below: Sword Atk⚔️, Might💪 d8, +1 bonus.

Unskilled → 1d20 + d8 + 1.

Skilled → 2H20 + d8 + 1.

Advantage → Add one extra d20, keep highest.

If Unskilled → 2H20 + d8 + 1.

If Skilled → 3H20 + d8 + 1.

Disadvantage → Roll one fewer d20.

If Unskilled → 2L20 + d8 + 1.

If Skilled → 1d20 + d8 + 1.

Note: There is no such thing as double or triple advantage or disadvantage. Once you have advantage additional indications of advantage do not stack - they simply confirm the ONE advantage. Same for disadvantage. If a character has both then they cancel in equal numbers. So in a super rare 2 advantages and one disadvantage there would be ONE advantage.

#### Ability Roll Combinations

This table shows all possible combinations of Ability Rolls (#d20).

| #d20 | Skill🎓? | with Advantage | with Disadvantage | Example (Sword Atk) |
| --- | --- | --- | --- | --- |
| 2L20 |  |  | Unskilled with Disadvantage | 2L20 + d8 + 1 |
| 1d20 | Unskilled |  | Skilled🎓 with Disadvantage | 1d20 + d8 + 1 |
| 2H20 | Skilled🎓 | Unskilled with Advantage |  | 2H20 + d8 + 1 |
| 3H20 |  | Skilled🎓 with Advantage |  | 3H20 + d8 + 1 |

### 🌟 Tremendous & 💀 Critical

All Ability Roll results stand as success or failure regardless of Tremendous or Critical effects. A Tremendous or Critical does not override the numbers — a natural 20 does not guarantee success, and a natural 1 does not guarantee failure. The roll result still determines success or failure. However, Tremendous rolls trigger beneficial narrative effects , and Critical rolls trigger detrimental narrative effects , as determined by the GM🔎.

Tremendous🌟 → Natural 20 on any d20 during an Ability Roll.

Critical💀 → Natural 1 on any d20 during an Ability Roll.

#### Double / Triple Results:

Double Tremendous🌟🌟 → Two natural 20s in one roll (1 in 400 chance).

Triple Tremendous🌟🌟🌟 → Three natural 20s in one roll (1 in 8,000 chance).

Double = very powerful narrative effect .

Triple = astoundingly powerful narrative effect .

Double Critical💀💀 → Two natural 1s.

Triple Critical💀💀💀 → Three natural 1s.

Double = very significant negative effect.

Triple = catastrophic negative effect.

#### Mixed Rolls (Adv + Dis):

Default Rule → Any Tremendous🌟 overrides all Criticals💀. This keeps play simple and favors PCs.

Cinematic Option → An experienced GM🔎 may narrate both effects at once (e.g., a great success with a major setback).🎲 Tremendous & Critical Examples🌟 Tremendous (Natural 20 on a kept die)

Tremendous Attack⚔️ – Your spear thrust impales your target and carries through into the foe directly behind them (roll Dmg💥 on both).

Tremendous Defense🛡️ – A perfectly timed parry twists the attacker’s weapon from their grip — it clatters d4 squares away.

Tremendous Skill Check🎓 – Your climbing grip is flawless; not only do you succeed, but you also set a safe line that lets allies climb at Adv for the rest of the Enc.💀 Critical (Natural 1 on a kept die)

Critical Attack⚔️ – Your greatsword lodges in the enemy’s armor — you deal no Dmg💥 this rnd and must use a P action next turn to wrench it free.

Critical Defense🛡️ – A mistimed Dodge🏃 sends you sprawling into the path of another threat — you go prone, and incoming Dmg💥 is doubled.

Critical Skill Check🎓 – Your attempt to sneak trips a noisy latch; you’re exposed, and nearby monsters gain +2 Nish🚩 this rnd.🌟🌟 Double Tremendous (Two Natural 20s)

Double Tremendous Attack⚔️ – A warhammer strike obliterates your target outright, then ricochets with supernatural force into 1d4 nearby enemies for max Dmg💥 before returning to your hand.

Double Tremendous Defense🛡️ – Your block not only deflects the blow but rebounds it — the attacker suffers their own full Dmg💥, and you may immediately reposition 3 squares and gain +3 Max Block for the rest of the Enc.

Double Tremendous Skill Check🎓 – Your persuasion is so compelling that the guard doesn’t just let you through — he convinces his comrades to fight at your side for the rest of the Enc and remains your lifelong ally.💀💀 Double Critical (Two Natural 1s)

Double Critical Attack⚔️ – Your bowstring snaps and the recoil slices your hand; you take 1 Wnd🩸 and cannot use Rng attacks for the remainder of the Enc.

Double Critical Defense🛡️ – Your shield arm gives way under the impact; your shield is shattered, and you suffer the attack’s full Dmg💥 ×2.

Double Critical Skill Check🎓 – Attempting to disarm a trap, you trigger it catastrophically — not only does it explode for full effect, but it also sets off a chain reaction that brings half the ceiling down (everyone Dodge🏃 vs Dif 15 or suffer 12 Dmg💥 vs AR🧥).🌟🌟🌟 Triple Tremendous (Three Natural 20s — rare!)

Triple Tremendous Attack⚔️ – Reality bends around your strike — your attack slays your foe, arcs lightning to every enemy in sight for triple full Dmg💥, and grants you and your allies +1 Luck🍀 immediately.

Triple Tremendous Defense🛡️ – You intercept the blow in godlike fashion; not only are you unharmed, but you absorb the force and unleash it back as an auto-hit against all adjacent enemies equal to your max Dmg💥 — and it slays the opponent that attacked you.

Triple Tremendous Skill Check🎓 – Your leap clears the chasm so perfectly that time seems to freeze; your allies may cross freely this rnd as though flying, and all of you may cross this chasm at any time without fail.💀💀💀 Triple Critical (Three Natural 1s — catastrophic!)

Triple Critical Attack⚔️ – Your magical weapon catastrophically fails — it shatters beyond repair, and you injure yourself for half your Vit❤️ in Wnd🩸s.

Triple Critical Defense🛡️ – You not only fail to defend but stumble directly into the most dangerous part of the attack — take double Dmg💥 and suffer an Affliction (GM🔎 choice: Stunned, Weakened, Immobilized, etc.), as a pit opens beneath you and you fall 20 feet.

Triple Critical Skill Check🎓 – The ritual backfires explosively — you not only fail but unleash a magical surge that Afflicts allies nearby with random conditions and causes the ceiling to collapse on all for 14 Dmg💥, save vs Dif 18 for half.

### 🎲 GM Intensity Die

The GM🔎 should keep a single d20 for quick, one-off results . This die never uses bonuses, multiple dice, or add-ons. It provides a snap judgment when randomness or intensity is needed.

Uses:

Critical and Tremendous Intensity:

High rolls (toward 20): Means greater intensity — more impactful results (good for PCs in Tremendous cases, bad in Criticals).

Low rolls (toward 1): Means minimal intensity, possibly even canceling the effect.

Answering quick questions:

Do I see any throwable rocks nearby?

Does the pickpocketed target have coins?

Does my rope hold 500 lbs?

Examples resolving NPC vs NPC actions without full rolls:

Atk Intensity (18) → hits.

Dmg Intensity (10) → causes 3 Wnd🩸s❤️.

Def Intensity (8) → hit; AR Intensity (19) → blocks all Dmg.

AR Intensity (20) → blocks all Dmg and disarms opponent.

Optional Rule:

Experienced GMs may roll the Intensity Die for “rough” Tremendous🌟 or Critical💀 resolution. Larger rolls mean bigger effects; smaller rolls reduce the impact. A 1 cancels the effect entirely.

## ✅ Attributes

Each character begins with five core Attributes (Atr✅). Each Attribute is expressed as a die type: d4, d6, d8, d10, or d12. These represent a character’s natural ability in that category.

Might💪 (Mgt) – Brute force, melee weapons Atk⚔️ and Dmg💥, armor size (Strength Saves), block Def, shields, physical strength, lifting

Motion🏃 (Mot) – Agility, Nish🚩, movement, hurled weapons Atk⚔️ and Dmg💥 (Reflex Saves), dodge, athletics, dexterity, balance, reflexes, sneaking, acrobatics

Mind👁️ (Mnd) – Logic, knowledge, shot weapons Atk⚔️ and Dmg💥, awareness (Mental Saves), intelligence, personality, wit, charm, persuade, reason, cunning, and mental presence. Governs insight👁️, deception, intimidation, persuasion

Magic✨ (Mag) – Super-natural abilities, Gear, Tech, Cyber (Arcane Saves). Governs spellcasting, channeling Powers🔥and using magical items

Moxie🫀 (Mox) – Stamina, grit, vitality (Stamina Saves, Death Checks). Governs Vit❤️, death checks, unconscious checks, and most bodily resistance checks

How Attributes Work:

Attribute dice are rolled in Ability Rolls: #d20 + d(Atr) + Bonus vs Dif .

Attribute die values may improve through advancement, starting at d4, d4, d6, d8, d8, with a maximum of d8, d8, d8, d10, d12.

Attribute checks always use the die size tied to the relevant Attribute.

Balance Note:

All Attributes are equally important. Mgt💪 is not inherently better than Mnd👁️, nor Mot🏃 better than Mag✨ or Mox🫀. Players succeed by leveraging their strongest dice in creative ways.

### ✅ Atr Tags

All abilities and items show their governing Atr: Might💪, Motion🏃, Mind👁️, Magic✨, or Moxie🫀 that they provide a buff to or use as an ability roll.

## 🔮 Focus Die

Focus is a core PC resource represented by a single die on the same d4→d6→d8→d10→d12 step ladder as attributes.

The Spend: Once per roll, after seeing the result, a player may roll their current Focus Die and add it to the total.

On a comparison roll (skill, attack, defense check vs Difficulty/Target) — the Focus Die explodes freely/indefinitely on max face.

On a single die roll (Damage/Armor) — the Focus Die follows the Single Die Rule (exploding once, capped).

The Step-Down & Preservation Rule: When a player spends their Focus Die, if the first roll of the Focus Die is 1 or Max (e.g., rolling a 1 or 6 on a d6), the Focus Die remains unchanged at its current size. Otherwise (rolling any number between 2 and Max-1), the Focus Die steps down one size on the ladder (d12 → d10 → d8 → d6 → d4 → Exhausted).

The Flood (Refill): When a Flood event triggers, the Focus Die steps up one size (up to its purchased maximum).

Flood Triggers (+1 step up):

Start of combat.

End of combat.

Taking a short rest opportunity between combats.

Spending a full round doing nothing but "Flooding" (forgoing all actions).

Full Rest: A full night's sleep resets the Focus Die to its purchased maximum.

Focus vs. Luck: Players can use Luck or Focus, but never both on the same roll.

Luck: Redo the whole roll (pure variance mitigation).

Focus: Add to the roll already made (deliberate agency/boost).

## 🧾 Character Creation

Concept First: Any idea works — punk knight, techno-bard, gargoyle hero, soda rogue, etc.

Concept

Concept first: any character idea works.

🎭 Starting Traits

Player Name: Your real name.

Character Name: The name of your character.

Race / Class: The species and archetype you are playing.

Hgt/Wgt/Age: Your height, weight, and age.

Appearance: Height, weight, age, hair, skin, notable features.

Positive Trait: A strength, virtue, or defining talent.

Negative Trait: A flaw, weakness, or vice.

Flair: A unique aspect that makes your appearance or personality really stand out.

Adventuring Goal / Quest: Your character’s driving motivation.

✅ Starting Atr

Assign 2x d4, 2x d6, 1x d8 across Might💪, Motion🏃, Mind👁️, Magic✨, and Moxie🫀.

🔮 Starting Focus Die

Character starts with a Focus Die sized at d4 (purchasable upgrades gated by level, see Advancement).

❤️ Starting Vit

Vit❤️: 10 + 1d(Moxie🫀) (e.g., Moxie d8 = 5+1d8 = 6 to 13).

Only during creation, a 1d(Moxie🫀) roll of 1 may be re-rolled one time, in hopes of a better result.

🎓 1 Starting Skill Set

Skilled in 1 Skill Set🎓 from the Skill Set Table.

⚔️ Starting Weapon

Skilled in 1 specific Wpn⚔️.

Melee Atk/Dmg💥 uses Might💪.

Hurled Atk/Dmg💥 uses Motion🏃.

Shot Atk/Dmg💥 uses Mind👁️.

🛡️ Starting Armor

Skilled in 1 specific armor.

Block (Def)🛡️ is Might💪.

Dodge🏃 (Def) is Motion🏃.

Record the armor’s MR👣.

🔥 3 Powers

A good approach is taking one each of these:

1 A-action Power🔥 usable at least 1-Enc for encounter impact.

1 P-action Power🔥 that you can turn on 1-Rnd so it can be on anytime you are not otherwise using a P action.

1 1-Day Power🔥 for that big WOW factor.

⭐ 1st Level

Your character is 1st Level⭐ (record 1 for Level⭐) and thus has 1 AP🧩.

A good place to spend 1 AP🧩 is one of:

Nish🚩 Skill (Motion🏃)

Death Check Skill (Moxie🫀)

A 2nd Weapon⚔️

A Shield🛡️ (record the shield’s MR👣)

💰 Starting Money

Start with 1 Gold (1g) + 1d100 Silver (s).

🧰 Starting Gear

You already have basic items (food, water, light sources, containers, needed tools).

Choose one personal item of significance (e.g., crown, holy symbol, named sword).

Starting gear is free; GM🔎 may also grant quirky items.

🍺 Starting Minor Magic Item

Begin with one randomly rolled Minor🍺 Magic Item✨ from the general or personal table.

🍀 Starting Luck

Luck🍀: Begin each Session with 3 Luck chits (max 5).

## ⭐ Leveling/Advancement

### Advancement Philosophy

Incremental, not exponential → Growth comes from new tricks, not huge Powers🔥 spikes.

Powers🔥 > Atr → The real fun is in unique Powers🔥, gear, and choices—not just bigger dice.

Cinematic growth → Luck, quirks, and Powers🔥 drive memorable play moments.

Customization first → Players shape advancement to match their character’s story, not a rigid class track.

<!-- @rule:leveling.advancement_steps -->
### ⭐ Step 1 — Level⭐ and AP🧩

At the end of each large encounter at GM’s discretion, every player receives 1 Level⭐ and 2 Advancement Points (AP🧩).

* **Level⭐ Equivalence:** A character's Level⭐ equals their Total Completed Major Milestones ($\text{Level⭐} \equiv \text{Completed Milestones}$).
* **Lifetime AP Earned:** $\text{Lifetime AP Earned} = \text{Character Level} \times 2$. Thus, characters earn 2 AP🧩 per level milestone to spend on horizontal options or vertical step-ups.

**Summary of Leveling & AP Advancement:**
Gain 2 AP per Level

Free Level Advancement
• Manage Vitality — Free Max Vit Roll (Roll & keep higher)

Spend AP to Improve Abilities (1–2 AP):
• Manage Skills — Learn Skill Set (2 AP) | Learn Skill (1 AP)
• Manage Weapons — Learn Weapon (1 AP)
• Manage Armor — Learn Armor (1 AP)
• Manage Shields — Learn Shield (1 AP)
• Manage Vitality — Gain +2 Max Vit (1 AP)
• Manage Powers — Learn Power (1 AP) | Upgrade Power (1 AP)
• Manage Magic Items — Acquire Minor Item (1 AP) | Upgrade Any Magic Item (1 AP)

Special AP Expenditures (2–8 AP):
• Manage Attributes — Step-Up Attribute Die (2–8 AP) | Respec Attributes (1 AP)
• Upgrade Focus Die — Step-Up Focus Die (2–8 AP)
• Gain Capstone Ability — Learn Heroic Capstone (5–8 AP)
<!-- /rule:leveling.advancement_steps -->


### 🎲 Step 2 — Vit❤️ Roll

All of Step 2 below is AP🧩 free and costs no AP🧩.

#### Vit❤️ Max Roll

On each Level⭐, roll for new maximum Vit❤️:

* **Vit❤️ Max Roll Formula:** $\text{Max Vit} = 10 + N \times d(\text{Moxie🫀}) + (\text{Level} \times 2)$
* **Moxie Dice Bracket ($N$) (Capped at 5d):**
  * Levels 1–3: $1d(\text{Moxie🫀})$
  * Levels 4–8: $2d(\text{Moxie🫀})$
  * Levels 9–15: $3d(\text{Moxie🫀})$
  * Levels 16–24: $4d(\text{Moxie🫀})$
  * Levels 25+: $5d(\text{Moxie🫀})$ **(HARD CAP — Prevents late-game HP bloat)**
* This is like “Lucking🍀” Max Vit❤️ (roll a new number and keep the better of the old Vit❤️ or the new Vit❤️). If your Moxie🫀 has increased, you use the new Moxie🫀 number in the formula.

### 💲 Step 3 — Spend AP🧩

Spend your accumulated AP🧩 across 3 structured tiers of progression:

#### Tier 1: Basic Progression & Utility (1–2 AP🧩)

The 1-AP Augment System (Advancement Without Version Trees):

Character advancement relies on Horizontal Augments without rigid hierarchical version trees. Spending 1 AP (🧩) upgrades an existing Power🔥 or Magic Item✨ along one of four non-hierarchical vectors:

* **Vector 1: Mechanical Punch (Effect Augment):** Upgrade damage or healing die tier ($d4 \rightarrow d6 \rightarrow d8 \rightarrow d10 \rightarrow d12$) or expand target count by +1.
* **Vector 2: Action Compression (Economy Augment — MANDATORY BALANCE RULE):** Compress action cost down the compression chain ($\text{AM} \rightarrow \text{A} \rightarrow \text{M} \rightarrow \text{P} \rightarrow \text{F}$) or unlock Mobile Striker split-movement ("You may split your movement before and after this attack"). **Balance Rule:** Action Compression is strictly capped at **1 Compression Upgrade per Power** to prevent dominant action-economy abuse.
* **Vector 3: Synergy / Affliction (Twist Augment):** Attach an Affliction on hit (Stunned 1 rnd, Prone, Weakened -2) or attach a Meta Generator ("Generates 1 Meta even on a miss").
* **Vector 4: Frequency / Range Shift (Usage Augment):** Shift usage frequency (e.g., $1\text{-Enc} \rightarrow 2\text{-Enc} \rightarrow 3\text{-Enc}$ max cap, or $\text{Meta⚡} \times 1$ power reusable via combat momentum) or expand Range Band ($\text{Touch} \rightarrow \text{Short} \rightarrow \text{Medium} \rightarrow \text{Long} \rightarrow \text{Extreme}$). Note: Per-encounter usage upgrades step sequentially ($1\text{-Enc} \rightarrow 2\text{-Enc} \rightarrow 3\text{-Enc}$ maximum).

| Category | AP🧩 Options |
| --- | --- |
| **Powers🔥** | • Gain 1 new Power🔥 (any listed or GM-approved custom) — **1 AP**<br>• Randomly roll one Power🔥. If duplicate $\rightarrow$ gain **1 Free Augment Token** instead of flat +1 — **1 AP**<br>• Upgrade an existing Power🔥 (stronger effect, extra use, or twist) — **1 AP** |
| **Skills🎓** | • Gain skill🎓 in any new SINGLE weapon, armor🧥 or skill🎓 — **1 AP**<br>• Learn a new Skill Set🎓 (e.g., Thievery) — **2 AP** |
| **Gear🧰 & Magic Items✨** | • Gain or upgrade a Weapon, Armor🧥, or Item — **1 AP**<br>• Acquire a Minor🍺 Magic Item — **1 AP**<br>• Upgrade a Magic Item Power🔥 (e.g., $1\text{-Enc} \rightarrow 2\text{-Enc} \rightarrow 3\text{-Enc}$ max cap) — **1 AP** |
| **Vit❤️** | • Gain +2 Vit❤️ — **1 AP** |
| **Atr✅** | • Reshuffle (swap some/all of your Atr✅ dice) — **1 AP** *(Downtime / Milestone Level-Up Only)* |

#### Tier 2: Vertical Progression & Stat Step-Ups (2–8 AP🧩)

##### Vertical Attribute Die Step-Ups

Attribute upgrades are purchased with AP🧩 and are tier-gated by your level. The maximum array of attribute dice you can have is limited by your tier:

| Tier / Level Milestone | Attribute Die Array Max Available |
| --- | --- |
| Level 1 (Starting Array) | 2x d4, 2x d6, 1x d8 |
| Level 1–9 Max Ceiling | 1x d4, 2x d6, 2x d8 |
| Level 10 Tier | 1x d4, 1x d6, 3x d8 |
| Level 25 Tier | 2x d6, 1x d8, 2x d10 |
| Level 50 Tier | 1x d6, 2x d8, 2x d10 |
| Level 75 Tier | 1x d6, 1x d8, 2x d10, 1x d12 |
| Level 100 Tier (Max Cap) | 1x d6, 1x d8, 1x d10, 2x d12 *(Hard cap: Max 2x d12)* |

| Step (per die) | AP Cost (per die) |
| --- | --- |
| d4 → d6 | 2 AP |
| d6 → d8 | 4 AP |
| d8 → d10 | 6 AP |
| d10 → d12 | 8 AP |

**Qualitative Attribute Perks (Fixing "Boring Stat Bumps"):**
* **$d8\text{ Tier Unlocked:}$** Unlock 1 passive utility trait tied to that attribute (e.g., Motion $d8 \rightarrow$ Free Disengage $1\times/\text{encounter}$).
* **$d12\text{ Tier Unlocked:}$** Unlock 1 master perk tied to that attribute (e.g., Moxie $d12 \rightarrow$ Death Resistance; Mind $d12 \rightarrow +1\text{ extra tactic slot}$).

##### Vertical Focus Die Upgrade

You can purchase upgrades to your maximum Focus Die ceiling using AP🧩, subject to level gates:

| Focus Max | Level Gate | AP Cost |
| --- | --- | --- |
| d4 → d6 | 1+ | 2 AP |
| d6 → d8 | 15+ | 4 AP |
| d8 → d10 | 35+ | 6 AP |
| d10 → d12 | 60+ | 8 AP |

#### Tier 3: Heroic Capstones (5–8 AP🧩) — "Saving" Tier

High-cost capstones designed for build-defining investment and long-term saving anticipation:

| Category | Cost (AP🧩) | Option & Effect |
| --- | --- | --- |
| **Master Technique** | **5 AP** | Combine two known Powers into a single combined-action deployment. |
| **Second Reaction** | **6 AP** | Gain an additional Reaction action per combat round. |
| **Heroic Passive** | **8 AP** | Unlock a signature, narrative-defining passive power or capstone immunity. |

All choices require GM approval. The GM may veto or suggest alternatives if a choice does not fit the campaign.

## 🎓 Skill and Skill Set Rules

### 🎓 Skills

Abilities (weapons⚔️, Armor🧥, skills🎓, Atr✅ rolls) are all unskilled unless explicitly learned with AP🧩 (thus becoming skilled).

This includes Nish🚩, Saves✨, Resistances✨, all weapons⚔️, all Armor🧥, all skills🎓, and all uses of Might💪, Motion🏃, Mind👁️, Magic✨, and Moxie🫀.

Anything learned via AP🧩 is skilled — including a weapon⚔️, Armor🧥, Power🔥, skill🎓, or Skill Set🎓.

Exception: Magic Items✨ are always skilled. This prevents messy tracking and fits the theme. A magical Dagger of Dancing does not grant dagger skill — its Dancing Power🔥 is skilled, but normal Atk⚔️ with the dagger is still unskilled unless Daggers are learned with AP🧩. The same applies to Armor🧥 and shields🛡️.

When a skill🎓 is rolled, its Atr✅ is used (e.g., Acrobatics🏃 = Motion🏃 check). All skills🎓 may be attempted unskilled. This includes Stealth🏃, climbing, identifying a Magic Item✨, etc.

### 🎓 Skill Negotiation

Skills🎓 are intentionally open-ended . When a player uses a skill:

The player states what they want to achieve .

The GM🔎 sets a Dif (or proposes a different framing).

The player may negotiate — proposing tools, narrative creativity, staged attempts, or background justification to alter the Dif.

If both sides agree, the player rolls the ability check (Skilled = 2H20, Unskilled = 1d20).

This creates flexibility: players may attempt anything, limited only by GM approval.

Example: “I’ll climb in two stages with rope and spikes at half MR👣.” → GM may lower Dif and allow a backup roll on failure.

Example: “I use my healing🎓 with detailed triage, splints, and temple background.” → GM may shift a basic stabilize roll into a chance to restore Vit❤️.

Example: “I add narrative detail to my Stealth🏃.” → GM may set a lower Dif.

### 🎓 GM Guidance for Setting Dif

When setting or modifying Dif, the GM🔎 should weigh:

The skill’s name and scope.

The character’s background.

The creativity of the player’s narrative approach.

The role of the skill in the adventure/campaign.

Any unusual effects that help or hinder.

Overall fairness and balance in play.

Dif should reflect both the task’s challenge and the quality of the player’s solution.

### 🎓 Character Assists

When one PC helps another, the narrative of how is key. The GM may:

Keep rolling normal.

Grant reduced Dif.

Count it as Advantage (extra d20). The GM chooses based on group dynamics and campaign tone.

### 🎓 Skills vs Powers

Powers🔥 are concrete, mechanical, and balanced with usage limits.

Skills🎓 are flexible, narrative tools that can affect the story in small ways.

Skills may alter Dif, reduce damage, grant a minor one-off bonus, or open a path forward.

Skills should not overshadow Powers🔥 — they are meant to be creative, situational, and dynamic.

### 🎓 Skill Sets

A Skill Set🎓 is a logical collection of related skills.

Learning a Skill Set🎓costs 2 AP🧩 and makes all skills🎓 in that set skilled.

The same skill🎓 may appear in multiple sets, possibly with different Atr✅. This is intentional.

Sets are not exhaustive — the GM may approve additional related skills not listed.

## ⚔️ Weapon Rules

### Uplifting Damage

Weapon Atk = Might💪 (melee), Motion🏃 (hurled) or Mind👁️ (shot).

If a weapon that has two Types (Me/Hu for Melee and Hurled), the weapon need only be learned once, but each type (Melee and Hurled) are separately recorded (use two lines on the character sheet’s weapon’s table.

All weapon Dmg💥, except multi-attacks, may be uplifted. This applies ONLY to Dmg💥, not Block🧱.

Uplifting raises a weapon’s Dmg💥 die up to the wielder’s relevant Atr✅.

Example: A dagger (d4) wielded by a character with Might💪 d8 deals Dmg💥 at d8 instead of d4. The resulting Damage die follows the Single Die Rule (single-explode capped).

Multi-attack Dmg💥 dice are never uplifted.

### Multi-Attack

Multi-attack is always an option if requirements are met. Some Powers🔥 may add further options.

You may multi-attack if the sum of all weapon Dmg💥 dice is ≤ your Atr✅ die.

Example: With a dagger (d4), a character with Might💪 d8 may make two attacks (1d4 and 1d4 Dmg💥). With Might💪 d12, they may make three attacks (three 1d4 Dmg💥 rolls).

Each multi-attack is a separate Atk⚔️ and Dmg💥 roll. Attacks may target a single foe multiple times or be split among adjacent targets. Apply the Single Die Rule (single-explode capped) to all damage dice results.

Multi-attack can be done with:

Single weapon (e.g., one dagger).

Dual wielding identical weapons (e.g., two daggers). Number of attacks/targets is unchanged.

Dual wielding different weapons (e.g., dagger d4 + sword d6). In this case, Might💪 must equal or exceed the combined dice (d10+).

### Opportunity Attacks (Break From Melee)

If a PC or monster disengages from melee before the opponent’s Nish🚩, the disengage works without penalty (no opportunity attack).

If a PC or monster disengages from melee on or after the opponent has Nish🚩, it creates an immediate opportunity attack by all opponents engaged in that melee (regardless of who engaged first).

Opp Atks (Opportunity Attacks) may only use the melee weapon in hand or Brawl (no ranged weapons, Powers🔥 or Magic Item enhancements).

Other actions that count as a “Break From Melee” include:

When in melee, casting a spell at a target other than those engaged.

When in melee, attacking with Rng weapons against a target other than those engaged.

When in melee, performing distracting actions such as quaffing a potion.

## ⚔️ Combat Styles Rules

There are four primary combat styles in MetaScape. By default, the core rules treat them similarly; distinctions and advantages mainly come from Powers🔥.

#### Requirements

Single Weapon🗡️ - Only usable during Single Weapon combat style (e.g. a single weapon with no shield)

Dual Wield⚔️ - Only usable during Dual Wield combat style (e.g. a weapon in each hand)

Weapon & Shield🛡️ - Only usable during Weapon & Shield combat style (e.g. a shield and one-handed weapon)

Martial Arts🥋 - Only usable during Unarmed🥊 combat style (e.g. Brawling)

### 🗡️Single Weapon

Fighting with a single weapon⚔️, one-handed or two-handed.

Emphasizes precision and Powers🔥.

### ⚔️Dual Wield

Fighting with two one-handed weapons⚔️. Emphasizes speed and versatility.

Rules:

You may Block🧱 using the better weapon’s Block value.

You may Atk⚔️ with either weapon, but only one Atk⚔️ per rnd unless a Power🔥 allows more attacks or you use the default Multi-Attack rules.

Two-handed weapons⚔️ cannot be dual wielded.

Utility tasks (opening doors, drinking potions, etc.) require a Partial (P) action (sheath one weapon⚔️, perform the action, retrieve the weapon⚔️).

### 🛡️Weapon & Shield

Fighting with a one-handed weapon⚔️ in one hand and a shield🛡️ in the other.

Emphasizes balance between offense and defense.

Shields🛡️ restrict the off-hand: you cannot normally hold a torch or item in the shield hand and remain effective.

Utility tasks (opening doors, drinking potions, etc.) require one Partial (P) action (awkwardly holding the weapon⚔️ with the shield🛡️ hand while using the free hand).

### 🥊 Unarmed or Natural Weapons

Natural weapons🥊 (Brawl and Throw Object) cannot Block🧱 and have no coin cost. They are Unskilled unless skill🎓 is taken in each one. Dmg💥 is rolled at –1d below the governing Atr✅ (minimum d4).

Brawl🥊 – Covers all natural attacks such as punch, kick, tackle, grab, throw, hold, etc. It also includes racial natural weapons such as claw, bite, or tail sweep.

Martial Arts🥋 – An advanced form Brawl🥊 provided through Martial Arts Powers🔥.

Improvised (Melee) - An improvised melee weapon (chair, board, candelobra, torch, etc.) all fit into this category.

Throw Object – Applies to all logical thrown projectiles such as a rock, mug, or other improvised items.

Weapons marked Hu (Hurled) use their normal weapon Atr✅ and rolls and are not treated as thrown objects.

With GM🔎 approval, non-hurled weapons⚔️ (such as a short sword) may be thrown as improvised objects. In this case, all Throw Object rules apply.

#### Off-Hand Use

A free off-hand (when using a one-handed weapon⚔️) allows carrying utility items such as a torch, lantern, Magic Item✨, or flask.

With two-handed weapons⚔️, this still applies: you may temporarily shift the weapon⚔️ into one hand to free the other for item use.

Note: This advantage does not exist when dual wielding or using Weapon & Shield🛡️.

## Armor & Shields

### 🛡️ Shields

All Armor’s Defense (Dod/AR or Blk/AR): Dodge 🤸 = Motion🏃, Block 🧱 = Might💪.

Shields🛡️ provide a Max Block🧱 rating, which functions the same as weapon⚔️ Max Block (it applies if the shield’s Max Block🧱 is ≥ the monster’s Dmg💥).

The key advantage of shields🛡️ is that their Block🧱 is rolled at +1 die step above the Might💪 requirement. The tradeoff is reduced MR👣 and tying up your off-hand.

MR👣 impact applies only when the shield🛡️ is wielded (drawn and readied).

Small shields🛡️ (bucklers, bracers, vambraces) offer mobility and count as part of regular Armor🧥; they are not large enough to be considered true shields🛡️ in MetaScape.

Large shields🛡️ provide greater Max Block🧱 protection but impose greater limits on mobility.

## ⚔️🛡️ Combat Sequence

### ⚔️ Combat (Player Attacking)

Choose Target & Atk⚔️ — Action is (A).

Roll to Hit: if Skilled, roll 2H20 + Atr✅ Die + Bonus vs Monster Def (5–20). If Unskilled, roll 1d20.

Atr✅ Die = the weapon’s governing Atr✅ (Might💪 for melee, Motion🏃 for hurled, Mind👁️ for shot, Magic✨ for spell attacks). Since this is a comparison roll, the Attribute die explodes indefinitely on max face.

Tremendous🌟 (20 on d20). Critical💀 (1 on d20).

On Success → Roll Dmg💥: 1 die (d4–d12) plus any bonus. This follows the Single Die Rule (single-explode capped).

Monster Armor🧥: Subtract monster Armor🧥 (0 to 3, rare 4).

Apply Wnd🩸: Add the wounding damage to any existing and record it next to the monster. Once ≥ the monster’s Vit❤️, the monster dies.

Special Rule — Opportunity Attacks

An Opp Atk means that an immediate (no action cost) Atk⚔️ may be made.

Normally, Opp Atks must be a vanilla Atk⚔️ (no Power🔥 or Magic Item✨ use).

Notes:

Area or special effects still require an Atk⚔️ roll unless stated otherwise.

Area and multi-attacks make separate Atk⚔️ and Dmg💥 rolls for each attack.

### 🛡️ Combat (Player Defending – Monster Attacking)

Monster Declares Atk⚔️.

Player Defense Roll: 2H20 + Atr✅ Die + Bonus using:

Might💪 (Block🧱): if armed with equal/larger Max Block🧱 weapon⚔️ or shield🧱.

Motion🏃 (Dodge): nearly always valid.

Magic✨ (Resist): for undodgeable arcane/mystical effects (fire, acid, explosion, magical effects).

Moxie🫀 (Resist): for bodily/stamina effects (poison, exhaustion, vitality, physical endurance).

Note: Since this is a comparison roll, the Attribute die explodes indefinitely on max face.

Beat Monster Atk⚔️ (10–24) → Avoid Dmg💥.

If Defense Fails → Player Armor AR🧥: Roll armor die (d4–d12) and subtract result from Monster Dmg💥. The remainder = Wnd🩸. This armor die roll follows the Single Die Rule (single-explode capped).

Note the Block🧱die is never rolled in lieu of armor as the Block defense MISSED. Thus the blow has hit the character’s AR🧥.

Monsters also list a Fatigue Wnds🩸. If your AR🧥 results in less Wnds🩸 than the Fatigue Wnds🩸, the character suffers the indicated Fatigue Wnds🩸instead. Fatigue Wnds🩸do NOT trigger Afflictions if the AR🧥roll would have stopped ALL of the Dmg💥.

Apply Wnd🩸: Add to your total Wnd🩸.

If Wnd🩸 ≥ Vit❤️ → you are unconscious.

If Wnd🩸 > Vit❤️ → you must also make a Death Check each rnd.

Death Checks

Death Checks = Moxie🫀 roll vs Dif = 5 + (Wnd🩸 – Vit❤️).

Example: Vit❤️ 20 with 23 Wnd🩸 → Dif = 8.

Bleeding

After each Death Check, Wnd🩸 always increase by 1 unless you receive bandaging, wound care, or healing.

Left unattended, an unconscious PC will slowly bleed out (Wnd🩸 increase 1/rnd until they eventually fail a Death Check).

## 📅 Days and Encounters

### 📅 Days

A new Day📅 begins each new character day (after sleep).

A new Day📅 automatically starts a new Enc (see below).

When characters start their new Day📅, they are in a new Day📅 and a new Enc.

### 🎲 Encounters

The game’s Days📅 are broken into Encs.

An Enc is both the mode the game enters when the GM🔎 calls for first Nish🚩 and the game proceeds rnd by rnd (often during combat or other intense timing events).

The period between such combat encounters is ALSO an encounter - a roleplaying Enc.

Example sequence:

Enc 1 (Roleplaying): The party meets in a tavern with heavy roleplaying.

Enc 2 (Combat): A fight breaks out and the game switches into Rnd mode.

Enc 3 (Roleplaying): After the fight, the party searches opponents, rests, visits an inn, and sleeps.

Each of these is classified as an “Enc” in MetaScape. This approach means an Enc can either be a combat Enc⚡ or a roleplaying Enc.

This classification defines #-Enc ability use.

Example: A healer who can heal 2-Enc may heal 2 times per Enc (2 in each combat encounter AND 2 in each roleplaying encounter).

In the sequence above, they could heal 6 times in total (2 each in 3 Encounters).

### ⚔️ Combat Encounter – Initiative & Rounds

Nish🚩: Common abbreviation for Initiative. Used interchangeably in rules and table talk.

Nish🚩 Check: PCs roll Motion🏃 vs Monster Initiative.

Order of Play:

All PCs above Monster Initiative🚩 (+1 to all rolls).

All Monsters (as a group).

All PCs below Monster Initiative🚩.

Nish Reward: PCs who beat Monster Initiative🚩 gain +1 on all rolls until the monster’s turn.

Round Sequence:

Determine Nish🚩 order.

Turns – Each PC/Monster takes a turn on their Nish🚩.

A turn = AMP or 1 Atk⚔️ (A) + 1 Move (M) + 1 Partial (P).

No split movement (cannot Move → Atk⚔️ → Move, but can Move → P → Move).

On Nish🚩 of afflicted – New Resistance/Save checks vs hazards (Stunned, Weakened, Immobilized, Poisoned, etc.).

### 💤 Roleplaying Encounter – Rest & Recovery

After a combat encounter, the roleplaying encounter will often begin with post-combat rest.

Roleplaying Enc Rest (after battle): Regain d4 Vit❤️. Max 1 rest per Enc.

Day Rest (sleep/new Day📅): Regain 2d4 Vit❤️, resets all #-Day abilities.

## Abilities (Powers🔥, Magic Items✨, Skills🎓)

#### 

🪄 Magic Item Parity

Magic Items function EXACTLY like Powers🔥 (they are simply powers granted by item ownership). All rules for action budgets (AMP), usage frequencies, Meta costs (Meta⚡x#), and 1-AP augments apply identically to Magic Items.

#### 📜 System Architecture: Power & Magic Item Grammar

To ensure absolute clarity without rulebook arguments or bloat, every Power🔥 and Magic Item✨ follows a standardized, single-sentence Power Grammar:

Name | Budget (Action / Usage) | 1-Sentence Mechanical Effect

Example Entries:

* Discordant Chord | A / 1-Rnd → Magic✨ attack vs all Short foes for d4 Dmg.
* Cyclone Kick | A / 1-Enc → 1-⚡ → Motion🏃 attack dealing d8 Dmg and pushing target d4 sq.
* Blade Parry | F / 2-Enc → On hit in Melee: Auto-succeed a weapon Block🛡️ (up to Max Block).
* Bardic Bluff | P / 1-Enc → Mind👁️ check vs target's Mind👁️ with Advantage (2H20) to deceive or distract.
* Frost Pebble (Minor Item) | A / 1-Enc → Hurled Motion🏃 attack vs Short target for Magic✨ + d4 Cold Dmg.

All abilities have a Usage🔄 , Action🔷 , Duration⏳ , and Range🎯 .

Often these are self-evident and do not need explanation.

Example: An ability that heals the user 1 Vit❤️ as a 1-Enc, P action would have a duration of instant (heals immediately) and an implied range of “self.”

Additional guidance is below:

### 🔄 Usage & The Meta Engine (⚡)

How often an ability (Power🔥 or Magic Item✨) can be used:

| Usage Metric | Mechanics & Refresh Trigger | Role in Pacing & Psychology |
| --- | --- | --- |
| 1-Rnd | Refreshes every round on Initiative (Nish🚩). | Bread-and-butter attacks, basic spells, and minor item triggers. |
| 1-Enc / 2-Enc / 3-Enc | Refreshes immediately when combat resolves (Max 3-Enc). | Battlefield setups, stances, defensive triggers, utility resets. |
| 1-⚡ (1-Meta / 5 Sparks) | Consumes 1 full Meta (5 Sparks, 5⚡︎). Usable max 1 time per encounter (1-⚡ implies 1-Enc). | High-impact burst, combos, or area control. Earned dynamically via Sparks in combat or roleplaying. |
| 1-Luck (Chit) | Consumes 1 Luck chit (🍀). | Cinematic interrupts, heroic saves, clutch auto-defenses. |

#### ⚡ Meta Generation & Spark (⚡︎) Rules

- **5 Sparks = 1 Meta:** It ALWAYS takes a full Meta (5 Sparks or 5⚡︎) to power a Meta-using ability. All Meta abilities indicate this in the Usage column as **1-⚡** (representing 1-Meta). There are no 2-⚡ or 3-⚡ costs.
- **Spark Events (⚡︎):** Charging up or building to a Meta occurs via Sparks earned in gameplay:
  - **Tremendous or Critical Rolls:** Gain 1⚡︎ for every natural 20 or natural 1 on the base d20 die of a typical ability roll.
  - **Exploding Die Events:** Gain 1⚡︎ per exploding die roll (if a die explodes 4 times in a row, gain 4⚡︎). Applies to ANY ability roll (Skill, Attack, Defense, Focus, etc.).
- **Charged State:** A character with a full Meta (5 Sparks) is Charged. While Charged, they gain +1 to ALL rolls until they spend their Meta or the encounter ends.
- **Encounter Transition & Zeroing Out:**
  - If a character reaches a full Meta (5 Sparks) in an encounter, then at the end of that encounter their Sparks zero out (reset to 0⚡︎).
  - Otherwise, if they end an encounter with fewer than 5 Sparks (<5 Sparks), their Sparks carry over into the next encounter. (Characters are continuously transitioning between encounter types, whether combat or roleplaying).

> [!NOTE]
> **Elimination of Daily Hoarding (X-Day)**
> High-tier daily powers are converted into Meta powers (1-⚡) or 1-Luck powers. Players no longer hoard powerful abilities for boss fights that never come; they earn them dynamically in every fight through tactical play and dice momentum.

#### 🧠 Game Theory & Psychology ("My Game Theory")

- **Built-in Delay:** Requires 5 Sparks to gain a Meta, introducing natural tactical delay for high-impact abilities.
- **Dopamine Rewards:** Gives immediate positive feedback (dopamine hit) anytime a player rolls a Tremendous (nat 20), Critical (nat 1), or Exploding die.
- **Pavlovian Random Anticipation:** Because a player could gain multiple Sparks in a single round from exploding dice, players never know exactly when a full Meta (5⚡︎) will hit, driving engagement.
- **Active Play Incentive:** Directly rewards active participation in encounters (taking actions, making rolls, and Focusing to trigger exploding dice).


### 🔷 Actions

Mobile Striker Clause (Split-Movement Override): Standard Rule: Taking an Attack (A) action forfeits all remaining Movement Rate (MR). Specialized Move (M) or Partial (P) powers or magic items can explicitly override this rule ("You may split your movement before and after this attack"), giving clear tactical identity to mobility-based builds.

What an ability costs on your turn:

A (Attack⚔️): Any weapon Atk⚔️ or ability using an A actiont.

M (Move👣): Any movement ≥1sq, ability using an M action.

P (Partial): Minor tasks (see list below), abilities using a P action.

AM: Both Attack⚔️ + Move👣; you may still use your one P.

F (Free): No cost; anytime. Limit: GM discretion.

Action Rules:

Each rnd you get: 1 A⚔️, 1 M🏃, 1 P → AMP system .

Unlimited Free (F) allowed (within GM reason).

Powers🔥 and Magic Items✨ specify Actions clearly. Skills🎓 default to P unless GM rules otherwise.

Actions are never interchangeable (cannot trade A or M for P, etc.).

Never exceed 1 A, 1 M, and 1 P per rnd.

Movement rule: If you move ≥1sq, it always consumes your M action (even if MR = 10 and you only move 1sq).

If you do not use A Action, you may split MR (move → pause → move).

If you use A Action, any leftover MR is lost (cannot Move-Atk-Move unless a Power🔥 or Magic Item✨ allows it).

Examples of Partial (P) Actions:

Open/lock a door.

Draw weapon⚔️

Don shield🛡️.

Pick up an item.

Stand from prone.

Cross rough terrain.

Drink or Eat non-magical liquid or food

A brief talk.

Run: add +d(MR) to MR for rnd. Use die ≤ MR

Drink a potion

Examples of Free (F) Actions:

All Def🛡️ rolls (Block🧱, Dodge🏃, AR🧥).

Any Save or Resistance.

GM-requested roll (e.g., GM asks for Awareness👁️).

Face change.

A few words.

Sheath weapon⚔️, or un-don (put away) a shield🛡️.

Drop an item

Kneel, dive prone.

Close a door.

#### 1 Round Action Examples

Charge and Strike → Move (M) across the battlefield, Attack (A) with your longsword, and Partial (P) to draw a shield mid-swing.

Shoot and Relocate → Attack (A) with a bow, Move (M) behind cover, and Partial (P) to drop prone.

Dagger Flurry → Attack (A) twice using a multi-attack (if your Might allows), Move (M) to shift one square, and Partial (P) to kick a chair into an opponent’s path (but NOT at an opponent which would be an illegal 2nd Attack (A) action).

Defensive Prep & Punch → A hands free character: Move (M) into position, Partial (P) to don a shield, and Attack (A) with a punch (Brawl) as there isn’t another Partial (P) action to also draw out a weapon.

Potion Break → Attack (A) with a mace, Partial (P) to quaff a healing potion, and Move (M) toward safety.

Battlefield Control → Move (M) to a doorway, Free (F) to slam it shut, and Attack (A) to strike an enemy adjacent.

Quick Cast → Attack (A) with a spell (firebolt), Move (M) three squares back, and Partial (P) to activate a magical trinket.

Opportunistic Fighter → Attack (A) with dual weapons, Move (M) around the enemy to flank, and Free (F) to shout a warning to allies.

Agile Scout → Move (M) your full MR across rough terrain, Partial (P) to make an awareness check to potentially see a hidden foe, and Attack (A) with a hurled dagger.

Show of Flair → Attack (A) with a rapier, Free (F) to bow dramatically (Flair trait), Move (M) into cover, and Free (F) to verbally taunt your opponent.

Shoot and Run → Attack (A) with a bow, Move (M) down the hallway, and Partial (P) to run (adds d(MR)) further.

### ⏳ Duration

Default = 1 rnd unless otherwise stated/obvious.

1 rnd: Effect begins immediately and lasts until the user’s next Nish🚩.

Example: Used at Rnd start, effect ends when that PC’s next Initiative🚩 arrives.

Design Goal: Minimal tracking. Durations should be obvious, instant, 1 rnd, or entire Enc. Avoid multi-rnd tracking.

### 🎯 Range

Powers🔥 and Magic Items✨ eliminate exact square/footage measuring in favor of 5 natural Range Bands:

* Touch / Melee: Adjacent (≤ 1 sq).
* Short: Engagement zone / same room (≤ 6 sq).
* Medium: Across the battlefield / line of sight (≤ 12 sq).
* Long: Extended sight line (≤ 24 sq).
* Extreme: Beyond standard grid boundaries (≥ 25 sq, requires Disadvantaged roll 2L20 / 1d20).

## 💀 Hazards / Afflictions

Note: Hazards / Afflictions - terms are synonymous.

Examples:

Stunned: Lose AM actions.

Weakened: –2 rolls & MR👣–2.

Immobilized: Cannot move.

Frozen, Paralyzed, Poisoned, Burning, Held (magical/physical), etc.

Rules:

Afflictions do NOT have a stated duration (no “for 1 rnd” or “for encounter” etc. - no duration), rather they last until the target saves.

Each rnd on their Nish🚩, PCs get an F save roll vs each affliction on themselves.

On Monster Nish🚩, PCs who caused afflictions to that monster roll again (Skill🎓 vs Monster Atr✅) to see if it persists on the monster.

If an Affliction triggers upon PC Wounds🩸, do note that Fatigue Wnds🩸 does NOT count as a trigger as the wounds🩸 are Fatigue only bruising/tiring no skin contact or piercing is implied. But if the PC’s AR roll did not stop all the actual DMG, then part of the Fatigue Wnds🩸did touch and pierce skin, so the affliction does apply.

## 🍀 Luck

#### 

🍀 The Luck Twist (Rule of 1)

When activating any Power🔥 or Magic Item✨, a player may spend 1 Luck chit (🍀) from their pool to apply a dynamic "Rule of 1" modification (+1 / -1) to that activation.

Permitted "Rule of 1" Modifications (Pick One per Luck Chit):

* -1 Meta Cost: Reduce the Meta cost of the power/item by 1 Meta (⚡). (e.g., Reduce a ⚡x2 Surge power down to ⚡x1, or a ⚡x1 power to 0 Meta).
* -1 Action Budget: Compress the action cost down by 1 action step (AM → A → M → P → F). (e.g., Activate an Attack (A) power as a Partial (P) action, preserving your main Attack).
* +1 Target: Add +1 target to the power or magic item's effect. (e.g., Strike 2 adjacent foes with a single-target melee/spell power).
* +1 Die Tier: Increase the damage or healing die by 1 die step (d4 → d6 → d8 → d10 → d12). (e.g., Uplift a d6 Dmg spell to a d8 Dmg strike).
* +1 Range Band: Expand the range of the power/item by 1 Range Band (Touch → Short → Medium → Long → Extreme). (e.g., Cast a Short-range spell across the battlefield at Medium range).
* +1 Push / Move: Add +1 sq to any movement, push, or pull effect. (e.g., Push a target d4+1 sq back into a pit or hazard).

Play & Integration Rules:

* Limit: Maximum 1 Luck Twist (🍀) per power/item activation (cannot stack multiple Luck chits on the exact same roll).
* Instant Adjudication: No character sheet editing required. The player simply announces: "I'm burning a Luck chit 🍀 for a Rule of 1 target/range boost!"
* Magic Item Parity: Applies 100% identically to Magic Items (e.g. spending a Luck chit 🍀 to make a potion quaff a Free action or give a wand +1 target).

Default Use: Reroll entire roll (all dice), keep best (original or reroll).

Cannot reroll partial dice (must reroll all involved dice).

Cannot reroll if a Crititcal💀 occurs.

Cannot use more than once on a particular roll (no “second Luck🍀”).

Luck vs Focus: Luck = redo the whole roll (pure variance mitigation); Focus = add to the roll already made (deliberate agency/boost). A player can use Focus or Luck on a single roll, but never both. They cannot be combined to "fish" for unbeatable outcomes.

Starting Luck🍀: 3 chits.

Earning Luck🍀: Awarded for cool, funny, or heroic play (max 5).

Other Uses: May be spent for special learned Luck Powers🔥 (e.g., Lucky Dodge, Inspire Ally, Twist of Fate).

## 💰Treasure

If the encounter does not list specific treasure, a treasure roll is typical after any major encounter or after any encounter that would warrant treasure. If the encounter was minor, skip the roll or the roll could be 2L100, if it was major it is typical to allow multiple rolls (e.g., each player makes two rolls). GMs will find a treasure balance that works for their campaign.

### 📜 Quick Notes

Art/Jewelry can be re-flavored (figurines, ivory carvings, crowns, chalices).

Curios/Documents can be pure flavor (maps, books, IOUs) or actual adventure hooks.

Junk is intentionally silly or useless — adds levity.

Magic Items roll on the proper table:

## 📊 System Tables & Catalogs


---

## 📊 SupaFlex Reference & Data Tables

> [!TIP]
> **Explore Powers, Magic Items, Skill Sets, Gear, Equipment & Monsters:**
> Use our modern **[Interactive Tables Catalog](/player-guide/supaflex/tables)** to filter, search, and view all game data instantly.
> Alternatively, browse individual static reference guides:
> - ⚔️ **[Weapons Reference Manual](/player-guide/supaflex/weapons)**
> - 🧥 **[Armor Reference Manual](/player-guide/supaflex/armor)**
> - 🛡️ **[Shields Reference Manual](/player-guide/supaflex/shields)**
> - 🧰 **[Gear Catalog](/player-guide/supaflex/gear)**
> - 🐉 **[Monsters Bestiary](/player-guide/supaflex/monsters)**
> - 🔥 **[Powers Reference Manual](/player-guide/supaflex/powers)**
> - ✨ **[Magic Items Catalog](/player-guide/supaflex/magic-items)**
> - 🎓 **[Skill Sets & Skills Directory](/player-guide/supaflex/skillsets)**

---



> [!TIP]
> All SupaFlex game tables—including Weapons⚔️, Armor🧥, Shields🛡️, Gear🧰, Monsters🐉, Powers🔥, Magic Items✨, Skill Sets🎓, and Treasure💰—have been migrated to our structured database catalog.
> - Browse the **[Interactive Tables Catalog](/player-guide/supaflex/tables)** to filter, search, and view all game stats dynamically.
> - Or explore individual reference manuals:
>   - ⚔️ **[Weapons Reference Manual](/player-guide/supaflex/weapons)**
>   - 🧥 **[Armor Reference Manual](/player-guide/supaflex/armor)**
>   - 🛡️ **[Shields Reference Manual](/player-guide/supaflex/shields)**
>   - 🧰 **[Gear Catalog](/player-guide/supaflex/gear)**
>   - 🐉 **[Monsters Bestiary](/player-guide/supaflex/monsters)**
>   - 🔥 **[Powers Reference Manual](/player-guide/supaflex/powers)**
>   - ✨ **[Magic Items Catalog](/player-guide/supaflex/magic-items)**
>   - 🎓 **[Skill Sets Directory](/player-guide/supaflex/skillsets)**
>   - 💰 **[Treasure Tables & Loot Matrix](/player-guide/supaflex/tables)**

## 🐉 Monster Manual

The complete bestiary of monsters, stats, initiative flags, attributes, and special abilities is hosted in our online **[Monsters Bestiary](/player-guide/supaflex/monsters)** and the **[Interactive Tables Catalog](/player-guide/supaflex/tables)**.

## 💰 Treasure

If the encounter does not list specific treasure, a treasure roll is typical after any major encounter or after any encounter that would warrant treasure. If the encounter was minor, skip the roll or the roll could be 2L100; if major, allow multiple rolls (e.g. each player makes two rolls). GMs will find a treasure balance that works for their campaign.

> [!TIP]
> **Dynamic Treasure & Loot Matrix:**
> All 5 treasure determination tables (Master d100, Gear Quality, Art & Gems, Curios & Documents, and Junk) reside in our single-source-of-truth database.
> - Roll loot dynamically using the **[Loot Generator Modal](/player-guide/supaflex/tables)** in SupaFlex.
> - View the complete treasure matrix in the **[Interactive Tables Catalog](/player-guide/supaflex/tables)**.


## 🔎 GM Tricks

This section covers a number of great GM tricks and examples to help your game run even more smoothly. All tricks/rules herein are optional and may be incorporated into your game sessions at the GM’s discretion. Some of these tricks are more advanced rules that can be incorporated once the GM and their group has fully grasped the base rules.

## Helper - Bleeder




Assign one player as the “Bleeder.” The Bleeder is a GM helper who’s job it is to track all monster wounds for the GM. For example, if you use a write on board or mat, give them a red pen and if Orc A takes 5 Wnd🩸s it is the Bleeder’s responsibility to place a 5 next to Orc A. If that orc later takes another 3 Wnd🩸s, the Bleeder will change the 5 to 8. Also as you, the GM, move the monster around the board, it is the Bleeder’s responsibility to erase the old Wnd🩸 number and place it adjacent to the monster’s new location. Finally, you can assign the Bleeder (if they are an experienced gamer) or some other helper to track monster death. This helper will always ask you what the Vit❤️ of each monster type is and they’ll let everyone know when a monster should die due to Wnd🩸s being >= their Vit❤️. Once you train your Bleeder up, you are largely freed up, as GM, from this common set of tasks.

## Ranged Atk into Melee

A great optional rule (for the experienced GM) is to place risk (danger) anytime a ranged weapon (hurled or shot) is used at a target engaged in melee. In the real world, melee is a highly agitated state of micro moves, dodges, etc. and it is very hard to target your intended victim and easy to hit your ally. So, the rule is, if that attacker misses the desired enemy target (normal Atk roll), they have a 50/50 chance of hitting their melee involved ally. Simply have them roll a d6 and 1-3 = Atk auto-hits ally (Roll normal Dmg and Ally rolls normal AR🧥).

## Random Direction

Often you will need to determine a random direction such as when someone is disarmed or if a hurled item misses. A great way to do this is to have the involved player roll a d12 to represent the hours of a clock (ALWAYS from the GM’s point of view) thus a 12 is away from the GM, 3 is to the right, 6 toward the GM, 9 to the left. And the other numbers are some combination therein. If you also need a random distance, just have the player roll an appropriate die (d6, d8, 2H6, etc.) or you can roll your GM’ s Intensity die.

## Falling, Climbing, Jumping Down

Simple version - when a character falls, the GM assigns an amount of Dmg (e.g. 10) and the player rolls AR🧥 vs that Dmg. There is no Def as you cannot block or dodge the ground - it will Hit you!

I roughly base the Dmg on feet fallen and landing surface (bolder field vs spikes vs sand vs water, etc.). I also reduce the Dmg if the jump was intentional or if the character hung down from a ledge and then dropped the rest of the distance, etc. Finally, realize that setting falling Dmg at 20 is much worse than setting it at 10 as no normal AR🧥 can absorb up all of Dmg 20, but larger armor can absorb most or all of Dmg 10 on a good roll. So Dmg is NOT linear from a character’s point of view.

## Avoid Auto-Hazards

Yes, there are a number of auto-hit, or “PC takes Dmg with no AR🧥” etc., but these are pre-build, typed rules, and your players cannot blame you the GM for “conspiring against them” or treating them unfair. That said, in general avoid an auto-hazard, auto-negative effect, or auto-affliction as this justifiably will frustrate your players as they then have no “control” over these bad effects occurring. The default rule is, a PC should always get at least a single roll to avoid a bad effect (typically a Block, Dodge, or Save). So rather than have a player walking down a sewer tunnel suddenly fall into a 15ft pit, give them an Awareness check. Or if a trapped chest releases poisonous gas, give them a Poison Save, etc. Falling from a climb is already covered as the character had to have failed their climbing roll. Even a character pushed off a cliff had a chance as they failed their Dodge or Block (or Save) attempt versus that which pushed them.

## Difficulty Setting

Yes, the GM setting a difficulty is already the default rule and well explained. However, be VERY careful about slipping into numeric based logic for coming up with difficulties as this will often trap you into a much more complex (and often unbalanced) and nearly always non-cinematic/heroic game. For example, if a PC has Acrobatics skill, do not set the difficulty of vaulting over a 6ft opponent at X and leaping every 5ft of distance as Y*sq, etc. This may seem like a good idea at first, but it rarely ends up being a good rule. Rather, set a difficulty for the vault or leap or acrobatic attempt based upon the situation and the character’s concept. This is VERY open ended, subjective, and will add much more flavor to your game as players learn that they can do things like, “I’m going to try to run down the hall, parcour run 5ft up that wall leap over that orc with a twisting vault and then land in front of the next Orc. The GM then assigns a single difficulty and the player makes a single roll. Much more cinematic, creative, open and does not lock you into looking up detailed tables or rules.

Another reason for this is different GMs or settings, or games. If you are playing a more heroic (super hero) game, then leaping across a 20 ft chasm may be a low Dif. However, if you are playing a hyper realistic WWII based game, a 20ft leap may be impossible or nearly so. Tabling up such detail is rarely a good idea.

Another example is setting climbing difficulties or rules such as a player must check every 10 or 50 or 100ft and that a rough vs smooth vs stone vs glass wall all have some defined Dif or modifier. This gets very messy very fast. Rather, assess the situation (the desired climb, the character, the setting) and assign a Dif. You and your players will usually prefer this approach over artificial rigidity.

## Avoid Complexity - Dur

To keep Flex simple, the designers have gone out of their way to avoid effects that have multi-round Durations (Dur). such as 2 rounds or d4 rounds, etc., as this would require players (and the GM at times) to track this stat per ability. Rather, durations have been pretty meticulously kept to “for this round”, “for 1 rnd”, “for encounter”, etc. Just be aware of this and as you add your own rules consider the implications of adding in multiple round durations.

## Avoid Complexity - Usage beyond 3

To keep Flex simple, the designers have also gone out of their way to avoid Usage past 3. So it is recommended to NOT allow an ability (Power or Magic Item) to progress to 4-Day nor 4-Enc. If the GM decides to allow a Usage progression past 3-Day the next step should be 1-Enc and if the GM decides to allow Usage past 3-Enc, it should become 1-Rnd. That said, both of these steps are a considerable upgrade, especially the 1-Rnd. GM, think about such upgrades carefully and consider game balance.

## Nish Options

There are several methods the GM can choose between when running Nish (PC and Monster Nishes). The tradeoffs are between detail and individual flow and speed of each round. There is not a best approach presented here. Rather each approach has different pros/cons and the GM needs to select the best approach for their current gaming group and campaign.

### Example

For each of the methods below, we’ll use the example of Nish rolls as follows:

PCs

-- Warrior Nish roll of 16

-- Thief Nish roll of 8

-- Mage Nish roll of 2

Monsters

-- Orc Guards Nish of 14

-- Old Kobold Nish of 5

### Method 1 - Individual Nishes

Individual Nishes means that the GM calls on the highest Nish to lowest Nish in order, one by one, including all PCs and all monster types. So using the above example, the Nish sequence would be:

Warrior at 16 (Gets the +1 bonus for beating monsters Nish)

Orc Guards at 14 (+1 bonus ends)

Thief at 8

Old Kobold at 5

Mage at 2

Pros : This is the most structured, everyone gets their turn, each monster type goes on their own Nish which may feel more natural.

Cons : This will be the slowest method, particularly for complex characters or new players. Also the hardest for the GM to track.

### Method 2 - Group Monsters

When grouping monsters, all monsters go on the best monster’s Nish. So using the above example, the Nish sequence would be:

Warrior at 16 (Gets the +1 bonus for beating monsters Nish)

All monsters at 14 (+1 bonus ends)

Thief at 8

Mage at 2

Pros : GM gets to decide all monster actions at once so it is much easier for the GM to manage. Also creates a bit of strategy for players to determine which monsters are the high Nish group and try to take them out to reduce the monster group Nish.

Cons : Give up a little bit of realism that a slow monster type goes later in the round and a fast monster type goes earlier.

### Method 3 - Three Groups

With the Three group method, all PCs who beat the highest Nish monsters all go at once, then all monsters, then all PCs who have Nishes below the best monster Nish. When the PC groups go, each group (beat monsters or were slower than monsters) all roll their abilities simultaneously, write them down, and when they are “Ready to Tell Their Story” the GM calls on them and they say something like, “I swung my sword at the Orc at an 18”, GM announces “Hit”, player says, “And I slashed the orc for 7 Dmg”, GM says, “Orc AR of 1 results in 6 Wounds.” Then the GM moves on to the next PC story. So using the above example, the Nish sequence would be:

All PCs with Nishes above 14 go simultaneously (Warrior at 16) (Gets the +1 bonus for beating monsters Nish)

All monsters at 14 (+1 bonus ends)

All PCs with Nishes below 14 go simultaneously (Thief and Mage)

Pros: The fastest method. Chaos of players rolling simultaneously (perhaps against the same target) can simulate the chaos of real battle.

Cons: Requires experienced players who know what to roll and when. A monster may get slain by PC A making a simultaneous attack by PC B seem like a waste. But a good GM can explain that both PC A and B hit the monster simultaneously.

## Relational Seat Tracking

A great trick for the GM is to use relational seat tracking for PC Names and pertinent details and for Nish tracking. Seat tracking uses the actual “seat at the table” physical layout of players. Consider a table with GM on one side. At the end of the table to the GM’s right is Mike playing Grond the Warrior. Across from the GM, on the other side of the table is Mary playing Natosha the thief, and on the end of the table to the left is Steve playing Miracle Max, the Mage. So on an index card the GM writes:

Mary

(Natosha)

Steve Mike

(Miracle Max) (Grond)

This index card is then paper clipped to the GM screen so the GM can simply glance upward and instantly use the right character name for the right player. The GM could add in details like each character’s main weapon type, or name, etc. if desired. It is also a great idea to share this trick with your players, encouraging them to make the same relational seat tracking so they, too, can easily use other player’s character names.

### Nish Tracking

Relational Seat Tracking is also one of the best ways to track Nish. On a piece of scratch paper (behind your GM screen) simply write down each character’s Nish number in the same relationship and add the monster(s) Nish(es) where you sit. So using the above Nish Method example the numbers look like:

8

2 16

14, 5

The GM can glance at this pattern and know that the player to their right (Mike playing Grond the warrior) is 1st, then the GM’s monster (the Orc Guards), then Mary’s Thief Natosha, then the GMs slow old Kobold, and finally Steve’s Mage, Miracle Max. As each PC or Monster takes its turn, simply cross off the number. And when all Nishes are crossed off, draw a quick circle through all the numbers so you do not accidentally return to this round (you can even write a 1 in the center so you know which round it was). Then call out “Nish” and train your players to just yell out their Nish results as you can write them down using the Relational Seat Tracking method so fast that there is no reason to go around the table one by one. And, the next round starts.

If you use grounded monsters, you only need to write down the fastest monster Nish (14). And if you use the three groups method, simply cross off all PCs with Nishes >= monsters (and they all go simultaneously) then your monsters go, then cross off all the other PCs who lost Nish to the monsters and they go at the end of the round.

## Character Introduction

At the start of each game session, it is a great idea to go around the table and have each player introduce (or re-introduce) their character to the group. They should point out their miniature or token (if used) and then describe what their character looks like (race, height, weight, hair, eyes, features) and explain demeanor/behavior. And at a minimum explain what their character’s main role (class) will be, or if they characters have a history together, they explain their characters main abilities and common strategies.

## Using AI

If used purposefully, AI can provide several aides to the game.

### NotebookLM

Google's NotebookLM is great for two main purposes. If the rules are supplied, it is a great source of rapid rule lookup and interaction for the players. Players can chat prompts like:

Im, playing a Fire Mage, what are the three best powers for me to take at Level 1. Please show these in table format.

Please roll me a random minor magic item and show it to me in table format.

My PC’s Might is 6, what are the best melee weapons I qualify for? Show them to me in table format.

I’m creating a character, succinctly walk me through this process.

I just gained a level, in table format, show me the advancement options.

I want a new fire mage ability called flame lance that allows me to summon a flaming lance. Please create this all new power and show it to me in table format.

The GM can also put in the rules, the character concepts and their adventure and campaign notes into NotebookLM and have a single place to query this data such as:

Show me Room 2 of the Stone Keep.

The monsters in the Stone Keep’s kitchen just rushed into the Main hall. Please show me all monsters from both rooms in a single combined table.

Please roll me a random Lesser Magic item.

What is Grond’s family name and what is his greatest fear?

My Orc Chieftain needs a magical weapon, in table format, make up a new appropriate weapon.

What was the name of the tavern in the first town and what was the bar wenches name? If none, make up a good one.

Please give me two good choices for the name of my Dragon monster.

What would my dragon say to the PCs with the goal of impressing them and dominating them with his grandeur. He has read the minds of Grond and Miracle Max and can use specific information.

I forgot to spec out the small Stone Keep’s pantry. Please create an instant encounter (description, monsters/traps, and loot, for this room).

The PCs are having a hard time with the monsters in the Stone keep, please show me room 3 with key stats reduced by 20%.

I need a treasure horde for my Dragon’s treasure rolled now.

I need, in table format, a good medium difficulty wandering monster encounter in the Stone Keeps secret passageway. The monster should be very unique compared to the rest of the Stone Keep.

### Most LLMs

Character Concept - Most LLMs can do a great job of building or fleshing out your character’s concept if you simply provide the LLM with a bit of details and then ask it to create a full character concept including history, appearance, personality, skills, powers, goals, etc. as a two page character concept.

Character Portrait - Most LLMs can create an image of your character if you simply ask them to draw you a picture of your character and paste in your character’s description, character concept, and gear.

Adventure - A simple and great way to leverage LLMs for adventure creation assistance is to approach the adventure and LLM in a few steps.

Step 1 - First provide your rough idea and ask the LLM to create a TTRPG adventure plot outline (no encounters).

Step 2 - Find or make maps of key adventure encounters or areas and number them

Step 3 - For each map, write up the room #, descriptive name, and describer the room’s contents

Step 4 - Attach the plot from Step 1, the current map from step 2, and the brief room list from step 3 along with the rules and ask the LLM to generate the encounters for this map. To get this to work great, you also need to perfect a final attachment document which is a set of instructions as to how you like your encounters formatted.

## 🎓 Skill Negotiation Examples

### 🧗 Example 1 – Climbing a Sheer Cliff

Basic Use:

Player: “I want to climb that 100ft sheer cliff.”

GM🔎: “OK, Dif 22.”

Negotiated Use:

Player: “If I use my climbing🎓 to plan a route first, can I lower the Dif?”

GM🔎: “Yes — make your roll… the Dif is now 18 with planning.”

Alternate Approach:

Player: “I’ll climb in two stages, using rope, iron spikes, and a mallet. I’ll move at half MR👣 for safety.”

GM🔎: “First roll to the ledge (Dif 14). If you fail, you’ll get a second roll to catch yourself on the rope instead of falling. Then we’ll proceed with your final ascent.”

### 🕳️ Example 2 – Falling into a Pit

Basic Use:

GM🔎: “You fall into a pit trap, having failed your Save✨. Make your AR🧥 check vs Dmg💥10..”

Player: “I have falling🎓. I rolled X.”

GM🔎: “OK, damage is reduced to 8.”

Narrative Detail:

Player: “On the way down I pick my landing, prepare my body to absorb impact, and grab anything to slow the fall. I’m also a Highland Monk used to mountaineering. I rolled the same X.”

GM🔎: “Good description — damage is reduced to 4. Make your AR🧥 check.”

### ⚕️ Example 3 – Healing Fredo

Basic Use:

Player: “I use healing🎓 (15) on Fredo at –1 Vit❤️.”

GM🔎: “You stop bleeding and stabilize him, but he remains critical.”

Narrative Detail:

Player: “Fredo took a cleaver blow to the arm. I splint, bandage, and stabilize, hoping to heal +1 Vit❤️. I trained for decades in the Temple ward.”

GM🔎: “Dif 10 to both stop bleeding and restore +1 Vit❤️.”

### 🥷 Example 4 – Sneaking Past Orc Guards

Basic Use:

Player: “Stealth🎓 12 to slip past the two Orc guards.” GM🔎: “Their Mind👁️ is 13. You fail.”

Narrative Detail:

Player: “I study the hallway and guards, planning my best route. I toss a pebble to the far side to distract them.”

GM🔎: “OK — roll Stealth🎓 vs Dif 9.”

### ⚔️ Example 5 – Battlefield Tactics

Basic Use:

Player: “Battlefield Tactics🎓 15. I want +1 Atk⚔️ for the party this whole encounter.”

GM🔎: “That’s too broad. Try a smaller effect.”

Narrative Detail:

Player: “I analyze the Troll’s armor and movements to help Fredo’s dagger strike. I want +2 Dmg💥 on his next attack vs that Troll.”

GM🔎: “Open roll vs Dif 13.”

Player: “Rolled 19.”

GM🔎: “That’s excellent. Fredo gets +3 Dmg💥 on his next dagger hit — but remember, skills🎓 support narrative moments. They don’t replace Powers🔥.”

### 👑 Example 6 – Persuasion in the Great Hall

Basic Use (One Big Roll):

Player: “I stride into the great hall, raise my voice, and make my plea to everyone at once.”

GM🔎: “That’s ambitious. One Persuasion👁️ roll vs Dif 20 to sway the entire hall.”

Result → Success means broad support; failure means near-universal rejection.

Narrative Detail (Split & Conquer):

Player: “Instead of talking to the entire hall, I mingle among smaller groups. I quietly approach three key nobles — some listen, some dismiss me. Then I use those connections to build momentum before addressing everyone.”

GM🔎: “OK, make individual Persuasion👁️ rolls with each noble. -- Some succeed, some fail, but one is an influential court member.”

Player: “Now I address the full hall, with that noble backing me.”

GM🔎: “Because of the groundwork, your final roll is with Advantage (3H20) and the Dif is reduced to 15 instead of 20.”

Result → Success has greater weight due to noble support; failure may still leave cracks of doubt but not total rejection.

## 👹 Monster Quick Stats

Nish🚩: 10-24.

MR👣: 6–12.

Atk⚔️: 10-24.

Dmg💥: 5-20+.

Ftg: Fatigue — minimum Wnd🩸 caused regardless of player AR🧥.

Def: 10-24.

Armor🧥: 0 to 3 (rare 4).

Vit❤️: 4 (small) to 30+ (epic).

## 🔎 GM Principles

Say Yes: If the idea is fun, let it ride or lower Dif.

Failures Push Forward: Failures cause complications, never dead ends.

Spotlight Cool: Highlight Strengths, Flairs, and creative Powers🔥.

Keep Monsters Simple: Use flat stats, improvise Powers🔥, focus on PCs’ rolls.

## 🏆 Master 2-Column Split-Pane Manager Modal UI/UX Blueprint Standard

The **Gear Manager Modal (`GearCard.tsx`)** is canonized as the **Master Blueprint Standard** for all present and future SupaFlex item and ability catalog management modals across the application (**Weapons**, **Armor**, **Shields**, **Gear**, **Skillsets**, **Powers**, **Magic Items**):

1. **Header Architecture (Icon + 2-Line Text Block + Close Trigger):** Padded glassmorphic icon badge (`p-2 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-300`), bold 2-line Title/Subtitle block (`ADVENTURING GEAR MANAGER` / `Manage character equipment side-by-side...`), and top-right close trigger (`<X />`). **Mandatory Icon Parity Rule:** The modal's top header icon **MUST EXACTLY MATCH** the main card title icon from which it was launched (e.g. `🧰` for `GearCard`, `💰` for `MoneyCard`).
2. **2-Column Split-Pane Body Architecture (`w-[880px] h-[85vh]`):**
   - **Left Column (Active Inventory / Known Abilities Pane):** Always-visible side-by-side pane displaying what the player owns or knows, with independent vertical scrolling, inventory search bar (`Search...`), item count badge, and 1-click item removal/adjustment controls.
   - **Right Column (Catalog & Custom Creator Pane):** Sub-tab navigation bar (`🌐 Stock Catalog` vs `➕ Custom Form`) utilizing the exact same space. Sub-Tab 1 features catalog search & category filter dropdown (`All Categories` / `Class`, `Racial`, `Tools`, etc.) with 1-click `+ Add` / `+ Learn` buttons that immediately append the item to the Left Pane in real time. Sub-Tab 2 features the custom item/ability creation form with input guardrails. **Strict Catalog Deduplication Rule:** For non-quantifiable capability modals (**Skillsets**, **Powers**, **Magic Items**), items already present in the Left Pane MUST be automatically filtered out of the Right Stock Catalog Pane for 100% UI DRY visual clarity.
3. **Streamlined UI DRY Footer Architecture:** Clean bottom bar with summary total badge (`Total Gear Value: 🪙 Xg 🥈 Ys`) and a single `<button>Done</button>`.
4. **Master Blueprint Application Scope:** Mandatory directive for upcoming overhauls across items (**Weapons**, **Armor**, **Shields**, **Gear**) and abilities (**Skillsets**, **Powers**, **Magic Items**).

