import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites } from './actions/favoritesActions';
import "./MovieCard.css"
 function MovieCard ({ movie }) {
  const dispatch = useDispatch();
  const isListSaved = useSelector(state => state.favorites.isListSaved);

  return (
    <div className="movie-card">
      <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'} alt={movie.Title} />
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>Year: {movie.Year}</p>
        <button
          className="fav-btn"
          disabled={isListSaved}
          onClick={() => dispatch(addToFavorites(movie))}
        >
          Favorite
        </button>
      </div>
    </div>
  );
}
export default MovieCard;