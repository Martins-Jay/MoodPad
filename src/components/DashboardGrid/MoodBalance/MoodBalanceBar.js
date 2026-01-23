function MoodBalanceBar({ moodBalanceArr }) {
  const moodColors = {
    Happy: 'var(--grad-happy)',
    Calm: 'var(--grad-calm)',
    Neutral: 'var(--grad-neutral)',
    Sad: 'var(--grad-sad)',
    Anxious: 'var(--grad-anxious)',
    Angry: 'var(--grad-angry)',
  };

  return (
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
  );
}

export default MoodBalanceBar;
