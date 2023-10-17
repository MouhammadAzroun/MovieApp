import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { actions } from "../features/cart"

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


  //value är innehållet i kundvagnen
  const value = useSelector( state => state.cart);
  //Behövs för tillgång till kundvagnen
  const dispatch = useDispatch();
  //Funktioner att använda för kundvagnen
  const add = () => dispatch(actions.add(movieToDisplay));
  const clear = () => dispatch(actions.clear());

  const sortedMovies = props.movies.slice().sort((a, b) => {
    if (props.sortOrder === 'asc') {
      return a.Year.localeCompare(b.Year);
    } else {
      return b.Year.localeCompare(a.Year);
    }
  });

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

          <button onClick={add} id="lightBox-addToCartButton">Add to cart</button>

        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MovieList;
