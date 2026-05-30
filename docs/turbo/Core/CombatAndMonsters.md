# MS5 Core Logic: Combat Physics, Roster Architecture, and Monster Engineering

**Status:** Active  
**Purpose:** Define the mathematical rules for combat resolution (attacks, defense, AR mitigation, wounds), the database architecture for monster rosters/pointers, and the scaling/AI-generation constraints.

---

## 1. Combat Physics & Resolution

### The Roll Functions (`lib/die.ts`)
* **Attack / Damage / Armor:** Uses `fSkRoll` — a hybrid formula averaging a linear roll `fdRoll(die*2)` with a non-linear `fMetaDieRoll(die)`.
* **Defense:** Uses `fDefRoll` — a weighted formula `fMetaDieRoll(die) * 0.75` (making defense slightly harder for balance).
* **Static Monsters:** GM-controlled entities (Monsters, Traps) **never** roll dice. They use static target numbers (e.g. Atk 36, Def 30).
* **Tie goes to Player:** Success is achieved if `Player Result >= Target Number`.

### PC vs. Monster Combat Sequences
Damage is mitigated by Armor (AR) acting as a **divisor**, not a subtraction:
* **Monster AR Divisor:** `5`
* **PC AR Divisor:** `10`

#### PC Attacking Monster:
1. **Attack:** PC rolls `Atk` vs Monster `Def` (Target Number).
2. **Damage:** If hit, PC rolls raw `Dmg`.
3. **Monster AR Calculation:** `CalculatedAR = (MonsterStaticAR + 4) / 5` (rounded to nearest 100th).
4. **Wound Calculation:** `Wounds = PC Raw Damage / CalculatedAR` (rounded to nearest integer).

#### PC Defending against Monster:
1. **Defense:** PC rolls `Def` vs Monster `Atk` (Target Number) using the `fDefRoll` function.
2. **PC AR Calculation (if hit):** `CalculatedAR = (PC AR Roll + 9) / 10` (rounded to nearest 100th).
3. **Wound Calculation:** `Wounds = Monster Static Dmg / CalculatedAR` (rounded to nearest integer).

### The Silent 🧥 (Armor/AR) Stat
A character has exactly one active 🧥 (Armor/AR) stat referenced by button expressions (e.g. `[AR(🧥)]`):
* Derived from the currently worn armor's AR rating (scaled by tier at character level).
* If no armor is worn, 🧥 falls back to **F-tier growth at character level** (via `calculateTierScore('F', level)`).
* Multiple worn armors are resolved by choosing the first active armor. Fraction results from expressions are rounded via `Math.round`.

---

## 2. Visual Contract: The Roll Log

The Roll Log displays results following strict templates depending on target count:

### A. Single Target Log
Uses a 3-Line format showing margin of success/failure (`Dif`):
* Success: `+5✅`
* Failure: `-3❌`
* Open Rolls (no target/difficulty): Displays raw result only.

### B. Multi-Target "Batch" Log
Triggered when multiple targets are selected:
* Consists of a single chat bubble (header does not contain "Batch").
* Groups are separated by horizontal rules.
* Attack line format: `Index> (🎲Rating) 🔮Roll^Dif ➡️ Result`
* Damage line format: `Index> (🎲Rating) 🔮Roll/AR ➡️ +Wounds`
* Each group shows its total wounds, and a final line displays: `Total Wounds to PC = +N` (sum of PC wounds).

---

## 3. Monster Roster SSOT Architecture

The **Monster Roster** is the single source of truth for base monster stats within an adventure template or GM session clone.

* **Roster vs. Encounter:** Base stats live in the roster list (`monsterRoster`). Encounter monsters are lightweight pointers containing a `rosterId`, `quantity`, and narrative loadout override.
* **Stat Edits:** Edits are performed on the roster level to prevent stat drift across encounters. Unique names are required in the roster for variants.
* **Deletion Protection:** Roster entries cannot be deleted if active encounters still reference them.
* **Lossless Encounter Writes:** Encounter saves must preserve pointer integrity. If a client cannot serialize a visible monster back to its roster pointer, the write fails loudly to prevent dropping monsters.
* **Lobby Add Encounter Merge:** The GM Screen "Add Encounter" merges canonical encounter pointers, not raw display rows. Unresolved pointer rows are automatically relinked by name to the clone roster.

