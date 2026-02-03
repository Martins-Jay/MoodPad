import { getMoodBalanceForToday } from '../../utils/moodUtils';
import RecommendationPanel from './RecommendationPanel/RecommendationPanel';

import './dashboardGrid.css';
import MoodBalance from './MoodBalance/MoodBalance';
import MoodInsight from './MoodInsight/MoodInsight';
import StreakCard from './StreakCard/StreakCard';

function DashboardGrid({
  moodsArr,
  isRecommendationPanelOpen,
  setIsRecommendationPanelOpen,
}) {
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
          isRecommendationPanelOpen={isRecommendationPanelOpen}
          setIsRecommendationPanelOpen={setIsRecommendationPanelOpen}
        />
      </div>

      <RecommendationPanel
        moodsArr={moodsArr}
        isRecommendationPanelOpen={isRecommendationPanelOpen}
        setIsRecommendationPanelOpen={setIsRecommendationPanelOpen}
      />
    </section>
  );
}

export default DashboardGrid;
