import DeleteIcon from '../../../../assets/DeleteIcon';
import Cancel from '../../../../assets/icons/Cancel';
import EditIcon from '../../../../assets/icons/EditIcon';
import formatRelativeDate from '../../../../utils/date';

function ReadMorePanel({ activeReadMore, setActiveReadMore, onEditMood }) {
  console.log(activeReadMore);

  function handleCloseReadMore() {
    setActiveReadMore(null);
  }

  function handleEdit() {
    onEditMood(activeReadMore);
  }

  function handleRemove() {}

  return (
    <div className="read-more-container">
      <div className="read-more-header-content">
        <div className="mood-title">{activeReadMore.name} mood</div>

        <div className="date-created">
          Date created: {formatRelativeDate(activeReadMore.timestamp)}
        </div>
      </div>

      <div className="mood-text">{activeReadMore.text}</div>

      <div className="read-more-footer-content">
        <div className="left-footer-btns">
          <button className="edit-text-btn" onClick={handleEdit}>
            <EditIcon size={15} />
          </button>

          <button className="delete-text-btn" onClick={handleRemove}>
            <DeleteIcon size={10} />
          </button>
        </div>

        <div className="right-footer-btn">
          <button className="close-read-more-btn" onClick={handleCloseReadMore}>
            <Cancel size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReadMorePanel;
