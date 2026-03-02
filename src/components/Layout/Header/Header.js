import DashboardHeader from './DashboardHeader/DashboardHeader';

import './header.css';

function Header({ moodsArr }) {
  return (
    <div className="header-wrapper">
      <div className="logo-container">
        MoodPad
      </div>

      <DashboardHeader moodsArr={moodsArr} />
    </div>
  );
}

export default Header;
