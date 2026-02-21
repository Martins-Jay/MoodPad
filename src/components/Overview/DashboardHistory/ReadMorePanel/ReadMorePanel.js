function ReadMorePanel({ activeReadMore }) {
  return (
    <div className="read-more-container">
      <div className="read-more-content">{activeReadMore.text}</div>
    </div>
  );
}

export default ReadMorePanel;
