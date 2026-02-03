// https://console.cloud.google.com/apis/credentials?project=moodmusicapp-486319

import { useState } from 'react';
import { getMoodBalanceForToday } from '../../../../../utils/moodUtils';
import getCurrentMood from '../../../../../utils/getCurrentMood';

function MusicRecommendation({ moodsArr }) {
  const [song, setSong] = useState(null);
  const [loading, setLoading] = useState(false);

  const { moodBalanceArr } = getMoodBalanceForToday(moodsArr);
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

  async function fetchSong(moodBalanceArr) {
    setLoading(true);

    const moodName1 = getCurrentMood(moodBalanceArr).toLowerCase();

    console.log(moodName1);
    const moodToQuery = {
      happy: 'top 2025 amapiano music',
      calm: 'calming relaxing music',
      sad: 'soft sad music comfort',
      anxious: 'anxiety relief calming music',
      angry: 'calming music to release anger',
      neutral: 'chill background music',
    };

    const moodName = moodToQuery[moodName1];

    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=1&q=${encodeURIComponent(
        moodName,
      )}&key=${API_KEY}`,
    );

    const data = await res.json();

    const cleanResult = data.items.filter(
      (musicObj) =>
        musicObj.videoId &&
        !musicObj.snippet.title.toLowerCase().includes('mix') &&
        !musicObj.snippet.title.toLowerCase().includes('radio'),
    );

    console.log(res, data, cleanResult);
  }

  return (
    <div className="music-rec-card">
      <img src="" alt="" className="abulm-cover" />

      <div className="song-info">
        <h5>title</h5>
        <p>artiste</p>
      </div>

      <div className="music-rec-actions">
        <button onClick={() => fetchSong(moodBalanceArr)}>Next</button>
        <a target="_blank" rel="noopener noreferrer">
          Open on Spotify
        </a>
        <a target="_blank" rel="noopener noreferrer">
          Open on Apple Music
        </a>
      </div>
    </div>
  );
}

export default MusicRecommendation;
