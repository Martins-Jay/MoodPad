import SubmitIcon from "../../../assets/icons/SubmitIcon";
import './reflectionInput.css'

function ReflectionInput() {
  return (
    <div className="reflection-input-wrapper">
      <input type="text" placeholder="Your reflection..." />

      <div className="submit-btn">
        <SubmitIcon size={28} />
      </div>
    </div>
  );
}

export default ReflectionInput;
