# OJ Web Wireframes — Desktop & Browser Experience

While OJ is designed mobile-first, many managers and HR partners still use desktop environments for deeper review, planning, and reporting.  
The web experience mirrors the mobile app’s simplicity while taking advantage of larger screen real estate.

These wireframes describe how OJ scales gracefully from mobile to desktop.

---

# 🍊 1. Web Dashboard — The OJ Wheel + Insights

**Purpose:**  
Provide a clear, action-oriented overview of the day, with space for additional insights.

**Layout:**
- Left side: Large OJ Wheel (primary navigation)  
- Right side:  
  - “Today’s Highlights”  
  - Urgent tasks  
  - Forecast snapshot  
  - Compliance alerts  

**Interactions:**
- Hover over a segment → highlight + tooltip  
- Click a segment → opens task panel on the right  
- Completed segments fade to a lighter colour  

**Visual Notes:**
- Clean, spacious layout  
- Citrus palette used subtly  
- Typography remains friendly and modern  

---

# 🍊 2. Segment Task Panel (Right Side)

**Purpose:**  
Show tasks for the selected segment without navigating away from the dashboard.

**Layout:**
- Panel slides in or replaces the right-hand content  
- Title: “Absence Tasks” (or relevant segment)  
- Task cards with:
  - Title  
  - Description  
  - Priority  
  - Action buttons  

**Interactions:**
- Click task → opens task detail modal  
- Completing a task updates the wheel in real time  

**Visual Notes:**
- Light background  
- Clear spacing  
- Keyboard-friendly navigation  

---

# 🍊 3. Task Detail Modal

**Purpose:**  
Provide full context for completing a task.

**Layout:**
- Modal overlay  
- Header with task name  
- Key details (employee, date, shift, reason)  
- Supporting data (conflicts, compliance warnings, history)  
- Primary action button  
- Secondary actions (View Profile, Message Employee)  

**Interactions:**
- ESC to close  
- Click outside modal to close  
- Completing task triggers:
  - A small “juice drain” animation on the wheel  
  - A confirmation toast  

---

# 🍊 4. Forecasting & Planning Screen

**Purpose:**  
Give managers deeper visibility into labour demand and coverage.

**Layout:**
- OJ Wheel remains in the top-left as a persistent anchor  
- Main content area:
  - Forecast graph  
  - Coverage heatmap  
  - Suggested actions  
  - “What’s changing today?” insights  

**Interactions:**
- Hover over graph points → show demand values  
- Click suggested action → opens task detail  

**Visual Notes:**
- Clean, data-light visuals  
- No overwhelming dashboards  
- Focus on clarity and action  

---

# 🍊 5. Skills & Succession Screen

**Purpose:**  
Provide a simple, visual way to understand team capability and readiness.

**Layout:**
- Team list on the left  
- Skills matrix or readiness indicators on the right  
- Alerts for expiring certifications  

**Interactions:**
- Click employee → open profile modal  
- Click skill → view training options  

**Visual Notes:**
- Avoid dense grids  
- Use colour-coded badges  
- Keep it friendly and approachable  

---

# 🍊 6. Compliance Overview

**Purpose:**  
Surface compliance risks without overwhelming the user.

**Layout:**
- Summary cards:
  - WTR breaches  
  - Rest break issues  
  - Night work alerts  
  - Certification expiries  
- Click any card → opens detailed list  

**Interactions:**
- Hover → show quick stats  
- Click → open task list  

**Visual Notes:**
- Use coral/red sparingly for alerts  
- Keep tone calm, not alarming  

---

# 🍊 7. Navigation Model (Web)

OJ uses a simple, modern navigation pattern:

### **Left Sidebar**
- OJ Wheel (always visible)  
- Labels for each segment  
- Quick access to:
  - Home  
  - Briefing  
  - Notifications  
  - Settings  

### **Top Bar**
- Search  
- Profile  
- Organisation switcher  

### **Main Content Area**
- Dynamic based on selected segment  

This keeps the experience consistent with mobile while taking advantage of desktop space.

---

# 🍊 8. Accessibility Considerations

- Keyboard navigation for all interactive elements  
- High contrast mode  
- Screen reader labels for each segment  
- Tooltips for all icons  
- Large click targets  

---

# 🍊 9. Why This Web Experience Works

### **1. It mirrors the mobile experience**
Users don’t need to relearn anything.

### **2. It uses space intelligently**
The wheel anchors the experience, while the right side provides depth.

### **3. It supports deeper workflows**
Planning, forecasting, and compliance are easier on desktop.

### **4. It remains friendly and human**
Even on desktop, OJ avoids the cold, corporate feel of traditional WFM tools.

### **5. It’s scalable**
The layout works for:
- managers  
- HR partners  
- administrators  

---

These wireframes show how OJ becomes a full multi-platform experience while staying true to its fresh, action-first design philosophy.
