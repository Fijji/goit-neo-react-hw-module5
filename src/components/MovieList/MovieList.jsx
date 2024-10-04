import styles from "./MovieList.module.css";


import { Link } from 'react-router-dom';

function MovieList({ movies }) {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;

