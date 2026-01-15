import SmilingIcon from '../../assets/icons/HappyIcon';
import SunIcon from '../../assets/icons/MoonIcon';
import './topNav.css';

function TopNav() {
  return (
    <div className="top-nav-container">
      <div className="nav-mood-icon">
        <SmilingIcon size={30} />
      </div>

      <div>
        <SunIcon size={25} />
      </div>
    </div>
  );
}

export default TopNav;
