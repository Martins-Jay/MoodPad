import Lock from '../../../assets/icons/lock';
import MoodBalanceBar from './MoodBalanceBar';
import MoodBalanceItem from './MoodBalanceItem';

function MoodBalance({ moodsAr, moodBalanceArr, moodsCreatedToday }) {
  if (moodsCreatedToday.length === 0) {
    return (
      <div className="mood-bal-empty-container">
        <div className="mood-bal-empty">
          <p className="mood-empty-title">No moods yet</p>
          <p className="mood-empty-sub">
            Pick a mood above to unlock today’s balance and insights.
          </p>

          <div className="mood-lock-svg">
            <Lock size={25} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mood-balance-container">
      <div className="mood-balance-card">
        <h4 className="card-title">Mood Balance</h4>

        <MoodBalanceBar moodBalanceArr={moodBalanceArr} />

        <div className="mood-bal-wrap">
          {moodBalanceArr.map((balObj) => (
            <MoodBalanceItem key={balObj.moodName} balObj={balObj} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MoodBalance;
