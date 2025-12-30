import { useState } from 'react';
import '../styles/moodSelector.css';

function MoodSelector({ onSelect }) {
  const moods = [
    { name: 'Happy', emoji: '😊', color: '#08a713ff' },
    { name: 'Energetic', emoji: '⚡️', color: '#ef39a3' },
    { name: 'Relaxed', emoji: '😌', color: '#57459eff' },
    { name: 'Sad', emoji: '😞', color: '#8e3c3c' },
    { name: 'Angry', emoji: '😡', color: '#ff0f02' },
  ];

  const [selectedMood, setSelectedMood] = useState(null);

  function handleClick(mood) {
    setSelectedMood(mood.name);
    onSelect(mood);
  }

  return (
    <div className="mood-selector">
      {moods.map((mood) => (
        <button
          key={mood.name}
          className={`mood-button ${
            selectedMood === mood.name ? 'active' : ''
          }`}
          style={{ backgroundColor: mood.color }}
          onClick={() => handleClick(mood)}
        >
          {mood.name}
        </button>
      ))}
    </div>
  );
}

export default MoodSelector;
