import { useEffect, useState } from 'react';
import SmileIcon from '../../../assets/icons/SmileIcon';
import LeafIcon from '../../../assets/icons/LeafIcon';
import SadIcon from '../../../assets/icons/SadIcon';
import AnxiousIcon from '../../../assets/icons/AnxiousIcon';
import NeutralIcon from '../../../assets/icons/NeutralIcon';
import AngryIcon from '../../../assets/icons/Angry';

import './editMoodModal.css';

const icons = {
  smile: <SmileIcon size={35} />,
  leaf: <LeafIcon size={35} />,
  sad: <SadIcon size={35} />,
  anxious: <AnxiousIcon size={35} />,
  neutral: <NeutralIcon size={35} />,
  angry: <AngryIcon size={35} />,
};

function EditMoodModal({
  moodObj,
  onUpdateText,
  onCancelEdit,
  setIsCardEdit,
}) {
  const [newText, setNewText] = useState('');

  useEffect(
    function () {
      const prevSavedText = moodObj.text;
      setNewText(prevSavedText); // update textarea when mood changes
    },
    [moodObj],
  );

  function handleSaveEdit() {
    const formattedText =
      newText.trim().charAt(0).toUpperCase() + newText.trim().slice(1);

    onUpdateText(moodObj.timestamp, formattedText);

    setIsCardEdit(false);
  }

  function handleCancel() {
    onCancelEdit();
  }

  return (
    <div className="modal-overlay">
      <div className="modal-backdrop">
        <div className="edit-modal">
          {/* Header */}
          <div className="modal-header">
            <div
              className="modal-title"
              style={{
                borderLeft: `6px solid ${moodObj.color}`,
                borderRadius: '16px',
                background: `${moodObj.cardColorGradient}`,
              }}
            >
              <div className="mood-icon">{icons[moodObj.iconName]}</div>

              <div className="edit-reflection-wrapper">
                <h2>Edit Reflection</h2>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="modal-body">
            <div className="textarea-container">
              <textarea
                className="edit-textarea"
                placeholder="Update your reflection..."
                autoCapitalize="none"
                autoFocus
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
              ></textarea>
            </div>
          </div>

          {/* Footer */}
          <div className="modal-footer">
            <button className="btn cancel" onClick={handleCancel}>
              Cancel
            </button>

            <button
              className="btn save"
              style={{ background: `${moodObj.color}` }}
              onClick={handleSaveEdit}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditMoodModal;
