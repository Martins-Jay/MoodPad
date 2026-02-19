import { useMoods } from '../../hooks/useMoodHistory.js';
import { useState } from 'react';

import { useActiveMoodPanel } from '../../hooks/useActiveMoodPanel.js';

import PageWrapper from '../../components/Layout/PageWrapper/PageWrapper.js';
import Header from '../../components/Layout/Header/Header.js';
import MoodPicker from '../../components/MoodSection/MoodPicker/MoodPicker.js';
import ActiveMoodPanel from '../../components/ActiveMoodPanel/ActiveMoodPanel.js';
import MoodList from '../../components/MoodSection/MoodList/MoodList.js';
import EditMoodModal from '../../components/MoodSection/EditMoodModal/EditMoodModal.js';
import DashboardOverview from '../../components/DashboardOverview/DashboardOverview.js';
import ActiveMoodStatus from '../../components/ActiveMoodStatus/ActiveMoodStatus.js';

function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isRecommendationPanelOpen, setIsRecommendationPanelOpen] =
    useState(false);
  const [activeMood, setActiveMood] = useState({}); // currently open panel
  const [isActiveMoodPanelOpen, setIsActiveMoodPanelOpen] = useState(false);

  const {
    moodsArr,
    lastAction,
    moodBeingEditted,
    handleSaveNote,
    handleAddMood,
    handleRemoveNote,
    handleEditMood,
    handleUpdateText,
    handleCancelEdit,
  } = useMoods(isActiveMoodPanelOpen, setIsActiveMoodPanelOpen);

  const { handleMoodSelect } = useActiveMoodPanel(
    moodBeingEditted,
    isActiveMoodPanelOpen,
    setIsActiveMoodPanelOpen,
    setActiveMood,
    isRecommendationPanelOpen,
  );

  return (
    <PageWrapper>
      <Header moodsArr={moodsArr} />

      <MoodPicker onPickMood={handleAddMood} onMoodSelect={handleMoodSelect} />

      {isActiveMoodPanelOpen && (
        <ActiveMoodPanel
          activeMood={activeMood}
          onAddMood={handleAddMood}
          isOpen={isActiveMoodPanelOpen}
          setIsActiveMoodPanelOpen={setIsActiveMoodPanelOpen}
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

      <DashboardOverview
        moodsArr={moodsArr}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setIsRecommendationPanelOpen={setIsRecommendationPanelOpen}
        isRecommendationPanelOpen={isRecommendationPanelOpen}
      />

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
