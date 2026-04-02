# OJ API — Endpoints Overview

OJ uses a simple, lightweight API structure designed to support the mobile-first experience.  
The API focuses on tasks, segments, and workforce data — the essentials needed to power the OJ Wheel.

This document outlines the conceptual endpoints for the OJ system.

---

# 🍊 1. Segments

### **GET /segments**
Returns the 10 OJ segments and their current state.

**Example response:**
- segment name  
- number of tasks  
- completion percentage  
- alert level  

---

# 🍊 2. Tasks

### **GET /tasks/today**
Returns all tasks the user needs to complete today.

### **GET /tasks/{segmentId}**
Returns tasks for a specific segment (e.g., Absence, Shifts).

### **POST /tasks/{taskId}/complete**
Marks a task as completed.

### **POST /tasks/{taskId}/dismiss**
Dismisses or snoozes a task.

---

# 🍊 3. Morning Briefing

### **GET /briefing**
Returns a summary of:
- total tasks  
- urgent issues  
- forecast highlights  
- compliance alerts  
- suggested priorities  

---

# 🍊 4. Workforce Data

### **GET /employees/{id}**
Returns employee profile information.

### **GET /employees/{id}/skills**
Returns skills, certifications, and expiry dates.

### **GET /employees/{id}/schedule**
Returns upcoming shifts.

---

# 🍊 5. Forecasting & Planning

### **GET /forecast/today**
Returns labour demand and coverage for the day.

### **GET /forecast/week**
Returns a 7-day forecast.

---

# 🍊 6. Notifications

### **GET /notifications**
Returns a list of notifications for the user.

### **POST /notifications/{id}/read**
Marks a notification as read.

---

# 🍊 7. Compliance

### **GET /compliance/alerts**
Returns:
- WTR breaches  
- rest break issues  
- night work alerts  
- certification expiries  

---

# 🍊 8. System

### **GET /health**
Returns system health status.

### **GET /version**
Returns API version and build info.

---

# 🍊 Why This API Matters

This API structure:
- supports the OJ Wheel  
- keeps the system lightweight  
- mirrors real WFM data flows  
- demonstrates product + technical thinking  
- shows how OJ could integrate with an HCM or payroll system  

This is not a production API — it’s a conceptual foundation for the OJ experience.
