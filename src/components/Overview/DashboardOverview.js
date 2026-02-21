import Tabs from '../Tabs/Tabs';
import DashboardHistory from './DashboardHistory/DashboardHistory';
import ReadMorePanel from './DashboardHistory/ReadMorePanel/ReadMorePanel';
import DashboardTab from './DashboardTab/DashboardTab';

import './dashboardOverview.css';

function DashboardOverview({
  moodsArr,
  activeTab,
  setActiveTab,
  onSaveNote,
  onRemoveNote,
  onEditMood,
  isRecommendationPanelOpen,
  setIsRecommendationPanelOpen,
  activeReadMore,
  onReadMore,
}) {
  // console.log(activeReadMore);
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

      {activeTab === 'history' && !activeReadMore && (
        <DashboardHistory
          moodsArr={moodsArr}
          onSaveNote={onSaveNote}
          onRemoveNote={onRemoveNote}
          onEditMood={onEditMood}
          activeReadMore={activeReadMore}
          onReadMore={onReadMore}
        />
      )}

      {activeTab === 'history' && activeReadMore ? (
        <ReadMorePanel activeReadMore={activeReadMore} />
      ) : (
        ''
      )}
    </div>
  );
}

export default DashboardOverview;
