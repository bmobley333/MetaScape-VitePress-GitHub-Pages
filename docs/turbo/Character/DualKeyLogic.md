# MS5 SoT: Dual-Key Calculation Logic

**Status:** Active  
**Purpose:** Capture the current Dual-Key implementation boundaries so refactors do not reintroduce outdated governor/tag assumptions or outdated F-tier power behavior.

Primary implementation reference: `lib/dualKeyEngine.ts`

---

## 1. Current State Summary

- the old content governor/tag fields are no longer the universal live content contract
- current code still carries Dual-Key-era logic for some paths
- weapons and armor now have important content-tier and requirement-driven paths that bypass older full Dual-Key assumptions
- F-tier stripping is not active behavior

---

## 2. Tier Order

Use this rank order:

- `F`
- `D`
- `C`
- `B`
- `A`
- `S`

All step math clamps within `F -> S`.

---

## 3. Current Implementation Boundaries

### Content-tier-only paths

Weapons and armor may use content-tier-only logic and/or requirement-derived tier logic rather than the older full governor/tag pipeline.

### Requirement-driven weapon path

When weapon content has `weaponType` and `requirement`, tier may be derived from requirement-by-type rather than classic Dual-Key governor/tag resolution.

### Specialist step

Where Specialist is still part of the tier pipeline, it remains a step toward `S`.

---

## 4. Current Guardrails

- do not document F-tier stripping as active
- do not assume powers require legacy `rtg_type_1` / `rtg_type_2` data to remain valid
- do not assume removed content fields (`governor`, `tag_archetype`, `tag_domain`, `tag_focus`) are the universal live contract
- prefer current content-tier / requirement paths when that is what the code uses

---

## 5. Historical Context

The earlier full Dual-Key model included:

- governor baselines
- archetype/domain/focus match counts
- specialist step
- F-tier power consequences

Those ideas remain useful as design history, but only the parts still used by current code should guide implementation.

See:

- [`Prompts/SoT/Appendices/LegacyRulesRationale.md`](../../../../Prompts/SoT/Appendices/LegacyRulesRationale.md)
- [`Prompts/SoT/Decisions/DecisionLog.md`](../../../../Prompts/SoT/Decisions/DecisionLog.md)

---

## 6. Cross-References

- [`Prompts/SoT/Character/CSAdvancement.md`](CSAdvancement.md)
- [`Prompts/SoT/Rules/MS5Turbo.md`](../Rules/MS5Turbo.md)
- `lib/dualKeyEngine.ts`
