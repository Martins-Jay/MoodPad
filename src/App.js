import { useEffect, useState } from "react";
import "./styles/index.css";
import MoodHistory from "./components/MoodHistory";
import MoodSelector from "./components/MoodSelector";
import ActionBar from "./components/ActionBar.js";
import ConfirmModal from "./components/ConfirmModal.js";

const STORAGE_KEY = "mood-tracker-history";

function App() {
  const [currentMood, setCurrentMood] = useState(null);
  const [moodHistory, setMoodHistory] = useState([]);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // Load from localStorage safely on mount
  useEffect(() => {
    const strStoredMoods = localStorage.getItem(STORAGE_KEY);

    if (strStoredMoods) {
      const parsedMoods = JSON.parse(strStoredMoods);
      setMoodHistory(parsedMoods);
    }
  }, []);

  // Add new mood
  function handleMoodSelect(moodObj) {
    const newMood = {
      id: Date.now(),
      name: moodObj.name,
      color: moodObj.color,
      timestamp: new Date().toLocaleString(),
      note: "",
    };

    setCurrentMood(moodObj.name);

    setMoodHistory((moodHistory) => {
      const updated = [newMood, ...moodHistory];

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated)); // save immediately
      return updated;
    });
  }

  function deleteMood(moodToDelete) {
    setMoodHistory((moodHistory) => {
      const updated = moodHistory.filter(
        (moodObj) => moodObj.id !== moodToDelete.id
      ); // into the filter, we pass what we want to keep

      setCurrentMood((currentMood) =>
        currentMood === moodToDelete.name ? null : currentMood
      );

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated)); // save immediately
      return updated;
    });
  }

  function updateMoodNote(id, newNote) {
    setMoodHistory((moodHistory) => {
      const updated = moodHistory.map((moodObj) =>
        moodObj.id === id ? { ...moodObj, note: newNote } : moodObj
      );

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated)); // save immediately
      return updated;
    });
  }

  function handleReset() {
    setMoodHistory([]);
    setCurrentMood(null);
    localStorage.setItem(STORAGE_KEY, JSON.stringify([])); // clear localStorage
    setShowResetConfirm(false); // modal close after confirming
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Mood Tracker</h1>
        <p>Track how you feel, understand yourself better.</p>
      </header>

      <main className="app-content">
        <MoodSelector onSelect={handleMoodSelect} />

        {console.log(currentMood)}

        <ActionBar>
          <div className="display-wrapper">
            {currentMood && (
              <p className="current-mood">
                Current mood: <strong>{currentMood}</strong>
              </p>
            )}

            {moodHistory.length > 0 && (
              <button
                className="reset-btn"
                onClick={() => setShowResetConfirm(true)}
              >
                Reset
              </button>
            )}
          </div>
        </ActionBar>

        <MoodHistory
          moodHistory={moodHistory}
          onDelete={deleteMood}
          onUpdateNote={updateMoodNote}
        />
      </main>

      {showResetConfirm && (
        <ConfirmModal
          title={"Reset mood history?"}
          message={"This will permanently delete all your mood entries. This action cannot be undone."}
          onConfirm={handleReset}
          onCancel={() => setShowResetConfirm(false)}
        >
          <div className="warning-box">⚠️ This action is irreversible</div>
        </ConfirmModal>
      )}
    </div>
  );
}

export default App;
