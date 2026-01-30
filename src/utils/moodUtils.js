export function getMoodBalanceForToday(moodsArr = []) {
  const todayDateStr = new Date().toDateString(); // Str sample: Wed Jan 21 2026

  const moodsCreatedToday = moodsArr.filter((moodObj) => {
    if (!moodObj.timestamp) return false;

    const moodCreationDateStr = new Date(moodObj.timestamp).toDateString(); // Str sample: Wed Jan 21 2026

    return moodCreationDateStr === todayDateStr; // we only want array of objects with date === today's date
  });

  const counts = {
    Happy: 0,
    Calm: 0,
    Neutral: 0,
    Sad: 0,
    Anxious: 0,
    Angry: 0,
  };

  // update counts based on what we have in moodsCreatedToday
  moodsCreatedToday.forEach((moodObj) => {
    if (counts[moodObj.name] !== undefined) {
      counts[moodObj.name] += 1;
    }
  });

  const moodBalanceArr = Object.keys(counts).map((moodName) => {
    const countVal = counts[moodName];
    const lengthOfFilteredArr = moodsCreatedToday.length;

    const percentVal =
      lengthOfFilteredArr === 0
        ? 0
        : Math.round((countVal / lengthOfFilteredArr) * 100);

    return { moodName, countVal, percentVal };
  });

  return { moodBalanceArr, moodsCreatedToday };
}

