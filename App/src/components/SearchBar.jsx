import { Search } from "lucide-react";

function SearchBar({ value, onChange }) {
  return (
    <label className="search-bar">
      <Search size={20} />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search movies by title..."
        aria-label="Search movies by title"
      />
    </label>
  );
}

export default SearchBar;