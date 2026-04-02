# OJ API (conceptual mock)

This folder holds **illustrative** API material for the OJ companion model, not a running server.

## `use-cases.md`

**ERP-shaped flows** (who reads what, which domains: People, Positions, Structures, Approvers, Projects, …) tied to conceptual endpoints. Start here after [`../docs/integration-vision.md`](../docs/integration-vision.md).

## `mock-api.json`

- **`segments`** — Per-segment task **counts** and **completion** (percent of that segment’s tasks done) describe a plausible “today” snapshot. Counts sum to `briefing.totalTasks` when the file is internally consistent.
- **`context`** — Optional **tenant / manager** snapshot (e.g. `legalEntityId`, `managerPersonId`, default org unit) shaped like an ERP session.
- **`tasks`** — A **small sample** of task objects (titles, priorities, `segmentId`). Optional **`coreRefs`** per task: illustrative foreign keys (`approvalWorkItemId`, `shiftId`, `personId`, …) aligned with integration domains — **not** a full enumeration; length will usually be **less** than `briefing.totalTasks`.
- **`briefing`** — Aggregate rollups for the same day as `segments` (urgent count, high-priority count, etc.). Those numbers refer to the **full** task set implied by `segments`, not only the rows in `tasks`.

If you change segment task counts or briefing figures, either expand `tasks` to match or keep `tasks` as a partial sample and treat rollups as authoritative for story/demo purposes.

See also [`endpoints.md`](endpoints.md) and [`../docs/CANONICAL.md`](../docs/CANONICAL.md).
