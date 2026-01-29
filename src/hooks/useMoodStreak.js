export function useMoodStreak(moodsArr) {
  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0'); // padStart ensures day is 2 digits, adds leading 0 if needed
    const month = String(date.getMonth() + 1).padStart(2, '0'); // padStart ensures month is 2 digits, adds leading 0 if needed
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
  }

  const dateStrings = moodsArr.map((moodObj) => {
    const dateCreated = new Date(moodObj.timestamp);

    return formatDate(dateCreated);
  });

  const uniqueDatesSet = new Set(dateStrings);

  function getTodayDateString() {
    const todayDate = new Date();

    return formatDate(todayDate);
  }

  function getYesterdayDateString() {
    const todayDate = new Date();
    const todayDayValue = todayDate.getDate(); // e.g. 26
    const yesterdayDayValue = todayDayValue - 1; // e.g. 25

    const yesterdayDate = new Date(todayDate); // clone of todayDate since objects are mutable
    yesterdayDate.setDate(yesterdayDayValue); // Update the date to yesterday

    return formatDate(yesterdayDate);
  }

  // Returns the number of days ago the streak started, relative to today
  function getStreakStartDay(uniqueDatesSet) {
    const todayDate = getTodayDateString();
    const yesterdayDate = getYesterdayDateString();

    if (uniqueDatesSet?.has(todayDate)) return 0; // today
    if (uniqueDatesSet?.has(yesterdayDate)) return 1; // yesterday

    return null;
  }

  function calculateStreak(uniqueDatesSet) {
    // Get how many days ago the current streak started -->> 0 = today, 1 = yesterday
    const streakStartDaysAgo = getStreakStartDay(uniqueDatesSet);
    if (streakStartDaysAgo === null) return 0;

    // Initialize streak count
    let streakCount = 0;

    // Initialize how many days ago we are checking -----> daysAgoValue === 0 || 1
    let daysAgoCounter = streakStartDaysAgo;

    const todayDate = new Date(); // get todays date

    while (true) {
      const dateToCheck = new Date(todayDate);
      const dayDiff = todayDate.getDate() - daysAgoCounter;
      dateToCheck.setDate(dayDiff);

      const formattedDate = formatDate(dateToCheck);

      if (uniqueDatesSet.has(formattedDate)) {
        streakCount++;
        daysAgoCounter++;
      } else {
        break;
      }
    }

    return streakCount;
  }

  function getLast7Days() {
    return Array.from({ length: 7 }, (_, index) => {
      const today = new Date(); // today's full date object
      const todayDayValue = today.getDate(); // e.g. 27

      const daysAgoValue = 6 - index; // starts from 6 days ago → today

      const dayToGenerate = todayDayValue - daysAgoValue; // get actual day number we want

      // create the date we want to generate
      const dateToGenerate = new Date(today); // clone today
      dateToGenerate.setDate(dayToGenerate);

      return formatDate(dateToGenerate);
    });
  }

  function getLast7DayCheckIns(uniqueDatesSet) {
    const last7DaysArr = getLast7Days();

    return last7DaysArr.map((dateStr) => {
      return {
        dateStr, // "2026-01-27"
        checked: uniqueDatesSet.has(dateStr), // true/false
      };
    });
  }

  const dayDiff = getLast7DayCheckIns(uniqueDatesSet).filter(
    (dateObj) => !dateObj.checked,
  ).length;

  const isCheckedInToday = getLast7DayCheckIns(uniqueDatesSet).filter(dateObj => dateObj.checked)

  return { getLast7DayCheckIns, uniqueDatesSet, calculateStreak, dayDiff, isCheckedInToday };
}
