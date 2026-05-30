# Powers & Class Manual (Turbo Engine)

In the **MetaScape Turbo Engine**, characters are defined by their **Power Sets** (representing their training, class, or cybernetic upgrades) and use the interactive **Power Button System** to roll abilities directly from their descriptions.

---

## 🎭 The Turbo Class Power Sets

When creating your character, you select a starting class, which determines your starting Power Set and thematic abilities.

1. **🚀 CyberDrake Inferno Vanguard**: Heavy metal armor meets fire and kinetic servos. Channels heat through blade strikes and shielding.
2. **🌿 Elden Verdant Sentinel**: Masters of nature, poisons, thorns, and healing groves. Combines field control with organic armor.
3. **💎 Golemari Geomancer**: Controls earth, gravity, rock slides, and crystal shards. Creates physical hazards and summons stone guardians.
4. **🧬 Horax Bio Engineer**: Integrates biological mesh interfaces with heavy venom attacks and custom cellular boosts.
5. **🎯 Human Starborn Ranger**: Covers cloaking fields, quantum hooks, and precision long-range sniper feats.
6. **⚔️ Nyax Aetherblade**: Teleports, creates phase blades, thoughtweaves, and projects astral clones.
7. **💀 Shadowmancer Voidcaller**: Feeds on shadows, void energy, and necrotic barriers to manipulate combat encounters.
8. **🩸 Vamp Lifestealer**: Speeds across fields, drains vitality directly from targets, and fills their Blood Pool.
9. **🐺 Were Bloodfang Berserker**: Lycanthrope form, fury-fueled cyclones, pack tracking, and unyielding rage.

---

## ⚡ The Power Button System

Powers contain dynamic, bracketed links called **Power Buttons**. When clicked in the web app, these buttons automatically calculate your stats and launch rolls in the **Morph Drawer**!

### Button Types & Shorthand

* **Standard Roll Badge**: `[Type(Source)]` (e.g. `[Atk(✨)]` or `[Dmg(💪*1.5)]`). Resolves to an interactive button using the wielder's level-scaled attribute rating (✨ Magic, 💪 Might, 👁️ Mind, 🏃 Motion, 🫀 Moxie).
* **Dual Roll Badge**: `[Type1/Type2(Source1)/(Source2)]` (e.g. `[Atk/Dmg(👁️*2)/(👁️*3)]`). Opens the drawer as a synthetic weapon, armor, or shield using dual-rating parameters.
* **RPG Die Badge**: `[NdS+B]` (e.g. `[2d8+5]` or `[d6]`). Rolls a standard physical die directly into the chat log, bypassing tier math.
* **Static calculation**: `[=(Source/3)]`. Shows a static numerical bonus (+N), but cannot be clicked.

---

## 🔮 Power Database Examples

Here are some real-world powers configured in the Turbo database:

### 1. Assassinate (Human Starborn Ranger)
* **Actions**: Attack (⚔️A)
* **Usage**: 3/Encounter
* **Duration**: Instant
* **Description**:
  > Delivers a lethal, silent first-strike attack. Roll a sniper shot at **[Atk/Dmg(👁️*2)/(👁️*3)]**. Stacks with *Assassin's Pool* and *Sniper's Shot*.

### 2. Aether Step (Nyax Aetherblade)
* **Actions**: Attack + Move (⚔️A + 👣M)
* **Usage**: 2/Encounter
* **Duration**: Instant
* **Description**:
  > Hurl an Aether Shuriken at **[Atk/Dmg(🏃)/(🏃)]** with double normal range. On success, you instantly teleport adjacent to the target.

### 3. Inferno Blow (CyberDrake Inferno Vanguard)
* **Actions**: Attack (⚔️A)
* **Usage**: 1/Encounter
* **Duration**: Instant
* **Description**:
  > Enhance your blade with superheated flames. Deliver a heavy blow at **[Atk/Dmg(💪)/(💪*1.2)]** on your main target. Up to two adjacent targets are scorched by a flame wave at **[Atk/Dmg(💪*2)/(💪/2)]**.
