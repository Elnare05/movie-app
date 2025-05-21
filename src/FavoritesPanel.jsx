import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setListName, saveFavoriteList, removeFromFavorites } from './actions/favoritesActions';
import { useNavigate } from 'react-router-dom';
import "./FavoritesPanel.css";

function FavoritesPanel() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector(state => state.favorites.favorites);
  const listName = useSelector(state => state.favorites.listName);
  const isListSaved = useSelector(state => state.favorites.isListSaved);

  const [input, setInput] = useState('');

  const handleSave = () => {
    if (input.trim() !== '') {
      dispatch(setListName(input));
      dispatch(saveFavoriteList());
    }
  };

  const handleGoToList = () => {
    navigate('/favoritelist');
  };

  const handleRemove = (movie) => {
    dispatch(removeFromFavorites(movie));
  };

  return (
    <div className="favorites-panel">
      <h2>Favorilər ({favorites.length})</h2>
      <ul>
        {favorites.map((movie) => (
          <li key={movie.imdbID} className="favorite-item">
            {movie.Title} ({movie.Year})
            {!isListSaved && (
              <button className="remove-btn" onClick={() => handleRemove(movie)}>x</button>
            )}
          </li>
        ))}
      </ul>

      {!isListSaved && (
        <>
          <input
            type="text"
            placeholder="Listə ad ver..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="list" onClick={handleSave}>Add Favorite List</button>
        </>
      )}

      <button className='favorite' onClick={handleGoToList}>Favorite List</button>

      {isListSaved && (
        <p><strong>List saxlanılıb:</strong> {listName}</p>
      )}
    </div>
  );
}

export default FavoritesPanel;
