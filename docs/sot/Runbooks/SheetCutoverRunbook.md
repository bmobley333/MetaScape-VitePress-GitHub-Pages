# Phase 4 Runbook: DB_ID Backfill and Tab Cutover

**Status:** Runbook / Operational Reference  
**Purpose:** Canonical home for the Google Sheets and MongoDB cutover workflow. This was relocated from `Prompts/SoT/Core/SheetCutoverRunbook.md` so one-time operational steps no longer compete with active gameplay or architecture SoT.

In the Dev tab, **Merge** is the additive mode (no deletes). **Destructive** removes DB rows not present in the sheet.

---

## 1. Scope

This runbook exists for one-time or operator-driven migration work so canonical Google Sheet tabs hold the active content, every row has a `DB_ID`, legacy `*2` tabs are removed, and the target app's `Prompts/sheet_data/` folder is refreshed.

Before starting, choose the target runtime:

- **Turbo:** `TURBO_DATABASE_URL`, `TURBO_GOOGLE_SHEET_ID`, and `turbo/Prompts/sheet_data/`
- **Flex:** `FLEX_DATABASE_URL`, `FLEX_GOOGLE_SHEET_ID`, and `flex/Prompts/sheet_data/`

Supported canonical tabs include:

- `Weapons`
- `Armor`
- `Powers`
- `Gear`
- `Artifacts`
- `Skill Sets`
- `Power Sets` (Flex: includes **Category** column, e.g. Class, Luck, Combat Style, Race, Weird)
- `Attributes`
- `Shields`
- `Enums`
- `Monsters`

---

## 2. Baseline Rules

- The allowed column set and canonical order for each tab are defined by the first row of the corresponding CSV in the target app's `Prompts/sheet_data/` folder.
- `DB_ID` must remain column 1.
- `Sync Status` and `Sync Message` must be the final two columns.
- Analyze validates the sheet against the CSV baseline before commit.
- Commit stores the full row in MongoDB `sheetData`.
- Export writes in the sheet's current header order using typed fields plus `sheetData`.

---

## 3. Pre-check

Before running the cutover:

- Confirm canonical tabs exist in the sheet.
- Confirm content tabs use composite `Type + Enum Key` where applicable.
- Confirm `Enums` still maps its `Enum Key` directly to DB `enumKey`.
- Confirm per-tab enum keys are unique before commit.

---

## 4. Step 1: Copy Content (`*2` -> Canonical)

For each legacy `*2` tab that still exists:

1. Open the `*2` tab.
2. Copy all rows including headers.
3. Paste over the canonical tab.
4. Ensure column A is `DB_ID`.
5. For `Shields`, generate the template first if needed, then paste data.

Typical examples:

- `Weapons2` -> `Weapons`
- `Armor2` -> `Armor`
- `Powers2` -> `Powers`
- `Skill Set2` -> `Skill Sets`
- `Attributes2` -> `Attributes`

---

## 5. Step 2: Backfill DB_IDs

In the Dev tab:

1. Process targets in this order:
   - `Enums`
   - `Attributes`
   - `Weapons`
   - `Armor`
   - `Shields`
   - `Powers`
   - `Skill Sets`
2. For each target:
   - click `Analyze`
   - review the report
   - choose `Merge`
   - click `Commit`
3. Re-run Analyze/Commit when needed to confirm IDs and sync are stable.

Expected result:

- New MongoDB IDs are written back into the sheet `DB_ID` column.

---

## 6. Step 3: Remove Legacy `*2` Tabs

After the canonical tabs are correct and IDs are backfilled, remove obsolete `*2` tabs from the sheet so only canonical names remain.

Examples:

- `Weapons2`
- `Armor2`
- `Powers2`
- `Skill Set2`
- `Attributes2`

---

## 7. Step 4: Refresh App-Local `Prompts/sheet_data`

In the Dev tab:

1. Click `GS to Prompt as CSV`.
2. Verify the exported CSVs in the target app's `Prompts/sheet_data/` folder match the canonical sheet tabs.
3. Refresh related generated CSVs when relevant.

Common outputs include:

- `weapons.csv`
- `armor.csv`
- `powers.csv`
- `skillsets.csv`
- `attributes.csv`
- `enums.csv`
- `Shields.csv`
- `monsters.csv`
- `NewGear.csv`
- `NewArtifacts.csv`
- optional generated `Newpowers.csv`, `Newgear.csv`, `Newartifacts.csv`
- `lootlist.csv`
- `lootsets.csv`

---

## 8. Checkpoint

The runbook is complete when:

- only canonical tabs remain
- every committed row has a non-empty `DB_ID`
- MongoDB rows match the committed sheet data
- the target app's `Prompts/sheet_data/*.csv` is refreshed
- legacy character data has been migrated if required

After the cutover, the user manually runs `npm run cold-start` before testing.

---

## 9. Optional Clean Reseed

If development cleanup is preferable to preserving old Content rows, a clean reseed is allowed.

### Manual option

- Wipe the relevant `Content` rows in Prisma Studio or another MongoDB tool.
- Re-run the backfill and export steps above.

### Scripted option

- Script: `scripts/wipeContentForReseed.ts`
- Safety requirement: `CONFIRM_WIPE_CONTENT=yes`
- The script should point at the target app's database URL before running.
- Use this only before rerunning the commit/export cycle.

---

## 10. Related References

- `Prompts/SoT/Core/Manifest.md`
- `turbo/Prompts/SoT/Core/PowerButtonSystem.md`
- `turbo/Prompts/SoT/Character/DualKeyLogic.md`
- `turbo/Prompts/SoT/Rules/MS5Turbo.md`
- `turbo/Prompts/sheet_data/`
- `flex/Prompts/sheet_data/`

This file is operational guidance, not gameplay authority.
