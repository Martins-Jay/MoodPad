```
Start
  |
  v
Receive moodsArr (array of mood objects with timestamps) via props
  |
  v
Convert moodsArr → array of formatted date strings (YYYY-MM-DD) using .map()
  |
  v
Create uniqueDatesSet using Set() (removes duplicate dates) using .set()
  |
  v
Define getStreakStartDay(uniqueDatesSet), which checks:
  |
  v
+---------------------------+
| Has the user logged today? |
+---------------------------+
  | Yes → return 0 (streak starts today, include today)
  |
  | No → No problem, allowe but check the most important i.e. yesterday
  v
+---------------------------+
| Has the user logged yesterday? |
+---------------------------+
  | Yes → return 1 (streak starts yesterday, most important day)
  |
  | No → return null (streak broken, consistency failed)
  |
  v
Use returned startDay to calculate streak:
  |---- 0 ---→ start counting from today
  |---- 1 ---→ start counting from yesterday
  |---- null → stop (no streak)
  |
  v
Initialize streakCount = 0
daysAgo = startDay
  |
  v
Loop (while consecutive days exist in uniqueDatesSet):
  |
  v
Create dateToCheck = today - daysAgo
  |
  v
Format dateToCheck as YYYY-MM-DD
  |
  v
Is dateToCheck in uniqueDatesSet?
  | Yes → streakCount++ ; daysAgo++ (move to previous day)
  | No → stop loop (consistency broken)
  |
  v
Return streakCount
  |
  v
End
```

### Streak implementation — clear & intentional flow

1. Receive the data (brief)
   We start with moodsArr, which contains all mood entries.
   Each entry has a timestamp representing when the mood object was created.

2. Format the dates (brief)
   Timestamps include time, but for streaks, we only need date.

   So we:
   Convert each timestamp into a date-only format (YYYY-MM-DD)
   This ensures all moods logged on the same day are treated as one day

3. Remove duplicate days
   A user can log multiple moods in one day, but we only need to take note of the date once.

   So we:
   Store the formatted dates in a Set
   This automatically removes duplicates
   Now we have uniqueDatesSet, which represents all days the user checked in.

4. Check consistency (IMPORTANT)
   At this point, uniqueDatesSet may contain many dates, but we do not evaluate all of them.
   We only care about two specific days:

   -----> Today → optional
   -----> Yesterday → mandatory

   Why today is optional
   Today is an ongoing day.
   The user still has time to log a mood.

   So:
   If today exists → great, streak can start today
   If today does not exist → no penalty, move on
   Execution does not stop here.

   Why yesterday is mandatory
   Yesterday is a completed day.
   Once it ends without a mood log, consistency has already failed.

   So:
   If yesterday exists → streak is still valid
   If yesterday does not exist → streak is broken

   At this point:
   We stop further execution
   Streak count is 0
   User is shown the “Start your streak” state


5. Count consecutive days 
  If consistency is valid:
  We start counting from the most recent valid day (today or yesterday)
  We move backwards one day at a time
  We stop counting as soon as a day is missing
  The total count is the current streak.

6. Final result
  If yesterday was missing → streak = 0
  Otherwise → streak equals number of consecutive logged days
  This value is derived, not stored.
