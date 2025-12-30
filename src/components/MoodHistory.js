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
        {moodHistory.map((mood) => (
          <MoodCard key={mood.id} mood={mood}>
            <button
              className="delete-btn"
              onClick={() => onDelete(mood.id)}
            >
              ✕
            </button>

            <MoodNote
              note={mood.note}
              onSave={(newNote) =>
                onUpdateNote(mood.id, newNote)
              }
            />
          </MoodCard>
        ))}
      </div>
    </section>
  );
}

export default MoodHistory;
