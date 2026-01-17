import { useState } from 'react';
import './moodItem.css';
import SmileIcon from '../../../assets/icons/SmileIcon';
import LeafIcon from '../../../assets/icons/LeafIcon';
import SadIcon from '../../../assets/icons/SadIcon';
import AnxiousIcon from '../../../assets/icons/AnxiousIcon';
import NeutralIcon from '../../../assets/icons/NeutralIcon';
import AngryIcon from '../../../assets/icons/Angry';

function MoodItem({ moodObj, handleMoodIconSelect, onSaveNote }) {
  const {
    id: selectedMoodId,
    name,
    color,
    colorGradient,
    cardColorGradient,
    isoDate,
  } = moodObj;

  const icons = {
    smile: <SmileIcon size={35} />,
    leaf: <LeafIcon size={35} />,
    sad: <SadIcon size={35} />,
    anxious: <AnxiousIcon size={35} />,
    neutral: <NeutralIcon size={35} />,
    angry: <AngryIcon size={35} />,
  };

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
    console.log(colorGradient);
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
    <li className="mood-item-container">
      <div
        className="item-content"
        style={{
          borderLeft: `6px solid ${color}`,
          borderRadius: '16px',
          background: `${cardColorGradient}`,
        }}
      >
        <div className="item-content">
          <div className="svg-wrapper">
            <div className="svg-icon">{icons[moodObj.iconName]}</div>
          </div>

          <div class="mood-content">
            <h1 className="item-name">{name}</h1>
            {color?.colorGradient}
            <p className="date">{formatRelativeDate(isoDate)}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default MoodItem;

// <li
//     className="item-container"
//     style={{
//       borderLeft: `6px solid ${color}`,
//       borderRadius: '25px',
//       background: `${cardColorGradient}`,
//     }}
//   >
//     <div className="top-content">
//       <div>
//         <p className="item-name">{name}</p>
//         {color.colorGradient}
//         <p className="date">{formatRelativeDate(isoDate)}</p>
//       </div>
//     </div>

//     <div className="text-area-wrapper">
//       {isEditing ? (
//         <textarea
//           autofocus
//           className="text-area"
//           placeholder="Add a note..."
//           value={text}
//           rows={1}
//           onInput={(e) => {
//             e.target.style.height = 'auto';
//             e.target.style.height = e.target.scrollHeight + 'px';
//           }}
//           onChange={(e) => setText(e.target.value)}
//           onKeyDown={handleKeyDown}
//           onBlur={saveNoteOnBlur} // click outside → save
//         />
//       ) : (
//         <p onClick={handleEdit}>{text || 'Add a note..'}</p>
//       )}
//     </div>
//   </li>
