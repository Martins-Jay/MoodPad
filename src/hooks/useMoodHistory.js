// import { useEffect, useState } from 'react';

// const STORAGE_KEY = 'mood-tracker-history';

// export function useMoodHistory() {
//   const [currentMood, setCurrentMood] = useState(null);
//   const [moodHistory, setMoodHistory] = useState([]);
//   // Load from localStorage safely on mount
//   useEffect(() => {
//     const strStoredMoods = localStorage.getItem(STORAGE_KEY);

//     if (strStoredMoods) {
//       const parsedMoods = JSON.parse(strStoredMoods);
//       setMoodHistory(parsedMoods);
//     }
//   }, []);

//   // Add new mood
//   function handleMoodSelect(moodObj) {
//     const newMood = {
//       id: Date.now(),
//       name: moodObj.name,
//       color: moodObj.color,
//       timestamp: new Date().toLocaleString(),
//       note: '',
//     };

//     setCurrentMood(moodObj.name);

//     setMoodHistory((moodHistory) => {
//       const updated = [newMood, ...moodHistory];

//       localStorage.setItem(STORAGE_KEY, JSON.stringify(updated)); // save immediately
//       return updated;
//     });
//   }

//   function deleteMood(moodToDelete) {
//     setMoodHistory((moodHistory) => {
//       const updated = moodHistory.filter(
//         (moodObj) => moodObj.id !== moodToDelete.id
//       ); // into the filter, we pass what we want to keep

//       setCurrentMood((currentMood) =>
//         currentMood === moodToDelete.name ? null : currentMood
//       );

//       localStorage.setItem(STORAGE_KEY, JSON.stringify(updated)); // save immediately
//       return updated;
//     });
//   }

//   function updateMoodNote(id, newNote) {
//     setMoodHistory((moodHistory) => {
//       const updated = moodHistory.map((moodObj) =>
//         moodObj.id === id ? { ...moodObj, note: newNote } : moodObj
//       );

//       localStorage.setItem(STORAGE_KEY, JSON.stringify(updated)); // save immediately
//       return updated;
//     });
//   }

//   function handleReset() {
//     setMoodHistory([]);
//     setCurrentMood(null);
//     localStorage.setItem(STORAGE_KEY, JSON.stringify([])); // clear localStorage
//     setShowResetConfirm(false); // modal close after confirming
//   }
// }
