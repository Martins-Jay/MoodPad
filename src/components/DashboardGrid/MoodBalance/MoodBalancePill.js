function MoodBalancePill({ balObj }) {
  return (
    <div className="mood-pill">
      <span className="mood-pill-name">{balObj.moodName}</span>
      <span className="mood-pill-pct">{balObj.percentVal}%</span>
    </div>
  );
}

export default MoodBalancePill;
