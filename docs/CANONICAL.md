# OJ-WFM — canonical references

Use this page when aligning docs, mocks, Lovable, or external write-ups. It does not duplicate long content; it points to the files that define “truth” for this repo.

---

## Live prototype

- **URL:** [https://oj-wfm.lovable.app/](https://oj-wfm.lovable.app/)
- **Notes:** [`prototype/README.md`](../prototype/README.md)

The interactive UI is maintained on Lovable. This repository holds narrative, UX concepts, mock data, and governance — not a duplicate app build.

---

## Naming: 10 wheel segments

**Canonical segment names and capability definitions:** [`capability-map.md`](capability-map.md)

Pitch or spoken shorthand may abbreviate (e.g. “Shifts” for Shift Management). Specification, API field labels, and UI copy should use the **full names** from the capability map.

---

## Product scope and phases

- **Phased delivery (MVP → vision):** [`roadmap.md`](roadmap.md)
- **User stories / who we design for:** [`personas.md`](personas.md) — early MVP emphasises manager and operational flows; employee-deep flows align with later roadmap phases.

---

## API and data shape (conceptual)

- **Endpoint overview:** [`../api/endpoints.md`](../api/endpoints.md)
- **Integration use cases (reads/writes per flow):** [`../api/use-cases.md`](../api/use-cases.md)
- **Sample payload:** [`../api/mock-api.json`](../api/mock-api.json) — see [`../api/README.md`](../api/README.md): segment counts and `briefing` describe the full “today” set; the `tasks` array is a **partial sample** for examples.

**Segment `completion` in mock data:** percentage of that segment’s tasks **completed** (higher = more progress / more “drained” toward empty in the juice metaphor).

---

## Integration and ecosystem

- **ERP / core platform complement, API domains, read/write boundaries:** [`integration-vision.md`](integration-vision.md)

---

## UX and brand

- **Wheel interaction and visual system:** [`../ui/oj-wheel-concept.md`](../ui/oj-wheel-concept.md)
- **Brand:** [`../assets/brand-identity.md`](../assets/brand-identity.md), [`../assets/brand-mark.md`](../assets/brand-mark.md)

---

## Governance (RBAC, workforce types)

- **Participants, approvals, build order:** [`../governance/workforce-model.md`](../governance/workforce-model.md)

---

## When something disagrees with this index

1. Prefer updating the **linked source file** so one place stays authoritative.  
2. Update this index only if navigation or “what is canonical” changes.  
3. For pitch decks, add a footnote to the capability map (see [`pitch-narrative.md`](pitch-narrative.md)).
