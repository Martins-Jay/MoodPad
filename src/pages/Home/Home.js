// Imports sections, provide shared state via hooks control layout
import PageWrapper from '../../components/Layout/PageWrapper/PageWrapper.js';
import Header from '../../components/Layout/Header/Header.js';
import MoodList from '../../components/MoodSection/MoodList/MoodList.js';
import MoodPicker from '../../components/MoodSection/MoodPicker/MoodPicker.js';
import { useState } from 'react';

function Home() {
  const [moodsArr, setMoodsArr] = useState([]);

  function handlePickMood(iconObj) {
    setMoodsArr((prevMood) => [
      { ...iconObj, id: Date.now(), isoDate: new Date().toISOString() },
      ...prevMood,
    ]);
  }

  return (
    <PageWrapper>
      <Header />
      <MoodPicker onPickMood={handlePickMood} />
      <MoodList selectedMoods={moodsArr} />
    </PageWrapper>
  );
}

export default Home;
