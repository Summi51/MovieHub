import {
  Routes,
  Route
} from "react-router-dom";

import {
  useState,
  useCallback,
  useContext
} from "react";

import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import SavedMovies from "./pages/SavedMovies";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import Navbar from "./components/Navbar";

import ThemeProvider, {
  ThemeContext
} from "./context/ThemeContext";
import Home from "./pages/ Home";

function AppContent() {
  const [savedMovies, setSavedMovies] =
    useState([]);

  const { darkMode } =
    useContext(ThemeContext);

  const saveMovie = useCallback(
    (movie) => {
      setSavedMovies((prev) => {
        const alreadySaved =
          prev.find(
            (m) => m.id === movie.id
          );

        if (alreadySaved) {
          alert(
            "Movie already saved"
          );

          return prev;
        }

        return [...prev, movie];
      });
    },
    []
  );

  const removeMovie = useCallback(
    (id) => {
      setSavedMovies((prev) =>
        prev.filter(
          (movie) => movie.id !== id
        )
      );
    },
    []
  );

  return (
    <div
      style={{
        backgroundColor: darkMode
          ? "#121212"
          : "white",

        color: darkMode
          ? "white"
          : "black",

        minHeight: "100vh",
      }}
    >
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/movies"
          element={
            <Movies
              saveMovie={saveMovie}
              savedMovies={
                savedMovies
              }
            />
          }
        />

        <Route
          path="/movies/:movieId"
          element={<MovieDetails />}
        />

        <Route
          path="/saved"
          element={
            <SavedMovies
              savedMovies={
                savedMovies
              }
              removeMovie={
                removeMovie
              }
            />
          }
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;