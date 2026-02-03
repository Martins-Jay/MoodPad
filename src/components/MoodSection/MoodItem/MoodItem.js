import './moodItem.css';
import SmileIcon from '../../../assets/icons/SmileIcon';
import LeafIcon from '../../../assets/icons/LeafIcon';
import SadIcon from '../../../assets/icons/SadIcon';
import AnxiousIcon from '../../../assets/icons/AnxiousIcon';
import NeutralIcon from '../../../assets/icons/NeutralIcon';
import AngryIcon from '../../../assets/icons/Angry';

import getFormattedTime from '../../../utils/time';
import formatRelativeDate from '../../../utils/date';

const icons = {
  smile: <SmileIcon size={35} />,
  leaf: <LeafIcon size={35} />,
  sad: <SadIcon size={35} />,
  anxious: <AnxiousIcon size={35} />,
  neutral: <NeutralIcon size={35} />,
  angry: <AngryIcon size={35} />,
};

function MoodItem({
  moodObj,
  handleMoodIconSelect,
  onSaveNote,
  onRemoveNote,
  onEditMood,
}) {
  // id: selectedMoodId,
  const {
    timestamp: selectedMoodId,
    name,
    color,
    cardColorGradient,
    timestamp,
    text,
  } = moodObj;

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

  function handleRemove() {
    onRemoveNote(selectedMoodId);
  }

  function handleEdit() {
    onEditMood(moodObj);
  }

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
          <div className="left-content">
            <div className="svg-wrapper">
              <div className="svg-icon">{icons[moodObj.iconName]}</div>
            </div>

            <div className="mood-content">
              <h1 className="item-name">{name}</h1>
              {color?.colorGradient}
              <p className="date">
                {formatRelativeDate(timestamp)}: {getFormattedTime(timestamp)}
              </p>
            </div>
          </div>

          <div className="right-content">
            <button className="edit-btn" onClick={handleEdit}>
              E
            </button>
            <button className="remove-btn" onClick={handleRemove}>
              X
            </button>
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
