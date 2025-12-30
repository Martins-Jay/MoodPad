import '../styles/moodCard.css';

function MoodCard({ mood, children }) {
  return (
    <div
      className="mood-card"
      style={{ borderLeft: `6px solid ${mood.color}`, borderRadius: '6px' }}
    >
      <div className="mood-card-wrapper">
        <h3>{mood.name}</h3>
        <span>{mood.timestamp}</span>
        {children}
      </div>
    </div>
  );
}

export default MoodCard;
