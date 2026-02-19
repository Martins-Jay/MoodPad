import ArrowLeft from '../../../../assets/icons/ArrowLeft';
import Cancel from '../../../../assets/icons/Cancel';

function RecommendationFooter({
  isPickerOpen,
  setIsPickerOpen,
  setIsRecommendationPanelOpen,
}) {
  function handleCloseRecommendation() {
    setIsRecommendationPanelOpen(false);
    if (isPickerOpen) setIsPickerOpen(false);
  }

  return (
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
          {<Cancel size={15} />}
        </button>
      </div>
    </div>
  );
}

export default RecommendationFooter;
