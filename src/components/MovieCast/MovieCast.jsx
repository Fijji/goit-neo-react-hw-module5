import styles from "./MovieCast.module.css";

import { useState, useEffect } from 'react';
import axios from 'axios';
import './MovieCast.module.css';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'd0626dcfe633566a19452ac778a15569'; 


function MovieCast({ movieId }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/movie/${movieId}/credits`, 
          {
            params: {
              api_key: API_KEY,
            },
          }
        );
        setCast(response.data.cast);
      } catch (error) {
        console.error('Error fetching movie cast:', error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map((member) => (
          <li key={member.cast_id}>
            {member.name} as {member.character}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieCast;

