import TopNav from '../../TopNav/TopNav';
import DashboardHeader from '../../Reflection/DashboardHeader/DashboardHeader';

import './header.css';

function Header() {
  return (
    <div className="header-wrapper">
      <TopNav />
      <DashboardHeader />
    </div>
  );
}

export default Header;
