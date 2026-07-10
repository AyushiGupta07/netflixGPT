import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[20%] px-24 absolute bg-gradient-to-r from-black text-white">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <p className="p-6 text-lg w-1/2 text-white">{overview}</p>
      <div className="flex ">
        <button className="border-black bg-white text-black text-xl p-4 px-16 rounded-lg mx-2 hover:bg-opacity-50">
          {" "}
          Play
        </button>
        <button className="border-black bg-white text-black text-xl p-4 px-16 rounded-lg hover:bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
