import { createContext, useContext, useEffect, useMemo, useState } from "react";

const WatchlistContext = createContext(null);
const STORAGE_KEY = "cinevault-watchlist";

export function WatchlistProvider({ children }) {
  const [watchlist, setWatchlist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(watchlist));
  }, [watchlist]);

  const value = useMemo(
    () => ({
      watchlist,
      isInWatchlist: (id) => watchlist.includes(id),
      toggleWatchlist: (id) =>
        setWatchlist((current) =>
          current.includes(id)
            ? current.filter((movieId) => movieId !== id)
            : [...current, id],
        ),
    }),
    [watchlist],
  );

  return (
    <WatchlistContext.Provider value={value}>
      {children}
    </WatchlistContext.Provider>
  );
}

export function useWatchlist() {
  const context = useContext(WatchlistContext);
  if (!context) {
    throw new Error("useWatchlist must be used inside WatchlistProvider");
  }
  return context;
}