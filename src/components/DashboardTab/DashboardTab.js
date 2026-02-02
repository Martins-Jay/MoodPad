import DashboardGrid from '../DashboardGrid/DashboardGrid';
import TodayAtAGlance from '../TodayAtAGlance/TodayAtAGlance';

import './dashboardTab.css';

function DashboardTab({ moodsArr, isRecomendationPanelOpen, setIsRecomendationPanelOpen }) {
  return (
    <div className="dashboard-tab-container">
      <TodayAtAGlance />

      <DashboardGrid
        moodsArr={moodsArr}
        isRecomendationPanelOpen={isRecomendationPanelOpen}
        setIsRecomendationPanelOpen={setIsRecomendationPanelOpen}
      />
    </div>
  );
}



export default DashboardTab;
