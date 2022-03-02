import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { useSession } from "next-auth/react";
import Story from "./Story";
function Stories() {
  const { data: session } = useSession();
  const [stories, setStories] = useState([]);
  useEffect(() => {
    const stories = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setStories(stories);
    return () => {};
  }, []);

  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {session && (
        <Story img={session.user.image} username={session.user.name} />
      )}

      {stories.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;
