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

🧹 Clean – Clear action types (AM, A, M, P, F) and Atr tags keep the table legible. Players should always know what they can do at a glance.

📉 Minimal Tracking – Players should track only Vit and Luck chits whenever possible. Low overhead means more energy spent on roleplay, tactics, and fun.

🎯 KISS & Data De-Duplication – Keep It Simple & Single-source-of-truth. Never duplicate database-backed tables (Weapons, Armor, Shields, Gear, Powers, Magic Items, Skill Sets, Monsters, and Treasure) as static text in markdown rules documents; query Supabase or link to interactive catalogs to maintain single-source-of-truth DRY alignment.

📇 Character Card 2-Row Layout Standard – Character selection cards (`UnifiedLaunchHubModal.tsx`) MUST enforce a 2-column flexbox grid layout (`flex items-center justify-between gap-3`), placing Name and Badges in the left column (Rows 1 & 2) and the `Active Hero` badge and Edit/Delete buttons in the right column (Rows 1 & 2) to eliminate vertical overlapping.

🔄 Standardized Usage Options – All usage dropdowns, database entries, and ability definitions across SupaFlex enforce this exact 9-option list and order: `1`, `2`, `3`, `1-⚡`, `1-🍀`, `1-Enc`, `2-Enc`, `3-Enc`, `1-Rnd`.

## 🏛️ System Taxonomy: Paths, Kits, Elements, Equipment & Abilities

The complete SupaFlex game system is structured around the **Trinity of Mechanics**:
1. **Ownership (What you Know & Possess):** Intangible character capabilities (**Paths 🧭**) are unlocked with AP; tangible hardware packages (**Kits 🎒**) are purchased with Currency (Gold / Silver) or found as treasure.
2. **Execution (What you Do in Combat):** Governed by the 4-channel Action Economy ($1\text{ Attack [A]} + 1\text{ Move [M]} + 1\text{ Partial [P]} + \text{Unlimited Free [F]}$, with hybrid $\text{Attack \& Move [AM]}$) with **Auto-Readied Powers** on the active Power Card.
3. **Capacity (What you Attune / Ready Simultaneously):** Exceptional equipment abilities draw from a single, shared **Function Slots Pool 🧿** (Base 4 Function Slots at Level 1).

```text
                                  [ 🌟 ELEMENTS ]
                   (All Physical Items & Non-Physical Features)
                                         │
                 ┌───────────────────────┴───────────────────────┐
                 ▼                                               ▼
         [ 🧭 PATHS (AP) ]                               [ 🎒 KITS (g/s) ]
   (Intangible Capability Suites)                  (Master Hardware Suites)
                 │                                               │
                 ▼                                               ▼
         [ 🧠 ABILITIES ]                                [ 🧰 EQUIPMENT ]
   ┌──────┬───────┼───────┬─────────┐               ┌────────────┼────────────┐
   ▼      ▼       ▼       ▼         ▼               ▼            ▼            ▼
 [ ATR ] [SKILL] [SKILLSET][POWERS] [SPEC RULES]  [ ⚙️ GEAR ]  [ 🧿 EXOTICS ] [ 🔮 ARTIFACTS ]
  (✅)    (🎓)      (🎓)    (🔥)       (📜)        (Mundane)   (Extraordinary)(Relics/Treasure)
                                                    (0 Slots)    (1–4 Slots)    (1–4 Slots)
                                                                     │              │
                                                                     ▼              ▼
                                                             [ 🧿 FUNCTIONS ]  [ 🔌 MODS ]
                                                             [ 📜 SPEC RULES ] [ 🎒 KITS ]
```

### 🏛️ The Equipment Taxonomy & Lineage Hierarchy

| Entity | Contained Sub-Elements | Attributes & Scope |
| :--- | :--- | :--- |
| **Equipment (`🧰`)** | Gear, Exotics, Artifacts, Weapons, Armor, Shields, Mods, Kits | Universal parent category for all physical items, merchandise, and treasures. |
| **Gear (`⚙️`)** | Mundane Tools, Electronics, Supplies, Weapons, Armor, Shields | Baseline physical items (0 Function Slots, no attached Function). Priced in $g / s$. |
| **Exotic (`🧿`)** | Functions, Spec Rules, Mods | Extraordinary, high-tech, cybernetic, or biotech hardware (1–4 Function Slots). Priced in $g / s$. |
| **Artifact (`🔮`)** | Functions, Spec Rules, Legendary Powers | Ancient, magical, or alien relics (1–4 Function Slots). Unpurchasable market treasure (Cost = `"Artifact"`). |
| **Mod (`🔌`)** | Functions, Spec Rules | Optional modification, module, hardware attachment, or non-tactical upgrade with a financial cost ($g/s$) and belongs_to parent item. Houses descriptive specs or grants Functions. Uses {Free} only when standard factory equipment on a chassis. |
| **Kit (`🎒`)** | Gear, Weapons, Armor, Shields, Exotics, Mods, Functions, Spec Rules | Master pre-assembled bundle / hardware suite. Has overall kit cost (e.g. `45s`, `120g`). |
| **Function (`🧿`)** | *(Actionable Rules Execution)* | Equipment ability nearly identical to a Power (`Action`, `Usage`, `Effect`, `Tier`). Drawn from Function Slots (`🧿`). NEVER carries a financial cost ($0s$) and is universally {Free}. Belongs to either a `Mod:` (if modular/aftermarket) or `Gear:` (if inherent to an Exotic/Artifact) — never both. |
| **Spec Rule (`📜`)** | *(Passive / Systemic Rule Hook)* | Systemic rule, environmental immunity, or passive trait hook. Cost + belongs to parent item. |

### 🔑 Architectural Pillars & Hierarchy Rules

1. **🌟 Elements = 🧠 Abilities + 🧰 Equipment:**
   * **🧠 Abilities (Intangible Features):** Unlocked via AP and packaged into **Paths (`🧭`)**. Subdivided into **✅ Attributes**, **🎓 Skills**, **🎓 Skill Sets**, **🔥 Powers**, and **📜 Spec Rules**.
   * **🧰 Equipment (Physical Items):** Purchased with Gold / Silver or found as treasure. Subdivided into **⚙️ Gear** (mundane, 0 slots), **🧿 Exotics** (extraordinary, 1–4 slots), **🔮 Artifacts** (relics, 1–4 slots, cost = `"Artifact"`), and **🔌 Mods** (modular attachments).

2. **🧰 The Three Forms of Equipment & Dynamic Auto-Promotion:**
   * **Gear (`⚙️`):** Mundane physical items readily available in the economy (0 Function Slots, no attached Function, cost in $g/s$).
   * **Exotic (`🧿`):** Extraordinary items possessing one or more actionable **Functions (`🧿`)** (occupying 1–4 Function Slots, purchasable in $g/s$).
   * **Artifact (`🔮`):** Legendary or unique relics possessing one or more **Functions (`🧿`)** (occupying 1–4 Function Slots, cost = `"Artifact"`).
   * **Dynamic Auto-Promotion:** The distinction between Gear and Exotics is fluid and capability-driven: attaching a Function to any piece of Gear immediately elevates it to an **Exotic**; removing all Functions returns it to baseline **Gear**.

3. **🧭 Paths vs. 🎒 Kits Taxonomy:**
   * **Paths (`🧭`):** Intangible character identity and capability suites (Race Paths, Class Paths, Discipline Paths, Specialization Paths). Unlocked via AP and character creation. Hallmark starting traits use curly-brace notation: `{Trait}` indicating 0 AP starting grants.
   * **Kits (`🎒`):** Tangible manufactured equipment and hardware suites (Powered Armor Suites, Survival Kits, Trauma Kits, Field Toolkits). Purchased with Gold / Silver ($g / s$) or acquired as treasure. Included hardware components use the `{Free}` tag.
   * **Starting Paths:** Every character starts with 2 Learned Paths: **Race Path (`🧭`)** and **Class Path (`🧭`)**.
   * **Learning New Paths:** Beyond starting paths, additional Paths may be learned for **4 AP WITH GM Approval**.

4. **⚔️ Weapons, 🧥 Armor, and 🛡️ Shields as Equipment:**
   * Weapons, Armor, and Shields are all **Equipment (`🧰`)**.
   * Standard weapons, armor, and shields are mundane **Gear (`⚙️`)** (0 Function Slots). Specialized, high-tech, or enchanted versions exist as **Exotics (`🧿`)** (occupying 1–4 Function Slots) or can accept **Mods (`🔌`)**.
   * **Default Gear Possession Rule:** When a character learns or becomes skilled in a new weapon, armor, or shield (via starting Path or AP advancement), the default system rule is that they are assumed to possess that physical item as standard mundane Gear (`⚙️`) (unless the GM determines otherwise based on campaign tone and narrative context).

5. **🔌 Mods vs. 🧿 Functions Canonical Invariants:**
   * **Mods (`🔌`) = Physical Commerce & Hardware Attachment Layer:**
     * *Optional & Modular:* Represents an optional module, aftermarket installation, or physical hardware upgrade.
     * *Market Commerce:* Carries a financial purchase cost ($g/s$), unless factory-installed as standard equipment on a specific suit or chassis (`{Free}`).
     * *Mundane Specs:* Houses non-tactical, descriptive, or mechanical notes that do not belong on the base chassis and do not consume combat Function Slots (e.g. *Microgrenade Fitting*, *Compensators*, *Macro Zoom*).
     * *Parentage:* Always belongs to one or more Equipment items via `belongs_to: "Gear: [Item]"` or `belongs_to: "Armor: [Suit]"`.
   * **Functions (`🧿`) = Rules-Engine Execution & Slot Bandwidth Layer:**
     * *Combat Rules Execution:* Actionable encounter abilities (`Action`, `Usage`, `Effect`, `Tier`) nearly identical to Powers, drawn from Function Slots (`🍺 Minor 1`, `🪄 Lesser 2`, `🪬 Greater 3`, `💫 Epic 4`).
     * *Zero Financial Cost:* NEVER carries a financial cost ($g/s$). The `cost` column is permanently deprecated/omitted.
     * *Universally Free:* Possessing the granting Equipment or Mod automatically unlocks the Function. The `{Free}` tag is redundant on Functions and is stripped.
     * *Clean Single Parentage:* A Function belongs to EITHER a Mod (`belongs_to: "Mod: [ModName]"`) OR directly to Equipment (`belongs_to: "Gear: [ItemName]"`) — NEVER both. If an item has a Mod, the Function links to the Mod, and the Mod links to the Gear.

### ⚔️ Dual-Role Architecture: Supabase Weapons, Armor & Shields (Abilities vs. Physical Equipment)
In SupaFlex, the Supabase database tables `weapons`, `armor`, and `shields` fulfill a deliberate **Dual Role** across the application architecture, serving as the single source of truth for both character combat capabilities and physical inventory/commerce:
1. **The Ability Role (Combat Cards: WeaponsCard, ArmorCard, ShieldCard):**
   * Entries track martial competence and combat capability unlocked or trained on the character sheet.
   * Consumes ability fields: `requirement`, `atk` (Attack die), `dmg` (Damage die), `max_block` (Block cap), `ar` (Armor rating), `mr` (Movement Rate modifier), and `sk` (Skilled status).
   * Governed by AP investment, advancement, and active readiness in combat encounters.
