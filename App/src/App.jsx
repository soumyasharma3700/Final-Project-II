import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import MovieDetails from "./pages/MovieDetails.jsx";
import Watchlist from "./pages/Watchlist.jsx";
import Favorites from "./pages/Favorites.jsx";
import GenrePage from "./pages/GenrePage.jsx";

function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 520);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/genre/:genre" element={<GenrePage />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
      <Footer />
      <button
        className={`scroll-top ${showTop ? "is-visible" : ""}`}
        type="button"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}

export default App;