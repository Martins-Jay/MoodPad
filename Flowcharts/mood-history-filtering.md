```
START
  ↓
Receive moodsArr (raw array of mood objects)
  ↓
Read activeScope from useState
  ↓
Run moodsArr.filter(...)
  ↓
For each moodObj:
    ↓
    Convert mood.timestamp → Date object
    ↓
    Compare date against activeScope condition:
        ├─ If activeScope === "today"
        │     → Is moodDate same calendar day as today?
        │
        ├─ If activeScope === "week"
        │     → Is moodDate within last 7 days?
        │
        ├─ If activeScope === "all"
        │     → Automatically include
    ↓
    Return true or false
  ↓
Build filteredMoods array
  ↓
(Optional) Apply preview limit:
    ├─ If isExpanded === false
    │     → Take first 3 items
    ├─ Else
    │     → Use full filteredMoods
  ↓
Render moodsToRender with .map()
  ↓
END

```
