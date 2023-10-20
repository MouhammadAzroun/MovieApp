import React, { useState } from 'react';

const SearchBox = (props) => {
  const { searchValue, setSearchValue, setSearchClicked } = props;

  const handleSearchClick = () => {
    setSearchClicked(true);
    setSearchValue(searchValue);
  };

  return (
    <div>
      <input
        className='form-control search-input'
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder='Type to search...'
      />
      <button className='search-button' onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};

export default SearchBox;
