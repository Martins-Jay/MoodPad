import { useState } from "react";
import "../styles/moodNote.css";

function MoodNote({ note, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(note);

  function handleBlur() {
    onSave(value.trim());
    setIsEditing(false);
  }

  if (!isEditing) {
    return (
      <div
        className={`mood-note ${note ? "filled" : ""}`}
        onClick={() => setIsEditing(true)}
      >
        {note || "Add a note…"}
      </div>
    );
  }

  return (
    <textarea
      className="mood-note-editor"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={handleBlur}
      autoFocus
      rows={3}
      placeholder="Write how you feel..."
    />
  );
}

export default MoodNote;
