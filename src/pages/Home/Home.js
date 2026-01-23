import { useEffect, useState } from 'react';

import PageWrapper from '../../components/Layout/PageWrapper/PageWrapper.js';
import Header from '../../components/Layout/Header/Header.js';
import MoodPicker from '../../components/MoodSection/MoodPicker/MoodPicker.js';
import ActiveMoodPanel from '../../components/ActiveMoodPanel/ActiveMoodPanel.js';
import MoodList from '../../components/MoodSection/MoodList/MoodList.js';
import EditMoodModal from '../../components/MoodSection/EditMoodModal/EditMoodModal.js';
import DashboardOverview from '../../components/DashboardOverview/DashboardOverview.js';
import ActiveMoodStatus from '../../components/ActiveMoodStatus/ActiveMoodStatus.js';

function Home() {
  const [moodsArr, setMoodsArr] = useState([]);
  const [activeMood, setActiveMood] = useState({}); // currently open panel
  const [isActiveMoodPanelOpen, setIsActiveMoodPanelOpen] = useState(false);
  const [lastAction, setLastAction] = useState(null); // 'added' | 'removed' | null --> used for conditional rendering in ActiveMoodPanel
  const [moodBeingEditted, setMoodBeingEditted] = useState(null);

  const [activeTab] = useState('dashboard');

  useEffect(() => {
    if (isActiveMoodPanelOpen || moodBeingEditted) {
      // Lock background scroll
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none'; // iOS Safari fix
    } else {
      // Restore scroll
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }

    // Cleanup: prevent “stuck scrolling” bugs
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isActiveMoodPanelOpen, moodBeingEditted]);


  function handleMoodSelect(iconObj) {
    setActiveMood(() => ({
      ...iconObj,
      id: Date.now(),
      isoDate: new Date().toISOString(),
    }));

    setIsActiveMoodPanelOpen(true);
  }

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
        id: Date.now(),
        isoDate: new Date().toISOString(),
      },
      ...prevMoods,
    ]);

    setIsActiveMoodPanelOpen(false);
    setLastAction('added');
  }

  function handleRemoveNote(selectedMoodId) {
    setMoodsArr((prevMoods) =>
      prevMoods.filter((moodObj) => moodObj.id !== selectedMoodId),
    );

    setLastAction('removed');
  }

  function handleEditMood(moodObj) {
    setMoodBeingEditted(moodObj);
  }

  function handleUpdateText(selectedMoodId, formattedText) {
    if (!formattedText.trim()) return;

    setMoodsArr((prevMoods) =>
      prevMoods.map((moodObj) =>
        moodObj.id === selectedMoodId
          ? { ...moodObj, text: formattedText }
          : moodObj,
      ),
    );

    setMoodBeingEditted(null);
  }

  function handleCancelEdit() {
    setMoodBeingEditted(null);
  }

  return (
    <PageWrapper>
      <Header moodsArr={moodsArr} />

      <MoodPicker onPickMood={handleAddMood} onMoodSelect={handleMoodSelect} />

      {isActiveMoodPanelOpen && (
        <ActiveMoodPanel
          activeMood={activeMood}
          onAddMood={handleAddMood}
          isOpen={isActiveMoodPanelOpen}
          moodsArr={moodsArr}
          lastAction={lastAction}
        />
      )}

      <ActiveMoodStatus
        isPanelOpen={isActiveMoodPanelOpen}
        activeMood={activeMood}
        lastAction={lastAction}
        moodsArr={moodsArr}
      />

      <DashboardOverview moodsArr={moodsArr} activeTab={activeTab} />

      {moodBeingEditted && (
        <EditMoodModal
          moodObj={moodBeingEditted}
          onUpdateText={handleUpdateText}
          onCancelEdit={handleCancelEdit}
        />
      )}

      <MoodList
        moodsArr={moodsArr}
        onSaveNote={handleSaveNote}
        onRemoveNote={handleRemoveNote}
        onEditMood={handleEditMood}
      />
    </PageWrapper>
  );
}

export default Home;
