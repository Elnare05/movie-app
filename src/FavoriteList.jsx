import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./FavoriteList.css"
function FavoriteList() {
  const favorites = useSelector(state => state.favorites.favorites);
  const listName = useSelector(state => state.favorites.listName);
  const navigate = useNavigate();
  return (
    <div className="favorite-list-page">
      <h1>{listName}</h1>
      <ul>
        {favorites.map(movie => (
          <li key={movie.imdbID}>
            {movie.Title} ({movie.Year}){' '}
            <button
            className='imdb'
              onClick={() => window.open(`https://www.imdb.com/title/${movie.imdbID}`, '_blank')}
            >
              IMDb
            </button>
          </li>
        ))}
      </ul>
      <button className='movies' onClick={() => navigate('/')}>Movies</button>
    </div>
  );
}
export default FavoriteList;