---

## 4. Monster Scaling & Engineering

### Multiplier Formulas
For combat stats (Nish, Atk, Dmg, Def, AR, Vit) and the five attributes (✨💪👁️🏃🫀):
$$\text{ScaledValue} = \lfloor\text{Base} \times \text{GlobalGeneral} \times \text{GlobalSpecific} \times \text{IndividualGeneral} \times \text{IndividualSpecific}\rfloor$$

* **MR Exception:** Speed/Movement rate ignores all general multipliers:
  $$\text{ScaledMR} = \lfloor\text{Base} \times \text{GlobalSpecific} \times \text{IndividualSpecific}\rfloor$$
* Multiplier values clamps: default is `1.0`, null/NaN becomes `1.0`, and `0` clamps to `0.01` (Zero-Clamp logic).

### Adventure Level (Adv Level) & Level Adjustments
When Adv Level is active on the adventure template or GM clone:
* $\text{TargetLevel} = \max(1, \text{AdvLevel} + \text{levelAdjustment})$
* $\text{AdjustedBase} = \text{base} + \lfloor\text{targetLevel} \times \text{tierMultiplier}\rfloor$ (MR is unchanged).
* The **dynamic tier multiplier** maps base stats to their level-adjustment scaling factors:

| Base Stat Value | Tier | Multiplier |
| :--- | :---: | :---: |
| $\le 8$ | F | 0.1 |
| $\le 10$ | D | 0.2 |
| $\le 12$ | C | 0.4 |
| $\le 14$ | B | 0.6 |
| $\le 17$ | A | 0.8 |
| $\le 20$ | S | 1.0 |
| $> 20$ | Proportional S | $\text{stat} / 20$ |

### Clone vs. Publish Boundaries
* **GM Clone Display:** Returned as raw roster/base stats. Level addends and multipliers are applied **locally at render time** on the GM Screen (ensuring Edit Stats solves against correct bases).
* **Player Publish Snapshot:** The GM client precomputes (bakes) the final scaled integers on publish. The server saves and broadcasts this snap (`publishedEncounter`). Player clients render these baked numbers **verbatim** without running scaling logic.

### Auto-Heal on First Load
A one-time healing pass runs when the Monster List is first loaded:
* Non-MR stats that are `0`, null, undefined, NaN, or out of 1–1000 range are coerced to **10**.
* MR is allowed to be **0**; other invalid MR values are coerced.
* Healed stats are persisted back to the DB to resolve legacy blank columns.

---

## 5. AI Generation Guardrails

AI features (Room Gen, Monster Gen) must enforce strict limits to prevent math and schema drift:
* **Stat Types:** All combat stats and attributes must be integers. Non-MR stats clamp to a **minimum of 8** (defaulting to 8 if undefined or low). MR can be 0.
* **JSON Schema:** Emits strict camelCase keys matching the database schema (`name`, `nish`, `mr`, `atk`, `dmg`, `def`, `ar`, `vit`, `mag`, `mgt`, `mnd`, `mot`, `mox`, `description`, `weapons`, `armor`, `powers`).
* **Variant-from-base Cloning:** When a variant name is returned (e.g. "Ogrind Guard"), the system clones the base monster stats ("Ogrind") from Roster/Content and applies a role-based multiplier (e.g., **guard: 1.2**, **officer: 1.2**). MR is never scaled.
* **Database-Aware Cloning:** Mentions of existing Content monsters in room prompts clone the base template, appending a role-first label and scaling stats (e.g., commander 1.5x, champion 1.25x).
* **Roster-Aware Generation:** The AI receives the current roster. It must reuse `rosterEntryId` for existing creatures. If a new name matches an existing entry, it automatically reuses or clones instead of writing raw new stats.
