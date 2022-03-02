import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Widget from "./Widget";
import { useSession } from "next-auth/react";
import {
  DotsHorizontalIcon,
  SearchIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
function Widgets() {
  const { data: session } = useSession();
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const stories = [...Array(10)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setStories(stories);
    return () => {};
  }, []);

  return (
    <div className="p-2 mt-5 max-w-[600px ] xl:min-w-[300px] hidden lg:flex flex-col w-60 ">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-4">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>
      {session && (
        <Widget img={session.user.image} username={session.user.name} />
      )}

      {stories.map((profile) => (
        <Widget
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Widgets;
