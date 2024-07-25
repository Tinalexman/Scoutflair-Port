"use client";

import React, { useState } from "react";

import { IoFilter, IoFootball } from "react-icons/io5";
import { GiGoalKeeper } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";

import Image, { StaticImageData } from "next/image";
import VideoImage from "@/public/dashboard/player/Group 1000001954.png";
import { title } from "process";
import { convertDateWithJustSlashes } from "@/src/functions/dateFunctions";

const resultsOptions: number[] = [4, 8, 12];
const categoryOptions: string[] = [
  "Goals",
  "Penalty Kicks",
  "Dribbles",
  "Tackles",
  "Shots",
];

interface iFilterResponse {
  video: string | StaticImageData;
  title: string;
  category: string;
  date: Date;
}

const Performance = () => {
  const [result, setResult] = useState<number>(resultsOptions[0]);
  const [category, setCategory] = useState<string>(categoryOptions[0]);

  const [response, setResponse] = useState<iFilterResponse[]>(
    Array(6).fill({
      video: VideoImage,
      title: "Goal at last match with Team A",
      category: "Goals",
      date: new Date(),
    })
  );

  return (
    <div className="w-full py-2 px-4 shadow-custom-2 gap-6 overflow-hidden rounded-2xl bg-white border-2 border-border-gray">
      <div className="h-16 w-full flex justify-between items-center">
        <p className="text-xl font-bold text-left text-black">
          PLAYER PERFORMANCE
        </p>
        <div className="flex items-center gap-3 w-fit">
          <div className="flex items-center text-black gap-2 w-fit cursor-pointer">
            <IoFilter size={"18px"} />
            <p className="text-[16px] font-semibold">{result} results</p>
            <IoIosArrowDown size={"16px"} />
          </div>

          <div className="flex items-center text-black gap-2 w-fit cursor-pointer">
            {category === categoryOptions[0] ? (
              <GiGoalKeeper size={"18px"} />
            ) : (
              <IoFootball size={"18px"} />
            )}
            <p className="text-[16px] font-semibold">{category}</p>
            <IoIosArrowDown size={"16px"} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 w-full">
        {response.map((rs, i) => (
          <div key={i} className="flex flex-col gap-1 w-full">
            <Image
              src={rs.video}
              alt="video"
              className="w-full h-[100px] rounded-[5px] object-cover"
            />
            <p className="text-black font-semibold text-[14px]">{rs.title}</p>
            <div className="flex w-full justify-between items-center text-black text-[11px]">
              <p>Category: {rs.category}</p>
              <p>{convertDateWithJustSlashes(rs.date)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Performance;
