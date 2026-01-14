// Imports sections, provide shared state via hooks control layout
import PageWrapper from '../../components/Layout/PageWrapper/PageWrapper.js';
import Header from '../../components/Layout/Header/Header.js';
import MoodList from '../../components/MoodSection/MoodList/MoodList.js';
import MoodPicker from '../../components/MoodSection/MoodPicker/MoodPicker.js';
import { useState } from 'react';

function Home() {
  const [moodsArr, setMoodsArr] = useState([]);


  function handleSaveNote(selectedMoodId, formattedText) {
    console.log(selectedMoodId, formattedText);
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
      <MoodPicker onPickMood={handleAddMood} />
      <MoodList selectedMoods={moodsArr} onSaveNote={handleSaveNote} />
    </PageWrapper>
  );
}

export default Home;
