import { getMoodBalanceForToday } from '../../utils/getMoodBalanceForToday';

import './dashboardGrid.css';
import MoodBalance from './MoodBalance/MoodBalance';
import MoodInsight from './MoodInsight/MoodInsight';
import StreakCard from './StreakCard/StreakCard';

function DashboardGrid({ moodsArr }) {
  const { moodBalanceArr, moodsCreatedToday } =
    getMoodBalanceForToday(moodsArr);

  console.log(moodsCreatedToday);

  return (
    <section className="dashboard-grid">
      <MoodBalance
        moodsArr={moodsArr}
        moodBalanceArr={moodBalanceArr}
        moodsCreatedToday={moodsCreatedToday}
      />

      <StreakCard moodsArr={moodsArr} />

      <div className="dashboard-grid-full">
        <MoodInsight moodsArr={moodsArr} moodsCreatedToday={moodsCreatedToday} />
      </div>
    </section>
  );
}

export default DashboardGrid;
