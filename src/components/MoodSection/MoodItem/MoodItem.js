import { useState } from 'react';
import './moodItem.css';
// import SubmitIcon from '../../../assets/icons/SubmitIcon';

function MoodItem({ moodObj, onSaveNote }) {
  const { id: selectedMoodId, name, color, isoDate } = moodObj;
  const [text, setText] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  function formatAndSaveNote() {
    if (!text.trim()) return;

    const formattedText =
      text.trim().charAt(0).toUpperCase() + text.trim().slice(1);

    onSaveNote(selectedMoodId, formattedText);
  }

  function saveNoteOnBlur() {
    formatAndSaveNote();

    setIsEditing(false); // stop editing → cursor disappears
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();

      formatAndSaveNote();
      setIsEditing(!isEditing);
    }
  }

  function handleEdit() {
    setIsEditing(!isEditing);
  }

  function formatRelativeDate(isoDate) {
    const entryDate = new Date(isoDate); // the day this mood was recorded
    const currentDate = new Date(); // the current day

    // toDateString
    const entryDateStr = entryDate.toDateString();
    const currentDateStr = currentDate.toDateString();

    if (entryDateStr === currentDateStr) return 'Today';

    const diffInMs = currentDate - entryDate;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInDays === 1) return 'Yesterday';
    if (diffInDays < 7) return `${diffInDays} days ago`;
  }

  return (
    <li
      className="item-container"
      style={{ borderLeft: `6px solid ${color}`, borderRadius: '25px' }}
    >
      <div className="top-content">
        <div>
          <p className="item-name">{name}</p>
          <p className="date">{formatRelativeDate(isoDate)}</p>
        </div>
      </div>

      <div className="text-area-wrapper">
        {isEditing ? (
          <textarea
            autofocus
            className="text-area"
            placeholder="Add a note..."
            value={text}
            rows={1}
            onInput={(e) => {
              e.target.style.height = 'auto';
              e.target.style.height = e.target.scrollHeight + 'px';
            }}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={saveNoteOnBlur} // click outside → save
          />
        ) : (
          <p onClick={handleEdit}>{text || 'Add a note..'}</p>
        )}
      </div>
    </li>
  );
}

export default MoodItem;
