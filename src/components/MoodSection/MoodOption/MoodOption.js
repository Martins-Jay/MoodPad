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

function MoodOption({ moodObj, onPickMood, onMoodSelect }) {
  return (
    <li className="mood-option-wrapper">
      <div
        className="mood-svg-icon"
        style={{ background: moodObj.colorGradient }}
        onClick={() => onMoodSelect(moodObj)}
      >
        {icons[moodObj.iconName]}
      </div>

      <div className="mood-name">{moodObj?.name}</div>
    </li>
  );
}

export default MoodOption;

