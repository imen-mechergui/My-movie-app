import React,{useState} from 'react';
import './App.css';

import MoviesData from './Components/MoviesData';
import MovieList from './Components/MovieList'
import AddMovies from './Components/AddMovies';
import MovieSearch from './Components/MovieSearch';

function App() {
  const [moviesList,setMoviesList] = useState(MoviesData)
 const [searchByName, setsearchByName] = useState('')
 const [serchByRate, setserchByRate] = useState(0)
 
  const addMovies=(newMovies) =>{
    setMoviesList([...moviesList, newMovies])
  }
  return (
    <div className="App">
      <MovieSearch setsearchByName={setsearchByName} serchByRate={serchByRate} setserchByRate={setserchByRate} />
    <MovieList moviesList={moviesList} searchByName={searchByName}  serchByRate={serchByRate} /> 
    <AddMovies addMovies={addMovies} /> 
    </div>
  );
}

export default App;