2. **The Equipment & Commerce Role (Gear Card & Gear Manager Modal):**
   * Entries track physical merchandise, market commerce, and inventory custody carried by the adventurer.
   * Consumes equipment & commerce fields: `cost` (Monetary price in gold `g` or silver `s`), `name`, `notes` (Lore, physical description, and special properties), `genres` (Setting availability), `pic` (Visual iconography), and `is_guildspace_locked` (Vault access control).
   * Governed by monetary transactions via `deductFundsWithChange`, quantity tracking (`qty`), and inventory valuation (`calculateInventoryValue`) inside `simple_gear`.
   * **Clean Separation:** Purchasing physical weapons, armor, or shields in the **Gear Manager** adds them to the character's gear inventory for ownership tracking; it does not alter or grant combat abilities or skilled ratings in `WeaponsCard`, `ArmorCard`, or `ShieldCard`, preserving strict separation between physical possession and martial training.

4. **🧬 Traits ({Trait} / 0 AP Free Grants):**
   * The word **Trait** (and `{Trait}` notation) is **ENTIRELY reserved** to designate an orthogonal status meaning the element costs **0 AP (Free)** to gain as a starting grant.
   * Any Element can be a Trait, but **NONE** of them are *always* Traits.
   * **Auto-Taken & Removal Protection:** All Traits are auto-taken upon selecting a Path, and **may not be removed without GM approval**.

5. **📜 System Rules vs. 📜 Spec Rules Distinction:**
   * **Global System Rules (`📜`):** The macro game engine, core resolution mechanics, combat economy, and overarching rules of SupaFlex (found in this `.md` document and on the official website / VitePress Player Guide).
   * **Spec Rules (`📜`):** Specific, modular rules, physiological features, tactical boons, and mechanical rule exceptions queried from the `spec_rules` database table and listed on the Character Sheet in the **Spec Rules** card.
   * **No Quirks or Flaws:** There are **NO quirks, flaws, or flaw points** in SupaFlex. There are only unified Spec Rules, Equipment, and Abilities.

---

## 🙂Emojis

Emojis🙂 are used in MetaScape for rapid identification of key stats and words. They are used in several ways and formats:

Emojis🙂 come BEFORE their key word(s) in titles and headings

Emojis🙂 are to follow their key word(s) in nearly every case (other than headings)

