import Tabs from '../Tabs/Tabs';
import DashboardTab from '../DashboardTab/DashboardTab';

import './dashboardOverview.css';

function DashboardOverview({
  moodsArr,
  activeTab,
  isRecommendationPanelOpen,
  setIsRecommendationPanelOpen,
}) {
  return (
    <div className="dashboard-overview-container">
      <Tabs activeTab={activeTab} />

      <DashboardTab
        moodsArr={moodsArr}
        isRecommendationPanelOpen={isRecommendationPanelOpen}
        setIsRecommendationPanelOpen={setIsRecommendationPanelOpen}
      />
    </div>
  );
}

export default DashboardOverview;
