import MoodBalanceBar from './MoodBalanceBar';
import MoodBalancePill from './MoodBalancePill';

function MoodBalance({ moodsArr }) {
  const todayDateStr = new Date().toDateString(); // Str sample: Wed Jan 21 2026

  const moodsCreatedToday = moodsArr.filter((moodObj) => {
    if (!moodObj.isoDate) return false;

    const dateStr = new Date(moodObj.isoDate).toDateString(); // Str sample: Wed Jan 21 2026

    return dateStr === todayDateStr; // we only want array of objects with date === today's date
  });

  if (moodsCreatedToday.length === 0) {
    return (
      <section className="mood-bal-empty-container">
        <div className="mood-bal-empty">
          <p className="mood-empty-title">No moods yet</p>
          <p className="mood-empty-sub">
            Pick a mood above to unlock today’s balance and insights.
          </p>
        </div>
      </section>
    );
  }

  const counts = {
    Happy: 0,
    Calm: 0,
    Neutral: 0,
    Sad: 0,
    Anxious: 0,
    Angry: 0,
  };

  // update counts based on what we have in moodsCreatedToday
  moodsCreatedToday.forEach((moodObj) => {
    if (counts[moodObj.name] !== undefined) {
      counts[moodObj.name] += 1;
    }
  });

  const moodBalanceArr = Object.keys(counts).map((moodName) => {
    const countVal = counts[moodName];
    const lengthOfFilteredArr = moodsCreatedToday.length;

    const percentVal =
      lengthOfFilteredArr === 0
        ? 0
        : Math.round((countVal / lengthOfFilteredArr) * 100);

    return { moodName, countVal, percentVal };
  });

  return (
    <section className="mood-balance-container">
      <div className="mood-balance-card">
        <h4 className="card-title">Mood Balance</h4>

        <MoodBalanceBar moodBalanceArr={moodBalanceArr} />

        <div className="mood-pill-wrap">
          {moodBalanceArr.map((balObj) => (
            <MoodBalancePill key={balObj.moodName} balObj={balObj} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MoodBalance;
