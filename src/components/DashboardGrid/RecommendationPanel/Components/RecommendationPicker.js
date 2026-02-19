function RecommendationPicker({
  isPickerOpen,
  setSelectedType,
  setIsPickerOpen,
}) {
  const recommendationOptions = ['music', 'movies', 'quotes'];

  return (
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
  );
}

export default RecommendationPicker;
