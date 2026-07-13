import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { addTrailerVideo } from "../../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  //fetch trailer video
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS,
    );
    const json = await data.json();
    let trailer = json.results.filter((video) => {
      return video.type === "Trailer";
    });
    if (trailer.length === 0) {
      trailer = json.results[0];
    }
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    if (!trailerVideo) {
      getMovieVideo();
    }
  }, []);
  return <div>useMovieTrailer</div>;
};

export default useMovieTrailer;
