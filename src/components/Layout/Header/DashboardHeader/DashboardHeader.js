import './dashboardHeader.css';
import ClockIcon from '../../../../assets/icons/Clock'
import formatRelativeDate from '../../../../utils/date';


import { useState } from 'react';

function DashboardHeader({ moodsArr }) {
  const [timestamp] = useState(Date.now());

  function getGreeting(timestamp) {
    const hour = new Date(timestamp).getHours();

    if (hour >= 0 && hour < 12) return 'Good morning';
    if (hour >= 12 && hour < 17) return 'Good afternoon';
    return 'Good evening';
  }

  return (
    <div className="dashboard-content-wrapper">
      <h1 className="greetings">{getGreeting(timestamp)}, Martins</h1>

      <div className="description-wrapper">
        <p className='bridge-text'>Take a moment to check in with yourself</p>


        <div className="date-wrapper">
          <div className="clock-icon">
            <ClockIcon size={14} />
          </div>

          <p className="date-container">
            {formatRelativeDate(timestamp)},{' '}
            {formatRelativeDate(timestamp, true)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
