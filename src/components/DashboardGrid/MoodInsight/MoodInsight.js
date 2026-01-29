import Lock from '../../../assets/icons/lock';
import './moodInsight.css';

function MoodInsight({ moodsArr, moodsCreatedToday, aiMessage }) {
  function getInsightState(moodsArr, moodsCreatedToday) {
    if (moodsArr.length === 0) return 'new';
    if (moodsCreatedToday.length === 0) return 'noneToday';
    return 'hasData';
  }

  const state = getInsightState(moodsArr, moodsCreatedToday);

  // Shared layout wrapper
  function EmptyCard({ text }) {
    return (
      <div className="mood-empty-insight-card">
        <div className="empty-insight-container">
          <h4 className="card-title">AI Insight</h4>

          <p className="mood-insight-text">{text}</p>

          <div className="streak-lock-svg">
            <Lock size={25} />
          </div>
        </div>
      </div>
    );
  }

  // New user
  if (state === 'new') {
    return (
      <EmptyCard text="Start tracking your mood to unlock personalized insights." />
    );
  }

  // No mood today
  if (state === 'noneToday') {
    return (
      <EmptyCard text="No mood logged today. Check in to unlock insights." />
    );
  }

  // Has data (show AI)
  if (state === 'hasData') {
    return (
      <div className="mood-insight-card">
        <h4 className="card-title">AI Insight</h4>

        <p className="mood-insight-text">
          {aiMessage || 'Analyzing your mood...'}
        </p>
      </div>
    );
  }

  return null;
}

export default MoodInsight;
