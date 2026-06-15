import { createContext, useContext, useEffect, useMemo, useState } from "react";

const FavoritesContext = createContext(null);
const STORAGE_KEY = "cinevault-favorites";

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const value = useMemo(
    () => ({
      favorites,
      isFavorite: (id) => favorites.includes(id),
      toggleFavorite: (id) =>
        setFavorites((current) =>
          current.includes(id)
            ? current.filter((movieId) => movieId !== id)
            : [...current, id],
        ),
    }),
    [favorites],
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used inside FavoritesProvider");
  }
  return context;
}