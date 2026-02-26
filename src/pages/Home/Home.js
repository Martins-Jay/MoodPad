import { useMoods } from '../../hooks/useMoodHistory.js';
import { useState } from 'react';

import { useActiveMoodPanel } from '../../hooks/useActiveMoodPanel.js';

import PageWrapper from '../../components/Layout/PageWrapper/PageWrapper.js';
import Header from '../../components/Layout/Header/Header.js';
import MoodPicker from '../../components/MoodSection/MoodPicker/MoodPicker.js';
import ActiveMoodPanel from '../../components/ActiveMoodPanel/ActiveMoodPanel.js';
import EditMoodModal from '../../components/MoodSection/EditMoodModal/EditMoodModal.js';
import ActiveMoodStatus from '../../components/ActiveMoodStatus/ActiveMoodStatus.js';
import DashboardOverview from '../../components/Overview/DashboardOverview.js';

function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [activefilter, setActiveFilter] = useState('today')
  const [isRecommendationPanelOpen, setIsRecommendationPanelOpen] =
    useState(false);
  const [activeMood, setActiveMood] = useState({}); // currently open panel
  const [isActiveMoodPanelOpen, setIsActiveMoodPanelOpen] = useState(false);

  const {
    moodsArr,
    lastAction,
    moodBeingEditted,
    handleAddMood,
    handleRemoveNote,
    handleEditMood,
    handleUpdateText,
    handleCancelEdit,
    handleReadMore,
    activeReadMore,
    setActiveReadMore,
    isCardEdit,
    setIsCardEdit,
    handleCardEdit,
  } = useMoods(isActiveMoodPanelOpen, setIsActiveMoodPanelOpen);

  const { handleMoodSelect } = useActiveMoodPanel(
    moodBeingEditted,
    isActiveMoodPanelOpen,
    setIsActiveMoodPanelOpen,
    setActiveMood,
    isRecommendationPanelOpen,
    activeReadMore,
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
        onRemoveNote={handleRemoveNote}
        onEditMood={handleEditMood}
        setIsRecommendationPanelOpen={setIsRecommendationPanelOpen}
        isRecommendationPanelOpen={isRecommendationPanelOpen}
        activeReadMore={activeReadMore}
        onReadMore={handleReadMore}
        setActiveReadMore={setActiveReadMore}
        isCardEdit={isCardEdit}
        setIsCardEdit={setIsCardEdit}
        onHandleCardEdit={handleCardEdit}
        activefilter={activefilter}
        setActiveFilter={setActiveFilter}
      />

      {moodBeingEditted && (
        <EditMoodModal
          moodObj={moodBeingEditted}
          onUpdateText={handleUpdateText}
          onCancelEdit={handleCancelEdit}
          activeReadMore={activeReadMore}
          setIsCardEdit={setIsCardEdit}
          setActiveReadMore={setActiveReadMore}
        />
      )}
    </PageWrapper>
  );
}

export default Home;
