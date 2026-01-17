import './moodItem.css';
import SmileIcon from '../../../assets/icons/SmileIcon';
import LeafIcon from '../../../assets/icons/LeafIcon';
import SadIcon from '../../../assets/icons/SadIcon';
import AnxiousIcon from '../../../assets/icons/AnxiousIcon';
import NeutralIcon from '../../../assets/icons/NeutralIcon';
import AngryIcon from '../../../assets/icons/Angry';

import getFormattedTime from '../../../utils/time';
import formatRelativeDate from '../../../utils/date';


function MoodItem({ moodObj, handleMoodIconSelect, onSaveNote }) {
  // id: selectedMoodId,
  const { name, color, colorGradient, cardColorGradient, isoDate, text } =
    moodObj;

  const icons = {
    smile: <SmileIcon size={35} />,
    leaf: <LeafIcon size={35} />,
    sad: <SadIcon size={35} />,
    anxious: <AnxiousIcon size={35} />,
    neutral: <NeutralIcon size={35} />,
    angry: <AngryIcon size={35} />,
  };

  // const [text, setText] = useState('');
  // const [isEditing, setIsEditing] = useState(false);

  // function formatAndSaveNote() {
  //   if (!text.trim()) return;

  //   const formattedText =
  //     text.trim().charAt(0).toUpperCase() + text.trim().slice(1);

  //   onSaveNote(selectedMoodId, formattedText);
  // }

  // function saveNoteOnBlur() {
  //   formatAndSaveNote();

  //   setIsEditing(false); // stop editing → cursor disappears
  // }

  // function handleKeyDown(e) {
  //   if (e.key === 'Enter' && !e.shiftKey) {
  //     e.preventDefault();

  //     formatAndSaveNote();
  //     setIsEditing(!isEditing);
  //   }
  // }

  // function handleEdit() {
  //   setIsEditing(!isEditing);
  // }


  console.log(colorGradient);


  return (
    <li className="mood-item-container">
      <div
        className="item-content-wrapper"
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

          <div className="mood-content">
            <h1 className="item-name">{name}</h1>
            {color?.colorGradient}
            <p className="date">
              {formatRelativeDate(isoDate)}: {getFormattedTime(isoDate)}
            </p>
          </div>
        </div>

        <div className="reflection-container">
          {text?.trim() && <p className="reflection-text">{text}</p>}
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
