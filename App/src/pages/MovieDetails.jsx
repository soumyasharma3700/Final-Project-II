import { Link, Navigate, useParams } from "react-router-dom";
import { Bookmark, Calendar, Clock, Heart, Star, Tags, UserRound } from "lucide-react";
import SimilarMovies from "../components/SimilarMovies.jsx";
import { getMovieById } from "../data/movies.js";
import { useFavorites } from "../context/FavoritesContext.jsx";
import { useWatchlist } from "../context/WatchlistContext.jsx";

function formatNumber(value) {
  return new Intl.NumberFormat("en", { notation: "compact" }).format(value);
}

function MovieDetails() {
  const { id } = useParams();
  const movie = getMovieById(id);
  const { isFavorite, toggleFavorite } = useFavorites();
  const { isInWatchlist, toggleWatchlist } = useWatchlist();

  if (!movie) return <Navigate to="/" replace />;

  const favorite = isFavorite(movie.id);
  const saved = isInWatchlist(movie.id);

  return (
    <>
      <section
        className="detail-hero"
        style={{ backgroundImage: `linear-gradient(90deg, rgba(20,24,28,.98), rgba(20,24,28,.7), rgba(20,24,28,.18)), url("${movie.banner}")` }}
      >
        <div className="detail-layout">
          <img className="detail-poster" src={movie.image} alt={`${movie.title} poster`} />
          <div className="detail-copy">
            <Link className="genre-link" to={`/genre/${encodeURIComponent(movie.genre)}`}>
              {movie.genre}
            </Link>
            <h1>{movie.title}</h1>
            <div className="detail-meta">
              <span><Calendar size={17} /> {movie.year}</span>
              <span><Clock size={17} /> {movie.runtime}</span>
              <span><Star size={17} fill="currentColor" /> {movie.rating.toFixed(1)}</span>
            </div>
            <p>{movie.description}</p>
            <div className="detail-actions">
              <button
                className={saved ? "button button-primary" : "button button-ghost"}
                type="button"
                onClick={() => toggleWatchlist(movie.id)}
              >
                <Bookmark size={18} fill={saved ? "currentColor" : "none"} />
                {saved ? "In Watchlist" : "Add to Watchlist"}
              </button>
              <button
                className={favorite ? "button button-primary heart-button" : "button button-ghost"}
                type="button"
                onClick={() => toggleFavorite(movie.id)}
              >
                <Heart size={18} fill={favorite ? "currentColor" : "none"} />
                {favorite ? "Favorited" : "Favorite"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="detail-info-grid">
        <div className="info-panel">
          <h2>Film Details</h2>
          <p><UserRound size={18} /> <strong>Director:</strong> {movie.director}</p>
          <p><strong>Cast:</strong> {movie.cast.join(", ")}</p>
          <div className="tag-list">
            <Tags size={18} />
            {movie.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="stats-grid">
          <div className="stat-card">
            <span>{formatNumber(movie.stats.views)}</span>
            <p>Views</p>
          </div>
          <div className="stat-card">
            <span>{formatNumber(movie.stats.likes)}</span>
            <p>Likes</p>
          </div>
          <div className="stat-card">
            <span>{formatNumber(movie.stats.lists)}</span>
            <p>Lists</p>
          </div>
          <div className="stat-card">
            <span>{movie.similar.length}</span>
            <p>Recommendations</p>
          </div>
        </div>
      </section>

      <SimilarMovies ids={movie.similar} />
    </>
  );
}

export default MovieDetails;