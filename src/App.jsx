/* eslint-disable no-unused-vars */
// import SearchBar from "./components/SearchBar/SearchBar.jsx";
import "./App.css";

import './App.css';
import { Suspense, lazy, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation.jsx';

const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const MoviesPage = lazy(() => import('./pages/MoviesPage.jsx'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'));

function App() {
  const location = useLocation();  // for route handling
  const searchInputRef = useRef(null);  // example useRef for handling input

  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
