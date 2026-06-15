import { Link } from "react-router-dom";
import { Bookmark, Heart, Star } from "lucide-react";
import { useFavorites } from "../context/FavoritesContext.jsx";
import { useWatchlist } from "../context/WatchlistContext.jsx";

function MovieCard({ movie }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { isInWatchlist, toggleWatchlist } = useWatchlist();
  const favorite = isFavorite(movie.id);
  const saved = isInWatchlist(movie.id);

  return (
    <article className="movie-card">
      <Link className="poster-link" to={`/movie/${movie.id}`} aria-label={`Open ${movie.title}`}>
        <img src={movie.image} alt={`${movie.title} poster`} loading="lazy" />
        <span className="rating-pill">
          <Star size={15} fill="currentColor" />
          {movie.rating.toFixed(1)}
        </span>
      </Link>
      <div className="movie-card-body">
        <Link className="movie-title" to={`/movie/${movie.id}`}>
          {movie.title}
        </Link>
        <div className="movie-meta">
          <span>{movie.year}</span>
          <span>{movie.genre}</span>
        </div>
        <div className="card-actions">
          <button
            className={saved ? "icon-button active" : "icon-button"}
            type="button"
            aria-label={saved ? "Remove from watchlist" : "Add to watchlist"}
            title={saved ? "Remove from watchlist" : "Add to watchlist"}
            onClick={() => toggleWatchlist(movie.id)}
          >
            <Bookmark size={18} fill={saved ? "currentColor" : "none"} />
          </button>
          <button
            className={favorite ? "icon-button active heart" : "icon-button heart"}
            type="button"
            aria-label={favorite ? "Remove favorite" : "Add favorite"}
            title={favorite ? "Remove favorite" : "Add favorite"}
            onClick={() => toggleFavorite(movie.id)}
          >
            <Heart size={18} fill={favorite ? "currentColor" : "none"} />
          </button>
        </div>
      </div>
    </article>
  );
}

export default MovieCard;