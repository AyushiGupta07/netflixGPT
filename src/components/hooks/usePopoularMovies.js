import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { useEffect } from "react";
import { addPopularMovie } from "../../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?&page=1",
      API_OPTIONS,
    );
    const jsonData = await data.json();
    console.log(jsonData);
    dispatch(addPopularMovie(jsonData.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
