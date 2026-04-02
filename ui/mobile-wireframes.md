# OJ Mobile Wireframes — Core Screens & User Flows

OJ is designed mobile-first.  
Managers and employees in shift-based environments rarely sit at a desk, so the mobile experience must be simple, fast, and action-oriented.

These wireframes describe the key screens and flows that bring the OJ Wheel to life on a mobile device.

---

# 🍊 1. Home Screen — The OJ Wheel

**Purpose:**  
Give the user a clear, energising overview of what needs attention today.

**Layout:**
- Full-screen circular OJ Wheel  
- 10 segments, each representing a WFM capability  
- Centre hub with:
  - “Good Morning, [Name]”
  - Today’s date
  - Optional “Morning Briefing” summary  

**Interactions:**
- Tap a segment → opens task list  
- Long press → quick preview of tasks  
- Completed segments appear “empty”  
- Segments with urgent tasks pulse gently  

**Visual Notes:**
- Bright citrus palette  
- Soft shadows  
- Rounded edges  
- Clean typography  

---

# 🍊 2. Segment Task List

**Purpose:**  
Show the user the tasks for a specific capability (e.g., Absence, Shifts).

**Layout:**
- Slide-up panel from bottom (mobile-native pattern)  
- Title: “Absence Tasks” (or relevant segment)  
- Task cards with:
  - Title  
  - Short description  
  - Priority indicator  
  - Action button (Approve, Review, Assign, etc.)  

**Interactions:**
- Swipe down to close  
- Tap task → opens task detail  
- Completing a task animates the segment draining  

**Visual Notes:**
- Light background  
- Cards with subtle shadows  
- Clear call-to-action buttons  

---

# 🍊 3. Task Detail Screen

**Purpose:**  
Provide context and allow the user to complete the task confidently.

**Layout:**
- Header with task name  
- Key information (e.g., employee name, date, shift, reason)  
- Supporting data (e.g., conflicts, compliance warnings)  
- Primary action button (Approve, Reject, Resolve)  
- Secondary actions (View Profile, Message Employee)  

**Interactions:**
- Swipe right to go back  
- Completing the task triggers:
  - A small “juice drain” animation  
  - A toast: “Task completed”  

---

# 🍊 4. Morning Briefing Screen

**Purpose:**  
Give the user a quick overview of the day before diving into tasks.

**Content:**
- “Today’s Highlights”  
- Number of tasks across segments  
- Urgent issues (e.g., uncovered shifts, compliance risks)  
- Forecast snapshot  
- Suggested priorities  

**Interactions:**
- Tap any item → opens relevant segment  
- Swipe left → go to OJ Wheel  

**Visual Notes:**
- Clean, minimal  
- Uses icons for clarity  
- Friendly tone (“Here’s what needs your attention today”)  

---

# 🍊 5. Notifications Screen

**Purpose:**  
Provide a chronological list of updates and alerts.

**Layout:**
- List of notifications  
- Icons for each category (shift, absence, compliance, etc.)  
- Tapping a notification opens the relevant task  

**Types of notifications:**
- Shift swap requests  
- Absence requests  
- Compliance warnings  
- Forecast changes  
- Skill expiry alerts  

---

# 🍊 6. Profile &
