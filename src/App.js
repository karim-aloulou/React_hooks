import './App.css';
import {useState} from "react"
import { Data } from './components/Data';
import MoviesList from './components/moviesList/MoviesList';
import AddMovie from './components/add/AddMovie';
import Header from './components/header/Header';


function App() {
  const [movies, setMovies] = useState(Data)
  const [nameSearch, setNameSearch] = useState("")
  const [rateSearch, setRateSearch] = useState(Number)
  const handleSearch = (e) => {
    setNameSearch(e.target.value)
    setRateSearch(e.target.value)
  }
  const handleMovie = (newMovie) => {
      setMovies([...movies, newMovie])
  }
  return (
    <div className="App">
      
      
        
        <div>
          <Header handleSearch={handleSearch} />
          <MoviesList movies={movies} nameSearch={nameSearch} rateSearch={rateSearch} />
          <AddMovie handleMovie={handleMovie}/>
          
        </div>
        
       
      
    </div>
  );
}

export default App;

