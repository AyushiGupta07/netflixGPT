import React, { useRef } from "react";
import lang from "../utils/languageConstants.js";
import { useDispatch, useSelector } from "react-redux";
import { client } from "../utils/openai.js";
import { GoogleGenAI } from "@google/genai";
import { API_OPTIONS, GEMINI_AI} from "../utils/constants.js";
import { addGPTMovieResult } from "../utils/gptSlice.js";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const ai = new GoogleGenAI({
    apiKey: GEMINI_AI,
  });

  const fetchSearchMovie = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS,
    );
    const jsonData = await data.json();
    return jsonData.results;
  };

  const searchText = useRef(null);
  const languageSelected = useSelector((store) => store.config.lang);
  const handleGPTSearch = async () => {
    const text = searchText.current.value;
    console.log(text);
    //make an api call to open ai and get movie result

    const query =
      "Act as a movie Recommendation system and suggest some movies for the query : " +
      text +
      "and only give me 5 movies, comma seperated like the example result given ahead. Example Result : Gadar, Golmal, Koi mil gya, Veer Zaara";

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: query,
    });
    if (!response.candidates) {
      //error handling
    }
    console.log(response.candidates?.[0].content?.parts?.[0].text);
    const gptMovie =
      response.candidates?.[0].content?.parts?.[0].text.split(",");
    const promiseArray = gptMovie.map((movie) => fetchSearchMovie(movie));
    console.log(promiseArray);
    const tmdbResult = await Promise.all(promiseArray);
    dispatch(
      addGPTMovieResult({ movieNames: gptMovie, movieResults: tmdbResult }),
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid- grid-cols-12 flex"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-2 m-3 col-span-9 w-[70%] border border-red-800"
          placeholder={lang[languageSelected].gptSearchPleaceHolder}
        ></input>
        <button
          className="m-3 p-2 px-4 col-span-3 bg-red-700 text-white rounded-lg w-[30%]"
          onClick={handleGPTSearch}
        >
          {lang[languageSelected].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
