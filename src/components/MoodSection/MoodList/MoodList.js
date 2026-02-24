import './moodList.css';
import MoodItem from '../MoodItem/MoodItem';

function MoodList({
  moodsArr,
  onRemoveNote,
  onEditMood,
  onReadMore,
  setIsCardEdit,
  onHandleCardEdit,
}) {
  return (
    <div className="mood-list-container">
      <ul className="mood-list">
        {moodsArr.map((moodObj) => (
          <MoodItem
            key={moodObj.timestamp}
            moodObj={moodObj}
            onRemoveNote={onRemoveNote}
            setIsCardEdit={setIsCardEdit}
            onReadMore={onReadMore}
            onHandleCardEdit={onHandleCardEdit}
          />
        ))}
      </ul>
    </div>
  );
}

export default MoodList;
