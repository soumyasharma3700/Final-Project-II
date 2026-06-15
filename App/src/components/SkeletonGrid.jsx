function SkeletonGrid({ count = 8 }) {
  return (
    <div className="movie-grid" aria-label="Loading movies">
      {Array.from({ length: count }).map((_, index) => (
        <div className="skeleton-card" key={index}>
          <div className="skeleton-poster" />
          <div className="skeleton-line wide" />
          <div className="skeleton-line" />
        </div>
      ))}
    </div>
  );
}

export default SkeletonGrid;