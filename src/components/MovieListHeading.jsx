import React from "react";

const MovieListHeading = (props) => {
  return (
    <div id="heading">
      <div className="vintage__container">
        <p className="vintage vintage__bot">{props.heading}</p>
      </div>
    </div>
  );
};

export default MovieListHeading;
