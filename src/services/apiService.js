import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDYyNmRjZmU2MzM1NjZhMTk0NTJhYzc3OGExNTU2OSIsIm5iZiI6MTcyODA1MTY5Mi4wNjA0NTMsInN1YiI6IjY2ZmZmODBjZmEzZTY5ZTBlZjdjY2ExYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xNt-D_s6LH4PvFXaVHyq5sIUu5ms29y4YJd3PZthc8o";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: TOKEN,
  },
  timeout: 10000,
});

export const fetchMovieDetails = (movieId) => {
  return apiClient.get(`/movie/${movieId}`);
};

export const fetchMovieCast = (movieId) => {
  return apiClient.get(`/movie/${movieId}/credits`);
};

export const fetchMovieReviews = (movieId) => {
  return apiClient.get(`/movie/${movieId}/reviews`);
};

export const searchMovies = (query) => {
  return apiClient.get("/search/movie", {
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page: 1,
    },
  });
};

export const fetchTrendingMovies = () => {
  return apiClient.get("/trending/movie/day");
};
