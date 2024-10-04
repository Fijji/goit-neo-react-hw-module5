import styles from "./MovieReviews.module.css";

import { useEffect, useState } from 'react';
import axios from 'axios';
import './MovieReviews.module.css';

const API_KEY = 'd0626dcfe633566a19452ac778a15569'; 
const BASE_URL = 'https://api.themoviedb.org/3';

function MovieReviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/movie/${movieId}/reviews`, 
          {
            params: {
              api_key: API_KEY,
            },
          }
        );
        setReviews(response.data.results);
      } catch (error) {
        console.error('Error fetching movie reviews:', error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>{review.content}</p>
            <p><strong>- {review.author}</strong></p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieReviews;


