import MoodList from '../../MoodSection/MoodList/MoodList';
import './DashboardHistory.css';

function DashboardHistory({
  moodsArr,
  onRemoveNote,
  setIsCardEdit,
  onReadMore,
  onHandleCardEdit,
}) {
  return (
    <div className="history-container">
      <div className="history-content">
        <MoodList
          moodsArr={moodsArr}
          onRemoveNote={onRemoveNote}
          setIsCardEdit={setIsCardEdit}
          onReadMore={onReadMore}
          onHandleCardEdit={onHandleCardEdit}
        />
      </div>
    </div>
  );
}

export default DashboardHistory;
