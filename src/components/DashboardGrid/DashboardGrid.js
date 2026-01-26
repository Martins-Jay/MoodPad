import './dashboardGrid.css';
import MoodBalance from './MoodBalance/MoodBalance';
import StreakCard from './StreakCard/StreakCard';

function DashboardGrid({ moodsArr = [] }) {
  return (
    <section className="dashboard-grid">
      <MoodBalance moodsArr={moodsArr} />

      <StreakCard moodsArr={moodsArr} />
    </section>
  );
}

export default DashboardGrid;
