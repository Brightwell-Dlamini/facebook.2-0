import { useSession } from "next-auth/react";
import React from "react";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { EmojiHappyIcon } from "@heroicons/react/outline";

function Inputbox() {
  const { data: session } = useSession();
  const sendPost = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <img src={session.user.image} alt="profile" className="rounded-full " />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5  focus:outline-none"
            type="text"
            placeholder={`What is on your mind,${session.user.name}`}
          />
          <button hidden onClick={sendPost} type="submit">
            Post
          </button>
        </form>
      </div>
      <div className="flex justify-between items-center">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />{" "}
          <p className="text-xs sm:text-xs xl:text-base">Live Video</p>
        </div>
        <div className="inputIcon">
          <CameraIcon className="h-7 text-green-500" />
          <p className="text-xs sm:text-xs xl:text-base">Photo/Video</p>
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-xs xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default Inputbox;
