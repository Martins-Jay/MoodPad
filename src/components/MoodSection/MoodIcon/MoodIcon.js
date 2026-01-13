import HappyIcon from '../../../assets/icons/HappyIcon';
import SadIcon from '../../../assets/icons/SadIcon';
import AngryIcon from '../../../assets/icons/Angry';
import TiredIcon from '../../../assets/icons/Tired';
import SickIcon from '../../../assets/icons/Sick';
import ScaredIcon from '../../../assets/icons/Scared';

const icons = {
  scared: <ScaredIcon size={60} />,
  happy: <HappyIcon size={60} />,
  sad: <SadIcon size={60} />,
  tired: <TiredIcon size={60} />,
  sick: <SickIcon size={60} />,
  angry: <AngryIcon size={60} />,
};

function MoodIcon({ iconObj, onPickMood }) {
  function handleClick() {
    if (!onPickMood) return;
    onPickMood(iconObj);
  }

  return (
    <div className="mood-item-wrapper">
      <div className="mood-svg-icon" onClick={handleClick}>
        {icons[iconObj.iconName]}
      </div>
    </div>
  );
}

export default MoodIcon;
