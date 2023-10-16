import React, { useState } from "react";

const MovieList = (props) => {
  const [lightboxDisplay, setLightboxDisplay] = useState(false);
  const [movieToDisplay, setMovieToDisplay] = useState(null);

  const openAndSetLightBox = (movie) => {
    setMovieToDisplay(movie);
    setLightboxDisplay(true);
  };

  const closeLightBox = () => {
    setLightboxDisplay(false);
  };

  return (
    <div className="movie-list">
      {props.movies.map((movie, index) => (
        <div key={index} className="movie-item">
          <img
            src={movie.Poster}
            alt="movie"
            onClick={() => openAndSetLightBox(movie)}
          />
        </div>
      ))}
      {lightboxDisplay ? (
        <div id="lightBox" onClick={closeLightBox}>
          <div id="lightBox-poster">
            <h3 id="lightBox-title">
              {movieToDisplay.Title}
              <br />
              <p id="lightBox-year">( {movieToDisplay.Year} )</p>
            </h3>
            <img id="lightBox-img" src={movieToDisplay.Poster} />
          </div>

          <button id="lightBox-addToCartButton">Add to cart</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MovieList;
