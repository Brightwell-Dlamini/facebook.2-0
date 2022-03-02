import Image from "next/image";
import React from "react";
import {
  BellIcon,
  ChevronDownIcon,
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/react";
import profile from "../public/gerv.jpg";

function Header() {
  const { data: session } = useSession();

  return (
    <div className="shadow-lg flex items-center sticky z-50 top-0 bg-white p-2 lg:p-5 ">
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex items-center ml-2 rounded-full bg-gray-100 p-2 ">
          <SearchIcon className="h-6 text-gray-600 " />
          <input
            className="hidden md:inline-flex bg-transparent  ml-2 p-2 items-center outline-none placeholder-grey-500 flex-shrink"
            type="text"
            placeholder="Search facebook"
          />
        </div>
      </div>
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 sm:space-x-2">
          <HeaderIcon Icon={HomeIcon} active />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingBagIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      <div className="flex items-center sm:space-x-2 justify-end ">
        {/* profile pic*/}
        <img
          src={session.user.image}
          alt="profile"
          onClick={signOut}
          className="rounded-full cursor-pointer w-10 h-10"
        />

        <p className="font-semibold pr-2 whitespace-nowrap" onClick={signOut}>
          {session.user.name}
        </p>
        <ViewGridIcon className="icon" />
        <ShoppingCartIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
