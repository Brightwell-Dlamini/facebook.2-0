import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

function SideBarRow({ Icon, title, src }) {
  const { data: session } = useSession();
  return (
    <div className="flex items-center space-x-2 p-4 cursor-pointer hover:bg-gray-200">
      {src && (
        <img
          src={session.user.image}
          alt="profile"
          className="rounded-full w-9 h-9"
        />
      )}
      {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      <p className="hidden sm:inline-flex font-bold">{title}</p>
    </div>
  );
}

export default SideBarRow;
