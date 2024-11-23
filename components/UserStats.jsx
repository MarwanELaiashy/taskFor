import React from "react";
import { stats } from "@/DummyData";

const UserStats = () => {
  return (
    <div className="grid grid-cols-4 gap-8 mt-12 ">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`p-4 rounded shadow bg-[#0a1739] text-white flex justify-between items-center border border-gray-800 `}
        >
          <div className="flex gap-6 items-center ">
            <span
              style={{
                backgroundColor: stat.backGround,
                color: stat.color,
              }}
              className="w-12 h-12 flex items-center justify-center rounded-full"
            >
              {stat.iconOne}
            </span>
            <div className="flex flex-col">
              <h3 className="text-lg ">{stat.title}</h3>
              <p className="text-gray-500">{stat.value}</p>
            </div>
          </div>
          <span>{stat.iconTwo}</span>
        </div>
      ))}
    </div>
  );
};

export default UserStats;
