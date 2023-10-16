import React from 'react';

const SortOptions = ({ sortMovies }) => {
  return (
    <div>
      <label>Sort By Year: </label>
      <select onChange={sortMovies}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default SortOptions;
