import { Navigate, useParams } from "react-router-dom";
import GenreFilter from "../components/GenreFilter.jsx";
import MovieGrid from "../components/MovieGrid.jsx";
import { genres, movies } from "../data/movies.js";

function GenrePage() {
  const { genre } = useParams();
  const decodedGenre = decodeURIComponent(genre || "");
  const validGenre = genres.includes(decodedGenre);

  if (!validGenre) return <Navigate to="/" replace />;

  const genreMovies = movies.filter((movie) => movie.genre === decodedGenre);

  return (
    <section className="page-section">
      <div className="section-heading">
        <h1>{decodedGenre} Movies</h1>
        <p>{genreMovies.length} local recommendations</p>
      </div>
      <GenreFilter activeGenre={decodedGenre} />
      <MovieGrid movies={genreMovies} />
    </section>
  );
}

export default GenrePage;