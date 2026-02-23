import MoodList from '../../MoodSection/MoodList/MoodList';
import './DashboardHistory.css';

function DashboardHistory({
  moodsArr,
  onRemoveNote,
  activeReadMore,
  onReadMore,
}) {
  return (
    <div className="history-container">
      <div className="history-content">
        <MoodList
          moodsArr={moodsArr}
          onRemoveNote={onRemoveNote}
          onReadMore={onReadMore}
        />
      </div>
    </div>
  );
}

export default DashboardHistory;
