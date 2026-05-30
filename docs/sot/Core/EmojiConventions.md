# Universal Emoji Conventions

**Status:** Active  
**Purpose:** Define the shared monorepo emoji meanings that must stay consistent across shared SoT, Turbo SoT, runtime UI, and rule references. When docs conflict, executable/runtime sources win.

---

## 1. Authority And Scope

Use this file for cross-cutting emoji meanings shared by `Prompts/`, `turbo/Prompts/`, and Flex/Turbo rule references.

Precedence for emoji conflicts:

1. executable/runtime authority
   - `turbo/Prompts/sheet_data/*.csv`
   - `flex/Prompts/sheet_data/*.csv`
   - `turbo/lib/**/*.ts`
   - `turbo/src/**/*.ts*`
2. current Turbo SoT
   - `turbo/Prompts/SoT/**`
3. shared discovery and decision records
   - `Prompts/SoT/**`
4. legacy Flex rule text
   - `flex/Prompts/Rules/MS4Flex.md`

Use this file to normalize meanings, not to duplicate every rulebook table.

---

## 2. Verified Runtime Owners

- Attribute suffix parsing and display: `turbo/lib/handlers/characterHandlerSupport.ts`, `turbo/src/client/utils/skillBucketUtils.ts`
- Weapon type to attribute emoji mapping: `turbo/src/client/utils/weaponDamageTier.ts`
- Power-expression allowed stat emojis: `turbo/lib/powerButtonValidator.ts`
- Loot category serialization: `turbo/Prompts/sheet_data/lootsets.csv`, `flex/Prompts/sheet_data/lootsets.csv`
- Skill suffix serialization: `turbo/Prompts/sheet_data/skillsets.csv`, `flex/Prompts/sheet_data/skillsets.csv`
- Requirement token serialization: `turbo/Prompts/sheet_data/weapons.csv`, `turbo/Prompts/sheet_data/armor.csv`, `flex/Prompts/sheet_data/weapons.csv`, `flex/Prompts/sheet_data/armor.csv`
- Shared message prefixes: `turbo/Prompts/SoT/Core/CommunicationProtocol.md`

---

## 3. Reserved Meanings

These meanings are reserved and must not be reused for a different concept in current docs or UI text.

| Concept | Emoji | Notes |
| :------ | :---: | :---- |
| pending / wait | `⏳` | Shared message prefix in `CommunicationProtocol.md` |
| success | `✅` | Shared message prefix |
| error | `❌` | Shared message prefix |
| warning | `⚠️` | Shared message prefix |
| info | `ℹ️` | Shared message prefix |
| Magic | `✨` | Core attribute |
| Might | `💪` | Core attribute |
| Mind | `👁️` | Core attribute |
| Motion | `🏃` | Core attribute |
| Moxie | `🫀` | Core attribute |
| Action | `🔷` | Gameplay/action economy |
| Usage | `🔄` | Gameplay/action economy |
| Duration | `⏳` | Gameplay/action economy |
| Range | `🎯` | Gameplay/action economy |
| Advantage | `📈` | Roll-state |
| Disadvantage | `📉` | Roll-state and requirement-not-met state |
| Unskilled | `🔰` | Proficiency state only |
| Skilled | `🎓` | Proficiency state only (e.g. Flex Game Sheet nav rail attribute morphs) |
| Power | `⚡` | Generic feature icon |
| Gear | `🧰` | Active Gear icon for feature, content, and loot contexts |
| Artifact feature/family icon | `💫` | Generic artifact family icon |
| Chaos Gem | `🌀` | Reserved for Chaos Gems only |
| Defense (event) | `🛡️` | Category only; defense event is always Dod/AR or Blk/AR |
| Dodge | `🤸` | Avoidance (typical defense); notation Dod |
| Block / Shield | `🧱` | Blocking defenses; notation Blk; Max Block, Shields section |
| Armor / AR | `🧥` | Armor stat and player armor-rating contexts |
| Movement Rate / Move action | `👣` | Context decides MR vs Move action |
| Nish / initiative | `🚩` | Initiative contexts |
| Rating | `🎲` | Roll-log rating symbol |
| Result | `🔮` | Roll-log result symbol |
| Changed To | `➡` | In-line transition arrow |
| Final comparison / final result | `➡️` | Roll-log final separator |
| Attack action | `⚔️` | Action icon for A |
| Partial action | `✋` | Action icon for P |

---

## 4. Artifact And Loot Icon Split

Artifact icons use two different levels of meaning and they must stay distinct:

| Meaning | Emoji |
| :------ | :---: |
| Artifact family / generic artifact feature icon | `💫` |
| Minor artifact category | `🍺` |
| Lesser artifact category | `🪄` |
| Greater artifact category | `🪬` |
| Chaos Gem category | `🌀` |

Rules:

