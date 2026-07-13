import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieNames, movieResults } = gpt;
  console.log(movieNames);
  console.log(movieResults);
  if (!movieNames) {
    return;
  }
  if (!movieResults) {
    return;
  }

  return (
    <div className="p-4 mt-2 border border-black bg-black text-white">
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default GPTMovieSuggestions;
