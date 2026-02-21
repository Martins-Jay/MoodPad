import SmileIcon from '../../assets/icons/SmileIcon';
import './topNav.css';

function TopNav() {
  return (
    <div className="top-nav-container">
      <div className="nav-mood-icon">
        <SmileIcon size={30} />
      </div>
    </div>
  );
}

export default TopNav;
