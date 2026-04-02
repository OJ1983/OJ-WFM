# OJ Wheel — Core UI Concept

The OJ Wheel is the central interaction model of the OJ Workforce Management experience.  
It represents the 10 natural segments of an orange, with each segment mapped to a core Workforce Management capability.

The wheel is designed to be:
- instantly recognisable  
- mobile-first  
- simple to understand  
- action-oriented  
- visually energetic  

This document describes how the wheel looks, behaves, and supports the OJ brand metaphor.

---

# 🍊 1. Visual Structure

The OJ Wheel is a circular interface divided into **10 equal radial segments**, inspired by the natural segmentation of an orange.

### **Key visual elements:**
- A clean, minimal circle  
- 10 evenly spaced segments  
- Soft rounded edges (no harsh lines)  
- A subtle sunrise gradient (orange → peach → yellow)  
- A small “OJ” mark or sunburst in the centre  

### **Design principles:**
- Friendly, not corporate  
- Fresh, bright, energetic  
- High contrast for accessibility  
- Works at small sizes (mobile) and large sizes (web)  

---

# 🍊 2. Segment Mapping

Each segment corresponds to one of the 10 WFM capabilities:

1. Shift Management  
2. Time & Attendance  
3. Absence Management  
4. Forecasting  
5. Workforce Planning  
6. Succession Planning  
7. Skills & Competency Tracking  
8. Compliance  
9. Employee Experience  
10. Insights & Analytics  

These segments act as “categories” for tasks and alerts.

---

# 🍊 3. Interaction Model

### **Default State**
- Segments appear “full” when there are tasks to complete  
- Segments appear “empty” when all tasks in that category are done  
- A subtle animation (like juice settling) indicates freshness  

### **Tap Interaction (Mobile)**
- Tapping a segment opens a task list for that capability  
- Tasks are displayed as simple cards with clear actions  
- Completing a task animates the segment partially emptying  

### **Hover Interaction (Web)**
- Hovering highlights the segment  
- A tooltip shows the number of tasks  
- Clicking opens the task list  

---

# 🍊 4. Completion Mechanic (“Drink Your Juice”)

This is the signature metaphor of OJ.

### **How it works:**
- Each task completed “drains” a portion of the segment  
- When a segment is fully drained, it becomes a clean, empty slice  
- When all 10 segments are empty, the user has “finished their OJ”  

### **Completion Feedback:**
- A small celebratory animation (e.g., a sparkle or sunrise flare)  
- A message: **“You’ve finished your OJ for today!”**  
- Optional: a streak counter for daily completion  

This mechanic encourages daily engagement without feeling gamified in a childish way.

---

# 🍊 5. Colour System

### **Segment Colours**
Each segment uses a variation of the citrus palette:
- Deep orange  
- Tangerine  
- Peach  
- Lemon yellow  

### **State Colours**
- **Full segment:** vibrant orange  
- **Partially complete:** lighter gradient  
- **Empty:** pale yellow or white  
- **Alert state:** coral or red outline  
- **Completed:** soft pastel  

This creates a clear visual language for progress.

---

# 🍊 6. Centre Hub

The centre of the wheel contains:
- A small OJ logo  
- Or a sunburst icon  
- Or a “Today’s Focus” message  

This acts as the anchor of the interface.

---

# 🍊 7. Responsiveness

### **Mobile-first**
- The wheel fills most of the screen  
- Segments are large enough to tap  
- Task lists slide up from the bottom  

### **Tablet**
- Wheel on the left  
- Task list on the right  

### **Desktop**
- Wheel centred or left-aligned  
- Task list appears in a panel  
- Additional insights can appear around the wheel  

---

# 🍊 8. Accessibility Considerations

- High contrast mode  
- Colour-blind safe palette  
- Segment labels always visible  
- Keyboard navigation for web  
- Screen reader descriptions for each segment  

---

# 🍊 9. Why the OJ Wheel Works

### **1. It’s instantly understandable**
People intuitively understand the idea of “segments” and “completion.”

### **2. It’s emotionally positive**
Most WFM tools feel heavy.  
OJ feels light, fresh, and energising.

### **3. It’s action-first**
The wheel shows *only* what needs attention today.

### **4. It’s memorable**
No other WFM product uses a metaphor this strong or this friendly.

### **5. It scales**
The wheel can be:
- an app icon  
- a dashboard widget  
- a loading animation  
- a brand symbol  

---

# 🍊 10. Future Enhancements

- Animated sunrise when all tasks are complete  
- AI-powered “Morning Briefing” in the centre hub  
- Segment priority indicators (e.g., pulsing for urgent tasks)  
- Role-based segment visibility  
- Weekly or monthly OJ wheels  

---

This OJ Wheel concept is the heart of the product — a simple, visual, and energising way to manage a complex workforce.
