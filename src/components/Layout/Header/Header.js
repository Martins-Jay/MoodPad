import TopNav from './TopNav/TopNav';
import DashboardHeader from '../../Overview/DashboardHeader/DashboardHeader';

import './header.css';

function Header({ moodsArr }) {
  return (
    <div className="header-wrapper">
      <TopNav />

      <DashboardHeader moodsArr={moodsArr} />
    </div>
  );
}

export default Header;
