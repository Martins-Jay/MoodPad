import './moodList.css';
import MoodItem from '../MoodItem/MoodItem';

const previewCount = 3;

function MoodList({
  moodsArr,
  filteredMoods,
  onRemoveNote,
  onReadMore,
  setIsCardEdit,
  onHandleCardEdit,
  isFullHistoryModalOpen,
  setIsFullHistoryModalOpen,
}) {
  const moodToDisplay = filteredMoods.slice(0, previewCount);
  return (
    <div className="mood-list-container">
      <ul className="mood-list">
        {moodToDisplay.map((moodObj) => (
          <MoodItem
            key={moodObj.timestamp}
            moodObj={moodObj}
            onRemoveNote={onRemoveNote}
            setIsCardEdit={setIsCardEdit}
            onReadMore={onReadMore}
            isFullHistoryModalOpen={isFullHistoryModalOpen}
            onHandleCardEdit={onHandleCardEdit}
          />
        ))}
      </ul>

      {filteredMoods.length > previewCount && (
        <ViewMore setIsFullHistoryModalOpen={setIsFullHistoryModalOpen} />
      )}
    </div>
  );
}

function ViewMore({ setIsFullHistoryModalOpen }) {
  return (
    <div className="view-more-btn-container">
      <button
        className="view-more-btn"
        onClick={() => setIsFullHistoryModalOpen(true)}
      >
        View More
      </button>
    </div>
  );
}

export default MoodList;
