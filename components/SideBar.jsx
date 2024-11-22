import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { IoSettings } from "react-icons/io5";
import { sidebarData } from "../DummyData";

const SideBar = () => {
  return (
    <aside className="w-72 bg-[#081027] border border-gray-900 text-white ">
      <div className="p-4 flex flex-col">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Tecno Blocks</h2>
          <div className="flex ">
            <span>
              <IoIosArrowBack />
            </span>
            <span>
              <IoIosArrowForward />
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1 relative">
          <CiSearch className="absolute text-lg left-0 top-11 ml-3 " />
          <input
            type="text"
            placeholder="      Search for..."
            className="bg-[#0a1739] p-3 border border-gray-700 rounded w-[265px] text-sm  mt-8 outline-none"
          />
        </div>
      </div>
      {sidebarData.map((data, index) => (
        <div
          className="mt-6 flex justify-between items-center hover:text-[#7c35a7] cursor-pointer"
          key={index}
        >
          <ul className="space-y-4">
            <li className=" p-2 rounded">
              <div className="flex items-center gap-2">
                <span>{data.icon}</span>
                <a href="#">{data.title}</a>
              </div>
            </li>
          </ul>
          <span>
            <IoIosArrowForward />
          </span>
        </div>
      ))}

      <hr className="w-[330px] mt-8 border-0 border-t-[2px] border-slate-700" />

      <div className="flex flex-col gap-8 mt-8 ">
        <div className="flex justify-between items-center hover:text-[#7c35a7] cursor-pointer">
          <div className="flex items-center gap-2">
            <span>
              <IoSettings />
            </span>
            <p>Settings</p>
          </div>
          <span>
            <IoIosArrowForward />
          </span>
        </div>
        <div className="flex justify-between items-center hover:text-[#7c35a7] cursor-pointer">
          <div className="flex items-center gap-2">
            <span>
              <RiLogoutBoxRFill className="text-[#4f173c]" />
            </span>
            <p>Logout</p>
          </div>
          <span>
            <IoIosArrowForward />
          </span>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
