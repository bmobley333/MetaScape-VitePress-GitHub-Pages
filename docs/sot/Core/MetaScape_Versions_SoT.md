# MetaScape Gaming Suite: Architectural Source of Truth (SoT)

## 1. The Core Vision & Ecosystem Standard

**MetaScape (MS)** is an overarching tabletop and digital RPG game system designed to bridge physical gameplay with hyper-scalable digital mechanics. The ecosystem balances classic tactical gameplay with boundless algorithmic simulation through three major progressive versions:

```
                     ┌─── MetaScape Gaming Suite ───┐
                     │                              │
         ┌───────────┴───────────┐              ┌───┴───────────┐
         ▼                       ▼              ▼               ▼
   Flex Mechanics          Flex Mechanics    Turbo Mechanics    Standardized Engine Core
    (MS3: Sheets)         (MS4: Web App)     (MS5: Web App)     • Shared Classes & Races
    • Physical Dice       • Automated Roll   • Boundless Dice   • Unified Gear Datasets
    • Google Apps Script  • Multi-player UI  • Mathematical Engine• Identical System Schema
```

### The Unified Core Baseline

To facilitate absolute data parity and clean code refactoring, all variations of MetaScape adhere to a strict structural baseline:

* **Concept Standard Verification**: Every iteration uses an identical data schema and structural taxonomy for **Races, Classes, Abilities (Attributes & Skills), Gear (Weapons, Armor, Equipment), and Status Effects**.
* **Architecture Segregation**: Core assets utilize identical nomenclature and base properties. The **only** architectural differences across versions lie within their respective interface engines, rule automation boundaries, and dice-rolling mathematical modules.

---

## 2. Version Classifications & Specifications

| Dimension | MS3 (Flex - Spreadsheet) | MS4 (Flex - Web Application) | MS5 (Turbo - Digital Boundless) |
| --- | --- | --- | --- |
| **Working Name** | **Flex** | **Flex** | **Turbo** |
| **Primary Interface** | Google Sheets / Physical Paper | Dedicated Web Application Interface | Dedicated Web Application Interface |
| **Dice Mechanics** | Hand-rolled Physical Dice | Electronic Digital Dice (Physical Parity) OR Actual Physical Dice | Open-Ended Infinity Array Roll Engine |
| **Automation Tier** | Google Apps Script (GAS) Sync Engine | Real-time Multi-player Automation Engine | Infinite Scalar Multiplier Algorithm Engine |
| **Platform Target** | Laptops, Chromebooks, Desktop Browsers | Web Browser Clients & Active Session Servers | High-Performance Server-Calculated Web Client |

### MS3: Flex (Spreadsheet Version)

* **Execution Boundary**: Operates inside the Google Workspace ecosystem via a customized Google Spreadsheet front-end, powered by a localized Google Apps Script (GAS) codebase.
* **Gameplay Loop**: Designed for players who prefer manually rolling physical dice while relying on a dynamic digital character sheet. The user profile can be updated via automated backend scripts, loaded onto mobile devices/laptops during real-time game loops, or exported as a clean printable hardcopy sheet.

### MS4: Flex (Web Application Version)

* **Execution Boundary**: A standalone modern web client built on an optimized web app framework sharing system parameters with the unified core.
* **Gameplay Loop**: Shares 100% rules, attributes, scaling structures, and data sets with MS3. It replaces static sheets with a high-performance web dashboard featuring multiplayer adventure lobbies, real-time combat trackers, automated dice engines, monster registries, and live state syncing via a persistent party roster.

### MS5: Turbo (Digital Boundless Version)

* **Execution Boundary**: Purely digital runtime environment built directly onto the web application architecture.
* **Gameplay Loop**: Built exclusively around an **open-ended, unbounded dice mechanic** capable of generating rolling ranges between $1 \rightarrow \infty$ via exponential exploding sequences. Because of its continuous, boundless probability matrix, MS5 lacks any analog or physical dice equivalent. All statistics, class matrices, gear calculations, and monsters are mathematically recalibrated to balance fluidly with open-ended high-magnitude scaling.
