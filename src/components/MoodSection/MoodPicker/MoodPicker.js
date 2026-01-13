import MoodIcon from '../MoodIcon/MoodIcon';

import './moodPicker.css';

const iconArr = [
  { iconName: 'scared', color: '#910303' },
  { iconName: 'tired', color: '#0c0c09' },
  { iconName: 'happy', color: '#0cdfea' },
  { iconName: 'sad', color: '#f11ae7' },
  { iconName: 'sick', color: '#059716' },
  { iconName: 'angry', color: '#fc0000' },
];

function MoodPicker({ onPickMood }) {
  return (
    <div className="mood-List-container">
      {/* <h1 className="content-title">How are you feeling?</h1> */}

      <div className="mood-icons-container">
        {iconArr.map((iconObj) => (
          <MoodIcon
            key={iconObj.iconName}
            iconObj={iconObj}
            onPickMood={onPickMood}
          />
        ))}
      </div>

      <div className="current-mood-container">
        <div className="current-mood">No mood selected</div>
      </div>
    </div>
  );
}

export default MoodPicker;
