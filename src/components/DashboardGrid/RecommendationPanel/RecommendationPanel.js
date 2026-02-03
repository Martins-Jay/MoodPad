import { useState } from 'react';
import Cancel from '../../../assets/icons/Cancel';
import ArrowLeft from '../../../assets/icons/ArrowLeft';

import './recommendationPanel.css';
import MusicRecommendation from './Components/Body/MusicRecommendation';

const recommendationsByType = {
  music: {
    title: 'Lo-fi Chill Beats',
    subtitle: 'Helps slow racing thoughts',
    message: 'You seem a bit tense today.',
    icon: '🎧',
  },
  movie: {
    title: 'Amélie',
    subtitle: 'Feel-good movie',
    message: 'Try watching something lighthearted.',
    icon: '🎬',
  },
  joke: {
    title: 'Why did the tomato turn red?',
    subtitle: 'Because it saw the salad dressing!',
    message: 'A little laughter can help your mood.',
    icon: '😂',
  },
  quote: {
    title: '“Keep going, you’re doing great”',
    subtitle: 'Motivational quote',
    message: 'You might need a little boost.',
    icon: '💡',
  },
};

function RecommendationPanel({
  moodsArr,
  isRecommendationPanelOpen,
  setIsRecommendationPanelOpen,
}) {
  const [selectedType, setSelectedType] = useState('music');
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  function handleCloseRecommendation() {
    setIsRecommendationPanelOpen(false);
    if (isPickerOpen) setIsPickerOpen(false);
  }

  return (
    <div
      className={`recommendation-panel ${isRecommendationPanelOpen ? 'open' : ''}`}
    >
      <div className="recommendation-header">
        <h4>Recommendation</h4>
      </div>

      {/* Body */}
      <MusicRecommendation moodsArr={moodsArr}/>

      <div className={`rec-picker ${isPickerOpen ? 'open' : ''}`}>
        <div className="rec-picker-content">
          <h5>What do you need right now?</h5>

          <div className="picker-options">
            {Object.keys(recommendationsByType).map((type) => (
              <button
                key={type}
                className="option-btn"
                onClick={() => {
                  setSelectedType(type);
                  setIsPickerOpen(false);
                }}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="rec-footer-btns">
        <div className="rec-try-different-wrapper">
          <button
            className="rec-try-different-btn"
            onClick={() => setIsPickerOpen(!isPickerOpen)}
          >
            {isPickerOpen ? <ArrowLeft size={17} /> : 'Try something else'}
          </button>
        </div>

        <div className="close-rec-container">
          <button className="close-rec-btn" onClick={handleCloseRecommendation}>
            {<Cancel size={17} />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecommendationPanel;
