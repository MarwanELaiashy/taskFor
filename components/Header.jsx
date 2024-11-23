import React from "react";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <header>
      <div className="w-full  text-white  flex justify-between items-center">
        <span className="font-bold text-xl">Users</span>
        <div className="flex items-center gap-1 flex-1 relative mr-6 ml-12">
          <CiSearch className="absolute text-lg left-0 top-3 ml-3 " />
          <input
            type="text"
            placeholder="      Search for..."
            className="bg-[#0a1739] p-3 border border-gray-800 flex-1 rounded w-[265px] text-sm   outline-none"
          />
        </div>
        <button className="bg-[#cc3cfe] px-10 py-4  rounded text-sm font-semibold">
          Add User
        </button>
      </div>
    </header>
  );
};

export default Header;
