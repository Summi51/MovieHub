import {
  useParams,
  Link
} from "react-router-dom";

import movies from "../data/movies";

function MovieDetails() {
  const { movieId } = useParams();

  const movie = movies.find(
    (m) => m.id === Number(movieId)
  );

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div>
      <img
        src={movie.image}
        alt={movie.title}
      />

      <h1>{movie.title}</h1>

      <p>{movie.genre}</p>

      <p>{movie.description}</p>

      <p>⭐ {movie.rating}</p>

      <p>{movie.duration}</p>

      <Link to="/movies">Back</Link>
    </div>
  );
}

export default MovieDetails;