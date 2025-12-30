import { useEffect, useState } from 'react';
import './styles/index.css';
import MoodHistory from './components/MoodHistory';
import MoodSelector from './components/MoodSelector';
import ActionBar from './components/ActionBar.js';

const STORAGE_KEY = 'mood-tracker-history';

function App() {
  const [currentMood, setCurrentMood] = useState(null);
  const [moodHistory, setMoodHistory] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) setMoodHistory(JSON.parse(stored));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(moodHistory));
  }, [moodHistory]);

  function handleMoodSelect(moodObj) {
    const newMood = {
      id: Date.now(),
      name: moodObj.name,
      color: moodObj.color,
      timestamp: new Date().toLocaleString(),
      note: '',
    };

    setCurrentMood(moodObj.name);
    setMoodHistory((prev) => [newMood, ...prev]);
  }

  function deleteMood(id) {
    setMoodHistory((prev) => prev.filter((m) => m.id !== id));
  }

  function updateMoodNote(id, newNote) {
    setMoodHistory((prev) =>
      prev.map((mood) => (mood.id === id ? { ...mood, note: newNote } : mood))
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Mood Tracker</h1>
        <p>Track how you feel, understand yourself better.</p>
      </header>

      <main className="app-content">
        <MoodSelector onSelect={handleMoodSelect} />

        <ActionBar>
          {currentMood && (
            <p className="current-mood">
              Current mood: <strong>{currentMood}</strong>
            </p>
          )}
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
