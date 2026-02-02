import Tabs from '../Tabs/Tabs';
import DashboardTab from '../DashboardTab/DashboardTab';

import './dashboardOverview.css';

function DashboardOverview({
  moodsArr,
  activeTab,
  isRecomendationPanelOpen,
  setIsRecomendationPanelOpen,
}) {
  return (
    <div className="dashboard-overview-container">
      <Tabs activeTab={activeTab} />

      <DashboardTab
        moodsArr={moodsArr}
        isRecomendationPanelOpen={isRecomendationPanelOpen}
        setIsRecomendationPanelOpen={setIsRecomendationPanelOpen}
      />
    </div>
  );
}

export default DashboardOverview;
