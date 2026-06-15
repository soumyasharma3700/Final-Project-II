
import EmptyState from "../components/EmptyState.jsx";
import MovieGrid from "../components/MovieGrid.jsx";
import { useFavorites } from "../context/FavoritesContext.jsx";
import { movies } from "../data/movies.js";

function Favorites() {
  const { favorites } = useFavorites();
  const favoriteMovies = movies.filter((movie) => favorites.includes(movie.id));

  return (
    <section className="page-section">
      <div className="section-heading">
        <h1>Favorites</h1>
        <p>{favoriteMovies.length} movies marked as favorites</p>
      </div>
      {favoriteMovies.length ? (
        <MovieGrid movies={favoriteMovies} />
      ) : (
        <EmptyState title="No favorites yet" text="Tap the heart on any movie to build your favorites shelf." />
      )}
    </section>
  );
}

export default Favorites;