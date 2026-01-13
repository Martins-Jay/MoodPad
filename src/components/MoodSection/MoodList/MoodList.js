import './moodList.css';
import MoodItem from '../MoodItem/MoodItem';

function MoodList({ selectedMoods }) {
  return (
    <div className="mood-list-container">
      <ul className="mood-list">
        {selectedMoods.map((moodObj) => (
          <MoodItem key={moodObj.id} moodObj={moodObj} />
        ))}
      </ul>
    </div>
  );
}

export default MoodList;
