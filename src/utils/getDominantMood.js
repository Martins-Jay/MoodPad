function getDominantMood(moodBalanceArr) {
  // filter moods with 0%
  const activeMoods = moodBalanceArr.filter(
    (moodObj) => moodObj.percentVal > 0,
  );
  if (!activeMoods.length) return 'Neutral';

  const sorted = activeMoods.sort((a, b) => b.percentVal - a.percentVal);
  return sorted[0].moodName;
}


export default getDominantMood