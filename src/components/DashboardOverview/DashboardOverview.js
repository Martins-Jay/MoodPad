import Tabs from '../Tabs/Tabs';
import DashboardTab from '../DashboardTab/DashboardTab';

import './dashboardOverview.css';

function DashboardOverview({
  moodsArr,
  activeTab,
  setActiveTab,
  isRecommendationPanelOpen,
  setIsRecommendationPanelOpen,
}) {
  return (
    <div className="dashboard-overview-container">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === 'dashboard' && (
        <DashboardTab
          moodsArr={moodsArr}
          isRecommendationPanelOpen={isRecommendationPanelOpen}
          setIsRecommendationPanelOpen={setIsRecommendationPanelOpen}
        />
      )}

      {activeTab === 'history' && (
        <DashboardTab
          moodsArr={moodsArr}
          isRecommendationPanelOpen={isRecommendationPanelOpen}
          setIsRecommendationPanelOpen={setIsRecommendationPanelOpen}
        />
      )}


    </div>
  );
}

export default DashboardOverview;
