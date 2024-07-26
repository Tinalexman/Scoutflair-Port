"use client";

import React, { useState } from "react";

import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

interface iDetail {
  name: string;
  increase: boolean;
  value: number;
  color: string;
}

const Details = () => {
  const [details, setDetails] = useState<iDetail[]>([
    {
      name: "Wins",
      increase: true,
      value: 83,
      color: "#0FB21F",
    },
    {
      name: "Losses",
      increase: false,
      value: 82,
      color: "#FF0000",
    },
    {
      name: "Skills",
      increase: true,
      value: 72,
      color: "#0B57B1",
    },
    {
      name: "Possession",
      increase: true,
      value: 64,
      color: "#F2A725",
    },
  ]);

  return (
    <div className="w-full py-10 shadow-custom-2 gap-6 grid grid-cols-4 px-8 overflow-hidden rounded-2xl bg-white border-2 border-border-gray">
      {details.map((dt, i) => (
        <div
          key={i}
          className="h-[120px] shadow-custom-2 w-full flex flex-col overflow-hidden rounded-[10px] justify-between border border-border-gray pt-2"
        >
          <p className="text-lg pl-4 font-inter font-medium text-left text-black">
            {dt.name}
          </p>
          <div className="flex flex-col w-full overflow-hidden rounded-b-[10px] h-fit gap-2 items-center">
            <div className="flex w-fit gap-2 items-center">
              {dt.increase ? (
                <IoIosArrowUp size={"32px"} className="text-[#15CA27]" />
              ) : (
                <IoIosArrowDown size={"32px"} className="text-[#FF0000]" />
              )}
              <h2 className="text-3xl font-lato font-medium text-black">
                {dt.value}
              </h2>
              <h2 className="text-xl font-lato font-medium text-black">%</h2>
            </div>
            <div className="w-full h-2" style={{ backgroundColor: dt.color }}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
