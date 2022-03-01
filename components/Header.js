import Image from "next/image";
import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import {} from "@heroicons/react/solid";

function Header() {
  return (
    <div>
      <div>
        <Image
          src="links.papareact.com/5me"
          width={40}
          heigh={40}
          layout="fixed"
        />
        <div>
          <SearchIcon className="w-5 h-5 " />
          <input type="text" placeholder="Search facebook" />
        </div>
      </div>
    </div>
  );
}

export default Header;
