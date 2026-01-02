import { useEffect, useState } from "react";
import "./styles/index.css";
import MoodHistory from "./components/MoodHistory";
import MoodSelector from "./components/MoodSelector";
import ActionBar from "./components/ActionBar.js";

const STORAGE_KEY = "mood-tracker-history";

function App() {
  const [currentMood, setCurrentMood] = useState(null);
  const [moodHistory, setMoodHistory] = useState([]);

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
      );

      setCurrentMood((currentMood) =>
        currentMood === moodToDelete.name ? null : currentMood
      );
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated)); // save immediately
      return updated;
    });
  }

  function updateMoodNote(id, newNote) {
    setMoodHistory((prev) => {
      const updated = prev.map((m) =>
        m.id === id ? { ...m, note: newNote } : m
      );
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated)); // save immediately
      return updated;
    });
  }

  function handleReset() {
    setMoodHistory([]);
    setCurrentMood(null);
    localStorage.setItem(STORAGE_KEY, JSON.stringify([])); // clear localStorage
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

            {moodHistory && (
              <button className="reset-btn" onClick={handleReset}>
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
    </div>
  );
}

export default App;
