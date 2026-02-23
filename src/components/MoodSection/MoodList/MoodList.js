import './moodList.css';
import MoodItem from '../MoodItem/MoodItem';

function MoodList({ moodsArr, onRemoveNote, onReadMore }) {
  return (
    <div className="mood-list-container">
      <ul className="mood-list">
        {moodsArr.map((moodObj) => (
          <MoodItem
            key={moodObj.timestamp}
            moodObj={moodObj}
            onRemoveNote={onRemoveNote}
            onReadMore={onReadMore}
          />
        ))}
      </ul>
    </div>
  );
}

export default MoodList;
