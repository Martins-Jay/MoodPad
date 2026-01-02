import { useState } from "react";
import "../styles/moodSelector.css";

function MoodSelector({ onSelect }) {
  const moodsArr = [
    { name: "Happy", emoji: "😊", color: "#08a713ff" },
    { name: "Energetic", emoji: "⚡️", color: "#ef39a3" },
    { name: "Relaxed", emoji: "😌", color: "#57459eff" },
    { name: "Sad", emoji: "😞", color: "#8e3c3c" },
    { name: "Angry", emoji: "😡", color: "#ff0f02" },
  ];

  const [selectedMood, setSelectedMood] = useState(null);

  function handleClick(moodsArr) {
    setSelectedMood(moodsArr.name);
    onSelect(moodsArr);
  }

  return (
    <div className="mood-selector">
      {moodsArr.map((moodObj) => (
        <button
          key={moodObj.name}
          className={`mood-button ${
            selectedMood === moodObj.name ? "active" : ""
          }`}
          style={{ backgroundColor: moodObj.color }}
          onClick={() => handleClick(moodObj)}
        >
          {moodObj.name}
        </button>
      ))}
    </div>
  );
}

export default MoodSelector;
