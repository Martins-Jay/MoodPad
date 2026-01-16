import MoodOption from '../MoodOption/MoodOption';

import './moodPicker.css';

const iconArr = [
  {
    idNum: 1,
    iconName: 'smile',
    name: 'Happy',
    color: '#dca900',
    colorGradient: 'var(--grad-happy)',
    cardColorGradient: 'var(--grad-happy-fade)',
  },
  {
    idNum: 2,
    iconName: 'leaf',
    name: 'Calm',
    color: '#16c054',
    colorGradient: 'var(--grad-calm)',
    cardColorGradient: 'var(--grad-calm-fade)',
  },
  {
    idNum: 3,
    iconName: 'neutral',
    name: 'Neutral',
    color: '#7c828b',
    colorGradient: 'var(--grad-neutral)',
    cardColorGradient: 'var(--grad-neutral-fade)',
  },
  {
    idNum: 4,
    iconName: 'sad',
    name: 'Sad',
    color: '#186fd2',
    colorGradient: 'var(--grad-sad)',
    cardColorGradient: 'var(--grad-sad-fade)',
  },
  {
    idNum: 5,
    iconName: 'anxious',
    name: 'Anxious',
    color: '#7b67cb',
    colorGradient: 'var(--grad-anxious)',
    cardColorGradient: 'var(--grad-anxious-fade)',
  },
  {
    idNum: 6,
    iconName: 'angry',
    name: 'Angry',
    color: '#e71919',
    colorGradient: 'var(--grad-angry)',
    cardColorGradient: 'var(--grad-angry-fade)',
  },
];

function MoodPicker({ onPickMood, onMoodSelect }) {
  return (
    <div className="mood-List-container">
      <ul className="mood-icons-container">
        {iconArr.map((iconObj) => (
          <MoodOption
            key={iconObj.idNum}
            iconObj={iconObj}
            onPickMood={onPickMood}
            onMoodSelect={onMoodSelect}
          />
        ))}
      </ul>
    </div>
  );
}

export default MoodPicker;
