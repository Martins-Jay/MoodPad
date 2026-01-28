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
      const todayDayNumber = todayDate.getDate(); // get today's day number (1–31)

      // calculate the day number to check by subtracting daysAgoValue
      const dayToCheckNumber = todayDayNumber - daysAgoCounter;

      // create the date we want to check
      const dateToCheck = new Date(todayDate); // clone today
      dateToCheck.setDate(dayToCheckNumber); // set the correct day

      // format the date to YYYY-MM-DD for comparison
      const formattedDate = formatDate(dateToCheck);

      // check if the user logged mood on this date
      if (uniqueDatesSet.has(formattedDate)) {
        streakCount++; // increase streak
        daysAgoCounter++; // move one more day back
      } else {
        break; // streak ends here
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
        isToday: dateStr === getTodayDateString(),
      };
    });
  }

  function renderCheckInList() {
    const last7DaysInfo = getLast7DayCheckIns(uniqueDatesSet);

    return (
      <ul className="check-box-list">
        {last7DaysInfo.map((dayObj, i) => (
          <li
            key={dayObj.dateStr}
            className={`checkin-box ${dayObj.checked ? 'checkin-box--filled' : 'checkin-box--empty'}`}
          ></li>
        ))}
      </ul>
    );
  }

  const streakValue = calculateStreak(uniqueDatesSet);

  if (streakValue === 0 && moodsArr.length > 0) {
    // Brand new user
    return (
      <div className="zero-streak-container">
        <div className="zero-streak">
          <div className="zero-streak-title">Start your streak</div>
          <div className="zero-streak-sub">
            Log your first mood to begin building a daily check-in habit.
          </div>
        </div>
      </div>
    );
  }

  if (streakValue === 0 && moodsArr.length === 0) {
    // Returning user, streak not active
    return (
      <div className="no-active-streak-container">
        <div className="inactive-streak">
          <div className="inactive-streak-title">Start fresh today</div>
          <div className="inactive-streak-sub">
            No active streak yet but your daily check-in still counts!
          </div>

          <div className="checkin-progress-list">{renderCheckInList()}</div>
        </div>
      </div>
    );
  }

  const dayDiff = getLast7DayCheckIns(uniqueDatesSet).filter(
    (dayObj) => !dayObj.checked,
  ).length;

  if (calculateStreak(uniqueDatesSet) !== 0) {
    return (
      <div className="streak-active-container">
        <div className="streak-active">
          <div className="streak-active-title">Current Streak</div>
          <div className="streak-active-sub">
            {calculateStreak(uniqueDatesSet)}
            <span className="added-text-bold">
              -
              {calculateStreak(uniqueDatesSet) === 1
                ? 'day 🔥🔥🔥'
                : calculateStreak(uniqueDatesSet) >= 100
                  ? 'days'
                  : calculateStreak(uniqueDatesSet) <= 9
                    ? 'days 🔥🔥'
                    : calculateStreak(uniqueDatesSet) > 9
                      ? 'days 🔥'
                      : ''}
            </span>
          </div>

          <div className="checkin-progress-list">{renderCheckInList()}</div>

          <div className="missed-notice">
            {dayDiff <= 3 ? 'Just ' : ''}
            {dayDiff} {dayDiff === 1 ? 'day' : 'days'} missed
          </div>
        </div>
      </div>
    );
  }
}

export default StreakCard;
