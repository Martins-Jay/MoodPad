import { useEffect } from 'react';

export function useActiveMoodPanel(
  moodBeingEditted,
  isActiveMoodPanelOpen,
  setIsActiveMoodPanelOpen,
  setActiveMood,
) {
  
  useEffect(() => {
    if (!(isActiveMoodPanelOpen || moodBeingEditted)) return;

    // get how far the page is scrolled vertically from the top so we can restore it later
    const scrollY = window.scrollY;
    const body = document.body;

    // lock body position to fixed and
    body.style.position = 'fixed';
    body.style.inset = '0';

    // prevent default scroll
    const lockScroll = (e) => e.preventDefault();

    // block wheel and touch scroll
    window.addEventListener('wheel', lockScroll, { passive: false });
    window.addEventListener('touchmove', lockScroll, { passive: false });

    // Runs whenever the component unmounts and before the effect is executed again
    return () => {
      body.style.position = '';
      body.style.inset = '';

      window.removeEventListener('wheel', lockScroll);
      window.removeEventListener('touchmove', lockScroll);

      window.scrollTo(0, scrollY);
    };
  }, [isActiveMoodPanelOpen, moodBeingEditted]);

  function handleMoodSelect(moodObj) {
    setActiveMood(() => ({
      ...moodObj,
    }));

    setIsActiveMoodPanelOpen(true);
  }

  return { handleMoodSelect };
}
