# OJ-WFM: personas, workforce types, and governance

Use when defining RBAC, approvals, data scope, or industry packs. Industries and vertical sub-products are overlays on this layer, not ad-hoc persona lists.

## 1. Workforce participant model

Model people with two axes: (1) engagement type, (2) which product modules apply and how.

### 1.1 Engagement types (catalog)

Define as structured data, not only labels. Each type drives defaults for pay, approvals, and visibility.

- **Employee** (W2, hourly/salary): core scheduling, time, PTO, payroll export.
- **Fixed-term / seasonal employee**: same as employee with contract dates and eligibility quirks.
- **Agency / EOR worker**: often scheduled at client; approvals may include agency; payroll often outside client export; clarify data controller.
- **Independent contractor**: may appear on roster; prefer time sheets or milestones over labor OT rules; no default PTO; payroll usually out or separate billing flow; avoid misclassification UX.
- **Volunteer**: scheduling and optional check-in for grants or hour caps; no payroll; policies for limits and clearance.
- **Member** (associations, unions, clubs): roster and duty slots may apply; employment and payroll usually out; rules are membership-based.
- **Intern / student**: scheduling and time; leave and pay rules often special; minors in some regions.
- **Director / non-exec** (optional): default exclude from operational WFM unless opted in.

**Product rule:** Any flow that assumes payroll or labor law must declare allowed engagement types. Payroll and compliance exports default to paid employment relationships only.

### 1.2 Capability inclusion by module

Maintain engagement type versus module permissions at design time.

- **Schedule:** employees, temps, many volunteers, contractors if policy allows, agency workers with rules.
- **Time and attendance:** employees/temps standard; contractors as time sheets; volunteers as check-in without pay rules.
- **Absence / PTO:** employees and temps by default; not contractors, volunteers, or members unless explicitly modeled otherwise.
- **Labor rules / OT:** employee-like types only; never apply silently to volunteers or contractors.
- **Reports:** always segment by engagement type; RLS still applies.

---

## 2. Management hierarchy and approvers

Separate **reporting line**, **role permissions**, and **approval routing**.

### 2.1 Routing tiers (abstract)

Configure org-specific labels on these tiers:

- **L0 Self:** submits request, correction, swap.
- **L1 Direct operational lead:** team or shift lead.
- **L2 Site / location manager:** owns site coverage.
- **L3 Area / regional:** multiple sites.
- **L4 HR / workforce operations:** policy and sensitive exceptions.
- **L5 Executive / cost owner:** rare thresholds.

Approval definitions are **per transaction type** (PTO, schedule publish, punch correction, swap, open shift). A user can be L2 for scheduling but only L4 for HR cases if granted.

### 2.2 Matrix and dotted-line

Support secondary approver or consulted party: dotted-line notification or optional approval, plus threshold routing (example: long PTO or high impact triggers higher tier).

### 2.3 Role-based versus line-based

Some steps are **by assigned role**, not by reports-to (example: HR final sign-off on policy exceptions). Say this clearly in UX.

---

## 3. Proxy, delegation, and central workforce roles

### 3.1 Delegation (act on behalf of)

For manager absence: time-bounded grant; scope can mirror or subset (approvals only, no settings). Audit every action with on_behalf_of and delegation_id.

### 3.2 Proxy (central / functional)

For **workforce planning**, **scheduling center**, or **roster desk** outside the line hierarchy.

- **Scope:** locations, departments, job families, engagement types.
- **Capabilities:** draft and publish patterns vary; may exclude compensation views.
- **Grant:** explicit admin or RBAC; not inferred from org chart.

Proxy is narrow and audited; distinguish from rare org-wide superuser.

### 3.3 Break-glass (optional)

Short elevated access; heavy audit; post-incident review flag.

---

## 4. Personas for stories (behavioral)

Combine **engagement type**, **routing tier** when relevant, and **access pattern**: line manager, HR ops, central proxy, volunteer coordinator, member secretary.

Examples:

- Site coverage owner (L2): today gaps, mobile triage.
- Regional ops (L3): cross-site rollups.
- Workforce hub scheduler (proxy): many locations, no direct reports.
- Volunteer coordinator: roster and limits, no payroll path.

---

## 5. Build order

1. Engagement type on every person plus module defaults.
2. RBAC: permissions separate from position in approval chain.
3. Approval engine: transaction type plus tiers plus optional matrix step.
4. Delegation and proxy with scope dimensions and audit tags.
5. Industry packs (terminology, modules, compliance) after the above.

---

## 6. Industry focus (deferred)

After governance is stable, add vertical packs: which engagement types matter, which modules ship first, compliance overlays. Challenge features that assume a single default industry employee.
