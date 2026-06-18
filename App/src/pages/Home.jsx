import { useMemo, useState } from "react";
import Hero from "../components/Hero.jsx";
import SearchBar from "../components/SearchBar.jsx";
import GenreFilter from "../components/GenreFilter.jsx";
import MovieGrid from "../components/MovieGrid.jsx";
import SkeletonGrid from "../components/SkeletonGrid.jsx";
import { movies } from "../data/Movies.js";

function Home() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const filteredMovies = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return normalizedQuery
      ? movies.filter((movie) => movie.title.toLowerCase().includes(normalizedQuery))
      : movies;
  }, [query]);

  const trending = movies.slice(0, 8);
  const topRated = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 8);
  const recentlyAdded = movies.slice(-8).reverse();

  const handleSearch = (value) => {
    setQuery(value);
    setLoading(true);
    window.setTimeout(() => setLoading(false), 180);
  };

  return (
    <>
      <Hero />
      <section className="tool-panel">
        <SearchBar value={query} onChange={handleSearch} />
        <GenreFilter />
      </section>

      <section className="content-section">
        <div className="section-heading">
          <h2>{query ? `Search results for "${query}"` : "All Movies"}</h2>
          <p>{filteredMovies.length} titles in the vault</p>
        </div>
        {loading ? <SkeletonGrid /> : <MovieGrid movies={filteredMovies} />}
      </section>

      {!query && (
        <>
          <section className="content-section">
            <div className="section-heading">
              <h2>Trending Movies</h2>
              <p>High-energy picks people keep returning to.</p>
            </div>
            <MovieGrid movies={trending} />
          </section>
          <section className="content-section">
            <div className="section-heading">
              <h2>Top Rated</h2>
              <p>The strongest crowd-pleasers in the local collection.</p>
            </div>
            <MovieGrid movies={topRated} />
          </section>
          <section className="content-section">
            <div className="section-heading">
              <h2>Recently Added</h2>
              <p>Fresh shelves from the dataset.</p>
            </div>
            <MovieGrid movies={recentlyAdded} />
          </section>
        </>
      )}
    </>
  );
}

export default Home;