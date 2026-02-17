import { useState } from 'react';
import Cancel from '../../../assets/icons/Cancel';
import ArrowLeft from '../../../assets/icons/ArrowLeft';

import './recommendationPanel.css';
import MusicRecommendation from './Components/Body/MusicRecommendation';
import MoviesRecommendation from './Components/Body/MovieRecommendation';

function RecommendationPanel({
  moodsArr,
  isRecommendationPanelOpen,
  setIsRecommendationPanelOpen,
}) {
  const [selectedType, setSelectedType] = useState('music');
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  const recommendationOptions = ['music', 'movies', 'quotes'];

  function handleCloseRecommendation() {
    setIsRecommendationPanelOpen(false);
    if (isPickerOpen) setIsPickerOpen(false);
  }

  return (
    <div
      className={`recommendation-panel ${isRecommendationPanelOpen ? 'open' : ''}`}
    >
      <div className="recommendation-header">
        <h4>
          {selectedType?.charAt(0).toUpperCase() + selectedType?.slice(1) + ' '}
          Recommendation
        </h4>
      </div>

      {selectedType === 'music' && (
        <MusicRecommendation
          moodsArr={moodsArr}
          isPickerOpen={isPickerOpen}
          setIsPickerOpen={setIsPickerOpen}
        />
      )}
      {selectedType === 'movies' && (
        <MoviesRecommendation
          moodsArr={moodsArr}
          isPickerOpen={isPickerOpen}
          setIsPickerOpen={setIsPickerOpen}
        />
      )}

      <div className={`rec-picker ${isPickerOpen ? 'open' : ''}`}>
        <div className="rec-picker-content">
          <h5 className="picker-que">What do you need right now?</h5>

          <div className="picker-options">
            {recommendationOptions.map((type) => (
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
