import SunIcon from '../../../assets/icons/MoonIcon';
import SmilingIcon from '../../../assets/icons/SmilingIcon';
import SubmitIcon from '../../../assets/icons/SubmitIcon';

import './header.css';

function Header() {
  return (
    <div className="header-wrapper">
      <div className="top-nav-container">
        <div className="nav-mood-icon">
          <SmilingIcon size={40} />
        </div>

        <div>
          <SunIcon size={28} />
        </div>
      </div>

      <div className="welcome-wrapper">
        <h1>Daily reflection</h1>

        <div className="greetings-wrapper">
          <h2>Hello, Martins</h2>
          <h2>
            How do you feel about your <span>current emotions?</span>
          </h2>
        </div>

        <div className="reflection-input-wrapper">
          <input type="text" placeholder="Your reflection..." />

          <div className="submit-btn">
            <SubmitIcon size={28} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
