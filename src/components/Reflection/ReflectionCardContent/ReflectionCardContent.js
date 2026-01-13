import './reflectionCardContent.css';

function ReflectionCardContent() {
  return (
    <>
      <h1>Daily reflection</h1>

      <div className="reflection-content-wrapper">
        <h2>
          Hello <span className="name">Martins!</span>
        </h2>
        <h3>How are you feeling right now?</h3>
        <h3>Share your current mood below.</h3>
      </div>
    </>
  );
}

export default ReflectionCardContent;
