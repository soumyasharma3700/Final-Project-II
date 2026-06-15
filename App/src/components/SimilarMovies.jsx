import MovieCard from "./MovieCard.jsx";
import { getMoviesByIds } from "../data/movies.js";

function SimilarMovies({ ids }) {
  const similar = getMoviesByIds(ids);

  if (!similar.length) return null;

  return (
    <section className="content-section">
      <div className="section-heading">
        <h2>Similar Movies</h2>
        <p>Recommendations linked directly in the local dataset.</p>
      </div>
      <div className="movie-grid compact">
        {similar.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}

export default SimilarMovies;