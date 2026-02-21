import Lock from '../../../../assets/icons/lock';

import { generateMoodInsight } from '../../../../utils/moodInsights';
import ArrowUpIcon from '../../../../assets/icons/ArrowUpleft';

import './moodInsight.css';

function MoodInsight({
  moodsArr,
  moodsCreatedToday,
  moodBalanceArr,
  isRecommendationPanelOpen,
  setIsRecommendationPanelOpen,
}) {
  const message = generateMoodInsight(moodBalanceArr);

  function getInsightState(moodsArr, moodsCreatedToday) {
    if (moodsArr.length === 0) return 'new-user';
    if (moodsCreatedToday.length === 0) return 'existing-with-no-mood';
    return 'hasData';
  }

  const state = getInsightState(moodsArr, moodsCreatedToday);

  // Shared layout wrapper
  function EmptyCard({ text }) {
    return (
      <div className="mood-empty-insight-card">
        <div className="empty-insight-container">
          <h4 className="card-title">Mood Insight</h4>

          <p className="mood-insight-text">{text}</p>

          <div className="streak-lock-svg">
            <Lock size={25} />
          </div>
        </div>
      </div>
    );
  }

  // New user
  if (state === 'new-user') {
    return (
      <EmptyCard text="Start tracking your mood to unlock personalized insights." />
    );
  }

  // No mood today
  if (state === 'existing-with-no-mood') {
    return (
      <EmptyCard text="No mood logged today. Check in to unlock insights." />
    );
  }

  // Has data (show AI)
  if (state === 'hasData') {
    return (
      <div className="mood-insight-card">
        <div className="card-content">
          <h4 className="card-title">Mood Insight</h4>

          <div className="mood-insight-text" style={{ width: '96%' }}>
            {message}
          </div>
        </div>

        <div className="card-rec-container">
          <button
            className="recommendation-btn"
            onClick={() =>
              setIsRecommendationPanelOpen(!isRecommendationPanelOpen)
            }
          >
            {<ArrowUpIcon size={15} />}
          </button>
        </div>
      </div>
    );
  }

  return null;
}

export default MoodInsight;
