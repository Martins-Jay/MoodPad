import MoodList from '../../MoodSection/MoodList/MoodList';
import './DashboardHistory.css';
import Lock from '../../../assets/icons/lock';
import NavFilterButton from './NavFilterButton/NavFilterButton.js';

const historyFilters = [
  { id: 'today', label: 'Today' },
  { id: 'week', label: 'Week' },
  { id: 'all', label: 'All' },
];

function DashboardHistory({
  moodsArr,
  onRemoveNote,
  setIsCardEdit,
  onReadMore,
  onHandleCardEdit,
  activefilter,
  setActiveFilter,
  isFullHistoryModalOpen,
  setIsFullHistoryModalOpen,
}) {
  function shouldIncludeMood(timestamp, activefilter) {
    const today = new Date();
    const moodDate = new Date(timestamp);

    const weekAgo = new Date();
    weekAgo.setDate(today.getDate() - 6);

    if (activefilter === 'today') {
      return (
        moodDate.getDate() === today.getDate() &&
        moodDate.getMonth() === today.getMonth() &&
        moodDate.getFullYear() === today.getFullYear()
      );
    }

    if (activefilter === 'week') {
      return moodDate >= weekAgo;
    }

    return true;
  }

  const filteredMoods = moodsArr.filter((moodObj) =>
    shouldIncludeMood(moodObj.timestamp, activefilter),
  );


  return moodsArr && moodsArr.length > 0 ? (
    <div className="history-container">
      <ul className="history-filter-container">
        {historyFilters.map((filterType) => (
          <NavFilterButton
            key={filterType.id}
            filterType={filterType}
            activefilter={activefilter}
            setActiveFilter={setActiveFilter}
          />
        ))}
      </ul>

      <div className="history-content">
        {filteredMoods.length > 0 && !isFullHistoryModalOpen ? (
          <MoodList
            moodsArr={moodsArr}
            filteredMoods={filteredMoods}
            onRemoveNote={onRemoveNote}
            setIsCardEdit={setIsCardEdit}
            onReadMore={onReadMore}
            onHandleCardEdit={onHandleCardEdit}
            setIsFullHistoryModalOpen={setIsFullHistoryModalOpen}
          />
        ) : filteredMoods.length === 0 && !isFullHistoryModalOpen ? (
          <div className="no-mood-filtered-container">
            <div className="no-mood-filtered">
              <p>
                Your day is unfolding gently. Take a moment to pause and capture
                how you’re feeling.
              </p>

              <div className="lock-icon">
                <Lock />
              </div>
            </div>
          </div>
        ) : filteredMoods.length > 0 && isFullHistoryModalOpen ? (
          <div className="full-history-modal-container">
            <div className="history-list-content">
              <div className="modal-header">
                <h2 className='modal-header-h2'>Mood History</h2>

                <button
                  className="modal-close-btn"
                  onClick={() => setIsFullHistoryModalOpen(false)}
                >
                  ✕
                </button>
              </div>

              <div className="modal-cards">
                {filteredMoods.map((moodObj, index) => (
                  <MoodList
                    key={index}
                    moodsArr={[moodObj]}
                    filteredMoods={[moodObj]}
                    onRemoveNote={onRemoveNote}
                    setIsCardEdit={setIsCardEdit}
                    onReadMore={onReadMore}
                    isFullHistoryModalOpen={isFullHistoryModalOpen}
                    onHandleCardEdit={onHandleCardEdit}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  ) : (
    <div className="no-history-container">
      <div className="headline">
        <p>No mood entries yet</p>
      </div>

      <div className="no-history-content">
        <p>
          Start capturing your moods to build your personal history. This space
          will help you look back, reflect, and better understand your emotional
          patterns.
        </p>

        <div className="lock-icon">
          <Lock />
        </div>
      </div>
    </div>
  );
}

export default DashboardHistory;
