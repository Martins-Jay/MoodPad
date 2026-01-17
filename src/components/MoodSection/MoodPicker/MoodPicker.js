import MoodOption from '../MoodOption/MoodOption';

import './moodPicker.css';

const iconArr = [
  {
    idNum: 1,
    iconName: 'smile',
    name: 'Happy',
    color: 'var(--mood-happy)',
    colorGradient: 'var(--grad-happy)',
    cardColorGradient: 'var(--grad-happy-fade)',
  },
  {
    idNum: 2,
    iconName: 'leaf',
    name: 'Calm',
    color: 'var(--mood-calm)',
    colorGradient: 'var(--grad-calm)',
    cardColorGradient: 'var(--grad-calm-fade)',
  },
  {
    idNum: 3,
    iconName: 'neutral',
    name: 'Neutral',
    color: 'var(--mood-neutral)',
    colorGradient: 'var(--grad-neutral)',
    cardColorGradient: 'var(--grad-neutral-fade)',
  },
  {
    idNum: 4,
    iconName: 'sad',
    name: 'Sad',
    color: 'var(--mood-sad)',
    colorGradient: 'var(--grad-sad)',
    cardColorGradient: 'var(--grad-sad-fade)',
  },
  {
    idNum: 5,
    iconName: 'anxious',
    name: 'Anxious',
    color: 'var(--mood-anxious)',
    colorGradient: 'var(--grad-anxious)',
    cardColorGradient: 'var(--grad-anxious-fade)',
  },
  {
    idNum: 6,
    iconName: 'angry',
    name: 'Angry',
    color: 'var(--mood-angry)',
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
