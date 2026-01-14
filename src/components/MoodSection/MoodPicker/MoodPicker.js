import MoodIcon from '../MoodIcon/MoodIcon';

import './moodPicker.css';

const iconArr = [
  { iconName: 'scared', name: 'Scared', color: '#867676' },
  { iconName: 'tired', name: 'Tired', color: '#0c0c09' },
  { iconName: 'happy', name: 'Happy', color: '#0cea10' },
  { iconName: 'sad', name: 'Sad', color: '#df0070' },
  { iconName: 'sick', name: 'Sick', color: '#e78e08' },
  { iconName: 'angry', name: 'Angry', color: '#fc0000' },
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
