# OJ Integration Vision — Complementing ERP & Core People Platforms

OJ is designed as a **mobile-first action layer** that sits alongside the systems where workforce truth already lives — especially **ERP and unified people / workforce platforms** — not as a narrow “HCM-only” add-on.

It does **not** replace the core platform. It **extends** what that platform already does well (master data, policy, payroll hooks, org modelling, approvals) by surfacing the *exceptions and decisions* that matter **today**, wired through **clean API integration points**.

This document describes how OJ connects using patterns that work whether the backbone is a full **ERP** (finance + HR + projects + operations), a **people cloud** suite, or a **best-of-breed** stack with a clear system of record.

---

# 🍊 1. Positioning: With ERP, Not Against It

Enterprise buyers already invest heavily in **ERP-class** scope: people, positions, organisation, grades, locations, projects, cost allocation, approvals, and compliance engines. Standalone WFM or “another HR app” often fights for footprint.

**OJ’s positioning:**

- **Complement, don’t duplicate** — Master data, structural rules, and financial impacts stay in the core. OJ consumes them and returns **completed actions** and **decisions**.
- **Seamless by API** — Integration is not a bespoke science project: map **standard object areas** (People, Positions, Structures, etc.) and keep contracts stable.
- **Better wedge than “yet another HCM”** — OJ is the **daily surface** for managers and operators; the ERP remains the **book of record**. That story lands more naturally in **ERP-led** estates than “replace your HR system.”

HCM-focused products remain valid **sources** for many of the same objects; the **primary narrative** for OJ is **extending ERP (and ERP-shaped people modules)** rather than being positioned solely as an HCM companion.

---

# 🍊 2. Integration Philosophy

### **1. Single source of truth**
Authoritative **People**, **Positions**, **Organisation**, **Approvals**, and **Projects** (where used) remain in the core platform. OJ reads what it needs to build tasks and writes back **only** the outcomes the platform expects (approvals, assignments, acknowledgements, preferences).

### **2. Action-first layer**
OJ focuses on:

- tasks and exceptions  
- alerts and SLAs  
- approvals routed to the right **approvers**  
- lightweight mobile completion of what the ERP already models  

### **3. API-first, event-aware**
OJ integrates through:

- **REST (or equivalent) APIs** over the domains below  
- **Webhooks** or **event buses** where the core publishes changes (new request, shift gap, breach, assignment change)  
- Optional **batch sync** for analytics-heavy segments  

No requirement for heavy custom middleware if the core exposes decent APIs on standard objects.

---

# 🍊 3. Core Integration Domains (API Surfaces)

These are the **conceptual** integration points OJ maps to when normalising into wheel segments and tasks. Naming aligns with how **ERP and people platforms** usually expose data (exact resource names vary by vendor).

| Domain | Typical content OJ consumes | Why it matters for OJ |
|--------|-----------------------------|------------------------|
| **People** | Identifiers, names, employment status, work agreements, contact, skills & certifications, entitlements, eligibility flags | Task context, routing, compliance and skills segments |
| **Positions / Jobs** | Position or job definitions, requirements, headcount, status | Coverage, succession, planning tasks tied to role demand |
| **Structures** | Org units, departments, teams, cost centers, locations, legal entities | Scoping, roll-ups, “which site is red” |
| **Organisational levels** | Hierarchy levels, reporting lines, matrix relationships | **Approver** resolution, delegation, visibility (who sees which tasks) |
| **Approvers & workflow** | Approval chains, substitutes, thresholds, workflow definitions | Turning raw transactions into **actionable** tasks with correct assignees |
| **Projects / work orders** *(when in scope)* | Project membership, demand drivers, chargeability, assignments | Workforce planning, forecasting, and segment context where work is project-led |
| **Time & attendance** | Punches, timesheets, exceptions | Time segment tasks |
| **Absence** | Requests, balances, calendars, conflicts | Absence segment |
| **Scheduling** | Shifts, patterns, swaps, open shifts | Shift segment |
| **Forecasting / demand** *(if in core or adjacent module)* | Volumes, labour drivers | Forecasting and insights segments |

OJ’s **wheel segments** are a **presentation and prioritisation** layer; the **domains above** are the **integration contract** with the ERP or core platform.

