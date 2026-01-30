import { getMoodBalanceForToday } from '../../utils/moodUtils';

import './dashboardGrid.css';
import MoodBalance from './MoodBalance/MoodBalance';
import MoodInsight from './MoodInsight/MoodInsight';
import StreakCard from './StreakCard/StreakCard';

function DashboardGrid({ moodsArr }) {
  const { moodBalanceArr, moodsCreatedToday } =
    getMoodBalanceForToday(moodsArr);

  return (
    <section className="dashboard-grid">
      <MoodBalance
        moodsArr={moodsArr}
        moodBalanceArr={moodBalanceArr}
        moodsCreatedToday={moodsCreatedToday}
      />

      <StreakCard moodsArr={moodsArr} />

      <div className="dashboard-grid-full">
        <MoodInsight moodsArr={moodsArr} moodsCreatedToday={moodsCreatedToday} moodBalanceArr={moodBalanceArr} />
      </div>
    </section>
  );
}

export default DashboardGrid;
