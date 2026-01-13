import ReflectionInput from '../ReflectionInput/ReflectionInput';
import ReflectionCardContent from '../ReflectionCardContent/ReflectionCardContent';
import './ReflectionCard.css';

function ReflectionCard() {
  return (
    <div className="reflection-card-wrapper">
      <ReflectionCardContent />

      <ReflectionInput />
    </div>
  );
}

export default ReflectionCard;
