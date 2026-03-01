import { useEffect } from 'react';

export function useActiveMoodPanel(
  moodBeingEditted,
  isActiveMoodPanelOpen,
  setIsActiveMoodPanelOpen,
  setActiveMood,
  isRecommendationPanelOpen,
  activeReadMore,
  isFullHistoryModalOpen,
) {
  useEffect(() => {
    if (!(isActiveMoodPanelOpen || moodBeingEditted)) return;

    // get how far the page is scrolled vertically from the top so we can restore it later
    const scrollY = window.scrollY;
    const body = document.body;

    // lock body position to fixed
    body.style.position = 'fixed';
    body.style.inset = '0';

    // prevent default scroll
    const lockScroll = (e) => e.preventDefault();

    // block wheel and touch scroll
    window.addEventListener('wheel', lockScroll, { passive: false });

    // Runs whenever the component unmounts and before the effect is executed again
    return () => {
      body.style.position = '';
      body.style.inset = '';

      window.removeEventListener('wheel', lockScroll);

      window.scrollTo(0, scrollY);
    };
  }, [isActiveMoodPanelOpen, moodBeingEditted]);

  useEffect(
    function () {
      if (isFullHistoryModalOpen) {
        document.body.style.overflow = 'hidden'; // prevent page scroll
      } else {
        document.body.style.overflow = '';
      }

      return () => {
        document.body.style.overflow = '';
      }
    },
    [isFullHistoryModalOpen],
  );

  function handleMoodSelect(moodObj) {
    if (isRecommendationPanelOpen || activeReadMore) return;

    setActiveMood(() => ({
      ...moodObj,
    }));

    setIsActiveMoodPanelOpen(true);
  }

  return { handleMoodSelect };
}
