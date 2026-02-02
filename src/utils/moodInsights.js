export function generateMoodInsight(moodBalanceArr = []) {
  if (!moodBalanceArr || moodBalanceArr.length === 0) {
    return 'No moods recorded today. Take a moment to check in with yourself.';
  }

  // Sort moods by highest percentage
  const sortedMoods = [...moodBalanceArr].sort(
    (a, b) => b.percentVal - a.percentVal,
  );

  const primary = sortedMoods[0];
  const secondary = sortedMoods[1];

  // Map percent to natural language intensity
  const intensityMap = (percent) => {
    if (percent <= 20) return 'a little';
    if (percent <= 50) return 'somewhat';
    if (percent <= 80) return 'noticeably';
    return 'very';
  };

  const intensity = intensityMap(primary.percentVal);

  let message = '';

  // Primary mood message
  switch (primary.moodName) {
    case 'Happy':
      message = `You are feeling ${intensity} happy today. Enjoy this positive energy and keep it flowing.`;
      break;
    case 'Calm':
      message = `You feel ${intensity} calm and centered. Take a deep breath and appreciate this peaceful moment.`;
      break;
    case 'Neutral':
      message = `Your mood feels ${intensity} balanced today. Use this steadiness to reflect and recharge.`;
      break;
    case 'Sad':
      message = `You are feeling ${intensity} sad. Be gentle with yourself and take small, kind steps forward.`;
      break;
    case 'Anxious':
      message = `You feel ${intensity} anxious. Pause for a moment, breathe deeply, and ground yourself.`;
      break;
    case 'Angry':
      message = `You are feeling ${intensity} angry today. Try to channel this energy in a positive way and be kind to yourself.`;
      break;
    default:
      message = `Your mood is varied today. Take care and listen to how you feel.`;
  }

  // Secondary mood, if notable
  if (secondary && secondary.percentVal >= 20) {
    switch (secondary.moodName) {
      case 'Angry':
        message += ` There is also a hint of frustration, so give yourself time to release it calmly.`;
        break;
      case 'Sad':
        message += ` A touch of sadness is present as well; remember to be gentle and patient with yourself.`;
        break;
      case 'Anxious':
        message += ` You also feel some anxiety, so pause, breathe, and center yourself.`;
        break;
      default:
        message += ` You may also feel ${intensityMap(secondary.percentVal)} ${secondary.moodName.toLowerCase()}.`;
    }
  }

  // Friendly ending
  // message += ' Remember that all your feelings are valid and important.';

  return message;
}
