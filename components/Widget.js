import React from "react";

function Widget({ img, username }) {
  return (
    <div className="flex flex-col mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-full space-y-2 justify-start">
      <img
        className="h-10 w-10 cursor-pointer rounded-full fixed "
        src={img}
        alt="profile pic"
      />
      <p className=" text-center text-sm text-black">{username}</p>{" "}
      {/* <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full" /> */}
    </div>
  );
}

export default Widget;
