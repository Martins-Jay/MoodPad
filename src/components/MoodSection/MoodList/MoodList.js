import './moodList.css';
import MoodItem from '../MoodItem/MoodItem';

function MoodList({
  moodsArr,
  handleMoodIconSelect,
  onSaveNote,
  onRemoveNote,
  onEditMood,
}) {
  return (
    <div className="mood-list-container">
      <ul className="mood-list">
        {moodsArr.map((moodObj) => (
          <MoodItem
            key={moodObj.id}
            moodObj={moodObj}
            onSaveNote={onSaveNote}
            onRemoveNote={onRemoveNote}
            onEditMood={onEditMood}
          />
        ))}
      </ul>
    </div>
  );
}

export default MoodList;
