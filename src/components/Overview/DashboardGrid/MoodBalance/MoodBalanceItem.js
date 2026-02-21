import moodColors from '../../../SharedConstants/moodColors';

function MoodBalanceItem({ balObj }) {
  return (
    <div className="mood-balance-item">
      <div className="mood-balance-group-1">
        <span
          className="mood-balance-item__indicator"
          style={{
            background: moodColors[balObj.moodName] || 'transparent',
            width: '0.8rem',
            height: '0.8rem',
          }}
        ></span>
        <span className="mood-balance-item__name">{balObj.moodName}</span>
      </div>

      <div className="mood-balance-group-2">
        <span
          className={`mood-balance-item__pct ${balObj.percentVal === 0 ? 'dull' : ''}`}
        >
          {balObj.percentVal}%
        </span>
      </div>
    </div>
  );
}

export default MoodBalanceItem;