The five Attribute✅ (Atr) emojis🙂 can be used both following their key words as in: Might💪, Motion🏃, Mind👁️, Magic✨, and Moxie🫀, but also following any ability as an indicator as to which of the five attributes to roll for that ability. (e.g., “Stealth🏃” is the shorthand version of, and means the same thing as “Stealth roll using Motion🏃” or “Motion🏃 Stealth” and this shorthand is the preferred method.

Monster stats place the emojis before key numbers or number sets as in:

4 Orc Guards (Heavy Leather, Scimitars, Bucklers) 🚩14, 👣10, ⚔️18/12, 🛡️16/2, ❤️12 – [💪18/🏃12/👁️10/✨10/🫀12] (Poisoned blades Magic✨ or Weakened).

| 📖 Term | 🙂 Emoji |
| :--- | :---: |
| Abilities🧠 | 🧠 |
| Actions🔷 | 🔷 |
| Affliction💀 | 💀 |
| AP🧩 | 🧩 |
| AR🧥 | 🧥 |
| Armor🧥 | 🧥 |
| Art🎨 | 🎨 |
| Artifacts🔮 (1–4 Slots) | 🔮 |
| Atr✅ | ✅ |
| Block🧱 | 🛡️ |
| Camp Gear🏕️ | 🏕️ |
| Clothing & Personal👕 | 👕 |
| Combat ⚔️ | ⚔️ |
| Containers🧺 | 🧺 |
| Critical💀 | 💀 |
| Days📅 | 📅 |
| Dmg💥 | 💥 |
| Dual Wield⚔️ | ⚔️ |
| Duration⏳ | ⏳ |
| Elements🌟 | 🌟 |
| Emoji🙂 | 🙂 |
| Entertainment & Instruments🎵 | 🎵 |
| Epic💫 (4 Slots • Exotic / Artifact) | 💫 |
| Equipment🧰 | 🧰 |
| Exotics🧿 (1–4 Slots) | 🧿 |
| Food & Drink🥖 | 🥖 |
| Function Slots🧿 | 🧿 |
| Functions🧿 (1–4 Slots) | 🧿 |
| Gear⚙️ (0 Slots) | ⚙️ |
| GM🔎 | 🔎 |
| Greater🪬 (3 Slots • Exotic / Artifact) | 🪬 |
| Hazard💀 | 💀 |
| Junk🗑️ | 🗑️ |
| Kits🎒 (Hardware Suites & Bundles) | 🎒 |
| Lesser🪄 (2 Slots • Exotic / Artifact) | 🪄 |
| Level⭐ | ⭐ |
| Luck🍀 | 🍀 |
| Magic Item✨ (Exotic / Artifact) | ✨ |
| Magic✨ | ✨ |
| Martial Arts🥋 | 🥋 |
| Medical & Healing Supplies⚕️ | ⚕️ |
| Might💪 | 💪 |
| Mind👁️ | 👁️ |
| Minor🍺 (1 Slot • Exotic / Artifact) | 🍺 |
| Mods🔌 (Modular Attachments) | 🔌 |
| Money💰 | 💰 |
| Monster 🐉 | 🐉 |
| Motion🏃 | 🏃 |
| Moxie🫀 | 🫀 |
| MR👣 | 👣 |
| Natural Weapons🥊 | 🥊 |
| Nish🚩 | 🚩 |
| Notes📜 | 📜 |
| Paths🧭 (Capability Suites) | 🧭 |
| Power Card🔥 | 🔥 |
| Power🔥 | 🔥 |
| Racial 🧬 | 🧬 |
| Range🎯 | 🎯 |
| Resist✨ | ✨ |
| Rules📜 | 📜 |
| Save✨ | ✨ |
| Shields🛡️ | 🛡️ |
| Single Weapon🗡️ | 🗡️ |
| Skill Set🎓 | 🎓 |
| Skill🎓 | 🎓 |
| Exotic🧿 (Extraordinary / Functions) | 🧿 |
| Artifact🔮 (Relics / Found Treasure) | 🔮 |
| Spec Rules📜 (Specific Rule Hooks) | 📜 |
| Term📖 | 📖 |
| Tools & Equipment🛠️ | 🛠️ |
| Traits🧬 ({Trait}) | 🧬 |
| Travel & Animals🐴 | 🐴 |
| Tremendous🌟 | 🌟 |
| Unarmed 🥊 | 🥊 |
| Usage🔄 | 🔄 |
| Vault📦 | 📦 |
| Vit❤️ | ❤️ |
| Weapon & Shield🛡️ | 🛡️ |
| Weapon⚔️ | ⚔️ |
| Wnd🩸 | 🩸 |
| Writing & Communication✒️ | ✒️ |

| 🐉Monster Stats | 🙂Emoji |
| --- | --- |
| Nish🚩 | 🚩 |
| MR👣 | 👣 |
| Atk/Dmg⚔️ | ⚔️ |
| Dod/AR🛡️ (Defense) | 🛡️ |
| Vit❤️ | ❤️ |
| Attributes [💪#/🏃#/👁️#/✨#/🫀#] |  |

Example Monster Stats:

4 Orc Guards (Heavy Leather, Scimitars, Bucklers) 🚩14, 👣10, ⚔️18/12, 🛡️16/2, ❤️12 – [💪18/🏃12/👁️10/✨10/🫀12] (Poisoned blades Magic✨ or Weakened).

### 📝 Definitions

This section serves as both the abbreviation reference and the full word definition area for the system. Each entry begins with the common abbreviation (if any), followed by the full term in parentheses. All entries are alphabetized for quick reference.

Abilities🧠 – All non-physical features of a character: Attributes✅, Skills🎓, Skill Sets🎓, Spec Rules📜, and Powers🔥 (unlocked via AP and organized into Paths🧭).

Ability Roll – Roll #d20 + d(Atr) + Bonus versus a difficulty to determine success or failure. The number of d20 is specified by skilled/unskilled, advantage/disadvantage.

Action🔷 (AM, A, M, P, F) – Governed by the 4-channel action economy: Attack (A), Move (M), Partial (P), and unlimited Free (F) actions, plus hybrid Attack & Move (AM).

Adv (Advantage) – Gain an extra d20 during an ability roll.

AP🧩 (Adventure Point) – Earned progression currency spent to unlock Paths🧭, learn new abilities🧠, expand Loadout Slots🔮, or improve stats.

AR🧥 (Armor Rating) / Armor🧥 – Equipment🧰 worn to absorb damage. Defense is always Dod/AR or Blk/AR; armor is the AR part. Standard armor is mundane Gear⚙️ (0 loadout slots); high-tier, specialized, or enchanted suits exist as Exotics🧿 or Artifacts🔮 (1–4 loadout slots). When learned, characters are assumed to possess the item as Gear⚙️ by default.

Artifact🔮 (Magic Relics / Legendary Treasures) – Exceptionally rare, unique, or priceless magical items—such as ancient relics, alien monoliths, or divine masterworks—that exist outside the standard economy, cannot be normally purchased or manufactured, and carry a cost of "Artifact". Possesses one or more actionable Functions🧿 occupying 1–4 Function Slots based on tier: 🍺 Minor (1 Slot), 🪄 Lesser (2 Slots), 🪬 Greater (3 Slots), 💫 Epic (4 Slots). Inactive artifacts reside in the Vault📦.

Atk (Attack) – Any offensive roll or strike made with a weapon, power🔥, or ability.

Atr✅ (Attribute) – The five core attributes: Might💪, Motion🏃, Mind👁️, Magic✨, and Moxie🫀.

Auto-Readied Powers – All learned powers are immediately active and readied on the character's Power Card without requiring categorization into rigid ready-slot buckets.

Block Cap🧱 – The maximum monster damage a melee weapon or shield can block.

Critical💀 – A natural 1 on any d20 in an ability roll.

Day – A day in the character’s life (a day in the player’s life is a Session).

Default Gear Possession Rule – When a character learns or becomes skilled in a new Weapon⚔️, Armor🧥, or Shield🛡️, the system defaults to assuming they possess the physical item as standard mundane Gear⚙️ (unless the GM determines otherwise based on campaign tone, starting situation, or narrative context).

Dod (Dodge) / Blk (Block) – The avoidance value an opponent must roll against to land a successful attack. Defense 🛡️ is the category (Dod/AR or Blk/AR).

Dif (Difficulty) – A GM-assigned number that the player’s ability roll must tie or beat to succeed.

Dis (Disadvantage) – Roll one fewer d20 (or 2L20 if unskilled) during an ability roll.

Dmg (Damage) – The raw amount of harm caused by an attack or ability.

Effect – The outcome of using an ability, exotic, artifact, or magic item.

Element(s)🌟 – The universal parent category encompassing every physical item and non-physical feature in the game (ALL Equipment🧰 and ALL Abilities🧠).

Enc (Encounter) – The series of rounds that make up a combat event or distinct roleplaying scene.

Equipment🧰 – The universal parent category encompassing every physical item, tool, weapon, armor piece, shield, supply, or object a character can carry, wear, or utilize. Governed by the Three Forms of Equipment: Gear⚙️ (mundane, 0 slots), Exotics🧿 (extraordinary, 1–4 slots), and Artifacts🔮 (relics, 1–4 slots, cost = "Artifact"), along with Mods🔌 and Kits🎒.

Exclusive Stacking Master Rule – A character may benefit from only the single highest value or best effect of a given power or modifier at any time (bonuses, damage amplifiers, and movement replacements do not stack unless an ability explicitly states otherwise).

Exotic🧿 / Exotics🧿 – Extraordinary, high-tech, cybernetic, or biotech equipment beyond mundane gear, possessing one or more actionable Functions🧿 or Spec Rules📜. Occupies 1–4 Function Slots on the character sheet based on tier (🍺 Minor: 1 Slot, 🪄 Lesser: 2 Slots, 🪬 Greater: 3 Slots, 💫 Epic: 4 Slots) and is purchasable with Gold or Silver ($g/s$).

Ext Rng (Extended/Long Range) – A greater range (at disadvantage) that a weapon, ability, or item can reach.

Fatigue – A minimal amount of Wnds🩸 a PC suffers IF HIT by a monster regardless of PC’s AR🧥 roll. Default monster Fatigue equals the monster Dmg💥 ten’s digit + 1 (e.g., Dmg 1–9 = 1, 10–19 = 2, 20–29 = 3, 30–39 = 4, etc.).

Focus Die – A core resource die (d4–d12) that can be spent once per roll after seeing the result, stepping down when used ($d12 \rightarrow d10 \rightarrow d8 \rightarrow d6 \rightarrow d4 \rightarrow \text{Exhausted}$) and stepping up on Flood triggers.

Function Slots🧿 – The universal capacity pool (Base 4 Slots at Level 1) governing how many Functions🧿 a character can actively ready simultaneously. Expands via the uncapped $+2\text{ Slots}$ per $k\text{ AP}$ schedule.

Functions🧿 – Actionable equipment-derived abilities (`Action`, `Usage`, `Effect`, `Tier`) originating from Exotics🧿, Artifacts🔮, or Mods🔌 that occupy Function Slots🧿 on the character sheet. Incur zero financial cost ($0s$) and are universally free once the parent item/mod is owned. Inactive functions rest in the Vault📦.

g / gp (Gold Piece) – Primary gold currency; 100 silver (s) = 1 gold (g).

Gear⚙️ – Standard, mundane physical items readily available in the world's economy that operate within baseline mundane rules (weapons⚔️, armor🧥, shields🛡️, tools, adventuring supplies). Consumes 0 Function Slots, has no attached Function, and is priced in Gold or Silver ($g / s$).

GM (Game Master) – The person running the game and story.

GM Intensity Die – A single d20 used by the GM for fast intensity or snap environmental adjudication.

Hit – When an attack successfully lands.

H, Hu (Hurled) – Physically thrown weapons (daggers, axes, javelins, etc.).

Kit(s)🎒 – Master pre-assembled bundles and hardware suites (e.g. *Survival Kit*, *Destron Armor*). Purchased with Gold / Silver ($g / s$) or acquired as treasure. Included items carry the `{Free}` tag.

Level⭐ (Lvl) – A character’s level, equal to their total earned AP🧩.

Luck🍀 – Metacurrency chits spent for full roll rerolls (pure variance mitigation). A roll may use Focus OR Luck, but never both.

M/H/S (Melee, Hurled, Shot) – Shorthand for weapon types.

Magic Item✨ – Magical items categorized as Minor🍺 (1 Slot), Lesser🪄 (2 Slots), Greater🪬 (3 Slots), or Epic💫 (4 Slots) (synonymous with magical Exotics and Artifacts).

Mod(s)🔌 – Named modular modifications, hardware attachments, or enchantments (e.g. *Joint Locks*, *Flood Lights*, *Undead Slayer Coating*) belonging to an Exotic or Kit that grant Functions🧿 or Spec Rules📜.

Artifacts🔮 – Rare, unique, or enchanted Exotics discovered as treasure loot that cannot simply be bought in a store.

Spec Gear🚀 – High-tier, military-specification, or commissioned Exotics carrying a commercial or commission price tag in gold or silver ($g / s$).

Mgt💪 (Might💪) – Attribute✅ for brute force, melee weapons Atk⚔️ and Dmg💥, armor size, block Def, shields, physical strength.

Mot🏃 (Motion🏃) – Attribute✅ for agility, Nish🚩, movement, hurled weapons Atk⚔️ and Dmg💥, dodge, athletics, dexterity, balance, sneaking.

Mnd👁️ (Mind👁️ ) – Attribute✅ for logic, knowledge, shot weapons Atk⚔️ and Dmg💥, awareness, intelligence, persuasion, deception.

Mag✨ (Magic✨) – Attribute✅ for supernatural abilities, arcane channeling, powers, and mystical device operation.

Mox🫀 (Moxie🫀) – Attribute✅ for stamina, grit, vitality, death checks, and physical endurance.

M, Me (Melee) – Weapons swung or stabbed in close combat.

MR👣 (Movement Rate) – The number of squares a character or monster can move in one round.

Nish🚩 (Initiative) – Determines turn order in combat.

Opp Atk (Opportunity Attack) – An F action basic reaction attack using only the weapon in hand.

Path(s)🧭 – Intangible character capability and identity suites (Race Paths, Class Paths, Discipline Paths, Specialization Paths). Unlocked via AP and character creation. Hallmark starting traits carry the `{Trait}` (0 AP) tag.

PC (Player Character) – A player-controlled character.

Player – A person running a character (not the GM).

Power Card🔥 – The active character sheet card titled "Powers" displaying all learned, auto-readied powers.

Power🔥 – An ability learned with AP🧩 that operates within the 4-channel Action Economy ($\text{A}, \text{M}, \text{P}, \text{F}$) and defined usage frequencies.

Powers-Known Progressive Soft Tax – Escalating AP surcharge applied to total powers learned (Powers 1–6 = 1 AP base; 7–9 = 2 AP; 10–14 = 3 AP; 15+ = 4 AP).

Rng🎯 (Range) – Distance categorized into 8 tactical bands: Self, Touch, 1 (1 sq strike / adjacent melee), 2 (2 sq strike / reach melee), Short (≤ 6 sq), Medium (≤ 12 sq), Long (≤ 24 sq), Extreme (≥ 25 sq).

Rnd (Round) – A single turn in combat where every participant performs their actions.

Rules📜 – The global game system rules, core mechanics, combat economy, and resolution engine.

s / sp (Silver Piece) – Silver currency; 100s = 1g.

Session – A day in the player’s life, referring to one game session.

S, Sh (Shot) – Ranged weapons that are not thrown (bows, crossbows, firearms).

Shields🛡️ – Equipment🧰 held in the off-hand to block incoming attacks up to a Block Cap. Standard shields are Gear⚙️ (0 slots); enchanted/high-tech shields are Exotics🧿 or Artifacts🔮 (1–4 slots).

Single Die Rule (Single-Explode Capped) – Any single-die resolution roll (Damage `Dmg` and Armor Rating `AR`) explodes once, capped on max face (cannot chain further).

Skill🎓 – An ability check using #d20 + d(Atr) + Bonus vs. Difficulty.

Skill Set🎓 – A logical collection of related skills learned for 2 AP.

Spec Rules📜 – Modular specific rules, physiological boons, tactical modifications, and rules exceptions queried from the `spec_rules` database table.

Stats – All recorded values: Atr, Vit, MR, Def, Atk, Block Cap, Actions, Usage, Loadout Slots, etc.

Trait(s)🧬 ({Trait}) – AP FREE (0 AP) starting elements granted by Paths. The `{Trait}` notation is ENTIRELY reserved to designate a 0 AP starting grant. Auto-taken and may not be removed without GM approval.

Tremendous🌟 – A natural 20 on any d20 in an ability roll.

Usage🔄 – Standardized 9-option list for ability frequency: `1`, `2`, `3`, `1-⚡`, `1-🍀`, `1-Enc`, `2-Enc`, `3-Enc`, `1-Rnd`.

Vault📦 – The unlimited repository for inactive Exotics🧿 and Artifacts🔮. Items in the Vault can be swapped into active Loadout Slots during a 5-minute out-of-combat breather.

Vit❤️ (Vitality) – The amount of wounds a character or monster can sustain before death checks or death.

Wnd🩸 (Wounds) – Damage sustained after AR🧥 reduction is applied.

Wpn⚔️ (Weapon) – Equipment🧰 wielded to strike or shoot. Standard weapons are Gear⚙️ (0 slots); high-tier or enchanted weapons are Exotics🧿 or Artifacts🔮 (1–4 slots).

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

Bonus & Penalty (±10 Modifier Cap): Flat situational, gear🧰, trait🎭, power🔥, or condition modifiers combine up to a hard cap of +10 and -10. Exploding attribute dice provide the high-variance, uncapped cinematic swings, while flat static modifiers are capped at ±10 to maintain game balance and eliminate excessive math bloat. (However, a penalty to an Atr die or check may not reduce the roll below 0; e.g. a d✨–2 where Magic rolls 1 results in 0).

Focus Die spends are resource-based die additions, not flat static modifiers, and do not touch the ±10 modifier cap.

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

Double Tremendous Defense🛡️ – Your block not only deflects the blow but rebounds it — the attacker suffers their own full Dmg💥, and you may immediately reposition 3 squares and gain +3 Block Cap for the rest of the Enc.

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

Attribute die values start at **1x d4, 2x d6, 2x d8** across the five attributes at Level 1, improving through tier-gated AP advancement up to a hard maximum array of **1x d6, 1x d8, 1x d10, 2x d12** at Level 100.

Attribute checks always use the die size tied to the relevant Attribute.

Balance Note:

All Attributes are equally important. Mgt💪 is not inherently better than Mnd👁️, nor Mot🏃 better than Mag✨ or Mox🫀. Players succeed by leveraging their strongest dice in creative ways.

### ✅ Atr Tags

All abilities and items show their governing Atr: Might💪, Motion🏃, Mind👁️, Magic✨, or Moxie🫀 that they provide a buff to or use as an ability roll.

<!-- @rule:focus.basics anchor="#focus-die" -->
## 🔮 Focus Die

<!-- @popover:focus.basics -->
::: details ⚡ Quick Reference: Focus Die Rules

Focus Roll:
* Spend Timing — Once per roll, after seeing the initial roll result, roll your current Focus Die and add the result directly to your total.
* Explosion Type — Comparison rolls (Skill, Attack, Defense) explode freely on max face; Single-die rolls (Damage, Armor) single-explode capped.
* Step-Down Rule — Spending your Focus Die steps it down one size on the ladder (d12 ➔ d10 ➔ d8 ➔ d6 ➔ d4 ➔ Exhausted).

Requirement:
* Eligible Rolls — Any ability roll, Damage, AR, and other checks as GM allows.
* Usage Limit — Limit 1 Focus spend per roll.
* Strict Exclusivity — A roll may use Focus OR Luck, but NEVER BOTH.

Refilling Focus (The Flood):
* Start of Combat — Step up +1 at the beginning of an encounter.
* End of Combat — Step up +1 upon resolving an encounter.
* Short Rest — Step up +1 when taking a short rest opportunity between combats.
* Full Round Action — Spend an entire combat round taking no other actions to "Flood" (+1 step up).
* Full Rest — A full night's sleep completely restores your Focus Die to its maximum ceiling size.

:::
<!-- /popover:focus.basics -->

Focus is a core PC resource represented by a single die on the same $d4 \rightarrow d6 \rightarrow d8 \rightarrow d10 \rightarrow d12$ step ladder as attributes.

The Spend: Once per roll, after seeing the result, a player may roll their current Focus Die and add it to the total.

Explosion Rules on Spend:
* Comparison Rolls (Skill, Attack, Defense vs. Difficulty/Target): The Focus Die explodes **freely and indefinitely** whenever it rolls its maximum face.
* Single Die Rolls (Damage, Armor): The Focus Die follows the **Single Die Rule (single-explode capped)** — it rerolls once on max face and adds, but that reroll cannot trigger further explosions.

The Step-Down Rule: When a player spends their Focus Die, the Focus Die steps down one size on the ladder ($d12 \rightarrow d10 \rightarrow d8 \rightarrow d6 \rightarrow d4 \rightarrow \text{Exhausted}$).

The Flood (Refill): When a Flood event triggers, the Focus Die steps up one size (up to its purchased maximum).

Flood Triggers (+1 step up):
* Start of combat.
* End of combat.
* Taking a short rest opportunity between combats.
* Spending a full round doing nothing but "Flooding" (forgoing all actions).

Full Rest: A full night's sleep resets the Focus Die to its purchased maximum.

Focus vs. Luck (Strict Mutual Exclusivity): A player may use **Focus OR Luck** on a single roll, but **NEVER BOTH**.
* **Luck (🍀):** Redo the whole roll (pure variance mitigation).
* **Focus (🔮):** Add to the roll already made (deliberate agency/boost).

## 🧾 Character Creation

Concept First: Any idea works — punk knight, techno-bard, gargoyle hero, soda rogue, etc.

### 🧭 Starting Paths & 🧬 {Trait} Grants

Every character begins with two Learned Paths:
1. **🧬 Race Path (`🧭`):** Defines species traits, biology, and innate racial rules (0 AP {Trait} grants).
2. **⚔️ Class Path (`🧭`):** Defines starting archetype, core skillset options, proficient weapons, armor, and starting powers.

**🧬 Starting Traits ({Trait} / 0 AP Free):**
* Player Name: Your real name.
* Character Name: The name of your character.
* Race / Class: The species and archetype you are playing.
* Hgt/Wgt/Age: Your height, weight, and age.
* Appearance: Height, weight, age, hair, skin, notable features.
* Positive Trait: A strength, virtue, or defining talent.
* Negative Trait: A flaw, weakness, or vice.
* Flair: A unique aspect that makes your appearance or personality really stand out.
* Adventuring Goal / Quest: Your character’s driving motivation.

✅ Starting Atr

Assign **1x d4, 2x d6, 2x d8** across Might💪, Motion🏃, Mind👁️, Magic✨, and Moxie🫀.

🔮 Starting Focus Die

Character starts with a Focus Die sized at **d4** (purchasable upgrades gated by level, see Advancement).

❤️ Starting Vit

Vit❤️: 10 + 1d(Moxie🫀) (e.g., Moxie d8 = 5+1d8 = 6 to 13).

Only during creation, a 1d(Moxie🫀) roll of 1 may be re-rolled one time, in hopes of a better result.

🧿 Starting Function Slots Capacity

Every character begins with **4 Function Slots** (0 AP) to attune/ready 🍺 Minor (1), 🪄 Lesser (2), 🪬 Greater (3), or 💫 Epic (4) Exotics🧿 and Artifacts🔮.

⭐ Starting AP🧩 (8 AP at Level 1)

Your character is 1st Level⭐ (record 1 for Level⭐) and begins with **8 Starting AP🧩** to shape their initial capabilities. In-Path elements cost 1 AP (2 AP for Skill Sets) without requiring GM approval. *(Default Gear Possession Rule: When a character learns a weapon, armor, or shield, it is assumed they possess that physical item as standard mundane Gear⚙️ by default.)*

A standard, balanced character build typically spends these 8 AP across the following areas:

🎓 1 Skill Set (2 AP)

Skilled in 1 Skill Set🎓 (2 AP) from the Skill Set catalog.

⚔️ 1 Weapon (1 AP)

Skilled in 1 specific Weapon⚔️ (1 AP). *(Assumed owned as Gear⚙️).*

Melee Atk/Dmg💥 uses Might💪.

Hurled Atk/Dmg💥 uses Motion🏃.

Shot Atk/Dmg💥 uses Mind👁️.

🛡️ 1 Armor (1 AP)

Skilled in 1 specific Armor🧥 (1 AP). *(Assumed owned as Gear⚙️).*

Block (Def)🛡️ is Might💪.

Dodge🏃 (Def) is Motion🏃.

Record the armor’s MR👣.

🔥 3 Powers (3 AP)

Learn 3 starting Powers🔥 (1 AP each = 3 AP total; auto-readied on your Power Card).

A recommended approach is taking one each of these:

1 A-action Power🔥 usable at least 1-Enc for encounter impact.

1 P-action Power🔥 that you can turn on 1-Rnd so it can be on anytime you are not otherwise using a P action.

1 1-Day Power🔥 for that big WOW factor.

🧩 1 Flexible AP (1 AP)

Spend your remaining 1 Starting AP🧩 on a flexible upgrade of your choice, such as:

A Shield🛡️ (1 AP — record the shield’s MR👣; assumed owned as Gear⚙️)

A 2nd Weapon⚔️ (1 AP; assumed owned as Gear⚙️)

Nish🚩 Skill (Motion🏃) or Death Check Skill (Moxie🫀) (1 AP)

+2 Max Vit❤️ (1 AP)

💰 Starting Money

Start with 1 Gold (1g) + 1d100 Silver (s) ($100s = 1g$).

🧰 Starting Gear

You already have basic items (food, water, light sources, containers, needed tools).

Choose one personal item of significance (e.g., crown, holy symbol, named sword).

Starting gear is free; GM🔎 may also grant quirky items.

🍺 Starting Minor Magic Item

Begin with one randomly rolled Minor🍺 Magic Item✨ (1 Loadout Slot) from the general or personal table.

🍀 Starting Luck

Luck🍀: Begin each Session with 3 Luck chits (max 5).

## ⭐ Leveling/Advancement {#leveling-advancement}

<!-- @popover:leveling.advancement_steps -->
::: details ⚡ Quick Reference: Leveling & AP Advancement

Gain 2 AP per Level

Free Level Advancement
* Manage Vitality - Free Max Vit Roll (Roll & keep higher)

Spend AP to Learn & Improve Elements (1–4 AP):
* In-Path Elements — Learn Weapon/Armor/Shield/Skill/Power/Rule (1 AP) | Learn Skill Set (2 AP)
* Out-of-Path Elements — Out-of-Path +1 AP Surcharge with GM Approval (2 AP single, 3 AP Skill Set)
* Unmet Item Requirements — Learn Weapon/Armor/Shield below requirements (+1 AP surcharge, downscaled stats, auto-improves 0 AP, refunded when met)
* Learn New Path — Learn additional Path (4 AP + GM Approval)
* Manage Vitality — Gain +2 Max Vit (1 AP)
* Upgrade Power — Apply 1-AP Augment (1 AP)

Special AP Expenditures (1–8 AP):
* Manage Attributes — Step-Up Attribute Die (2–8 AP) | Respec Attributes (1 AP)
* Upgrade Focus Die — Step-Up Focus Die (2–8 AP)
* Expand Loadout Capacity — Purchase +2 Loadout Slots (Escalating $k$ AP schedule)
* Gain Capstone Ability — Learn Heroic Capstone (5–8 AP)

:::
<!-- /popover:leveling.advancement_steps -->


### Advancement Philosophy

Incremental, not exponential → Growth comes from new tricks, not huge Powers🔥 spikes.

Powers🔥 > Atr → The real fun is in unique Powers🔥, gear, and choices—not just bigger dice.

Cinematic growth → Luck, quirks, and Powers🔥 drive memorable play moments.

Customization first → Players shape advancement to match their character’s story, not a rigid class track.

<!-- @rule:leveling.advancement_steps anchor="#leveling-advancement" -->
# Leveling & AP Advancement

Gain 2 AP per Level

Free Level Advancement
• Manage Vitality - Free Max Vit Roll (Roll & keep higher)

Spend AP to Learn & Improve Elements (1–4 AP):
• In-Path Elements — Learn Weapon/Armor/Shield/Skill/Power/Rule (1 AP) | Learn Skill Set (2 AP)
• Out-of-Path Elements — Out-of-Path +1 AP Surcharge with GM Approval (2 AP single, 3 AP Skill Set)
• Unmet Item Requirements — Learn Weapon/Armor/Shield below requirements (+1 AP surcharge, downscaled stats, auto-improves 0 AP, refunded when met)
• Learn New Path — Learn additional Path (4 AP + GM Approval)
• Manage Vitality — Gain +2 Max Vit (1 AP)
• Upgrade Power — Apply 1-AP Augment (1 AP)

Special AP Expenditures (1–8 AP):
• Manage Attributes — Step-Up Attribute Die (2–8 AP) | Respec Attributes (1 AP)
• Upgrade Focus Die — Step-Up Focus Die (2–8 AP)
• Expand Loadout Capacity — Purchase +2 Loadout Slots (Escalating $k$ AP schedule)
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

#### Tier 1: Basic Progression & Element Learning (1–4 AP🧩)

##### 🧭 Path-Based Element Learning & Cross-Path Surcharges
* **In-Path Learning (1 AP / 2 AP):** Any Element within a character's known Paths (Race, Class, or learned Paths) is learned for **1 AP** (or **2 AP** for a Skill Set🎓) with **no GM approval required**.
* **Out-of-Path Learning (+1 AP Surcharge + GM Approval):** Any Element outside a character's known Paths may be learned for **Base AP + 1 AP** (e.g., **2 AP** for a single weapon, armor, shield, skill, power, or rule; **3 AP** for a Skill Set🎓) **WITH GM Approval**.
* **Learning New Paths (4 AP + GM Approval):** Beyond the starting Race and Class Paths, characters may learn an entire new Path for **4 AP WITH GM Approval**.
* **🧬 Traits ({Trait} / 0 AP Free):** Elements designated as Traits cost **0 AP** to gain.
* **📜 Rules Acquisition:** Some Rules are 0 AP Traits (e.g. racial traits), while other Rules may be learned for standard AP costs (1 AP In-Path, 2 AP Out-of-Path with GM approval).
* **⚔️ Default Gear Possession:** When a character learns a new Weapon, Armor, or Shield (via starting Path or AP spending), the default assumption is that they possess that physical item as standard mundane Gear (`⚙️`) (unless the GM determines otherwise based on campaign context).
* **Unmet Item Requirements (+1 AP Surcharge & Refund Engine):** Becoming skilled in a Weapon, Armor, or Shield whose attribute requirements you do not yet meet costs an additional **+1 AP** (2 AP In-Path, 3 AP Out-of-Path). The item's stats are temporarily downscaled to your current attribute and auto-improve (0 AP) as your attribute advances. The extra AP is fully refunded once you meet the requirement and/or acquire the parent Path.

##### Powers-Known Progressive AP Soft Tax
To prevent high-level characters from hoarding endless batteries of cheap 1-Encounter powers, an escalating soft tax applies to total powers learned:

| Total Powers Known | AP Surcharge per Additional Power | Effective Cost (1 AP Base) |
| :--- | :---: | :---: |
| **Powers 1–6 (Base Threshold)** | $+0\text{ AP}$ | **1 AP** |
| **Powers 7–9 (Tier 1 Scaling)** | $+1\text{ AP}$ | **2 AP** |
| **Powers 10–14 (Tier 2 Scaling)** | $+2\text{ AP}$ | **3 AP** |
| **Powers 15+ (Tier 3 Scaling)** | $+3\text{ AP}$ | **4 AP** |

##### The 1-AP Augment System (Advancement Without Version Trees)

Character advancement relies on Horizontal Augments without rigid hierarchical version trees. Spending 1 AP (🧩) upgrades an existing Power🔥 along one of four non-hierarchical vectors:

* **Vector 1: Mechanical Punch (Effect Augment):** Upgrade damage or healing die tier ($d4 \rightarrow d6 \rightarrow d8 \rightarrow d10 \rightarrow d12$) or expand target count by +1.
* **Vector 2: Action Compression (Economy Augment — MANDATORY BALANCE RULE):** Compress action cost down the compression chain ($\text{AM} \rightarrow \text{A} \rightarrow \text{M} \rightarrow \text{P} \rightarrow \text{F}$) or unlock Mobile Striker split-movement ("You may split your movement before and after this attack"). **Balance Rule:** Action Compression is strictly capped at **1 Compression Upgrade per Power** to prevent dominant action-economy abuse.
* **Vector 3: Synergy / Affliction (Twist Augment):** Attach an Affliction on hit (Stunned 1 rnd, Prone, Weakened -2) or attach a Meta Generator ("Generates 1 Meta even on a miss").
* **Vector 4: Frequency / Range Shift (Usage Augment):** Shift usage frequency (e.g., $1\text{-Enc} \rightarrow 2\text{-Enc} \rightarrow 3\text{-Enc}$ max cap, or $\text{Meta⚡} \times 1$ power reusable via combat momentum) or expand Range Band ($\text{Touch} \rightarrow \text{Short} \rightarrow \text{Medium} \rightarrow \text{Long} \rightarrow \text{Extreme}$). Note: Per-encounter usage upgrades step sequentially ($1\text{-Enc} \rightarrow 2\text{-Enc} \rightarrow 3\text{-Enc}$ maximum).

| Category | AP🧩 Options |
| --- | --- |
| **In-Path Elements🧭** | • Learn 1 In-Path Weapon, Armor, Shield, Skill🎓, Power🔥, or Rule📜 — **1 AP**<br>• Learn 1 In-Path Skill Set🎓 — **2 AP** |
| **Out-of-Path Elements🌟** | • Learn 1 Out-of-Path Weapon, Armor, Shield, Skill🎓, Power🔥, or Rule📜 *(GM Approval)* — **2 AP** (+1 AP Surcharge)<br>• Learn 1 Out-of-Path Skill Set🎓 *(GM Approval)* — **3 AP** (+1 AP Surcharge) |
| **Unmet Requirement Items🧰** | • Learn Weapon/Armor/Shield without meeting requirements *(Stats downscale, auto-improve 0 AP, AP refunded when met)* — **+1 AP Surcharge** (2 AP In-Path / 3 AP Out-of-Path) |
| **New Paths🧭** | • Learn 1 new complete Path *(GM Approval)* — **4 AP** |
| **Powers🔥 Augments** | • Upgrade an existing Power🔥 along 1 Augment Vector — **1 AP**<br>• Randomly roll one Power🔥. If duplicate $\rightarrow$ gain **1 Free Augment Token** — **1 AP** |
| **Vit❤️** | • Gain +2 Vit❤️ — **1 AP** |
| **Atr✅** | • Reshuffle (swap some/all of your Atr✅ dice) — **1 AP** *(Downtime / Milestone Level-Up Only)* |

#### Tier 2: Vertical Progression & Stat Step-Ups (1–8 AP🧩)

##### Vertical Attribute Die Step-Ups

Attribute upgrades are purchased with AP🧩 and are tier-gated by your level. The maximum array of attribute dice you can have is limited by your tier:

| Tier / Level Milestone | Attribute Die Array Max Available |
| :--- | :--- |
| **Level 1 (Starting Array)** | $1\times d4,\; 2\times d6,\; 2\times d8$ |
| **Level 25 Tier** | $2\times d6,\; 3\times d8$ |
| **Level 50 Tier** | $2\times d6,\; 1\times d8,\; 2\times d10$ |
| **Level 75 Tier** | $2\times d6,\; 1\times d8,\; 1\times d10,\; 1\times d12$ |
| **Level 100 Tier (Max Cap)** | $1\times d6,\; 1\times d8,\; 1\times d10,\; 2\times d12$ *(Hard cap: Max $2\times d12$)* |

| Step (per die) | AP Cost (per die) |
| --- | --- |
| **d4 → d6** | 2 AP |
| **d6 → d8** | 4 AP |
| **d8 → d10** | 6 AP |
| **d10 → d12** | 8 AP |

**Qualitative Attribute Perks (Fixing "Boring Stat Bumps"):**
* **$d8\text{ Tier Unlocked:}$** Unlock 1 passive utility trait tied to that attribute (e.g., Motion $d8 \rightarrow$ Free Disengage $1\times/\text{encounter}$).
* **$d12\text{ Tier Unlocked:}$** Unlock 1 master perk tied to that attribute (e.g., Moxie $d12 \rightarrow$ Death Resistance; Mind $d12 \rightarrow +1\text{ extra tactic slot}$).

##### Vertical Focus Die Upgrade

You can purchase upgrades to your maximum Focus Die ceiling using AP🧩, subject to level gates:

| Focus Max | Level Gate | AP Cost |
| :---: | :---: | :---: |
| **d4 → d6** | Level 1+ | 2 AP |
| **d6 → d8** | Level 15+ | 4 AP |
| **d8 → d10** | Level 35+ | 6 AP |
| **d10 → d12** | Level 60+ | 8 AP |

##### Blake's Uncapped Soft-Slope Loadout Slots AP Schedule

All characters begin with a baseline of **4 Loadout Slots** at Level 1. Capacity can be expanded infinitely with no hard ceiling using the escalating schedule where the $k^{\text{th}}$ expansion costs $k\text{ AP}$:

| Total Loadout Slots | Expansion Step | Additional Slots Gained | AP Cost for This Step | Cumulative AP Invested |
| :---: | :--- | :---: | :---: | :---: |
| **4 Slots** | **Baseline (Level 1)** | — | **0 AP** | **0 AP** |
| **6 Slots** | **Expansion I** | +2 Slots | **1 AP** | **1 AP** |
| **8 Slots** | **Expansion II** | +2 Slots | **2 AP** | **3 AP** |
| **10 Slots** | **Expansion III** | +2 Slots | **3 AP** | **6 AP** |
| **12 Slots** | **Expansion IV** | +2 Slots | **4 AP** | **10 AP** |
| **14 Slots** | **Expansion V** | +2 Slots | **5 AP** | **15 AP** |
| **16 Slots** | **Expansion VI** | +2 Slots | **6 AP** | **21 AP** |
| **18 Slots** | **Expansion VII** | +2 Slots | **7 AP** | **28 AP** |
| **20 Slots** | **Expansion VIII** | +2 Slots | **8 AP** | **36 AP** |
| **$4 + (2 \times k)$ Slots** | **Expansion $k$** | +2 Slots | **$k$ AP** | **$\frac{k(k+1)}{2}$ AP** |

#### Tier 3: Heroic Capstones (5–8 AP🧩) — "Saving" Tier

High-cost capstones designed for build-defining investment and long-term saving anticipation:

| Category | Cost (AP🧩) | Option & Effect |
| --- | --- | --- |
| **Master Technique** | **5 AP** | Combine two known Powers into a single combined-action deployment. |
| **Second Reaction** | **6 AP** | Gain an additional Reaction action per combat round. |
| **Heroic Passive** | **8 AP** | Unlock a signature, narrative-defining passive power or capstone immunity. |

All choices require GM approval. The GM may veto or suggest alternatives if a choice does not fit the campaign.

<!-- @rule:skills.basics anchor="#skills" -->
## 🎓 Skill and Skill Set Rules

<!-- @popover:skills.basics -->
::: details ⚡ Quick Reference: Skilled vs. Unskilled Rolls

Rolls:
* Unskilled Checks — Unknown skills (including weapons, armor, and shields) may be attempted as an Unskilled Ability check (1d20 + Atr Die).
* Skilled Checks — Known skills, or those approved by the GM as matching a Skill Set, use a Skilled Ability check (2H20 + Atr Die).
* Powers & Magic Items — All Powers🔥 and Magic Items✨ are ALWAYS considered Skilled.

Action:
* Skill Action Costs — Skills use a Partial (P) or Free (F) action as determined by the GM. GM-initiated skill checks are always Free (F).

:::
<!-- /popover:skills.basics -->


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

<!-- @rule:weapons.basics anchor="#weapon-rules" -->
## ⚔️ Weapon Rules

<!-- @popover:weapons.basics -->
::: details ⚡ Quick Reference: Weapons & Combat Rules

<!-- tab: ⚔️ Combat Rules -->
Rolls:
* Unskilled Attacks — Unknown weapons may be attempted as an Unskilled Attack (1d20 + Atk Die) with normal damage and Unskilled Block.
* Skilled Attacks — Known weapons use a Skilled Attack (2H20 + Atk Die) with normal damage and Skilled Block.
* Powers & Magic Items — All Powers🔥 and Magic Items✨ are ALWAYS considered Skilled.

Action:
* Attack & Block Costs — Attacking is an Attack (A) action. Blocking is a Free (F) reaction.

Multi Attacking:
* Single Weapon Example — With Might💪 d8 and a d4 Dagger, you can make 2 attacks (d4 + d4). With Might💪 d12, you can make 3 attacks (d4 + d4 + d4).
* Dual Wielding Example — With a d4 Dagger + d6 Shortsword (total d10), Might💪 d10+ is required to make a multi-attack.
* Multi-Attack Rules — Roll a separate Attack (#d20 + Atr) and separate Damage die for each strike. Strikes can target one foe or be split among adjacent foes.
* ⚠️ Uplifting Exception — Multi-attack damage dice are NEVER uplifted.

Opportunity Attacks:
* Trigger Requirements — Previously engaged in MELEE, currently have Initiative (Nish🚩), and monster moves out of melee range OR performs a distracting action (casts a spell, quaffs a potion, inspects an item).
* Attack Resolution — Immediate, Free (F) BASIC reaction attack (no Focus, Luck, Powers, or Magic Item enhancements allowed).

Blocking Melee:
* Requirements — Wielding a drawn MELEE weapon; monster attack is melee with Dmg ≤ weapon "Max Block" rating.
* Resolution — Success = negates all damage. Failure = hit connects, roll Armor AR value to reduce damage.

<!-- tab: 🥋 Combat Styles -->
| Combat Style | Off-Hand | Key Rules & Utility Handling |
| :--- | :---: | :--- |
| **🗡️ Single Weapon** | **FREE** | Maximum precision. Off-hand is free for torches, flasks, or potions without action penalty. |
| **⚔️ Dual Wield** | **TIED UP** | Hold two 1H weapons. Use higher Block rating of either. Utility tasks require a Partial (P) action. |
| **🛡️ Weapon & Shield** | **TIED UP** | Hold 1H weapon + Shield. Shield Block allowed. Utility tasks require a Partial (P) action. |
| **🥊 Unarmed / Natural** | **FREE** | Brawling, punches, kicks, grabs, thrown objects. Cannot Block. Damage is -1 die step below Atr die (min d4). |

:::
<!-- /popover:weapons.basics -->


### 🎯 Weapon Requirements, Downscaling & AP Refunding

A character can become skilled in any Weapon⚔️ whose attribute requirements they do not yet meet:

1. **Learning Surcharge (+1 AP):** Learning a weapon below its attribute requirement adds a **+1 AP surcharge** (2 AP In-Kit, 3 AP Out-of-Kit with GM approval).
2. **Stat Downscaling:** All of that weapon's stats (Damage die, Block Cap) are pulled **DOWN** to the character's current active attribute die/number.
3. **Auto-Improvement (0 AP):** Anytime the character's relevant attribute advances, the weapon's stats automatically improve to the higher value (up to the weapon's native maximum) for **0 AP**.
4. **AP Refund Engine:** The extra AP (+1 for unmet requirements, and/or +1 for out-of-kit acquisition) is **fully refunded** to the character's available AP pool as soon as the character meets the attribute requirement and/or acquires the parent Kit.
5. **Default Gear Possession:** When a weapon is learned, the character is assumed to possess that physical weapon as standard mundane Gear (`⚙️`) by default (unless the GM determines otherwise based on campaign tone or narrative circumstances).

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

Improvised (Melee) - An improvised melee weapon (chair, board, candelabra, torch, etc.) all fit into this category.

Throw Object – Applies to all logical thrown projectiles such as a rock, mug, or other improvised items.

Weapons marked Hu (Hurled) use their normal weapon Atr✅ and rolls and are not treated as thrown objects.

With GM🔎 approval, non-hurled weapons⚔️ (such as a short sword) may be thrown as improvised objects. In this case, all Throw Object rules apply.

#### Off-Hand Use

A free off-hand (when using a one-handed weapon⚔️) allows carrying utility items such as a torch, lantern, Magic Item✨, or flask.

With two-handed weapons⚔️, this still applies: you may temporarily shift the weapon⚔️ into one hand to free the other for item use.

Note: This advantage does not exist when dual wielding or using Weapon & Shield🛡️.

## Armor & Shields

<!-- @popover:col.armor.ar -->
::: details ⚡ Quick Reference: Armor & Defense Rules

Rolls:
* Unskilled Armor — Unknown armor may be attempted as an Unskilled Dodge (1d20 + Dodge Die) and normal AR.
* Skilled Armor — Skilled armor uses a Skilled Dodge (2H20 + Dodge Die) and normal AR.

Dodge vs Block:
* Attack Evasion — All attacks may be Dodged; some attacks may be Blocked rather than Dodged (see weapon and shield rules).
* Exclusive Defenses — No attack may be both Blocked and Dodged.
* Fallback AR Protection — If a weapon or shield block fails, the Armor's AR is still rolled.

Action:
* Action Cost — ALL armor rolls are a Free (F) action.

:::
<!-- /popover:col.armor.ar -->

### 🛡️ Armor & Shield Requirements, Downscaling & AP Refunding

A character can become skilled in any Armor🧥 or Shield🛡️ whose attribute requirements they do not yet meet:

1. **Learning Surcharge (+1 AP):** Learning armor or a shield below its attribute requirement adds a **+1 AP surcharge** (2 AP In-Kit, 3 AP Out-of-Kit with GM approval).
2. **Stat Downscaling:** All of that item's stats (Armor AR die, Shield Block Cap, Shield Block die) are pulled **DOWN** to match the character's current active attribute number.
3. **Auto-Improvement (0 AP):** Anytime the character's relevant attribute advances, the armor's or shield's stats automatically scale up to the higher value (up to the item's native baseline maximum) for **0 AP**.
4. **AP Refund Engine:** The extra AP surcharge (+1 for unmet requirements, and/or +1 for out-of-kit acquisition) is **fully refunded** to the character's available AP pool as soon as the character meets the attribute requirement and/or acquires the parent Kit.
5. **Default Gear Possession:** When armor or a shield is learned, the character is assumed to possess that physical item as standard mundane Gear (`⚙️`) by default (unless the GM determines otherwise based on campaign tone or narrative circumstances).

### 🛡️ Shields

<!-- @popover:col.shields.block -->
::: details ⚡ Quick Reference: Shield & Block Rules

Rolls:
* Unskilled Shield Block — Unknown shields may be attempted as an Unskilled Block (1d20 + Block Die).
* Skilled Attacks — Known shields use a Skilled Block (2H20 + Block Die).

Action:
* Action Cost — Blocking is a Free (F) action.

Blocking:
* Requirements — Wielding a drawn shield; Any Attack that “could” be Dodged; Attack’s Dmg ≤ weapon "Max Block" rating.
* Resolution — Success = negates all damage. Failure = hit connects, roll Armor AR value to reduce damage.

Shield-Hand Restrictions:
* Off-Hand Limits — Holding a shield completely ties up your off-hand. You cannot hold a torch, lantern, flask, or second weapon in your shield hand.
* Utility Action Cost — Performing utility tasks during combat (quaffing a potion, retrieving an item, opening a heavy door) requires a Partial (P) action to awkwardly manage items while holding your weapon and shield.

Movement Rate (MR 👣) Penalty:
* Active Shield Penalty — When a shield is drawn, the Shield Drawn MR applies.

:::
<!-- /popover:col.shields.block -->


All Armor’s Defense (Dod/AR or Blk/AR): Dodge 🤸 = Motion🏃, Block 🧱 = Might💪.

Shields🛡️ provide a Block Cap🧱 rating, which functions the same as weapon⚔️ Block Cap (it applies to any attack that “could” be Dodged, if the shield’s Block Cap🧱 is ≥ the monster’s Dmg💥).

The key advantage of shields🛡️ is that their Block🧱 is rolled at +1 die step above the Might💪 requirement. The tradeoff is reduced MR👣 and tying up your off-hand.

MR👣 impact applies only when the shield🛡️ is wielded (drawn and readied).

Small shields🛡️ (bucklers, bracers, vambraces) offer mobility and count as part of regular Armor🧥; they are not large enough to be considered true shields🛡️ in MetaScape.

Large shields🛡️ provide greater Block Cap🧱 protection but impose greater limits on mobility.

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

<!-- @popover:vitality.death_checks -->
::: details ⚡ Quick Reference: Vitality & Death Checks

Unconsciousness & Dying:
* Unconsciousness Condition — Unconscious if Current Vit is ≤ 0.
* Death Check Trigger — When Current Vit is -1 or less, must immediately make a Death Check and make a Death Check each round on your nish, until Current Vit is no longer negative or you die.
* Death Check Roll — Moxie 🫀 Ability check vs. Difficulty = 5 + (– Current Vit ❤️) as unskilled, unless you have the “Death Check🫀” skill. Example: at Current Vit of -8 the Dif is 13.

Bleeding:
* Bleeding Out (+1 Wound/Rnd) — After each Death Check except the first, your Wounds automatically increase by +1 Wound due to active bleeding unless you receive bandaging, triage, or magical healing, making future death checks harder.

💤 Rest & Recovery (Healing):
* Post-Combat Short Rest — Taking a brief rest opportunity after a combat encounter restores d4 Vit ❤️ (Maximum 1 short rest per encounter).
* Full Day Rest (Sleep) — A full night's sleep restores 2d4 Vit ❤️.
* First Aid & Healing — Medical supplies, bandaging, and healing skills stop active bleeding.
* Magical Healing — Will stop active bleeding and heal as per the power or item’s rules.

:::
<!-- /popover:vitality.death_checks -->


Monster Declares Atk⚔️.

Player Defense Roll: 2H20 + Atr✅ Die + Bonus using:

Might💪 (Block🧱): for any attack that “could” be Dodged, if armed with equal/larger Block Cap🧱 weapon⚔️ or shield🧱.

Motion🏃 (Dodge): nearly always valid.

Magic✨ (Resist): for undodgeable arcane/mystical effects (fire, acid, explosion, magical effects).

Moxie🫀 (Resist): for bodily/stamina effects (poison, exhaustion, vitality, physical endurance).

Note: Since this is a comparison roll, the Attribute die explodes indefinitely on max face.

Beat Monster Atk⚔️ (10–24) → Avoid Dmg💥.

If Defense Fails → Player Armor AR🧥: Roll armor die (d4–d12) and subtract result from Monster Dmg💥. The remainder = Wnd🩸. This armor die roll follows the Single Die Rule (single-explode capped).

Note the Block🧱die is never rolled in lieu of armor as the Block defense MISSED. Thus the blow has hit the character’s AR🧥.

Monsters inflict Fatigue Wnds🩸 by default based on Dmg💥 (ten's digit + 1: Dmg 1–9 = 1, 10–19 = 2, 20–29 = 3, etc.; huge/giant monsters or elites may modify this). If your AR🧥 results in less Wnds🩸 than this Fatigue value, the character suffers the Fatigue Wnds🩸 instead. Fatigue Wnds🩸 do NOT trigger Afflictions if the AR🧥 roll would have stopped ALL of the Dmg💥.

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

<!-- @popover:powers.basics -->
::: details ⚡ Quick Reference: Powers & Combat Rules

Auto-Readied Power Card:
* Auto-Ready — All learned Powers are immediately active and readied on your character's Power Card. No rigid ready-slot buckets.
* 4-Channel Action Economy — Round Action Pool = 1 Attack (A) + 1 Move (M) + 1 Partial (P) + Unlimited Free (F) actions (and hybrid AM).

Exclusive Stacking Master Rule:
* Master Invariant — A character may benefit from only the single highest value or best effect of a given power or modifier at any time.

Powers & Magic Items Parity:
* Shared Rules Engine — Powers & Magic Items function EXACTLY the same (Magic Items are powers granted by item possession).
* Equipment Requirement — Magic Items must be properly held, drawn, or worn to work and draw from Loadout Slots.

Always Skilled:
* Skilled Invocation — Powers and Magic Items are ALWAYS considered Skilled (2H20 + Attribute Die).

Syntax Standard:
* Formula — Name | Action Budget | Usage Frequency → Mechanical Effect.
* Example — Discordant Chord | A | 1-Rnd → Magic✨ attack vs all Short foes for d4 Dmg.

Range:
* Guidance — 8 Tactical Bands: Self, Touch, 1 (adjacent), 2 (reach), Short (≤6 sq), Medium (≤12 sq), Long (≤24 sq), Extreme (≥25 sq).
* Disadvantage Extension — GM may allow a single range extension at disadvantage.

The Luck Twist (Rule of 1):
* Apply one instant "Rule of 1" boost per Luck chit (Max 1 Luck Twist per activation): -1 Action Budget, +1 Target, +1 Die Tier, +1 Range Band, +1 Push/Move.

:::
<!-- /popover:powers.basics -->

### 🔥 Powers & The Auto-Readied Power Card Architecture

SupaFlex adopts an **Auto-Readied Power Card** architecture. All learned powers are immediately active and available for combat deployment on the character's **Power Card** (the active card titled "Powers" on the character sheet).

* **Auto-Ready:** Every power learned through AP advancement or Path grants is instantly accessible. There are no artificial bucket limits (Primary Arsenal, Mobility & Defense, Support/Passive).
* **Combat Regulation:** Action economy limits ($1\text{ Attack [A]} + 1\text{ Move [M]} + 1\text{ Partial [P]} + \text{Unlimited Free [F]}$, plus hybrid $\text{Attack \& Move [AM]}$) and usage frequencies ($1\text{-Rnd}, 1\text{-Enc}, 2\text{-Enc}, 3\text{-Enc}, 1\text{-⚡}, 1\text{-🍀}$) naturally govern tactical deployment during battle.

#### ⚖️ The Exclusive Stacking Master Rule

To maintain rock-solid mathematical balance and prevent degenerate stacking synergies:
> **Exclusive Stacking Master Rule:** A character may benefit from only the single highest value or best effect of a given power, buff, or tactical modifier at any time. Identical or overlapping bonuses, damage amplifiers, and movement replacements do not stack unless an ability explicitly states otherwise.

#### 📈 Powers-Known Progressive AP Soft Tax

To prevent high-level characters from hoarding endless batteries of cheap 1-Encounter powers, an escalating soft tax applies to total powers learned:

| Total Powers Known | AP Surcharge per Additional Power | Effective Cost (1 AP Base) |
| :--- | :---: | :---: |
| **Powers 1–6 (Base Threshold)** | $+0\text{ AP}$ | **1 AP** |
| **Powers 7–9 (Tier 1 Scaling)** | $+1\text{ AP}$ | **2 AP** |
| **Powers 10–14 (Tier 2 Scaling)** | $+2\text{ AP}$ | **3 AP** |
| **Powers 15+ (Tier 3 Scaling)** | $+3\text{ AP}$ | **4 AP** |

#### 🪄 Magic Item Parity

Magic Items function EXACTLY like Powers🔥 (they are simply powers granted by item ownership). All rules for action budgets (AMP), usage frequencies, Charge costs (1-⚡), and 1-AP augments apply identically to Magic Items. Unlike innate Powers, Magic Items require Loadout Capacity Slots (1–4 slots) to attune and integrate.

#### 📜 System Architecture: Power & Magic Item Grammar

To ensure absolute clarity without rulebook arguments or bloat, every Power🔥 and Magic Item✨ follows a standardized, single-sentence Power Grammar:

**Name | Budget (Action / Usage) | 1-Sentence Mechanical Effect**

Example Entries:
* **Discordant Chord** | A / 1-Rnd → Magic✨ attack vs all Short foes for d4 Dmg.
* **Cyclone Kick** | A / 1-Enc → 1-⚡ → Motion🏃 attack dealing d8 Dmg and pushing target d4 sq.
* **Blade Parry** | F / 2-Enc → On hit in Melee: Auto-succeed a weapon Block🛡️ (up to Block Cap).
* **Bardic Bluff** | P / 1-Enc → Mind👁️ check vs target's Mind👁️ with Advantage (2H20) to deceive or distract.
* **Frost Pebble (Minor Item)** | A / 1-Enc → Hurled Motion🏃 attack vs Short target for Magic✨ + d4 Cold Dmg.

All abilities have a Usage🔄, Action🔷, Duration⏳, and Range🎯. Often these are self-evident and do not need verbose explanation.

### 🔄 Usage & The Charge Engine (⚡)

How often an ability (Power🔥 or Magic Item✨) can be used:

| Usage Option | Refresh & Mechanical Execution | Pacing & Table Utility |
| :---: | :--- | :--- |
| **`1`** | **1 Use Total:** Expended upon single activation; empty/consumed. | Single-use potions, scrolls, one-shot trinkets, or finite explosives. *(Hard Limit: SupaFlex will NEVER support more than 3 uses).* |
| **`2`** | **2 Uses Total:** Expended after 2 activations; empty/consumed. | Dual-dose vials, paired charges, or double-shot disposable gear. |
| **`3`** | **3 Uses Total:** Expended after 3 activations; empty/consumed. | Multi-charge batteries, field bandages, or 3-dose elixir vials. *(Maximum consumable capacity).* |
| **`1-🍀`** | **1 Luck:** Consumes 1 Luck chit (🍀) from player's pool. | Clutch cinematic interrupts, heroic saves, and auto-defenses. |
| **`1-⚡`** | **1 Spark:** Consumes 1 Spark (5 Charges, ⚡). Max 1/encounter. | High-impact tactical burst, combos, or battlefield supremacy. |
| **`1-Enc`** | **1 per Encounter:** Refreshes when combat/encounter resolves. | Major tactical abilities, special stances, and defensive shields. |
| **`2-Enc`** | **2 per Encounter:** Refreshes when combat/encounter resolves. | Flexible encounter abilities and tactical weapon maneuvers. |
| **`3-Enc`** | **3 per Encounter:** Refreshes when combat/encounter resolves. | High-frequency encounter utilities and reliable tactical powers. *(HARD CAP: SupaFlex will NEVER support more than 3 uses per encounter).* |
| **`1-Rnd`** | **1 per Round:** Refreshes every round on Initiative (Nish🚩). | Core martial strikes, baseline spells, and primary combat actions. |

#### ⚡ Charge Generation & Spark Rules

- **5 Charges = 1 Spark:** It ALWAYS takes 5 Charges (⚡) to build 1 Spark (the filled lightning bolt icon ⚡). All Spark abilities indicate this in the Usage column as **1-⚡** (representing 1 Spark). There are no 2-⚡ or 3-⚡ costs.
- **Charge Generation Events:** Building a Spark occurs via Charges earned in gameplay:
  - **Tremendous or Critical Rolls:** Gain +1 Charge for every natural 20 or natural 1 on the base d20 die of a typical ability roll.
  - **Exploding Die Events:** Gain +1 Charge per exploding die roll (if a die explodes 4 times in a row, gain 4 Charges). Applies to ANY ability roll (Skill, Attack, Defense, Focus, etc.).
- **Sparked State (+1 to All Rolls):** A character holding a full Spark (5 Charges) is "Fully Sparked" (or has "A Full Spark"). While Sparked, they gain a flat +1 bonus to ALL Ability Rolls, Defenses, and Damage rolls until they spend their Spark (⚡) or the encounter ends.
- **Encounter Transition & Zeroing Out:**
  - If a character reaches a full Spark (5 Charges) in an encounter, then at the end of that encounter their Charges zero out (reset to 0).
  - Otherwise, if they end an encounter with fewer than 5 Charges (<5 Charges), their Charges carry over into the next encounter. (Characters are continuously transitioning between encounter types, whether combat or roleplaying).

> [!NOTE]
> **Elimination of Daily Hoarding (X-Day)**
> High-tier daily powers are converted into Spark powers (1-⚡) or 1-Luck powers. Players no longer hoard powerful abilities for boss fights that never come; they earn them dynamically in every fight through tactical play and dice momentum.

#### 🧠 Game Theory & Psychology ("My Game Theory")

- **Built-in Delay:** Requires 5 Charges to gain a Spark, introducing natural tactical delay for high-impact abilities.
- **Dopamine Rewards:** Gives immediate positive feedback (dopamine hit) anytime a player rolls a Tremendous (nat 20), Critical (nat 1), or Exploding die.
- **Pavlovian Random Anticipation:** Because a player could gain multiple Charges in a single round from exploding dice, players never know exactly when a full Spark (⚡) will hit, driving engagement.
- **Active Play Incentive:** Directly rewards active participation in encounters (taking actions, making rolls, and Focusing to trigger exploding dice).


### 🔷 Actions

Every combat round, each character receives an action allocation of **1 Attack (A)**, **1 Move (M)**, and **1 Partial (P)**, plus **Unlimited Free (F)** actions (within GM reason). These action channels are never interchangeable (you cannot trade an A or M for a P).

#### The 5 Strict Action Channels

| Action | Designation | Tactical Scope & Cost |
| :---: | :--- | :--- |
| **`AM`** | **Attack & Move** | Hybrid action consuming **both** your 1 Attack (A) and 1 Move (M) allocations for the round. Leaves your 1 Partial (P) and unlimited Free (F) actions available. |
| **`A`** | **Attack** | Any weapon strike, martial attack, or offensive ability. Consumes your 1 Attack allocation for the round. *(Attack only — never referred to as a generic "Action").* |
| **`M`** | **Move** | Any tactical movement ($\ge 1$ sq up to your full Movement Rate `MR`). Moving even 1 square consumes your 1 Move allocation. |
| **`P`** | **Partial** | Minor, preparatory, or interacting utility tasks (drawing a blade, donning a shield, quaffing a potion, opening a door). Consumes your 1 Partial allocation. *(Partial only — never referred to as "Power").* |
| **`F`** | **Free** | Trivial, instantaneous reactions: Defenses (Block🧱, Dodge🏃, Armor AR🧥), saves, quick verbal communication, or dropping an item. Unlimited per round (at GM discretion). |

#### Tactical Movement & The Mobile Striker Clause
* **Standard Attack & Move Sequence:** If you do not make an Attack (A), you may freely pause and resume your Move (M) (move $\rightarrow$ pause $\rightarrow$ move). However, taking an Attack (A) action immediately concludes your turn's movement; any unused Movement Rate (MR) is forfeit.
* **Mobile Striker Clause:** Specialized Move (M) or Partial (P) powers or items can explicitly grant split-movement ("You may split your movement before and after this attack"), providing tactical identity for mobility builds.
* **Skill Action Cost:** Skills🎓 default to a Partial (P) action unless an ability or GM specifies Free (F). GM-initiated awareness or perception checks are always Free (F).


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

Powers🔥 and Magic Items✨ eliminate fiddly footage counting in favor of 8 standard Tactical Range Bands:

#### The 8 Tactical Range Bands

| Range Band | Distance / Tactical Footprint | Tactical Application |
| :---: | :--- | :--- |
| **`Self`** | Caster / user only | Personal buffs, stances, and defensive auras. |
| **`Touch`** | Direct physical contact | Medical triage, infusions, and close-contact touch powers. |
| **`1`** | $1\text{ square strike}$ / adjacent melee ($\le 1$ sq) | Standard melee weapon strikes, unarmed combat, and point-blank effects. |
| **`2`** | $2\text{ square strike}$ / reach melee ($\le 2$ sq) | Reach weapons (polearms, spears, whips) and lunging martial maneuvers. |
| **`Short`** | Engagement zone / same room ($\le 6$ sq) | Thrown weapons, short-range blasts, and close-quarters skirmishing. |
| **`Medium`** | Across the battlefield / line of sight ($\le 12$ sq) | Standard ranged weapons (shortbows, pistols) and mid-range spells. |
| **`Long`** | Extended sight line ($\le 24$ sq) | Military bows, rifles, and long-range tactical artillery. |
| **`Extreme`** | Beyond standard grid boundaries ($\ge 25$ sq) | Sniper rifles, siege engines, and orbital strikes *(requires Disadvantaged roll: 2L20 / 1d20)*. |

#### 📐 AoE Geometry Standards (Area of Effect)

When abilities affect multiple squares or areas, they strictly enforce standard, grid-friendly geometry:

| Format | Geometry & Measurement Standard | Example |
| :---: | :--- | :--- |
| **`AoE [#]r`** | **Radius Burst:** Centered on a designated point, affecting all squares within $[#]$ squares radius *(excluding the origin/starting square itself)*. | `AoE 2r` *(burst extending 2 squares in all directions from target origin).* |
| **`[#]x[#]`** | **Rectangular Footprint:** Stated directly as width $\times$ length in squares *(written directly without an "AoE" prefix)*. | `3x6` *(rectangular footprint covering 3 squares wide by 6 squares long).* |

> [!IMPORTANT]
> **Strict Prohibition of Cones**
> Traditional tabletop "cones" are strictly prohibited in SupaFlex to eliminate ambiguous grid templates, table arguments, and diagonal-edge disputes. All spread or sweeping effects are cleanly represented as rectangular footprints (e.g., a fiery breath or shotgun spray is standardized as a `3x6` rectangle).


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

### 🎲 Universal Roll Required Doctrine
In SupaFlex, rarely if ever does a target (friend, foe, or PC) simply have an unavoidable negative effect or damage applied passively without an active check or saving throw. Hostile effects, conditions, and area attacks should almost ALWAYS involve an active roll (e.g. `Save ✨ or Dmg ✨`, `Save 🫀 or Poisoned`, `Atk 👁️ Dmg d8`).

## 🍀 Luck

#### 🍀 The Luck Twist (Rule of 1)

When activating any Power🔥 or Magic Item✨, a player may spend 1 Luck chit (🍀) from their pool to apply a dynamic "Rule of 1" modification (+1 / -1) to that activation.

Permitted "Rule of 1" Modifications (Pick One per Luck Chit):
* **+1 Charge:** Immediately gain +1 Charge toward your Spark gauge (Limit: Max 2 converted per round).
* **-1 Action Budget:** Compress action cost by 1 step (AM → A → M → P → F). (e.g., Activate an Attack (A) power as a Partial (P) action).
* **+1 Target:** Add +1 target to the power or magic item's effect. (e.g., Strike 2 adjacent foes with a single-target melee/spell power).
* **+1 Die Tier:** Increase damage or healing die by 1 die step (d4 → d6 → d8 → d10 → d12).
* **+1 Range Band:** Expand range by 1 Range Band (Touch → Short → Medium → Long → Extreme).
* **+1 Push / Move:** Add +1 sq to any movement, push, or pull effect.

Play & Integration Rules:
* **Limit:** Maximum 1 Luck Twist (🍀) per power/item activation (cannot stack multiple Luck chits on the exact same roll/activation).
* **No Direct 1-⚡ Bypass:** Luck chits CANNOT be spent to directly activate 1-⚡ Powers or Magic Items. They only build toward the 5-Charge Spark requirement via Option 1 (+1 Charge).
* **Instant Adjudication:** No character sheet editing required. Simply announce: "I'm burning a Luck chit 🍀 for a +1 Target / -1 Action Budget Twist!"
* **Magic Item Parity:** Applies 100% identically to both Powers (🔥) and Magic Items (✨).

Default Use: Reroll entire roll (all dice), keep best (original or reroll).

Cannot reroll partial dice (must reroll all involved dice).

Cannot reroll if a Critical💀 occurs.

Cannot use more than once on a particular roll (no “second Luck🍀”).

Focus vs. Luck (Strict Mutual Exclusivity): A player may use **Focus OR Luck** on a single roll, but **NEVER BOTH**.
* **Luck (🍀):** Redo the whole roll (pure variance mitigation).
* **Focus (🔮):** Add to the roll already made (deliberate agency/boost).

Starting Luck🍀: 3 chits.

Earning Luck🍀: Awarded for cool, funny, or heroic play (max 5).

Other Uses: May be spent for special learned Luck Powers🔥 (e.g., Lucky Dodge, Inspire Ally, Twist of Fate).

<!-- @rule:magic_items.basics anchor="#equipment-loadout" -->
## 🧰 Equipment, Functions & The 5-Tier Lineage Hierarchy {#equipment-loadout}

<!-- @popover:magic_items.basics -->
::: details ⚡ Quick Reference: Equipment & Loadout Slots

Universal Capacity Pool:
* Base Capacity — Every character starts with 4 Loadout Slots at Level 1.
* Shared Bandwidth — Both Artifacts (💍 Magic Relics) and Exotics (🧿 Tech/Cyber/Biotech) draw from the same Loadout Capacity Pool.
* Mundane Gear — Standard gear, weapons, armor, and tools consume 0 Loadout Slots.

Tier Slot Weights:
* 🍺 Minor Item — 1 Loadout Slot
* 🪄 Lesser Item — 2 Loadout Slots
* 🪬 Greater Item — 3 Loadout Slots
* 💫 Epic Item — 4 Loadout Slots

Loadout vs. Vault:
* Active Loadout — The items actively attuned, wired, or holstered on your person.
* The Vault — Unlimited inactive storage. Swap items between Vault and active Loadout Slots during a 5-minute out-of-combat breather.

:::
<!-- /popover:magic_items.basics -->

SupaFlex eliminates weight math, bulk values, and movement rate penalties. A character’s tactical capability is bounded not by what they can carry, but by their active **Function Slots Capacity**.

```text
                                [ 🧰 ALL EQUIPMENT ]
                                         │
              ┌──────────────────────────┴──────────────────────────┐
              ▼                                                     ▼
        MUNDANE UTILITY                                     TACTICAL BANDWIDTH
    (0 Slots • Gear Drawer)                               (1–4 Slots • Live Sheet)
          [ ⚙️ GEAR ]                                           [ 🧿 FUNCTIONS ]
                                                                    │
                                         ┌──────────────────────────┴──────────────────────────┐
                                         ▼                                                     ▼
                                 UNPURCHASABLE LOOT                                    STORE / CRAFTED
                                  [ 🔮 ARTIFACTS ]                                      [ 🚀 SPEC GEAR ]
                                 (Found Treasure)                                      (Purchasable)
                                         │                                                     │
                                         └─────────────────────┬───────────────────────────────┘
                                                               ▼
                                                       [ THE VAULT ]
                                                 (Inactive Functions Pool)
                                                               │
                                                               ▼
                                                    [ FUNCTIONS MANAGER ]
                                              (Ready 1–4 Slots to Live Sheet)
```

### 1. The Functions Vault vs. Active Function Slots
* **The Functions Vault (📦):** An unlimited repository where inactive Functions rest when not readied for immediate combat or encounter use.
* **Active Function Slots (🧿):** The equipment abilities actively integrated and available for tactical execution. Every character begins with **4 Function Slots** (0 AP) at Level 1 and can expand capacity using the uncapped soft-slope AP schedule.
* **Breather Swap:** Characters may freely swap functions between their Vault and active Function Slots during any **5-minute out-of-combat breather**.

### 2. Taxonomy & Function Slot Costs
* **Mundane Gear (`⚙️` 0 Slots):** Standard utility items, weapons, armor, and shields providing narrative permissions and baseline combat stats without consuming Function Slots.

#### The 4 Function Tiers

| Function Tier | Slot Cost | Tactical Capability & Complexity | Typical Item Examples |
| :---: | :---: | :--- | :--- |
| **`🍺 Minor`** | **1 Slot** | Localized tactical utility, single activations, and handy field conveniences. | *Wand of Sparks*, *Stun Baton*, *Plasma Torch*, *Night-Vision Lens*. |
| **`🪄 Lesser`** | **2 Slots** | Substantial encounter-altering mobility, protection, or automated utility. | *Boots of Speed*, *Personal Deflector Shield*, *AeroJet Thrusters*, *Optical Camo*. |
| **`🪬 Greater`** | **3 Slots** | Multi-target, high-damage, or encounter-defining combat and tactical systems. | *Flaming Greatsword*, *Heavy Combat Drone*, *Mil-Spec Exosuit*. |
| **`💫 Epic`** | **4 Slots** | Reality-bending prototypes and ancient relics occupying major physical/neural bandwidth. | *Orb of Storms*, *Dimensional Void Bag*, *Orbital Target Painter*. |


### 3. Blake's Uncapped Soft-Slope Function Slots AP Schedule

| Total Function Slots | Expansion Step | Additional Slots Gained | AP Cost for This Step | Cumulative AP Invested |
| :---: | :--- | :---: | :---: | :---: |
| **4 Slots** | **Baseline (Level 1)** | — | **0 AP** | **0 AP** |
| **6 Slots** | **Expansion I** | +2 Slots | **1 AP** | **1 AP** |
| **8 Slots** | **Expansion II** | +2 Slots | **2 AP** | **3 AP** |
| **10 Slots** | **Expansion III** | +2 Slots | **3 AP** | **6 AP** |
| **12 Slots** | **Expansion IV** | +2 Slots | **4 AP** | **10 AP** |
| **14 Slots** | **Expansion V** | +2 Slots | **5 AP** | **15 AP** |
| **16 Slots** | **Expansion VI** | +2 Slots | **6 AP** | **21 AP** |
| **18 Slots** | **Expansion VII** | +2 Slots | **7 AP** | **28 AP** |
| **20 Slots** | **Expansion VIII** | +2 Slots | **8 AP** | **36 AP** |
| **$4 + (2 \times k)$ Slots** | **Expansion $k$** | +2 Slots | **$k$ AP** | **$\frac{k(k+1)}{2}$ AP** |

### 4. Multi-Genre Parity Matrix

| Tier & Slot Cost | High Fantasy | Modern / Delta Green | Cyberpunk | Space Opera / Sci-Fi |
| :--- | :--- | :--- | :--- | :--- |
| **Mundane (0 Slots)** | Rope, Torch, Flint | Phone, Zip-ties, Flashlight | Credstick, Multi-tool | Comms Beacon, Rebreather |
| **Minor🍺 (1 Slot)** | Wand of Sparks [A] | Taser [A], Night-Vision [P] | Plasma Torch [A], Smart-Lens [P] | Mag-Boots [M], Stim-Injector [F] |
| **Lesser🪄 (2 Slots)** | Boots of Speed [M] | Kevlar Tactical Rig [P] | Optical Camo [M], Reflex Boost [F] | Personal Deflector [P], Jetpack [M] |
| **Greater🪬 (3 Slots)** | Flaming Greatsword [A] | Mil-Spec Exosuit [P] | Heavy Assault Drone [A] | Combat Hunter Drone [A] |
| **Epic💫 (4 Slots)** | Orb of Storms [A] | Prototype Railgun [A] | Neural Matrix Core [F] | Dimensional Shifter [M] |

### 5. Master Techniques & Signature Devices
* **🔥 Loadout Burn (Master Technique • 5 AP):** As a Free Action [F], a character with this Master Technique can push any active slotted Exotic (`🧿`) or Artifact (`🔮`) item to output its maximum/Epic💫 effect for 1 round. At the end of the round, the item's core melts into inert slag and is destroyed, immediately freeing its Loadout Slots mid-combat. *(Does not apply to flat consumables with usage `1`, `2`, or `3`).*
* **🖨️ Omni-Fab (Minor🍺 • 1 Slot Exotic):** Usage: `3-Enc`, Action: `[P]`. Materializes any mundane utility tool or standard field supply on the fly. The materialized item dissolves at the end of the encounter. Cost: 150s.

## 💎 Chaos Gauntlet & Chaos Gems

The **Chaos Gauntlet** is an arcane or hyper-tech harness capable of focusing volatile Chaos Gems. It features **six Chaos Gem slots**:
* 👑 **Wrist "Mega Slot" (1 Slot):** The primary focal conduit of the gauntlet.
* 🖐️ **Finger Slots (5 Slots):** Thumb, Index, Middle, Ring, and Pinky conduits.

### 📜 Core Rules & Invariants
1. **Gem Socketing & Custody:** Chaos Gems are volatile, attuned crystallizations that **cannot be carried loosely** in pockets, backpacks, or pouches. They may only exist when socketed directly into a Chaos Gauntlet's slots.
2. **Permanent Destruction on Removal:** Sockets form an irrevocable metaphysical fusion upon insertion. **Removing a gem from a Chaos Gauntlet immediately shatters and destroys it.**
3. **Usage & Destruction at Zero:**
   * Chaos Gems start with **3 uses** (usage values: `3`, `2`, `1`).
   * When a gem reaches **0 uses**, its energy matrix collapses and the gem is **permanently destroyed**.
4. **Action Economy & Rate of Use:**
   * Activating a Chaos Gem is a **Free Action (`F`)**.
   * **Only 1 Chaos Gem may be used per combat round** without explicit GM approval.
5. **Wrist Mega Slot & Spark Synergy:**
   * The **Wrist Mega Slot Gem** operates like any standard gem, but with a unique empowered resonance: it can **ALSO be activated by spending a Spark (`⚡`)** instead of deducting from the gem's remaining usage count, preserving its durability.

> [!TIP]
> **Single Source of Truth Catalog:** All 97 canonized Chaos Gems are maintained in the Supabase database. Browse the interactive catalog or manage your hero's gauntlet directly within the SupaFlex Character Sheet.

---

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

### 🧪 Essence & Disenchanting Engine

Unwanted loot drops may be disenchanted directly into personal **Essence Core** progress. Filling the Essence Core allows players to craft custom or targeted magic items from the Essence Crafting Modal.

#### 50% Disenchant Recycling Ratios
Disenchanting an item returns **50% of the Essence required to craft a new item of that same tier**:

| Item Tier / Drop Type | Crafting Cost | Disenchant Yield | Recycle Ratio |
| :--- | :---: | :---: | :---: |
| **Minor / Standard Drop (`🍺`)** | 15% | **+8%** | 53% |
| **Lesser Magic Item (`🪄`)** | 25% | **+12%** | 48% |
| **Greater Magic Item (`✨`)** | 50% | **+25%** | 50% |
| **Epic Magic Item (`💫`)** | 100% | **+50%** | 50% |

#### 🛡️ Essence Protection Rule
- **Single Subtraction Vector:** Claiming a crafted reward in the `ESSENCE CRAFTING!` modal is the **ONLY** event permitted to subtract or consume Essence Core progress.
- **Zero-Loss Deconstructing:** Closing or deconstructing a draft choice discards the draft choices while preserving current Essence 100% intact.


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

Ftg: Fatigue — default minimum Wnd🩸 caused on hit regardless of player AR🧥 (calculated as Dmg💥 ten’s digit + 1: Dmg 1–9 = 1, 10–19 = 2, 20–29 = 3; elites/giants may override).

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

