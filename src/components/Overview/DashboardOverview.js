import Tabs from '../Tabs/Tabs';
import DashboardHistory from './DashboardHistory/DashboardHistory';
import ReadMorePanel from './DashboardHistory/ReadMorePanel/ReadMorePanel';
import DashboardTab from './DashboardTab/DashboardTab';

import './dashboardOverview.css';

function DashboardOverview({
  moodsArr,
  activeTab,
  setActiveTab,
  onRemoveNote,
  onEditMood,
  isRecommendationPanelOpen,
  setIsRecommendationPanelOpen,
  activeReadMore,
  onReadMore,
  setIsCardEdit,
  setActiveReadMore,
  onHandleCardEdit,
  activefilter,
  setActiveFilter,
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

      {activeTab === 'history' && !activeReadMore && (
        <DashboardHistory
          moodsArr={moodsArr}
          onRemoveNote={onRemoveNote}
          setIsCardEdit={setIsCardEdit}
          onReadMore={onReadMore}
          onHandleCardEdit={onHandleCardEdit}
          activefilter={activefilter}
          setActiveFilter={setActiveFilter}
        />
      )}

      {activeTab === 'history' && activeReadMore ? (
        <ReadMorePanel
          moodsArr={moodsArr}
          activeReadMore={activeReadMore}
          setActiveReadMore={setActiveReadMore}
          onEditMood={onEditMood}
          onRemoveNote={onRemoveNote}
        />
      ) : (
        ''
      )}
    </div>
  );
}

export default DashboardOverview;
