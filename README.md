# OJ — Fresh Start Workforce  
*A mobile-first workforce management companion designed to help managers start their day with clarity and energy.*

OJ is a conceptual Workforce Management (WFM) product built around a simple idea:

> Every day starts with OJ.  
> Your tasks appear as segments of an orange.  
> Complete the tasks, drink the juice, and keep your workforce moving.

This project explores a new way of thinking about WFM — one that is intuitive, visual, and designed for the realities of modern shift-based work.

---

## 🍊 Why OJ?

Workforce Management is constantly moving. Managers and employees juggle:

- shift changes  
- absences  
- time & attendance  
- compliance  
- forecasting  
- skills  
- planning  
- people development  

Most tools overwhelm users with dashboards and menus.

**OJ simplifies the day.**  
It gives users a fresh start every morning by showing them exactly what needs attention — no more, no less.

---

## 🍊 The OJ Wheel (10 Segments)

A standard orange has **10 natural segments**, so OJ uses this structure to represent the 10 core areas of Workforce Management:

1. **Shift Management**  
2. **Time & Attendance**  
3. **Absence Management**  
4. **Forecasting**  
5. **Workforce Planning**  
6. **Succession Planning**  
7. **Skills & Competency Tracking**  
8. **Compliance**  
9. **Employee Experience**  
10. **Insights & Analytics**

Each segment contains tasks or alerts.  
As tasks are completed, the segment “empties” — like drinking your morning juice.

When all segments are clear, the user has “finished their OJ” for the day.

---

## 🍊 Core Principles

### 1. Mobile-first
Managers are rarely at a desk.  
OJ is designed for phones first, desktops second.

### 2. Action-oriented
No dashboards for the sake of dashboards.  
OJ surfaces only what needs attention.

### 3. Human and friendly
WFM tools are often cold and transactional.  
OJ is warm, energetic, and easy to navigate.

### 4. Extends ERP and core people platforms
This concept is designed to complement **ERP and unified people / workforce systems** — same book of record, with OJ as the **action layer** over API surfaces such as People, Positions, Structures, organisational levels, Approvers, and Projects (where relevant).

---

## 🍊 What’s in this Repo

- `/docs` — narrative, brand concept, capability mapping, integration vision  
- `/ui` — OJ wheel concept, mobile and web flows  
- `/api` — mock data, conceptual endpoints, and ERP-oriented use cases (`api/endpoints.md`, `api/use-cases.md`, `api/README.md`)  
- `/assets` — logo concept, palette, app icon  
- `/prototype` — link and notes for the **live prototype** ([Lovable demo](https://oj-wfm.lovable.app/)); the interactive app is maintained there, not as a build in this repo  

**Canonical product labels:** the 10 wheel segments and their full names are defined in `docs/capability-map.md`. Other docs may use shorter phrasing for pitches; that file is the naming source of truth.

**Contributor index:** [`docs/CANONICAL.md`](docs/CANONICAL.md) — live demo link, scope, API/mock pointers, and governance in one place.

---

## 🍊 Why This Project Exists

This repo was created as part of my exploration into modern Workforce Management design, and to demonstrate:

- product thinking  
- UX/UI design thinking  
- conceptual branding  
- technical structuring  
- understanding of WFM ecosystems  
- initiative following redundancy  

It is not a commercial product — it’s a **conceptual showcase**.

---

## 🍊 Future Ideas (beyond MVP / demo depth)

Stretch enhancements not fully reflected in the [roadmap](docs/roadmap.md) Phase 1 slice or the current Lovable build — for example:

- Richer wheel motion and micro-interactions  
- **AI-generated** Morning Briefing copy and prioritisation (Phase 1 already assumes a **summary** briefing; this is deeper personalisation)  
- Deeper, bidirectional ERP / payroll / project integrations than a first companion slice  
- Skills-based shift recommendations (see roadmap Phase 6)  

## 🍊 Live Prototype

OJ has an interactive prototype built in Lovable.

👉 **Try the live demo:** https://oj-wfm.lovable.app/

This prototype demonstrates:
- the OJ Wheel interaction  
- mobile-first task flows  
- the visual identity  
- the “drink your juice” completion mechanic  
- the overall feel of the OJ experience  

- Succession heatmaps  
- Compliance risk scoring  
