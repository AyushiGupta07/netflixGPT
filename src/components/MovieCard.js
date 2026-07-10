import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  return (
    <div className="w-[200px] pr-2 flex-shrink-0">
      {/* <img src="https://image.tmdb.org/t/p/w500//bRwnj8WEKBCvmfeUNOukJPwB43K.jpg" /> */}
      <img src={IMAGE_CDN_URL + poster_path} alt="image" />
    </div>
  );
};

export default MovieCard;
