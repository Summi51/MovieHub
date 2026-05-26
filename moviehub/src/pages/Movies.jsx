import {
  useMemo,
  useRef,
  useState
} from "react";

import movies from "../data/movies";

import MovieCard from "../components/MovieCard";

function Movies({
  saveMovie,
  savedMovies
}) {
  const [search, setSearch] =
    useState("");

  const [genre, setGenre] =
    useState("All");

  const searchRef = useRef();

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const matchesSearch =
        movie.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesGenre =
        genre === "All" ||
        movie.genre === genre;

      return (
        matchesSearch && matchesGenre
      );
    });
  }, [search, genre]);

  return (
    <div>
      <h1>Movies</h1>

      <input
        ref={searchRef}
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <button
        onClick={() =>
          searchRef.current.focus()
        }
      >
        Focus Search
      </button>

      <select
        onChange={(e) =>
          setGenre(e.target.value)
        }
      >
        <option>All</option>
        <option>Sci-Fi</option>
        <option>Action</option>
        <option>Drama</option>
      </select>

      <p>
        Showing {filteredMovies.length}{" "}
        results
      </p>

      {filteredMovies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          saveMovie={saveMovie}
          isSaved={savedMovies.some(
            (m) => m.id === movie.id
          )}
        />
      ))}
    </div>
  );
}

export default Movies;