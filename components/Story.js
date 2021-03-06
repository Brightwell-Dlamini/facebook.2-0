import React from "react";

function Story({ img, username }) {
  return (
    <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse">
      <img
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl h-20 w-20"
        src={img}
        alt="profile pic"
      />
      <p className="absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncate">
        {username}
      </p>
    </div>
  );
}

export default Story;
