import MovieCard from "./MovieCard.jsx";
import EmptyState from "./EmptyState.jsx";

function MovieGrid({ movies, emptyTitle = "No movies found", emptyText = "Try a different search or genre." }) {
  if (!movies.length) {
    return <EmptyState title={emptyTitle} text={emptyText} />;
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieGrid;