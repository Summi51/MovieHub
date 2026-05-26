import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to MovieHub</h1>

      <p>
        Explore movies and save your
        favourites.
      </p>

      <Link to="/movies">
        Explore Movies
      </Link>
    </div>
  );
}

export default Home;