import moodColors from '../../../SharedConstants/moodColors';

function MoodBalanceBar({ moodBalanceArr }) {
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
