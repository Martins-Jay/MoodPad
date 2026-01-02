import MoodCard from "./MoodCard";
import MoodNote from "./MoodNote";
import "../styles/moodHistory.css";

function MoodHistory({ moodHistory, onDelete, onUpdateNote }) {
  if (moodHistory.length === 0) {
    return <p className="empty-history">No moods yet.</p>;
  }

  return (
    <section className="mood-history">
      <h2>Mood History</h2>

      <div className="mood-list">
        {moodHistory.map((moodObj) => (
          <MoodCard key={moodObj.id} moodObj={moodObj}>
            <button className="delete-btn" onClick={() => onDelete(moodObj)}>
              ✕
            </button>
            <MoodNote
              note={moodObj.note}
              onSave={(newNote) => onUpdateNote(moodObj.id, newNote)}
            />
          </MoodCard>
        ))}
      </div>
    </section>
  );
}

export default MoodHistory;
