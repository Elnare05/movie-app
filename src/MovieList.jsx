import React from 'react';
import MovieCard from './MovieCard';
import "./MovieList";
function MovieList({ movies }) {
  return (
    <div className="main">
      <div className="movie-list">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
        ) : (
          <p>Film tapılmadı</p>
        )}
      </div>
    </div>
  );
}
export default MovieList;