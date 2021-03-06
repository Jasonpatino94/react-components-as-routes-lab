import React from "react";
import { actors } from "../data";

const Actors = () => {
  return (
    <div>
      {/*{code here}*/}
      {actors.map((actor) => (
        <div>
          Actors Page
          <h1>{actor.name}</h1>
          <ul>
            {actor.movies.map((movie) => (
              <li>
                <h2> {movie} </h2>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Actors;
