import React, { useState, useEffect } from 'react';

const Home = () => {
  const [movieTitle, setMovieTitle] = useState('');

  useEffect(() => {
    // Fetch a random movie recommendation from TMDb API
    // const apiKey = '4863735b554e78d4e809a1e93477aafe'; 
    // const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
    const url = 'https://labs.bible.org/api/?passage=random&type=json'

    // if (!apiKey) {
    //   console.error('API key is missing!');
    //   setMovieTitle('Failed to fetch a recommendation');
    //   return;
    // }

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const movies = data.results;
        const randomIndex = Math.floor(Math.random() * movies.length);
        const randomMovie = movies[randomIndex];
        setMovieTitle(randomMovie?.title || 'Failed to fetch a recommendation');
      })
      .catch(error => {
        console.error('Error fetching data:', error.message);
        setMovieTitle('Failed to fetch a recommendation');
      });
  }, []);

  return (
    <div>
      <h2>Random Movie Recommendation</h2>
      <p>{movieTitle}</p>
    </div>
  );
};

export default Home;
