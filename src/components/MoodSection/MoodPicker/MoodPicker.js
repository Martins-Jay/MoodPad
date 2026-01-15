import MoodIcon from '../MoodIcon/MoodIcon';

import './moodPicker.css';

const iconArr = [
  { iconName: 'smile', name: 'Happy', color: 'var(--grad-happy)' },
  { iconName: 'leaf', name: 'Calm', color: 'var(--grad-calm)' },
  { iconName: 'neutral', name: 'Neutral', color: 'var(--grad-neutral)' },
  { iconName: 'sad', name: 'Sad', color: 'var(--grad-sad)' },
  { iconName: 'anxious', name: 'Anxious', color: 'var(--grad-anxious)' },
  { iconName: 'angry', name: 'Angry', color: 'var(--grad-angry)' },
];

function MoodPicker({ onPickMood }) {
  return (
    <div className="mood-List-container">
      {/* <h1 className="content-title">How are you feeling?</h1> */}

      <ul className="mood-icons-container">
        {iconArr.map((iconObj) => (
          <MoodIcon
            key={iconObj.iconName}
            iconObj={iconObj}
            onPickMood={onPickMood}
          />
        ))}
      </ul>

      <div className="current-mood-container">
        <div className="current-mood">No mood selected</div>
      </div>
    </div>
  );
}

export default MoodPicker;
