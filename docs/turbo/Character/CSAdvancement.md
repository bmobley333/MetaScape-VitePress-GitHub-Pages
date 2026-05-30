# MS5 Character Advancement

**Status:** Active  
**Purpose:** Define the current advancement, AP/GP/ArfP, and feature-growth rules that the codebase currently implements or actively treats as authoritative.

For superseded training/tag-block UI and F-tier stripping history, see [`Prompts/SoT/Appendices/LegacyRulesRationale.md`](../../../../Prompts/SoT/Appendices/LegacyRulesRationale.md) and [`Prompts/SoT/Decisions/DecisionLog.md`](../../../../Prompts/SoT/Decisions/DecisionLog.md).

---

## 1. Current Advancement Summary

- AP is the primary spend for character progression and some remediation actions.
- GP and ArfP are separate advancement currencies for Gear and Artifacts.
- class and race are currently plain text inputs in the sheet UI.
- training is not a current active runtime/UI subsystem.
- powers are **not** removed for being F-tier.

---

## 2. Current AP Rules

### AP usage

Current AP-supported flows include:

- adding powers
- adding weapons, armor, and shields
- respec actions that explicitly cost AP
- Nish upskill / remove-unskilled style remediation paths where implemented
- AP conversion into GP or ArfP
- feature versioning costs where the current implementation counts AP

### Key current rule

If the code does not currently block or remove a feature for calculated tier reasons, the SoT must not claim that it does.

---

## 3. GP and ArfP

- `GP` is the capacity/spend track for Gear
- `ArfP` is the capacity/spend track for Artifacts
- adding Gear or Artifacts does not consume normal AP directly when the flow is using their dedicated point tracks
- AP may be converted into GP or ArfP and that conversion counts as AP spent

---

## 4. Current Power Policy

### Current truth

- powers may be learned regardless of calculated F-tier
- F-tier stripping is not active
- the removed-powers modal is not active runtime behavior

### Why this matters

Older transition docs described F-tier power gating and stripping. Those references are legacy only and should not be treated as current behavior.

---

## 5. Current Sheet UI Contract

### Dossier / level area

Current sheet UI centers advancement-visible information around:

- level card
- current AP display
- class input
- race input

### Feature growth UI

Current feature growth happens through:

- quick-add flows
- feature advancement/versioning modals
- capacity checks for Gear and Artifacts
- AP budget displays

Earlier class/race tag-selector blocks, specialist blocks, and training sections are not the active UI contract.

---

## 6. Current Respec And Remediation Rules

Current implemented/remediated paths include:

- attribute assignment and respec
- remove-unskilled / remove-disadvantage style item remediation where implemented
- Nish-specific upskill remediation through the Nish UI path

The exact active UI affordance should follow the sheet/HUD implementation, not older planning prose.

---

## 7. Slot And Budget Math

Implementation helpers for AP/GP/ArfP and slot math live in:

- `lib/advancementSlots.ts`

When SoT and helper behavior differ, update the SoT to the current helper/code behavior unless the helper violates executable contract authority.

---

## 8. Cross-References

- [`Prompts/SoT/Character/DualKeyLogic.md`](DualKeyLogic.md)
- [`Prompts/SoT/UI/AbilityTabView.md`](../UI/AbilityTabView.md)
- [`Prompts/SoT/Core/NishCodified.md`](../Core/NishCodified.md)
- [`Prompts/SoT/Appendices/LegacyRulesRationale.md`](../../../../Prompts/SoT/Appendices/LegacyRulesRationale.md)
- [`Prompts/SoT/Decisions/DecisionLog.md`](../../../../Prompts/SoT/Decisions/DecisionLog.md)
