import { useEffect, useState } from 'react';
import { loadMoods, saveMoods } from '../utils/storage';

export function useMoods(isActiveMoodPanelOpen, setIsActiveMoodPanelOpen) {
  const [moodsArr, setMoodsArr] = useState(() => loadMoods());

  const [lastAction, setLastAction] = useState(null); // 'added' | 'removed' | null --> used for conditional rendering in ActiveMoodPanel

  const [moodBeingEditted, setMoodBeingEditted] = useState(null);

  const [activeReadMore, setActiveReadMore] = useState(null);

  // Save moods
  useEffect(
    function () {
      saveMoods(moodsArr);
    },
    [moodsArr],
  );

  function handleSaveNote(selectedMoodId, formattedText) {
    setMoodsArr((prevMoods) =>
      prevMoods.map((moodObj) =>
        moodObj.id === selectedMoodId
          ? { ...moodObj, text: formattedText }
          : moodObj,
      ),
    );
  }

  function handleAddMood(iconObj, formattedText) {
    setMoodsArr((prevMoods) => [
      {
        ...iconObj,
        text: formattedText,
        timestamp: Date.now(),
      },
      ...prevMoods,
    ]);

    setIsActiveMoodPanelOpen(false);
    setLastAction('added');
  }

  function handleRemoveNote(selectedMoodId) {
    setMoodsArr((prevMoods) =>
      prevMoods.filter((moodObj) => moodObj.timestamp !== selectedMoodId),
    );

    setLastAction('removed');
  }

  function handleEditMood(moodObj) {
    setMoodBeingEditted(moodObj);
  }

  function handleUpdateText(selectedMoodId, formattedText) {
    console.log(selectedMoodId);
    if (!formattedText.trim()) return;

    setMoodsArr((prevMoods) =>
      prevMoods.map((moodObj) =>
        moodObj.timestamp === selectedMoodId
          ? { ...moodObj, text: formattedText }
          : moodObj,
      ),
    );

    setActiveReadMore((activeReadMore) => {
      return { ...activeReadMore, text: formattedText };
    });

    setMoodBeingEditted(null);
  }

  function handleCancelEdit() {
    setMoodBeingEditted(null);
  }

  function handleReadMore(moodObj) {
    setActiveReadMore(moodObj);
  }

  return {
    moodsArr,
    lastAction,
    moodBeingEditted,
    handleSaveNote,
    handleAddMood,
    handleRemoveNote,
    handleEditMood,
    handleUpdateText,
    handleCancelEdit,
    handleReadMore,
    activeReadMore,
    setActiveReadMore,
  };
}
