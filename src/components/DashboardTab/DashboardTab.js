import DashboardGrid from '../DashboardGrid/DashboardGrid';
import TodayAtAGlance from '../TodayAtAGlance/TodayAtAGlance';

import './dashboardTab.css';

function DashboardTab({ moodsArr, isRecommendationPanelOpen, setIsRecommendationPanelOpen }) {
  return (
    <div className="dashboard-tab-container">
      <TodayAtAGlance />

      <DashboardGrid
        moodsArr={moodsArr}
        isRecommendationPanelOpen={isRecommendationPanelOpen}
        setIsRecommendationPanelOpen={setIsRecommendationPanelOpen}
      />
    </div>
  );
}



export default DashboardTab;
