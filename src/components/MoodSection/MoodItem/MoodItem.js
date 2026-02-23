import './moodItem.css';
import SmileIcon from '../../../assets/icons/SmileIcon';
import LeafIcon from '../../../assets/icons/LeafIcon';
import SadIcon from '../../../assets/icons/SadIcon';
import AnxiousIcon from '../../../assets/icons/AnxiousIcon';
import NeutralIcon from '../../../assets/icons/NeutralIcon';
import AngryIcon from '../../../assets/icons/Angry';

import getFormattedTime from '../../../utils/time';
import formatRelativeDate from '../../../utils/date';
import DeleteIcon from '../../../assets/DeleteIcon';

const icons = {
  smile: <SmileIcon size={25} />,
  leaf: <LeafIcon size={25} />,
  sad: <SadIcon size={25} />,
  anxious: <AnxiousIcon size={25} />,
  neutral: <NeutralIcon size={25} />,
  angry: <AngryIcon size={25} />,
};

function MoodItem({ moodObj, onRemoveNote, onReadMore }) {
  const {
    timestamp: selectedMoodId,
    name,
    color,
    cardColorGradient,
    timestamp,
    text,
  } = moodObj;

  function handleRemove() {
    onRemoveNote(selectedMoodId);
  }

  function handleReadMore() {
    onReadMore(moodObj);
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
          <div className="card-left-content">
            <div className="svg-wrapper">
              <div className="svg-icon">{icons[moodObj.iconName]}</div>
            </div>

            <div className="mood-content">
              <h1 className="item-name">{name}</h1>

              <p className="date">
                {formatRelativeDate(timestamp)}: {getFormattedTime(timestamp)}
              </p>
            </div>
          </div>

          <button className="remove-btn" onClick={handleRemove}>
            <DeleteIcon size={20} />
          </button>
        </div>

        <div className="reflection-container">
          {text?.trim() && <p className="reflection-text">{text}</p>}

          <button className="read-more-btn" onClick={handleReadMore}>
            Read more
          </button>
        </div>
      </div>
    </li>
  );
}

export default MoodItem;
