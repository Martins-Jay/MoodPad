import './dashboardGrid.css';

function DashboardGrid({ moodsArr = [] }) {
  const todayDateStr = new Date().toDateString(); // Str sample: Wed Jan 21 2026

  const moodsCreatedToday = moodsArr.filter((moodObj) => {
    if (!moodObj.isoDate) return false;

    const dateStr = new Date(moodObj.isoDate).toDateString(); // Str sample: Wed Jan 21 2026

    return dateStr === todayDateStr; // we only want array of objects with date === today's date
  });

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

  const moodColors = {
    Happy: 'var(--grad-happy)',
    Calm: 'var(--grad-calm)',
    Neutral: 'var(--grad-neutral)',
    Sad: 'var(--grad-sad)',
    Anxious: 'var(--grad-anxious)',
    Angry: 'var(--grad-angry)',
  };

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

  return (
    <section className="mood-balance-container">
      <div className="mood-balance-card">
        <h4 className="card-title">Mood Balance</h4>

        <div className="mood-balance-bar">
          {moodBalanceArr
            .filter((balObj) => balObj.countVal > 0)
            .map((balObj) => (
              <div
                key={balObj.moodName}
                className="mood-balance-slice"
                style={{
                  flex: balObj.countVal,
                  background: moodColors[balObj.moodName],
                }}
                title={`${balObj.moodName} ${balObj.percentVal}%`}
              />
            ))}
        </div>

        <div className="mood-pill-wrap">
          {moodBalanceArr.map((balObj) => (
            <MoodPill balObj={balObj} key={balObj.moodName} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MoodPill({ balObj }) {
  return (
    <div className="mood-pill">
      <span className="mood-pill-name">{balObj.moodName}</span>
      <span className="mood-pill-pct">{balObj.percentVal}%</span>
    </div>
  );
}

export default DashboardGrid;
