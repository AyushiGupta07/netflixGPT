import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 mt-5">
      <h1 className="text-2xl text-white pt-2">{title}</h1>
      {/* <div className=""> */}
      <div className="mt-3 flex overflow-x-scroll no-scrollbar">
        {movies &&
          movies.map((movie) => {
            return (
              <MovieCard key={movie.id} poster_path={movie?.poster_path} />
            );
          })}
      </div>
      {/* </div> */}
    </div>
  );
};

export default MovieList;
