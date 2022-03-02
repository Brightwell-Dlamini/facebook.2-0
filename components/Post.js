import {
  ChatIcon,
  GlobeIcon,
  ShareIcon,
  ThumbUpIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";

function Post({ name, message, email, profileImg, image, timestamp }) {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-md">
        <div className="flex items-center space-x-2">
          <img
            src={profileImg}
            width={40}
            height={40}
            className="rounded-full"
            alt="profilePic"
          />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-sx text-gray-400 flex items-center">
              {new Date(timestamp?.toDate()).toLocaleString()}.
              <GlobeIcon className="h-4 w-4 ml-2" />
            </p>
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>
      {image && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image src={image} objectFit="cover" layout="fill" />
        </div>
      )}
      {/* post footer */}
      <div className="flex justify-around items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t border-gray-500">
        <div className="inputIcon rounded-bl-2xl">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="inputIcon">
          <ChatIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="inputIcon rounded-br-2xl">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
