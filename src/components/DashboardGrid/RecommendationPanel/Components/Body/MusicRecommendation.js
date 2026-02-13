// https://console.cloud.google.com/apis/credentials?project=moodmusicapp-486319

import { useEffect, useState } from 'react';
import { getMoodBalanceForToday } from '../../../../../utils/moodUtils';
import getDominantMood from '../../../../../utils/getDominantMood';
// import { useMusicRecommendation } from '../../../../../hooks/useMusicRecommendation';

// import getMusicRecommendation from '../../../../../utils/getMusicRecommendation';

function MusicRecommendation({ moodsArr }) {
  const [songs, setSongs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // const [loading, setLoading] = useState(false);

  const currentSong = songs[currentIndex];

  const { moodBalanceArr } = getMoodBalanceForToday(moodsArr);

  async function fetchSong() {
    const moodToQuery = {
      happy: 'amapiano afrobeat',
      calm: 'chill afro rnb',
      sad: 'slow rnb soul',
      anxious: 'lofi chill hop',
      angry: 'hip hop rap',
      neutral: 'afrobeats mix',
    };

    const dominantMood = getDominantMood(moodBalanceArr).toLowerCase();

    const query = moodToQuery[dominantMood];

    try {
      const res = await fetch(
        `https://moodpad-backend.onrender.com/api/music?q=${encodeURIComponent(query)}`,
      );

      const data = await res.json(); // the same object Deezer returned
      console.log(data);
      setSongs(data.data);
    } catch (err) {
      console.error('Failed to fetch song', err);
    } finally {
      setCurrentIndex((currentIndex) => currentIndex + 1);
    }
  }

  useEffect(
    function () {
      console.log(songs);
    },
    [songs],
  );

  return (
    <div className="music-rec-card">
      <img
        src={currentSong?.album?.cover_medium}
        alt=""
        className="abulm-cover"
        style={{ width: '140px', height: '140px' }}
      />

      <div className="song-info">
        <h5>{currentSong?.title}</h5>
        <p>artiste</p>
      </div>

      <div className="music-rec-actions">
        <button onClick={() => fetchSong()}>Next</button>
        {/* <a target="_blank" rel="noopener noreferrer">
          Open on Spotify
        </a>
        <a target="_blank" rel="noopener noreferrer">
          Open on Apple Music
        </a> */}
      </div>
    </div>
  );
}

export default MusicRecommendation;
