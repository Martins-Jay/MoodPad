import './streakCard.css';

function StreakCard({ moodsArr }) {
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

  console.log(dateStrings, uniqueDatesSet, getStreakStartDay(uniqueDatesSet));

  function calculateStreak(uniqueDatesSet) {
    // Get how many days ago the current streak started -->> 0 = today, 1 = yesterday
    const streakStartValue = getStreakStartDay(uniqueDatesSet);
    if (streakStartValue === null) return 0;

    // Initialize streak count
    let streakCount = 0;

    // Initialize how many days ago we are checking -----> daysAgoValue === 0 || 1
    let daysAgoValue = streakStartValue;

    while (true) {
      const today = new Date(); // get today's date
      const todayDayValue = today.getDate(); // get today's day number (1–31)

      // calculate the day number to check by subtracting daysAgoValue
      const dayDifference = todayDayValue - daysAgoValue;

      // create the date we want to check
      const checkDate = new Date(today); // clone today
      checkDate.setDate(dayDifference); // set the correct day

      // format the date to YYYY-MM-DD for comparison
      const formattedDate = formatDate(checkDate);

      // check if the user logged mood on this date
      if (uniqueDatesSet.has(formattedDate)) {
        streakCount++; // increase streak
        daysAgoValue++; // move one more day back
      } else {
        break; // streak ends here
      }
    }

    return streakCount;
  }

  if (getStreakStartDay(uniqueDatesSet) === null) {
    return (
      <div className="zero-streak-container">
        <div className="zero-streak">
          <div className="zero-streak-title">No streak yet</div>
          <div className="zero-streak-sub">
            Your daily streak will appear after your first mood check-in.
          </div>
        </div>
      </div>
    );
  }
  console.log(calculateStreak(uniqueDatesSet));

  const value = calculateStreak(uniqueDatesSet);

  if (getStreakStartDay(uniqueDatesSet) !== null) {
    return (
      <div className="zero-streak-container">
        <div className="zero-streak">
          <div className="zero-streak-title">Streak Added</div>
          <div className="zero-streak-sub">Your current streak: {value}</div>
        </div>
      </div>
    );
  }
}

export default StreakCard;
