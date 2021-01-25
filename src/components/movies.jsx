import React, { useState } from "react";
import { getMovies } from "../services/fakeMovieService";

export default function Movies() {
  const [movies, setMovies] = useState(getMovies());

  return movies.length > 0 ? (
    <React.Fragment>
      <p>Showing {movies.length} movies from the database</p>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <button
                  onClick={() =>
                    setMovies(movies.filter((mv) => mv._id !== movie._id))
                  }
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  ) : (
    <p>There are no movies in the database.</p>
  );
}
