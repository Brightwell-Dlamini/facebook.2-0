import React from "react";

function HeaderIcon({ Icon, active }) {
  return (
    <div className="flex items-center cursor-pointer rounded-xl hover:bg-gray-200 md:px-10 sm:h-14  active:border-b-4 active:border-blue-300">
      <Icon
        className={`h-5 sm:h-7 mx-auto text-center text-gray-500 group-hover:text-blue-500 ${
          active && "text-blue-500"
        }`}
      />
    </div>
  );
}

export default HeaderIcon;
