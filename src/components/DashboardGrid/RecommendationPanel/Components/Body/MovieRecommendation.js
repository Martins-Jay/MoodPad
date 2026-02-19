import { useEffect, useState } from 'react';
import { getMoodBalanceForToday } from '../../../../../utils/moodUtils';
import getDominantMood from '../../../../../utils/getDominantMood';

import '../../recommendationPanel.css';
import CaretRight from '../../../../../assets/icons/CaretRight';

function MoviesRecommendation({ moodsArr, isPickerOpen, setIsPickerOpen }) {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const { moodBalanceArr } = getMoodBalanceForToday(moodsArr);
  const dominantMood = getDominantMood(moodBalanceArr)?.toLowerCase();

  // TMDb image CDN base URL. Combine with poster_path to generate full poster image URLs for rendering
  const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    const controller = new AbortController();

    const moodToMovieFilter = {
      happy: {
        genres: '35', // Comedy
        sort_by: 'popularity.desc',
        label: 'Feel-good comedies',
      },

      calm: {
        genres: '16,10751', // Animation, Family
        sort_by: 'vote_average.desc',
        label: 'Relaxing and comforting movies',
      },

      sad: {
        genres: '10751,16', // Family, Animation (comfort > drama)
        sort_by: 'vote_average.desc',
        label: 'Comfort movies to lift your mood',
      },

      anxious: {
        genres: '10751,35', // Family, Comedy (safe, light)
        sort_by: 'popularity.desc',
        label: 'Light movies to ease your mind',
      },

      angry: {
        genres: '28', // Action
        sort_by: 'popularity.desc',
        label: 'High-energy action movies',
      },

      neutral: {
        genres: '12', // Adventure
        sort_by: 'popularity.desc',
        label: 'Popular adventure movies',
      },
    };

    if (!dominantMood) return;

    async function fetchMovies() {
      setIsLoading(true);

      try {
        const randomPage = Math.floor(Math.random() * 8) + 1; // 1–8

        const filter = moodToMovieFilter[dominantMood];

        const res = await fetch(
          `https://moodpad-backend.onrender.com/api/tmdb/discover?with_genres=${encodeURIComponent(
            filter.genres,
          )}&sort_by=${encodeURIComponent(filter.sort_by)}&page=${randomPage}`,
          { signal: controller.signal },
        );

        const data = await res.json();
        console.log(data);

        const cleanMovies = (data.results || []).map((movieObj) => ({
          id: movieObj.id,
          title: movieObj.title || movieObj.original_title || 'Unknown title',
          overview: movieObj.overview || 'No overview available.',
          rating:
            typeof movieObj.vote_average === 'number'
              ? movieObj.vote_average.toFixed(1)
              : 'N/A',
          year: movieObj.release_date ? movieObj.release_date.slice(0, 4) : '—',
          poster: movieObj.poster_path
            ? `${TMDB_IMAGE_BASE_URL}${movieObj.poster_path}`
            : '/fallback.jpg',
          backdrop: movieObj.backdrop_path
            ? `${TMDB_IMAGE_BASE_URL}${movieObj.backdrop_path}`
            : null,
        }));

        const shuffled = [...cleanMovies].sort(() => Math.random() - 0.5);

        setMovies(shuffled);
        setCurrentIndex(0);
      } catch (err) {
        console.error(err);
        setMovies([]);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();

    return () => controller.abort();
  }, [dominantMood]);

  const currentMovie = movies[currentIndex] || {};

  const handleNext = () => {
    if (isPickerOpen) setIsPickerOpen(!isPickerOpen);

    if (movies.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % movies.length);
  };

  return isLoading || movies.length === 0 ? (
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
    <div className="movie-container">
      <div className="movie-info">
        <div className="left-content">
          <img
            src={currentMovie.poster}
            alt={currentMovie.title}
            className="poster-cover"
          />
        </div>

        <div className="movie-text">
          <div className="movie-top">
            <h5 className="movie-title">
              {currentMovie.title} 
            </h5>

            <h5 className="year-released">
              Released: {currentMovie.year}
            </h5>
            {isPickerOpen ? (
              ''
            ) : (
              <div className="right-content">
                <p className="movie-overview">{currentMovie.overview}</p>

                <div className="next-movie-container">
                  <button
                    onClick={handleNext}
                    className="next-movie-btn"
                    aria-label="Next movie"
                  >
                    <CaretRight size={15} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="movie-controls"></div>
    </div>
  );
}

export default MoviesRecommendation;
