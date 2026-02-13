const PROXY = 'https://api.allorigins.win/raw?url=';

const moodToGenre = {
  happy: 'afrobeats',
  calm: 'chill amapiano',
  sad: 'afro soul rnb',
  anxious: 'lofi chill',
  angry: 'hip hop',
  neutral: 'afro pop',
};

function getMusicRecommendation(dominantMood) {
  async function fetchMusic() {
    try {
      const genre = moodToGenre[dominantMood];
      if (!genre) return;

      const query = encodeURIComponent(genre);

      const res = await fetch(
        `${PROXY}https://api.deezer.com/search?q=${query}`,
      );

      const data = await res.json();

      console.log(data);
    } catch (err) {}
  }

  fetchMusic();
}

export default getMusicRecommendation;
