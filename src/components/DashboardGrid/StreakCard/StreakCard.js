import './streakCard.css';
import { useMoodStreak } from '../../../hooks/useMoodStreak';
import Lock from '../../../assets/icons/lock';

function StreakCard({ moodsArr }) {
  const {
    getLast7DayCheckIns,
    uniqueDatesSet,
    calculateStreak,
    dayDiff,
    isCheckedInToday,
  } = useMoodStreak(moodsArr);

  console.log(isCheckedInToday);

  const streakValue = calculateStreak(uniqueDatesSet);

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

  if (streakValue === 0 && moodsArr.length === 0) {
    // Brand new user
    return (
      <div className="zero-streak-container">
        <div className="zero-streak">
          <div className="zero-streak-title">Start your streak</div>
          <div className="zero-streak-sub">
            Log your first mood to begin building a daily check-in habit.
          </div>

          <div className="streak-lock-svg">
            <Lock size={25} />
          </div>
        </div>
      </div>
    );
  }

  if (streakValue === 0 && moodsArr.length > 0) {
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

  if (streakValue !== 0 && moodsArr.length > 0) {
    return (
      <div className="streak-active-container">
        <div className="streak-active">
          <div className="streak-active-title">Current Streak</div>
          <div className="streak-active-sub">
            {streakValue}
            <span className="added-text-bold">
              -
              {streakValue === 1
                ? 'day 🔥🔥🔥'
                : streakValue >= 100
                  ? 'days'
                  : streakValue <= 9
                    ? 'days 🔥🔥'
                    : streakValue > 9
                      ? 'days 🔥'
                      : ''}
            </span>
          </div>

          <div className="checkin-progress-list">{renderCheckInList()}</div>

          <div className="success-notice">
            {isCheckedInToday.length > 0 ? 'Streak extended!' : ''}
          </div>

          <div className="missed-notice">
            No record for the past {dayDiff} {dayDiff === 1 ? 'day' : 'days'}
          </div>
        </div>
      </div>
    );
  }
}

export default StreakCard;
