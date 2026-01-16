import SadIcon from '../../../assets/icons/SadIcon';
import AngryIcon from '../../../assets/icons/Angry';
import SmileIcon from '../../../assets/icons/SmileIcon';
import LeafIcon from '../../../assets/icons/LeafIcon';
import NeutralIcon from '../../../assets/icons/NeutralIcon';
import AnxiousIcon from '../../../assets/icons/AnxiousIcon';

import './moodOption.css';

const icons = {
  smile: <SmileIcon size={25} />,
  leaf: <LeafIcon size={25} />,
  sad: <SadIcon size={25} />,
  anxious: <AnxiousIcon size={25} />,
  neutral: <NeutralIcon size={25} />,
  angry: <AngryIcon size={25} />,
};

function MoodOption({ iconObj, onPickMood, onMoodSelect }) {
  return (
    <li className="mood-option-wrapper">
      <div
        className="mood-svg-icon"
        style={{ background: iconObj.colorGradient }}
        onClick={() => onMoodSelect(iconObj)}
      >
        {icons[iconObj.iconName]}
      </div>

      <div className="mood-name">{iconObj?.name}</div>
    </li>
  );
}

export default MoodOption;

// onClick={() => onPickMood(iconObj)}
