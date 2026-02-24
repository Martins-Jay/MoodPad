import { useEffect, useRef, useState } from 'react';

import SmileIcon from '../../../assets/icons/SmileIcon';
import LeafIcon from '../../../assets/icons/LeafIcon';
import SadIcon from '../../../assets/icons/SadIcon';
import AnxiousIcon from '../../../assets/icons/AnxiousIcon';
import NeutralIcon from '../../../assets/icons/NeutralIcon';
import AngryIcon from '../../../assets/icons/Angry';

import getFormattedTime from '../../../utils/time';
import formatRelativeDate from '../../../utils/date';
import DeleteIcon from '../../../assets/DeleteIcon';

import './moodItem.css';

const icons = {
  smile: <SmileIcon size={25} />,
  leaf: <LeafIcon size={25} />,
  sad: <SadIcon size={25} />,
  anxious: <AnxiousIcon size={25} />,
  neutral: <NeutralIcon size={25} />,
  angry: <AngryIcon size={25} />,
};

function MoodItem({ moodObj, onRemoveNote, onReadMore }) {
  const textRef = useRef(null);
  const [isShortened, setIsShortened] = useState(false);

  const {
    timestamp: selectedMoodId,
    name,
    color,
    cardColorGradient,
    timestamp,
    text,
  } = moodObj;

  useEffect(
    function () {
      const reflectionTextEl = textRef.current;
      console.log(
        reflectionTextEl,
        reflectionTextEl.scrollHeight,
        reflectionTextEl.clientHeight,
      );

      if (reflectionTextEl) {
        setIsShortened(
          reflectionTextEl.scrollWidth > reflectionTextEl.clientWidth,
        );
      }
    },
    [text],
  );

  function handleRemove() {
    onRemoveNote(selectedMoodId);
  }

  function handleReadMore() {
    onReadMore(moodObj);
  }

  function handleEdit() {}

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
          {text?.trim() && (
            <p className="reflection-text" ref={textRef}>
              {text}
            </p>
          )}

          {isShortened === true ? (
            <button className="read-more-btn" onClick={handleReadMore}>
              Read more
            </button>
          ) : (
            <button className="edit--btn" onClick={handleEdit}>
              Edit
            </button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MoodItem;