- Use `💫` for generic artifact feature labels, feature roll types, and broad artifact references.
- Use `🍺`, `🪄`, and `🪬` for artifact tier/category distinctions.
- Do not reuse `🌀` for artifacts; it is reserved for Chaos Gems.

This matches `lootsets.csv`, current feature/log usage, and the existing artifact migration decision in `Prompts/SoT/Decisions/DecisionLog.md`.

---

## 5. Canonical Gameplay Mappings

### Core attributes and requirement tokens

- `✨ Magic`
- `💪 Might`
- `👁️ Mind`
- `🏃 Motion`
- `🫀 Moxie`
- Requirement tokens stay in emoji-plus-tier form such as `💪C` and `🏃D`.

### Weapon type to attribute emoji

- `Me -> 💪`
- `Hu -> 🏃`
- `Sh -> 👁️`

### Roll-state and proficiency

- `📈` means Advantage.
- `📉` means Disadvantage.
- `📉` also marks learned items that do not currently meet their requirement.
- `🔰` means Unskilled or learned-unskilled only.
- Current docs must not redefine `🔰` as a generic modifier icon.

### Feature and rule icons

- `⚡ Power`
- `🧰 Gear`
- `💫 Artifact`
- `🌀 Chaos Gem`
- historical roll-log entries may still contain `🎒` for Gear; active docs and new runtime writes should use `🧰`

### Sub-attributes and derived stats

- `🧥` means Armor or Armor Rating in armor-stat and expression contexts
- `👣` means Movement Rate in stat contexts
- `🚩` means Nish / initiative

### Roll-log symbols

- `🎲` means the ability rating or base rating shown in the log
- `🔮` means the roll result
- `➡` means a value changed to another value inside a transition
- `➡️` means the final comparison or final displayed result separator

### Action icons

- `⚔️` means Attack action
- `👣` means Move action
- `✋` means Partial action

`👣` is intentionally reused for both Movement Rate and Move action. Context determines whether the icon refers to the stat or the action.

### Monster stat-line icons

- `🚩` means Nish
- `👣` means MR
- `⚔️` means Atk/Dmg
- `🛡️` means the **Defense** category in monster stat-line display contexts. Subcategories: Dodge 🤸, Block 🧱, Armor 🧥. Monster line format: `🛡️[Dod or Blk]/[AR]` (display only; data fields remain `def`/`ar`). No "Def/AR" notation; use Dod/AR or Blk/AR.
- `❤️` means Vit
- `✨`, `💪`, `👁️`, `🏃`, `🫀` mean the five monster attributes

Do not treat the monster-stat-line `🛡️` pair as a replacement for player armor-stat `🧥` parsing. Those remain separate contexts in current runtime code.

### Loot category icons

| Category | Emoji |
| :------- | :---: |
| ARMOR | `🧥` |
| ART | `🎨` |
| COLLECTIBLE | `🏺` |
| CURRENCY | `💰` |
| DOCUMENTCURIO | `📜` |
| GEAR | `🧰` |
| GEMJEWEL | `💎` |
| GREATERARTIFACT | `🪬` |
| JUNKFUNNY | `🗑️` |
| LESSERARTIFACT | `🪄` |
| MINORARTIFACT | `🍺` |
| NOTHING | `🚫` |
| SHIELD | `🛡️` |
| WEAPON | `⚔️` |
| CHAOSGEM | `🌀` |

---

## 6. Shared Message Prefixes

For transient user-facing messages, use the shared meanings in `turbo/Prompts/SoT/Core/CommunicationProtocol.md`:

- `⏳` pending / wait
- `✅` success
- `❌` error
- `⚠️` warning
- `ℹ️` info

Do not invent alternate prefix meanings for those icons in current UI-contract docs.

---

## 7. Legacy Flex Manual Sync

`flex/Prompts/Rules/MS4Flex.md` is currently governed as immutable legacy reference. Until that governance changes, do not edit it automatically.

If a human intentionally performs a narrow reference-only sync later, the emoji section should be aligned to these replacements:

- `🎒` Gear references -> `🧰` when they are part of the active shared icon language
- monster Defense: use `🛡️` for the Defense category; notation Dod/AR or Blk/AR (no Def/AR); Dodge 🤸, Block 🧱, AR 🧥
- monster stat examples: Defense block uses `🛡️`; subcategories Dod/AR or Blk/AR with 🤸, 🧱, 🧥 as appropriate
- `Actions🔄` -> `Actions🔷`
- `Usage⏱️` -> `Usage🔄`
- `Artifact🌀` -> `Artifact💫`
- `Lesser🔮` -> `Lesser🪄`
- keep `🌀` reserved for Chaos Gems, not artifacts
- keep `📉` for requirement/disadvantage state and `🔰` for unskilled only

That manual sync should stay limited to emoji/reference language and should not be used as a pretext for a broader Flex rulebook rewrite.
