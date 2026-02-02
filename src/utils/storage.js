const MOODS_KEY = 'moodPadStorage';

export function saveMoods(moodsArr) {
  localStorage.setItem(MOODS_KEY, JSON.stringify(moodsArr)); // L.Storage stores ONLY strings
}

export function loadMoods() {
  try {
    const returnedItem = localStorage.getItem(MOODS_KEY);

    return returnedItem ? JSON.parse(returnedItem) : [];
  } catch {
    return [];
  }
}
