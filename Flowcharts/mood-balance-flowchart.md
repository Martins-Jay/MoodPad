# Mood Balance Flowchart

This flowchart explains how MoodPad calculates and displays
the daily mood balance from user mood entries.

```
┌──────────────────────────────────────────────┐
│                  Mood Balance                │
└───────────────────────┬──────────────────────┘
                        │
                        ▼
┌──────────────────────────────────────────────┐
│ Get today’s date (today’s date string)       │
└───────────────────────┬──────────────────────┘
                        │
                        ▼
┌──────────────────────────────────────────────┐
│ Filter all saved moods. We keep ONLY moods   │
│ created today                                │
│ (ignore any mood that has no timestamp)      │
└───────────────────────┬──────────────────────┘
                        │
                        ▼
┌──────────────────────────────────────────────┐
│ Are there any moods created today?           │
│ (is the filtered array empty?)               │
└───────────────┬───────────────────────┬──────┘
                │ YES (not empty)       │ NO (empty)
                │                       │
                ▼                       ▼
┌──────────────────────────────────┐   ┌───────────────────────────┐
│ Create a mood count object       │   │ Show empty state          │
│ Set every mood type count to 0   │   │ “No moods created today”  │
└───────────────────────┬──────────┘   └───────────────────────────┘
                        │
                        ▼
┌──────────────────────────────────────────────┐
│ Loop through filtered moods using (forEach)  │
│ For each mood entry:                         │
│ - find mood name in the filtered array       │
│ - increase that mood’s count by 1            │
└───────────────────────┬──────────────────────┘
                        │
                        ▼
┌──────────────────────────────────────────────┐
│ Convert the count object into an array       │
│ Get all mood names (Object.keys)             │
└───────────────────────┬──────────────────────┘
                        │
                        ▼
┌──────────────────────────────────────────────┐
│ Build the final Mood Balance array (map)     │
│ For each mood name:                          │
│ - get its count value                        │
│ - calculate percentage out of total moods    │
│ - return: mood name, count value, % value    │
└───────────────────────┬──────────────────────┘
                        │
                        ▼
┌──────────────────────────────────────────────┐
│ Render Mood Balance UI                       │
│ - pass final array to the balance bar        │
│ - render mood items list from the same array │
└──────────────────────────────────────────────┘
///
```
