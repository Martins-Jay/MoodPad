import { useState } from 'react';
import Cancel from '../../../assets/icons/Cancel';
import './recommendationPanel.css';

const recommendations = [
  {
    type: 'music',
    title: 'Lo-fi Chill Beats',
    subtitle: 'Helps slow racing thoughts',
    message: 'You seem a bit tense today.',
    icon: '🎧',
  },
  {
    type: 'quote',
    title: '“Keep going, you’re doing great”',
    subtitle: 'Motivational quote',
    message: 'You might need a little boost.',
    icon: '💡',
  },
  {
    type: 'movie',
    title: 'Amélie',
    subtitle: 'Feel-good movie',
    message: 'Try watching something lighthearted.',
    icon: '🎬',
  },
  {
    type: 'joke',
    title: 'Why did the tomato turn red?',
    subtitle: 'Because it saw the salad dressing!',
    message: 'A little laughter can help your mood.',
    icon: '😂',
  },
];

function RecommendationPanel({
  isRecommendationPanelOpen,
  setIsRecommendationPanelOpen,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const recommendation = recommendations[currentIndex];

  function handleTryAnother() {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === recommendations.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  }

  return (
    <div
      className={`recommendation-panel ${isRecommendationPanelOpen ? 'open' : ''}`}
    >
      <div className="recommendation-header">
        <h4>Recommendation</h4>
      </div>

      <div className="rec-body">
        <p className="rec-message">{recommendation.message}</p>

        <div className="rec-card">
          <span className="rec-icon">{recommendation.icon}</span>

          <div className="rec-content">
            <h5>{recommendation.title}</h5>
            <p>{recommendation.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="rec-actions">
        <button onClick={handleTryAnother}>Try something else</button>
      </div>

      <div className="close-rec-container">
        <button
          className="close-rec-btn"
          onClick={() => setIsRecommendationPanelOpen(false)}
        >
          {<Cancel size={17} />}
        </button>
      </div>
    </div>
  );
}

export default RecommendationPanel;
