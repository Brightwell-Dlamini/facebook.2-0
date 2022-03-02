import React from "react";
import Inputbox from "./Inputbox";
import Posts from "./Posts";
import Stories from "./Stories";

function Feed() {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 mr-4  overflow-y-auto scrollbar-hide">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        {/* Stories */}
        <Stories />
        {/* Inputbox */}
        <Inputbox />
        {/* Posts */}
        <Posts />
      </div>
    </div>
  );
}

export default Feed;
