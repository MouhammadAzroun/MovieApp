import React, { useState, useEffect } from 'react';

const NewReleaseList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMoviesByCurrentYear = async (year) => {
    const url = `https://www.omdbapi.com/?y=2023&apikey=263d22d8`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.Search); // Assuming 'data.Search' contains an array of movies
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data: ', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMoviesByCurrentYear("2022");
  }, []);

  return (
    <div className='new-release-list'>
      {loading ? (
        <p>Loading...</p>
      ) : movies.length === 0 ? (
        <p>No movies found</p>
      ) : (
        movies.map((movie, index) => (
          <div key={index} className='movie-item'>
            <img src={movie.Poster} alt="movie" />
          </div>
        ))
      )}
    </div>
  );
};

export default NewReleaseList;
