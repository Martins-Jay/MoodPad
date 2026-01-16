import { useState } from 'react';

import PageWrapper from '../../components/Layout/PageWrapper/PageWrapper.js';
import Header from '../../components/Layout/Header/Header.js';
import MoodList from '../../components/MoodSection/MoodList/MoodList.js';
import MoodPicker from '../../components/MoodSection/MoodPicker/MoodPicker.js';
import ActiveMoodPanel from '../../components/ActiveMoodPanel/ActiveMoodPanel.js';

function Home() {
  const [moodsArr, setMoodsArr] = useState([]);
  const [activeMood, setActiveMood] = useState({}); // currently open panel

  function handleMoodSelect(iconObj) {
    setActiveMood(() => ({
      ...iconObj,
      id: Date.now(),
      isoDate: new Date().toISOString(),
    }));
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

  function handleAddMood(iconObj, selectedMoodId, formattedText) {
    setMoodsArr((prevMood) => [
      {
        ...iconObj,
        id: Date.now(),
        isoDate: new Date().toISOString(),
      },
      ...prevMood,
    ]);
  }

  return (
    <PageWrapper>
      <Header />
      <MoodPicker onPickMood={handleAddMood} onMoodSelect={handleMoodSelect} />
      <ActiveMoodPanel activeMood={activeMood} />
      {/* <MoodList
        moodsArr={moodsArr}
        onSaveNote={handleSaveNote}
        onMoodIconSelect={handleMoodIconSelect}
      /> */}
    </PageWrapper>
  );
}

export default Home;
