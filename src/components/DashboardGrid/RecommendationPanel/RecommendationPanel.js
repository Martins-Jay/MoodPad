import { useState } from 'react';

import './recommendationPanel.css';
import MusicRecommendation from './Components/Body/MusicRecommendation';
import MoviesRecommendation from './Components/Body/MovieRecommendation';
import RecommendationPicker from './Components/RecommendationPicker';
import RecommendationFooter from './Components/RecommendationFooter';

function RecommendationPanel({
  moodsArr,
  isRecommendationPanelOpen,
  setIsRecommendationPanelOpen,
}) {
  const [selectedType, setSelectedType] = useState('music');
  const [isPickerOpen, setIsPickerOpen] = useState(false);

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

      <RecommendationPicker
        isPickerOpen={isPickerOpen}
        setSelectedType={setSelectedType}
        setIsPickerOpen={setIsPickerOpen}
      />

      <RecommendationFooter
        isPickerOpen={isPickerOpen}
        setIsPickerOpen={setIsPickerOpen}
        setIsRecommendationPanelOpen={setIsRecommendationPanelOpen}
      />
    </div>
  );
}

export default RecommendationPanel;
