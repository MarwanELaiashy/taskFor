import React from "react";
import { users } from "@/DummyData";

const UserTable = () => {
  return (
    <div className=" bg-[#0a1739] text-white rounded-lg shadow-lg p-4 mt-36 border border-gray-700">
      <div className="flex items-center justify-between p-4">
        <span>All Users</span>
        <p className="text-[#a3b0d2]">
          <span className="text-[#673f95]">1-10 </span>of 256
        </p>
      </div>
      <hr className="border-0 border-t-[1px] border-slate-700 mb-2 w-full" />
      <div className="overflow-x-auto">
        <table className="w-full text-left  ">
          <thead>
            <tr className="bg-[#12274b]">
              <th className="px-4 py-2 border border-[#1c2c58]">#</th>
              <th className="px-4 py-2 border border-[#1c2c58]">Name</th>
              <th className="px-4 py-2 border border-[#1c2c58]">Phone</th>
              <th className="px-4 py-2 border border-[#1c2c58]">Location</th>
              <th className="px-4 py-2 border border-[#1c2c58]">Email</th>
              <th className="px-4 py-2 border border-[#1c2c58]">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-[#0d213f]" : "bg-[#0f2946]"
                } hover:bg-[#1a355d]`}
              >
                <td className="px-4 py-2 border border-[#1c2c58]">
                  {index + 1}
                </td>
                <td className="px-4 py-2 border border-[#1c2c58] flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#311e60] flex items-center justify-center text-[#8132a7] font-bold">
                    {user.name[0]}
                  </div>
                  {user.name}
                </td>
                <td className="px-4 py-2 border border-[#1c2c58]">
                  {user.phone}
                </td>
                <td className="px-4 py-2 border border-[#1c2c58]">
                  {user.location}
                </td>
                <td className="px-4 py-2 border border-[#1c2c58]">
                  {user.email}
                </td>
                <td className="px-4 py-2 border border-[#1c2c58]">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      user.status === "Active"
                        ? "bg-[#053a40] text-[#05be60]"
                        : "bg-[#3b382f] text-[#fec128]"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-400">1-10 of 460</p>
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-[#1c2c58] rounded text-sm hover:bg-[#253d68]">
            Previous
          </button>
          <button className="px-3 py-1 bg-[#1c2c58] rounded text-sm hover:bg-[#253d68]">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
