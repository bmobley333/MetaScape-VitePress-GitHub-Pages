# Variable & Database Contracts

This specification defines the variable contracts, database schema fields, and programmatic interfaces between the MetaScape web app engine and static data records.

---

## 💾 Database Entities

### 1. LootSet
Holds the configuration for weighted loot selections. Used directly by the loot resolver engine (`lib/lootEngine.ts`).

| Field Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `Int` | Auto-incrementing primary key. |
| `enumKey` | `String` | Unique uppercase identifier (e.g. `LOOTSET_MUNDANEGEAR`). |
| `members` | `String` | Comma-separated list of keys, or a single type-directive. |
| `directive` | `String` | Optional category type-directive mapping (e.g., `TYPE(Category)`). |
| `probability` | `Int` | Integer weight for probability calculation rolls. |
| `emoji` | `String` | Overriding roll log icon name/visual tag. |

### 2. LootList
Contains text records for individual loot roll details.

* **Normalizing Prefix**: When querying by `chosenKey`, if the key begins with `LOOTLIST_` (case-insensitive) and queries return null, the prefix is stripped dynamically for lookup: `enumKey: chosenKey.replace(/^LOOTLIST_/i, '')`.

### 3. Content
Consolidated game assets reference table (weapons, armor, shields, powers).

* **Fields**:
  * `enumKey`: Unique identifier.
  * `type`: Item type (`weapon`, `armor`, `shield`, `power`, `artifact`).
  * `category`: Categorization filters (e.g., `Minor`, `Lesser`, `Greater`).

---

## ⚙️ Rules Logic Contracts

### 🛡️ Equipment Requirements
Any character can wield any weapon, armor, or shield.
- **Wielding Unlearned**: Results in **🔰 Unskilled** checks (1-Turbo roll).
- **Wielding Learned (1 AP)**: Requires meeting the attribute tier constraint (Might💪, Motion🏃, or Mind👁️). Failure to meet the attribute requirement results in **📉 Disadvantage**.
- **Wielding Overridden (2 AP)**: Bypasses and permanently removes the attribute requirement (no disadvantage).

### 🥋 Natural Items
- Predefined attribute `isNatural` is set to `true`.
- Brawl🥊 and Throw Object are natural weapons granted by default.
- Damage Tier of natural weapons is locked to **one tier below** the wielder's governing attribute (minimum F-Tier).

### ⚔️ Damage Uplifting
For single-handed/two-handed styles (Single Weapon, Two-Handed, Weapon & Shield, Martial Arts), the base weapon damage die is uplifted to match the wielder's governing attribute rating:
- **Melee**: Might💪 rating
- **Hurled**: Motion🏃 rating
- **Shot**: Mind👁️ rating

> [!WARNING]
> Damage uplifting is explicitly **disabled** for Multi-Attack and Dual Wield styles.
