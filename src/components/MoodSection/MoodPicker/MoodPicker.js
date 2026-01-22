import MoodOption from '../MoodOption/MoodOption';
import { MOODS } from '../../SharedConstants/moods';

import './moodPicker.css';

function MoodPicker({ onPickMood, onMoodSelect }) {
  return (
    <div className="mood-List-container">
      <ul className="mood-icons-container">
        {MOODS.map((moodObj) => (
          <MoodOption
            key={moodObj.idNum}
            moodObj={moodObj}
            onPickMood={onPickMood}
            onMoodSelect={onMoodSelect}
          />
        ))}
      </ul>
    </div>
  );
}

export default MoodPicker;
