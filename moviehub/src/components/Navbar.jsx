import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { darkMode, toggleTheme } =
    useContext(ThemeContext);

  return (
    <nav>
      <NavLink to="/">Home </NavLink>

      <NavLink to="/movies">
        Movies
      </NavLink>

      <NavLink to="/saved">
        Saved
      </NavLink>

      <NavLink to="/about">
        About
      </NavLink>

      <button onClick={toggleTheme}>
        {darkMode
          ? "Light Mode"
          : "Dark Mode"}
      </button>
    </nav>
  );
}

export default Navbar;