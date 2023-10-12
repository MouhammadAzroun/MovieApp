import React from 'react';

const MovieList = (props) => {
  return (
    <div className="movie-list">
      {props.movies.map((movie, index) => (
        <div key={index} className="movie-item">
          <img src={movie.Poster} alt='movie' />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
