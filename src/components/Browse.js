import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "./hooks/usePopoularMovies";

const Browse = () => {
  //fetch data from TMDB API and update the store with all the movies

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
