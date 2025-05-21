import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import MovieList from './MovieList';
import FavoritesPanel from './FavoritesPanel';
import FavoriteList from './FavoriteList';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const API_KEY = '34b471de';

  const fetchMovies = async (query) => {
    const res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
    const data = await res.json();
    if (data.Search) setMovies(data.Search);
    else setMovies([]);
  };

  useEffect(() => {
    fetchMovies('Harry Potter');
  }, []);

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Sidebar
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  fetchMovies={fetchMovies}
                />
                <div className="main-layout">
                  <MovieList movies={movies} />
                  <FavoritesPanel />
                </div>
              </>
            }
          />
          <Route path="/favoritelist" element={<FavoriteList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
