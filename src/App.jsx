import { useEffect, useState } from 'react'
import './App.css'
import './AppContentContainer.css'
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import Cart from './components/Cart';
import NavBar from './Components/NavBar';
import SortOptions from './components/SortOptions';
import CheckOut from './components/CheckOut';
import { Route, Routes } from 'react-router-dom';
import NewReleaseList from './Components/NewReleaseList';


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
	  

	  
	  return (
		<div className="App">
			
			<Routes>
				
<Route path="/"
	element= {
		<div id='appContainer'>
		  <NavBar />
		  <div className="movie-heading">
			<MovieListHeading heading='not netflix' />
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
<Route path="/checkout"
	element={
		<div> 
			<NavBar/>
			<div>
				<CheckOut/>
			</div>
		</div>
		
	}/>


	


			</Routes>
		</div>

	  )

	  return (
		<div className='app-content-container'>
		  <NavBar />
		  <div className="movie-heading">
			<MovieListHeading heading='not netflix' />
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

			{/* Går inte att få fram något från api med (y=) 
			som ska generera på årtal enligt omdapi's dokumentation */}
			{/* <NewReleaseList /> */}
		  </div>
		</div>
	  );
	  
	  
	  
	  
	  
};

export default App;
