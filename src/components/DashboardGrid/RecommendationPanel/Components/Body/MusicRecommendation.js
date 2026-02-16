import { useEffect, useState } from 'react';
import { getMoodBalanceForToday } from '../../../../../utils/moodUtils';
import getDominantMood from '../../../../../utils/getDominantMood';
import PlayNext from '../../../../../assets/icons/PlayNext';

function MusicRecommendation({ moodsArr }) {
  const [songs, setSongs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const { moodBalanceArr } = getMoodBalanceForToday(moodsArr);

  // dominantMood once per render
  const dominantMood = getDominantMood(moodBalanceArr)?.toLowerCase();

  function cleanTitle(title) {
    if (!title) return 'Unknown Title';

    // 1. Convert &amp; to &
    let cleaned = title.replace('&amp;', '&');

    // 2. Remove everything after |
    cleaned = cleaned.split('|')[0];

    // 3. Remove brackets
    cleaned = cleaned.replace(/\(.*?\)|\[.*?\]/g, '');

    return cleaned.trim();
  }

  useEffect(() => {
    const controller = new AbortController();

    const moodToQuery = {
      happy: 'amapiano afrobeat',
      calm: 'afro chill songs',
      sad: 'slow rnb soul',
      anxious: 'lofi chill hop',
      angry: 'hip hop rap',
      neutral: 'afrobeats mix',
    };

    if (!dominantMood) return;

    async function fetchSongs() {
      setIsLoading(true);

      try {
        // const randomIndex = Math.floor(Math.random() * 100); // random btw (0–99)

        // const res = await fetch(
        //   `https://moodpad-backend.onrender.com/api/music?q=${encodeURIComponent(
        //     moodToQuery[dominantMood] || 'afrobeats',
        //   )}&index=${randomIndex}`,
        //   { signal: controller.signal },
        // );

        // Jamendo uses offset paging (0, 25, 50...)
        const randomOffset = Math.floor(Math.random() * 8) * 25; // random num btw 0-175

        const res = await fetch(
          `https://moodpad-backend.onrender.com/api/jamendo?q=${encodeURIComponent(
            moodToQuery[dominantMood] || 'afrobeats',
          )}&offset=${randomOffset}`,
          { signal: controller.signal },
        );

        const data = await res.json();

        console.log(data);

        const cleanSongs = (data.data || []).map((musicObj) => ({
          title: cleanTitle(musicObj.name),
          artist: musicObj.artist_name || 'Unknown Artist',
          albumCover: musicObj.album_image || musicObj.image || '/fallback.jpg',
          preview: musicObj.audio || null, // stream url
        }));

        // easy shuffle
        const shuffled = [...cleanSongs].sort(() => Math.random() - 0.5);

        setSongs(shuffled);
        setCurrentIndex(0); // always start from first shuffled song
      } catch (error) {
        console.error(error);
        setSongs([]);
      } finally {
        setIsLoading(false);
      }
    }

    fetchSongs();

    return function () {
      controller.abort();
    };
  }, [dominantMood]);

  const currentSong = songs[currentIndex] || {};

  const handleNext = () => {
    if (songs.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % songs.length);
  };

  return isLoading || songs.length === 0 ? (
    <div className="skeleton-loader">
      <div className="music-info">
        <div className="skeleton-image"></div>

        <div className="skeleton-info">
          <div className="skeleton-title"></div>
          <div className="skeleton-artist"></div>
        </div>
      </div>

      <div className="skeleton-play-container">
        <div className="skeleton-audio"></div>

        <div className="skeleton-next-btn"></div>
      </div>
    </div>
  ) : (
    <div className="music-container">
      <div className="music-info">
        {/* Album Cover */}
        <img
          src={currentSong.albumCover}
          alt={currentSong.title}
          className="album-cover"
        />

        {/* Song Info */}
        <div className=" abulm-info">
          <h5 className="song-title">{currentSong.title}</h5>
          <p className="album-artist">{currentSong.artist}</p>
        </div>
      </div>

      <div className="play-container">
        {currentSong.preview && (
          <audio controls src={currentSong.preview} className="audio-preview" />
        )}

        {/* Controls */}
        <button onClick={handleNext} className="next-btn">
          <PlayNext size={33} />
        </button>
      </div>
    </div>
  );
}

export default MusicRecommendation;
