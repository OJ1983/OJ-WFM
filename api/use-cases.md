# OJ API — integration use cases (conceptual)

Companion to [`../docs/integration-vision.md`](../docs/integration-vision.md). These are **not** a full contract spec; they show how **wheel-facing behaviour** maps to **ERP / core platform** domains and the endpoints in [`endpoints.md`](endpoints.md).

For each use case: **trigger** (often an event from the core), **domains read**, **domains written**, and **typical OJ outcome**.

---

## 1. Manager approves annual leave

| | |
|---|---|
| **Actor** | Site / line manager (resolved via **Organisational levels** + **Approvers**) |
| **Trigger** | Employee absence request created or updated in core; webhook or poll on **Absence** APIs |
| **Read** | **People** (requester, entitlements), **Structures** (site/team), **Absence** (dates, type), **Approvers** (routing, delegation) |
| **Write** | Approval / rejection / comment via core **workflow** or absence **transaction** API |
| **OJ** | Task in **Absence Management**; completing it POSTs outcome; segment state refreshes from core |

**Endpoints (conceptual):** `GET /tasks/today`, `GET /tasks/{segmentId}`, `POST /tasks/{taskId}/complete` → implemented in core as workflow step(s).

---

## 2. Open shift needs coverage

| | |
|---|---|
| **Actor** | Manager or **proxy** scheduler (see [`../governance/workforce-model.md`](../governance/workforce-model.md)) |
| **Trigger** | **Scheduling** engine publishes gap; **Forecasting** may raise priority |
| **Read** | **Scheduling** (shift, pattern), **People** + **Positions** (eligibility, skills), **Structures** (location), optional **Projects** (if shift is project-tagged) |
| **Write** | Assign / offer / publish in **Scheduling**; may create notification events in core |
| **OJ** | Task in **Shift Management** (urgent); may suggest candidates using skills data from **People** |

**Endpoints:** `GET /tasks/today`, `GET /employees/{id}/skills`, `POST /tasks/{taskId}/complete` (maps to assign shift in core).

---

## 3. Timesheet exception

| | |
|---|---|
| **Actor** | Manager or L4 HR ops (per routing) |
| **Trigger** | **Time & attendance** exception flagged (late, missed punch, anomaly) |
| **Read** | **People**, **Time & attendance** punches/timesheet, **Structures**, **Approvers** for correction path |
| **Write** | Approve correction, override, or send back via core **time** APIs |
| **OJ** | Task in **Time & Attendance** |

---

## 4. Certification nearing expiry

| | |
|---|---|
| **Actor** | Manager (first line) or compliance owner |
| **Trigger** | **People** / learning record threshold (days to expiry) |
| **Read** | **People** (certifications), **Positions** (required competencies), **Compliance** rules if surfaced from core |
| **Write** | Acknowledgement, training enrolment trigger, or HR case — **whatever the core exposes** (OJ does not invent the compliance engine) |
| **OJ** | Task in **Skills & Competency Tracking** or **Compliance** depending on product mapping |

---

## 5. Project / demand spike drives staffing alert *(when Projects are in scope)*

| | |
|---|---|
| **Actor** | Ops or site manager |
| **Trigger** | **Projects** (milestone, volume) + **Forecasting** signal crosses threshold |
| **Read** | **Projects**, **Forecasting**, **Structures**, **Scheduling** / **Workforce planning** hints from core |
| **Write** | Usually **indirect**: creates follow-on tasks (open shifts, reforecast review) via core rules — exact API varies |
| **OJ** | Tasks may appear under **Workforce Planning**, **Shift Management**, or **Insights & Analytics** depending on how you segment the story |

---

## 6. Morning Briefing aggregate

| | |
|---|---|
| **Actor** | Any authenticated manager |
| **Trigger** | Scheduled pull or session open |
| **Read** | Aggregated **segments**, **Absence**, **Scheduling**, **Compliance** counts, optional **Forecasting** snippet — all normalised from core APIs |
| **Write** | Optional: persist dismiss/snooze as **preferences** |
| **OJ** | `GET /briefing` response |

---

## Sample data

[`mock-api.json`](mock-api.json) includes optional **`coreRefs`** on sample tasks and a top-level **`context`** block: illustrative **ERP-style foreign keys** (person, org unit, workflow item) so demos and docs speak the same language as [`integration-vision.md`](../docs/integration-vision.md) §3.

---

## When to go further

Add **OpenAPI** / **JSON Schema**, contract tests, or **per-vendor** mapping sheets when you pursue a real integration program — this repo can stay at **use case + mock shape** until then.
