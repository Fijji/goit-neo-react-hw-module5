import { useParams, useOutlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MovieCast from '../components/MovieCast/MovieCast';
import MovieReviews from '../components/MovieReviews/MovieReviews';
import axios from 'axios';

const API_KEY = 'd0626dcfe633566a19452ac778a15569'; 
const BASE_URL = 'https://api.themoviedb.org/3';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const outlet = useOutlet();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/movie/${movieId}`, 
          {
            params: {
              api_key: API_KEY,
            },
          }
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      {movieDetails && (
        <>
          <h1>{movieDetails.title}</h1>
          <p>{movieDetails.overview}</p>
          <MovieCast movieId={movieId} />
          <MovieReviews movieId={movieId} />
          {outlet} {/* Render nested components */}
        </>
      )}
    </div>
  );
}

export default MovieDetailsPage;

