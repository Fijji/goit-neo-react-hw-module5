import { useState} from "react";
import axios from 'axios';
import MovieList from '../components/MovieList/MovieList.jsx';

const API_KEY = 'd0626dcfe633566a19452ac778a15569'; 

function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
    axios.get(url)
      .then(response => setMovies(response.data.results))
      .catch(error => console.error(error));
  };

  return (
    <>
      <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
      <button onClick={searchMovies}>Search</button>
      <MovieList movies={movies} />
    </>
  );
}

export default MoviesPage;

