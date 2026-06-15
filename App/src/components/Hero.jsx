import { Link } from "react-router-dom";
import { Play, Sparkles } from "lucide-react";
import { movies } from "../data/movies.js";

function Hero() {
  const featured = movies.find((movie) => movie.id === "interstellar") || movies[0];

  return (
    <section
      className="hero"
      style={{ backgroundImage: `linear-gradient(90deg, rgba(20,24,28,.98), rgba(20,24,28,.66), rgba(20,24,28,.2)), url("${featured.banner}")` }}
    >
      <div className="hero-content">
        <span className="eyebrow">
          <Sparkles size={16} />
          Tonight's vault pick
        </span>
        <h1>MovieVerse</h1>
        <p>
          Curated recommendations, local-only movie data, and cinematic shelves
          for films worth revisiting.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" to={`/movie/${featured.id}`}>
            <Play size={18} />
            Open featured film
          </Link>
          <Link className="button button-ghost" to="/genre/Sci-Fi">
            Browse Sci-Fi
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;