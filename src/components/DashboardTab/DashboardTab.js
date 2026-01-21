import DashboardGrid from '../DashboardGrid/DashboardGrid';
import TodayAtAGlance from '../TodayAtAGlance/TodayAtAGlance';

function DashboardTab({ moodsArr }) {
  return (
    <>
      <TodayAtAGlance />

      <DashboardGrid moodsArr={moodsArr} />
    </>
  );
}

export default DashboardTab;
