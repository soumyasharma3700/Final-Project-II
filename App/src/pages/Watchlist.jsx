
import EmptyState from "../components/EmptyState.jsx";
import MovieGrid from "../components/MovieGrid.jsx";
import { useWatchlist } from "../context/WatchlistContext.jsx";
import { movies } from "../data/movies.js";

function Watchlist() {
  const { watchlist } = useWatchlist();
  const savedMovies = movies.filter((movie) => watchlist.includes(movie.id));

  return (
    <section className="page-section">
      <div className="section-heading">
        <h1>Watchlist</h1>
        <p>{savedMovies.length} movies saved for later</p>
      </div>
      {savedMovies.length ? (
        <MovieGrid movies={savedMovies} />
      ) : (
        <EmptyState title="Your watchlist is empty" text="Add movies from any card or details page." />
      )}
    </section>
  );
}

export default Watchlist;