import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList/MovieList.jsx';

const API_KEY = 'd0626dcfe633566a19452ac778a15569'; 
const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(url)
      .then(response => setMovies(response.data.results))
      .catch(error => console.error(error));
  }, []);

  return <MovieList movies={movies} />;
}

export default HomePage;

