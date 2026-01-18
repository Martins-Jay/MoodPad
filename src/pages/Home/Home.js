import { useState } from 'react';

import PageWrapper from '../../components/Layout/PageWrapper/PageWrapper.js';
import Header from '../../components/Layout/Header/Header.js';
import MoodPicker from '../../components/MoodSection/MoodPicker/MoodPicker.js';
import ActiveMoodPanel from '../../components/ActiveMoodPanel/ActiveMoodPanel.js';
import MoodList from '../../components/MoodSection/MoodList/MoodList.js';

function Home() {
  const [moodsArr, setMoodsArr] = useState([]);
  const [activeMood, setActiveMood] = useState({}); // currently open panel
  const [isActiveMoodPanelOpen, setIsActiveMoodPanelOpen] = useState(false);
  const [lastAction, setLastAction] = useState(null); // 'added' | 'removed' | null --> used for conditional rendering in ActiveMoodPanel


  function handleMoodSelect(iconObj) {
    setActiveMood(() => ({
      ...iconObj,
      id: Date.now(),
      isoDate: new Date().toISOString(),
    }));

    setIsActiveMoodPanelOpen(true);
  }

  function handleSaveNote(selectedMoodId, formattedText) {
    setMoodsArr((prevMood) =>
      moodsArr.map((moodObj) =>
        moodObj.id === selectedMoodId
          ? { ...moodObj, note: formattedText }
          : moodObj
      )
    );
  }

  function handleAddMood(iconObj, formattedText) {
    setMoodsArr((prevMood) => [
      {
        ...iconObj,
        text: formattedText,
        id: Date.now(),
        isoDate: new Date().toISOString(),
      },
      ...prevMood,
    ]);

    setIsActiveMoodPanelOpen(false);
    setLastAction('added')
  }

  function handleRemoveNote(selectedMoodId) {
    setMoodsArr((prevMood) =>
      moodsArr.filter((moodObj) => moodObj.id !== selectedMoodId)
    );

    setLastAction('removed')
  }

  return (
    <PageWrapper>
      <Header />
      <MoodPicker onPickMood={handleAddMood} onMoodSelect={handleMoodSelect} />
      <ActiveMoodPanel
        activeMood={activeMood}
        onSaveReflection={handleAddMood}
        isOpen={isActiveMoodPanelOpen}
        moodsArr={moodsArr}
        lastAction={lastAction}
      />
      <MoodList
        moodsArr={moodsArr}
        onSaveNote={handleSaveNote}
        onRemoveNote={handleRemoveNote}
      />
    </PageWrapper>
  );
}

export default Home;
