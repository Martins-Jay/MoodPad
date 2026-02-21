import './moodList.css';
import MoodItem from '../MoodItem/MoodItem';

function MoodList({
  moodsArr,
  handleMoodIconSelect,
  onSaveNote,
  onRemoveNote,
  onEditMood,
  activeReadMore,
  onReadMore,
}) {
  return (
    <div className="mood-list-container">
      <ul className="mood-list">
        {moodsArr.map((moodObj) => (
          <MoodItem
            key={moodObj.timestamp}
            moodObj={moodObj}
            onSaveNote={onSaveNote}
            onRemoveNote={onRemoveNote}
            onEditMood={onEditMood}
            activeReadMore={activeReadMore}
            onReadMore={onReadMore}
          />
        ))}
      </ul>
    </div>
  );
}

export default MoodList;
