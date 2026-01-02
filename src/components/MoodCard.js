import '../styles/moodCard.css';

function MoodCard({ moodObj, children }) {
  return (
    <div
      className="mood-card"
      style={{ borderLeft: `6px solid ${moodObj.color}`, borderRadius: '6px' }}
    >
      <div className="mood-card-wrapper">
        <h3>{moodObj.name}</h3>
        <span>{moodObj.timestamp}</span>
        {children}
      </div>
    </div>
  );
}

export default MoodCard;
