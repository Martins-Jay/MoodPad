import { useState } from 'react';
import AngryIcon from '../../assets/icons/Angry';
import AnxiousIcon from '../../assets/icons/AnxiousIcon';
import LeafIcon from '../../assets/icons/LeafIcon';
import NeutralIcon from '../../assets/icons/NeutralIcon';
import SadIcon from '../../assets/icons/SadIcon';
import SmileIcon from '../../assets/icons/SmileIcon';

import './activeMoodPanel.css';

const icons = {
  smile: <SmileIcon size={35} />,
  leaf: <LeafIcon size={35} />,
  sad: <SadIcon size={35} />,
  anxious: <AnxiousIcon size={35} />,
  neutral: <NeutralIcon size={35} />,
  angry: <AngryIcon size={35} />,
};

function ActiveMoodPanel({ activeMood }) {
  const { name, color, colorGradient, cardColorGradient, isoDate } = activeMood;
  const [text, setText] = useState('');

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

  function handleSubmit() {}

  return (
    <div className="optional-container">
      {Object.keys(activeMood).length > 0 ? (
        <div className="active-mood-panel-wrapper">
          <div
            className="active-mood-container"
            style={{
              borderLeft: `6px solid ${color}`,
              borderRadius: '15px',
              background: `${cardColorGradient}`,
            }}
          >
            <div className="header-content">
              <div className="svg-wrapper">
                <div className="svg-icon">{icons[activeMood.iconName]}</div>
              </div>

              <div class="mood-content">
                <h1 className="item-name">{name}</h1>
                {color?.colorGradient}
                <p className="date">{formatRelativeDate(isoDate)}</p>
              </div>
            </div>
          </div>

          <div className="reflection-content-wrapper">
            <form className='reflection-container' onSubmit={handleSubmit}>
              <label htmlFor="">What triggered this feeling?</label>

              <textarea
                autofocus
                className="text-area"
                placeholder="Write about the thoughts or event that led to this feeling..."
                value={text}
                
                onChange={(e) => setText(e.target.value)}
              />

              <button className='reflection-submit-btn' style={{background: `${colorGradient}`}} type="submit">Save Reflection</button>
            </form>
          </div>
        </div>
      ) : (
        <div className='no-active-mood'>No selected mood yet</div>
      )}
    </div>
  );
}

export default ActiveMoodPanel;
