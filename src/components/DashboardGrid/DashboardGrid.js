import Cancel from '../../assets/icons/Cancel';
import { getMoodBalanceForToday } from '../../utils/moodUtils';

import './dashboardGrid.css';
import MoodBalance from './MoodBalance/MoodBalance';
import MoodInsight from './MoodInsight/MoodInsight';
import StreakCard from './StreakCard/StreakCard';

function DashboardGrid({ moodsArr, isRecomendationPanelOpen, setIsRecomendationPanelOpen }) {
  const { moodBalanceArr, moodsCreatedToday } =
    getMoodBalanceForToday(moodsArr);

  return (
    <section className="dashboard-grid">
      <MoodBalance
        moodsArr={moodsArr}
        moodBalanceArr={moodBalanceArr}
        moodsCreatedToday={moodsCreatedToday}
      />

      <StreakCard moodsArr={moodsArr} />

      <div className="dashboard-grid-full">
        <MoodInsight
          moodsArr={moodsArr}
          moodsCreatedToday={moodsCreatedToday}
          moodBalanceArr={moodBalanceArr}
          isRecomendationPanelOpen={isRecomendationPanelOpen}
          setIsRecomendationPanelOpen={setIsRecomendationPanelOpen}
        />
      </div>

      <InsightPanel
        moodBalanceArr={moodsArr}
        isRecomendationPanelOpen={isRecomendationPanelOpen}
        setIsRecomendationPanelOpen={setIsRecomendationPanelOpen}
      />
    </section>
  );
}

function InsightPanel({ isRecomendationPanelOpen, setIsRecomendationPanelOpen }) {
  return (
    <div className={`insight-panel ${isRecomendationPanelOpen ? 'open' : ''}`}>
      <div className="insight-header">
        <h4>Mood Insight</h4>
      </div>

      <p className="insight-text">{'insightMessage'}</p>

      <button
        className="close-btn"
        onClick={() => setIsRecomendationPanelOpen(!isRecomendationPanelOpen)}
      >
       <Cancel size={17} />
      </button>
    </div>
  );
}

export default DashboardGrid;
