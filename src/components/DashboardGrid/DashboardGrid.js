import './dashboardGrid.css';

function DashboardGrid({ moodsArr = [] }) {
  const todayDateStr = new Date().toDateString(); // Str sample: Wed Jan 21 2026
  console.log(todayDateStr);

  const moodsCreatedToday = moodsArr.filter((moodObj) => {
    const dateStr = new Date(moodObj.isoDate).toDateString(); // Str sample: Wed Jan 21 2026

    return dateStr === todayDateStr; // we only want array of objects with date === today's date
  });

  if (moodsCreatedToday.length === 0) {
    return (
      <section className="mood-bal-container">
        <div className="mood-bal-empty">
          <p className="mood-empty-title">No moods yet</p>
          <p className="mood-empty-sub">
            Pick a mood above to unlock today’s balance and insights.
          </p>
        </div>
      </section>
    );
  }
}

export default DashboardGrid;
