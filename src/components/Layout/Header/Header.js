import TopNav from '../../TopNav/TopNav';
import ReflectionCard from '../../Reflection/ReflectionCard/ReflectionCard';

import './header.css';

function Header() {
  return (
    <div className="header-wrapper">
      <TopNav />

      <ReflectionCard />
    </div>
  );
}

export default Header;
