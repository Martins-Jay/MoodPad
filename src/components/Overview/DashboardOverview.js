import Tabs from '../Tabs/Tabs';
import DashboardHistory from './DashboardHistory/DashboardHistory';
import ReadMorePanel from './DashboardHistory/ReadMorePanel/ReadMorePanel';
import DashboardTab from './DashboardTab/DashboardTab';

import HappyManImg from '../../assets/Happy_man_yellow.PNG';

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
  isFullHistoryModalOpen,
  setIsFullHistoryModalOpen,
}) {
  return (
    <div className="overview-section">
      <div className="overview-left-container">
        <div className="img-container">
          <img src={HappyManImg} alt="" className="happy-man-img" />
        </div>
      </div>

      <div className="left-container-text">
        See your <br /> patterns <br /> at a glance 
      </div>

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
            isFullHistoryModalOpen={isFullHistoryModalOpen}
            setIsFullHistoryModalOpen={setIsFullHistoryModalOpen}
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
    </div>
  );
}

export default DashboardOverview;