**Concrete flows** (absence, open shift, timesheet exception, certification, project-linked demand, briefing) and how they touch each domain: [`../api/use-cases.md`](../api/use-cases.md). Sample task payloads with ERP-style `coreRefs`: [`../api/mock-api.json`](../api/mock-api.json).

---

# 🍊 4. What OJ Pulls from the Core Platform

OJ aggregates and interprets data from the domains in §3 to:

- populate **segment state** (how “full” each slice is)  
- generate **today’s task list** with correct **priority** and **routing**  
- power **Morning Briefing**-style summaries without re-storing master data  

Examples:

- **People + Positions + Structures** → who is missing coverage, who is eligible to cover, which site is affected  
- **Organisational levels + Approvers** → whose inbox gets the approval task  
- **Projects** → which demand spike ties to which staffing gap  
- **Time / absence / schedule** transactions → exception tasks the ERP already knows about but doesn’t surface in a **mobile-first** way  

---

# 🍊 5. What OJ Sends Back to the Core Platform

OJ writes back **only** what the core’s APIs accept as **business events** or **transactions**:

### **Decisions & completions**
- Approve / reject / escalate absence, swap, correction  
- Assign or offer open shift (subject to core rules)  
- Approve timesheet or exception path  
- Acknowledge compliance or certification follow-up  

### **Signals (non-master)**
- Read receipts, dismissals, snooze  
- User preferences (notifications, language, mobile)  

### **Not duplicated in OJ**
- Payroll calculation, statutory rules engines, full org redesign, position control budgets — unless the core exposes them as **actions** OJ can trigger, those remain **ERP-native**.

---

# 🍊 6. Integration Architecture (Conceptual)

### **1. Core platform (ERP / people system of record)**
- People, positions, structures, levels, approvers, projects (as applicable)  
- Transactional engines: time, absence, scheduling, payroll hooks  

### **2. OJ integration & normalisation layer**
- Pulls from API domains (§3)  
- Subscribes to events where available  
- Maps to OJ segments and task types  
- Posts outcomes back through the core’s approved endpoints  

### **3. OJ apps (mobile + web)**
- Wheel, tasks, briefing, notifications  

### **4. Optional event fabric**
- “New absence request”, “Unassigned shift”, “Approver delegation started”, “Project demand threshold” → instant task refresh  

---

# 🍊 7. Example Flow — Absence Request

1. Employee submits absence in the **core platform** (same object the ERP already records).  
2. Core publishes an event or OJ polls **Approvers** + **Absence** APIs → resolves the manager’s queue.  
3. OJ adds a task to **Absence Management** with **People** and **Structures** context.  
4. Manager completes approval in OJ.  
5. OJ calls the core’s **approval** endpoint; the ERP remains authoritative.  
6. OJ updates local task state (segment drains).  

Same pattern applies to shift coverage, timesheet exceptions, or project-driven staffing alerts.

---

# 🍊 8. Why This Model Fits ERP-Led Buyers

### **1. Respect the investment**
No argument that workforce data should “move” to a sidecar; OJ **amplifies** existing ERP and people data.

### **2. Clear contract**
Integration workshops centre on **domains** (People, Positions, Structures, Levels, Approvers, Projects, …) — familiar to enterprise architects.

### **3. Extensible**
New segments (e.g. deeper **Insights**) pull more from the same APIs plus analytics exports — without redefining master data in OJ.

### **4. Vendor-agnostic shape**
The same story applies to **SAP, Oracle, Workday, Infor, Microsoft Dynamics**, regional ERPs, or **focused HCM suites** that expose equivalent objects — MHR People First / iTrent-style platforms are **one** example of a core that can back the same integration map.

---

# 🍊 9. Future Integration Opportunities

- AI-assisted **Morning Briefing** grounded in **live** ERP signals (not a duplicate warehouse)  
- Skills-based coverage suggestions using **People** + **Positions** + **Projects**  
- Succession and readiness scoring using position and structure APIs  
- Predictive absence and demand using forecasting feeds from the core or adjacent planning tools  

---

OJ is not a replacement for **ERP or core people platforms** — it is the **clear, energising layer** that turns their data into **same-day action**, through **well-scoped API integration** across **People, organisation, approvals, projects, and work**.
