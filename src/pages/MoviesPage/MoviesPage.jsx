import { useState, useEffect, useCallback } from "react";
import { searchMovies } from "../../services/apiService.js";
import MovieList from "../../components/MovieList/MovieList.jsx";
import styles from "./MoviesPage.module.css";
import { useLocation, useNavigate } from "react-router-dom";

function MoviesPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = useCallback(
    async (searchQuery) => {
      if (!searchQuery) {
        setMovies([]);
        return;
      }
      try {
        const response = await searchMovies(searchQuery);
        setMovies(response.data.results);

        navigate({
          pathname: "/movies",
          search: `?name=${searchQuery}`,
        });

        setQuery("");
      } catch (error) {
        console.error("Error searching for movies:", error);
      }
    },
    [navigate]
  );

  const handleQueryChange = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    if (searchQuery === "") {
      navigate({
        pathname: "/movies",
      });
      setMovies([]);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get("name");

    if (searchQuery) {
      setQuery(searchQuery);
      handleSearch(searchQuery);
    }
  }, [location.search, handleSearch]);

  return (
    <div className={styles.moviesContainer}>
      <input
        type="text"
        value={query}
        onChange={handleQueryChange}
        className={styles.searchInput}
        placeholder="Search for movies..."
      />
      <button
        onClick={() => handleSearch(query)}
        className={styles.searchButton}
      >
        Search
      </button>
      <MovieList movies={movies} />
    </div>
  );
}

export default MoviesPage;
