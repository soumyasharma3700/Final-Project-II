import { NavLink } from "react-router-dom";
import { genres } from "../data/movies.js";

function GenreFilter({ activeGenre = "All" }) {
  return (
    <div className="genre-strip" aria-label="Genre filters">
      <NavLink className={activeGenre === "All" ? "genre-chip active" : "genre-chip"} to="/">
        All
      </NavLink>
      {genres.map((genre) => (
        <NavLink
          key={genre}
          className={activeGenre === genre ? "genre-chip active" : "genre-chip"}
          to={`/genre/${encodeURIComponent(genre)}`}
        >
          {genre}
        </NavLink>
      ))}
    </div>
  );
}

export default GenreFilter;