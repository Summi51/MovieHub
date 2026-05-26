import { memo } from "react";
import { Link } from "react-router-dom";

function MovieCard({
  movie,
  saveMovie,
  isSaved
}) {
  return (
    <div>
      <h3>{movie.title}</h3>

      <p>{movie.genre}</p>

      <p>⭐ {movie.rating}</p>

      <Link to={`/movies/${movie.id}`}>
        View Details
      </Link>

      <button
        disabled={isSaved}
        onClick={() => saveMovie(movie)}
      >
        {isSaved ? "Saved" : "Save"}
      </button>
    </div>
  );
}

export default memo(MovieCard)