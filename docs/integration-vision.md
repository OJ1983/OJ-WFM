# OJ Integration Vision — How OJ Connects to an HCM Ecosystem

OJ is designed as a lightweight, mobile-first companion to a core HR or Workforce Management system.  
It does not replace an HCM — it enhances it by surfacing the *actions* that matter most each day.

This document outlines how OJ could integrate with an HCM platform such as MHR’s People First or iTrent.

---

# 🍊 1. Integration Philosophy

OJ follows three principles:

### **1. Single Source of Truth**
All employee, schedule, and payroll-critical data remains in the HCM system.  
OJ reads from it and writes back only what’s necessary.

### **2. Action-First Layer**
OJ focuses on:
- tasks  
- alerts  
- exceptions  
- approvals  

It becomes the “morning companion” that helps managers start their day.

### **3. Lightweight, API-Driven**
OJ integrates through:
- REST APIs  
- Webhooks  
- Event streams (optional)  

No heavy middleware required.

---

# 🍊 2. What OJ Pulls from the HCM

OJ consumes data from the core HR system to populate the OJ Wheel and task lists.

### **Employee Data**
- Name  
- Role  
- Location  
- Skills & certifications  
- Entitlements  
- Employment status  

### **Scheduling Data**
- Published shifts  
- Open shifts  
- Shift swaps  
- Coverage gaps  

### **Absence Data**
- Requests  
- Balances  
- Approvals  
- Conflicts  

### **Time & Attendance**
- Clock-ins  
- Exceptions  
- Timesheets  

### **Compliance**
- WTR rules  
- Breaches  
- Certification expiries  

### **Forecasting**
- Labour demand  
- Volume predictions  
- Staffing recommendations  

---

# 🍊 3. What OJ Sends Back to the HCM

OJ writes back only the *actions* the user completes.

### **Task Completions**
- Approve absence  
- Approve shift swap  
- Resolve compliance alert  
- Approve timesheet  
- Assign shift  

### **Notifications**
- Read receipts  
- Dismissed alerts  

### **User Preferences**
- Notification settings  
- Mobile preferences  
- Language  

This keeps OJ lightweight and avoids duplicating core HR logic.

---

# 🍊 4. Integration Architecture (Conceptual)

### **1. HCM System (Source of Truth)**
- Employee records  
- Scheduling engine  
- Absence engine  
- Payroll  
- Compliance rules  

### **2. OJ API Layer**
- Pulls data from HCM  
- Normalises into OJ segments  
- Generates tasks  
- Sends completed actions back  

### **3. OJ Mobile & Web Apps**
- Display the OJ Wheel  
- Show tasks  
- Provide action flows  

### **4. Optional Event Layer**
- Webhooks for real-time updates  
- E.g., “New absence request”, “Shift unassigned”, “Compliance breach”  

---

# 🍊 5. Example Integration Flow

### **Scenario: Absence Request Arrives**

1. Employee submits absence request in HCM  
2. HCM triggers webhook → OJ receives event  
3. OJ adds a task to the “Absence” segment  
4. Manager sees the segment fill  
5. Manager approves request in OJ  
6. OJ sends approval → HCM updates record  
7. OJ drains the segment  

This shows the “action-first” loop in motion.

---

# 🍊 6. Why This Integration Model Works

### **1. Minimal disruption**
OJ doesn’t replace existing systems — it enhances them.

### **2. Clear separation of responsibilities**
- HCM = data + rules  
- OJ = tasks + daily actions  

### **3. Mobile-first**
OJ gives managers a fast, intuitive way to act on HCM data.

### **4. Real-time**
Webhooks keep OJ fresh and responsive.

### **5. Scalable**
This model works for:
- retail  
- hospitality  
- healthcare  
- manufacturing  
- public sector  

### **6. Perfect for MHR**
MHR’s People First and iTrent already support:
- APIs  
- modular architecture  
- mobile workflows  

OJ fits naturally as a companion layer.

---

# 🍊 7. Future Integration Opportunities

- AI-powered “Morning Briefing” using HCM data  
- Skills-based scheduling recommendations  
- Succession readiness scoring  
- Predictive absence alerts  
- Labour cost optimisation  

---

OJ is not a replacement for an HCM — it’s the fresh, energising layer that helps managers take action quickly and confidently.
