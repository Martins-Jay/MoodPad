import Cancel from '../../../../assets/icons/Cancel';
import formatRelativeDate from '../../../../utils/date';

function ReadMorePanel({ activeReadMore }) {
  return (
    <div className="read-more-container">
      <div className="read-more-header-content">
        <div className="mood-name">{activeReadMore.name} mood</div>

        <div className="date-created">
          Date created: {formatRelativeDate(activeReadMore.timestamp)}
        </div>
      </div>

      <div className="mood-text">{activeReadMore.text}</div>

      <div className="read-more-footer-content">
        <button className="close-read-more-btn">
          <Cancel size={11} />
        </button>
      </div>
    </div>
  );
}

export default ReadMorePanel;
