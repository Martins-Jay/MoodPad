import Tabs from '../Tabs/Tabs';
import DashboardTab from '../DashboardTab/DashboardTab';

import './dashboardOverview.css';

function DashboardOverview({ moodsArr, activeTab }) {
  return (
    <div className="dashboard-overview-container">
      <Tabs activeTab={activeTab} />

      <DashboardTab moodsArr={moodsArr} />
    </div>
  );
}

export default DashboardOverview;

//  {activeTab === "dashboard" && (
//     <DashboardOverview>
//       <TodayAtAGlance />
//       <DashboardGrid />
//       <RecentReflections />
//     </DashboardOverview>
//   )}

//   {activeTab === "history" && <HistorySection />}
//   {activeTab === "insights" && <InsightsSection />}
