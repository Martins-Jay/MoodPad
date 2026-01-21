import './dashboardGrid.css';

function DashboardGrid({ moodsArr = [] }) {
  const todayDateStr = new Date().toDateString(); // Str sample: Wed Jan 21 2026

  const moodsCreatedToday = moodsArr.filter((moodObj) => {
    const dateStr = new Date(moodObj.isoDate).toDateString(); // Str sample: Wed Jan 21 2026

    return dateStr === todayDateStr; // we only want array of objects with date === today's date
  });

  const MOODS = ['Happy', 'Calm', 'Neutral', 'Sad', 'Anxious', 'Angry'];

  const count = MOODS.reduce((acc, moodName) => {
    
  })



  // if (moodsCreatedToday.length === 0) {
  //   return (
  //     <section className="mood-bal-empty-container">
  //       <div className="mood-bal-empty">
  //         <p className="mood-empty-title">No moods yet</p>
  //         <p className="mood-empty-sub">
  //           Pick a mood above to unlock today’s balance and insights.
  //         </p>
  //       </div>
  //     </section>
  //   );
  // }

  return (
    <section className="mood-balance-container">
      <div className="mood-balance-card">
        <h4 className="card-title">Mood Balance</h4>
      </div>
    </section>
  );
}

export default DashboardGrid;
