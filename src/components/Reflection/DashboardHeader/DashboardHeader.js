import './dashboardHeader.css';
import ClockIcon from '../../../assets/icons/Clock';

function DashboardHeader() {
  return (
    <>
      <div className="dashboard-content-wrapper">
        <h1 className="greetings">Good evening, Martins</h1>

        <div className='description-wrapper'>
          <p>You've logged 3 moods today.</p>
          <div className="date-wrapper">
            <div className="clock-icon">
              <ClockIcon size={14} />
            </div>

            <p className="date-container">Today: Jan 16th, 2026.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardHeader;
