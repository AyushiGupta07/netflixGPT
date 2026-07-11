import React from "react";
import lang from "../utils/languageConstants.js";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const languageSelected = useSelector((store) => store.config.lang);
  console.log(languageSelected);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid- grid-cols-12 flex">
        <input
          type="text"
          className="p-2 m-3 col-span-9 w-[70%] border border-red-800"
          placeholder={lang[languageSelected].gptSearchPleaceHolder}
        ></input>
        <button className="m-3 p-2 px-4 col-span-3 bg-red-700 text-white rounded-lg w-[30%]">
          {lang[languageSelected].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
