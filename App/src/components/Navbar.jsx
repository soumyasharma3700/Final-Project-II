import { NavLink, Link } from "react-router-dom";
import { Clapperboard, Heart, Search, Star } from "lucide-react";
import { useFavorites } from "../context/FavoritesContext.jsx";
import { useWatchlist } from "../context/WatchlistContext.jsx";

function Navbar() {
  const { favorites } = useFavorites();
  const { watchlist } = useWatchlist();

  return (
    <header className="navbar">
      <Link className="brand" to="/" aria-label="CineVault home">
        <span className="brand-mark">
          <Clapperboard size={22} />
        </span>
        <span>MovieVerse</span>
      </Link>
      <nav className="nav-links" aria-label="Primary navigation">
        <NavLink to="/">
          <Search size={17} />
          Discover
        </NavLink>
        <NavLink to="/watchlist">
          <Star size={17} />
          Watchlist
          <span className="nav-count">{watchlist.length}</span>
        </NavLink>
        <NavLink to="/favorites">
          <Heart size={17} />
          Favorites
          <span className="nav-count">{favorites.length}</span>
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;