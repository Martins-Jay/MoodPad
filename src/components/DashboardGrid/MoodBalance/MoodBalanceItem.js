function MoodBalanceItem({ balObj }) {
  const moodColors = {
    Happy: 'var(--grad-happy)',
    Calm: 'var(--grad-calm)',
    Neutral: 'var(--grad-neutral)',
    Sad: 'var(--grad-sad)',
    Anxious: 'var(--grad-anxious)',
    Angry: 'var(--grad-angry)',
  };

  return (
    <div className="mood-balance-item">
      <span
        className="mood-balance-item__indicator"
        style={{
          background: moodColors[balObj.moodName] || 'transparent',
          width: '0.8rem',
          height: '0.8rem',
        }}
      ></span>
      <span className="mood-balance-item__name">{balObj.moodName}</span>
      <span className="mood-balance-item__pct">{balObj.percentVal}%</span>
    </div>
  );
}

export default MoodBalanceItem;
