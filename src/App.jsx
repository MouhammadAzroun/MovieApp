import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import Cart from './components/Cart';
import NavBar from './Components/NavBar';
import SortOptions from './components/SortOptions';
import { Route, Routes } from 'react-router-dom';


const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [sortOrder, setSortOrder] = useState('asc');


	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;
	  
		const response = await fetch(url);
		const responseJson = await response.json();
	  
		if (responseJson.Search) {
		  const sortedMovies = responseJson.Search.sort((a, b) => {
			if (sortOrder === 'asc') {
			  return a.Year.localeCompare(b.Year);
			} else {
			  return b.Year.localeCompare(a.Year);
			}
		  });
	  
		  setMovies(sortedMovies);
		}
	  };
	  

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	const handleSortChange = (e) => {
		setSortOrder(e.target.value);
	  };
	  

	  //remove this
	  return (
		<div className="App">
			
			<Routes>
				
<Route path="/"
	element= {
		<div>
		  <NavBar />
		  <div className="movie-heading">
			<MovieListHeading heading='Movies' />
		  </div>
		  <div className="search-sort-container">
			<div>
			  <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className="sort-options">
			  <SortOptions sortMovies={handleSortChange} />
			</div>
		  </div>
		  <div className='row'>
			<MovieList movies={movies} sortOrder={sortOrder} />
		  </div>
		</div>
	}/>

<Route path="/cart"
	element={
		<div>
			<NavBar/>
			<div>
				<Cart/>
			</div>
		</div>
	}/>


			</Routes>
		</div>

	  )

	  return (
		<div>
		  <NavBar />
		  <div className="movie-heading">
			<MovieListHeading heading='Movies' />
		  </div>
		  <div className="search-sort-container">
			<div>
			  <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className="sort-options">
			  <SortOptions sortMovies={handleSortChange} />
			</div>
		  </div>
		  <div className='row'>
			<MovieList movies={movies} sortOrder={sortOrder} />
		  </div>
		</div>
	  );
	  
	  
	  
	  
	  
};

export default App;
