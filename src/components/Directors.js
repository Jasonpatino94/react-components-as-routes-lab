import React from "react";
import { directors } from "../data";

const Directors = () => {
  return (
    <div>
      {/*{code here}*/}
      {console.log(directors)}

      {directors.map((director) => (
        <h1>
          Directors Page
          <div>{director.name}</div>
          <ul>
            {" "}
            {director.movies.map((movie) => (
              <li>{movie}</li>
            ))}
          </ul>
        </h1>
      ))}
    </div>
  );
};

export default Directors;
