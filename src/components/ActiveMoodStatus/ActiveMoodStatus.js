import './activeMoodStatus.css';

function ActiveMoodStatus({ isPanelOpen, activeMood, lastAction, moodsArr }) {
  // Don’t show status while panel is open
  if (isPanelOpen) return null;

  // Added message (only if a mood exists)
  if (Object.keys(activeMood).length > 0 && lastAction === 'added') {
    return (
      <div className="status-message">
        Awesome! You’ve logged {moodsArr.length}{' '}
        {moodsArr.length === 1 ? 'mood' : 'moods'} today!
      </div>
    );
  }

  // Removed message
  if (lastAction === 'removed') {
    if (moodsArr.length === 0) {
      return (
        <div className="status-message">
          Removed. You don’t have any mood entries yet.
        </div>
      );
    }

    return (
      <div className="status-message">
        Removed. You now have {moodsArr.length}{' '}
        {moodsArr.length === 1 ? 'entry' : 'entries'} logged.
      </div>
    );
  }

  // Default message
  return <div className="status-message">No selected mood yet</div>;
}

export default ActiveMoodStatus;
