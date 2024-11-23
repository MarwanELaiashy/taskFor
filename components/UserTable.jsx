import React from "react";
import { users } from "@/DummyData";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { BsToggle2Off } from "react-icons/bs";
import { MdRemoveRedEye } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { tableData } from "@/DummyData";

const UserTable = () => {
  return (
    <>
      <div className="flex items-center justify-between p-4 mt-36 bg-[#0a1737] border border-gray-800 rounded">
        <span>All Users</span>
        <p className="text-[#a3b0d2]">
          <span className="text-[#673f95]">1-10 </span>of 256
        </p>
      </div>
      <hr className="border-0 border-t-[1px] border-slate-700  w-full" />
      <div className="bg-[#0a1739] text-white rounded-lg shadow-lg p-4 border border-gray-800">
        <div>
          <table className="w-full text-left   ">
            <thead>
              <tr className="bg-[#0a1739]">
                <th className="px-4 py-2 ">
                  <label className="relative block w-3 h-3">
                    <input
                      type="checkbox"
                      className="peer appearance-none w-3 h-3 border border-gray-600  checked:bg-purple-600 checked:border-purple-600"
                    />
                    <span className="absolute top-1 left-1 right-1 flex items-center justify-center text-white font-bold text-[10px] opacity-0 peer-checked:opacity-100">
                      ✓
                    </span>
                  </label>
                </th>

                {tableData.map((data, index) => (
                  <th key={index} className="px-4 py-3 text-[#d5d6d8]  ">
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-2">
                        <span className="text-[#6e7891]">{data.iconTable}</span>
                        <span>{data.tHead}</span>
                      </span>

                      <div className="flex flex-col ">
                        <IoIosArrowUp className="text-[#546183]" />
                        <IoIosArrowDown className="text-[#546183]" />
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-[#0a1330]" : "bg-[#0a1739]"
                  } hover:bg-[#1a355d]`}
                >
                  <td className="px-4 py-2 ">
                    <label className="relative block w-3 h-3">
                      <input
                        type="checkbox"
                        className="peer appearance-none w-3 h-3 border border-gray-600  checked:bg-purple-600 checked:border-purple-600"
                      />
                      <span className="absolute top-1 left-1 right-1 flex items-center justify-center text-white font-bold text-[10px] opacity-0 peer-checked:opacity-100">
                        ✓
                      </span>
                    </label>
                  </td>
                  <td className="px-6 py-6  flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#311e60] flex items-center justify-center text-[#8132a7] font-bold">
                      {user.name[0]}
                    </div>
                    {user.name}
                  </td>
                  <td className="px-6 py-6 ">{user.phone}</td>
                  <td className="px-6 py-6 ">{user.location}</td>
                  <td className="px-6 py-6 ">{user.email}</td>
                  <td className="px-6 py-6 ">
                    <span
                      className={`px-3 py-1  text-sm ${
                        user.status === "• Active"
                          ? "bg-[#0b3744] text-[#00d66c] "
                          : "bg-[#2f3859] text-[#ecf5ff]"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-6 text-[#09d478] text-lg cursor-pointer">
                    <BsToggle2Off />
                  </td>
                  <td className="px-6 py-6 text-[#f0f0f8] text-lg cursor-pointer">
                    <MdRemoveRedEye />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-between items-center mt-8">
        <span>1-10 of 460</span>
        <div className="flex gap-32 items-center">
          <div className="flex gap-6 items-center">
            <p>Rows per page: </p>
            <div className="flex items-center bg-[#0a1739] py-2 px-3 cursor-pointer">
              <span>10</span>{" "}
              <span>
                <IoIosArrowDown />
              </span>
            </div>
          </div>
          <div className="flex gap-6 text-lg">
            <span className="bg-[#0a1739] py-2 px-3 text-[#656e8b] cursor-pointer">
              <FaArrowLeftLong />
            </span>
            <span className="bg-[#0a1739] py-2 px-3 cursor-pointer">
              <FaArrowRightLong />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserTable;
