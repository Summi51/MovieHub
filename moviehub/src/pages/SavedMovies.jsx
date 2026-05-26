import { useMemo } from "react";

function SavedMovies({
  savedMovies,
  removeMovie
}) {
  const averageRating = useMemo(() => {
    if (savedMovies.length === 0)
      return 0;

    const total =
      savedMovies.reduce(
        (acc, movie) =>
          acc + movie.rating,
        0
      );

    return (
      total / savedMovies.length
    ).toFixed(1);
  }, [savedMovies]);

  if (savedMovies.length === 0) {
    return (
      <h2>No saved movies yet</h2>
    );
  }

  return (
    <div>
      <h1>Saved Movies</h1>

      <h2>
        Average Rating:
        {averageRating}
      </h2>

      {savedMovies.map((movie) => (
        
        <div key={movie.id}>
          <h3>{movie.title}</h3>
  <img
        src={movie.image}
        alt={movie.title}
      />
          <button
            onClick={() =>
              removeMovie(movie.id)
            }
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default SavedMovies;