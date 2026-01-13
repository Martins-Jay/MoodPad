import './moodItem.css';

function MoodItem({ moodObj }) {
  function formatDate(isoDate) {
    return new Date(isoDate).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }

  return (
    <li
      className="item-container"
      style={{ borderLeft: `6px solid ${moodObj?.color}`, borderRadius: '6px' }}
    >
      <p className="item-name">{moodObj.iconName}</p>
      <p className="date">{formatDate(moodObj.isoDate)}</p>
    </li>
  );
}

export default MoodItem;
