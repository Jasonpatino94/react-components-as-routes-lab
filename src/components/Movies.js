import React from "react";
import { movies } from "../data";

const Movies = () => {
  return (
    <div>
      {/*{code here}*/}
      {console.log(movies)}
      {movies.map((movie) => (
        <h1>
          Movie Page
          <h1>Title: {movie.title}</h1>
          <h3>Metascore: {movie.metascore}</h3>
          <h3>Movie Length: {movie.time}</h3>
          <h3>Genres:</h3>
          <ul>
            {movie.genres.map((genre) => (
              <li>{genre}</li>
            ))}
          </ul>
        </h1>
      ))}
    </div>
  );
};

export default Movies;
