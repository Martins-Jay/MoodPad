import './dashboardGrid.css';
import MoodBalance from './MoodBalance/MoodBalance';

function DashboardGrid({ moodsArr = [] }) {
  return (
    <section className="dashboard-grid">
      <MoodBalance moodsArr={moodsArr} />
    </section>
  );
}

export default DashboardGrid;
