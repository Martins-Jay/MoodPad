import MoodList from '../MoodSection/MoodList/MoodList';
import './DashboardHistory.css';

function DashboardHistory({ moodsArr, onSaveNote, onRemoveNote, onEditMood }) {
  return (
    <div className="history-container">
      <div className="history-content">
        <MoodList
          moodsArr={moodsArr}
          onRemoveNote={onRemoveNote}
          onEditMood={onEditMood}
          onSaveNote={onSaveNote}
        />
      </div>
    </div>
  );
}

export default DashboardHistory;
