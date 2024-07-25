"use client";

import { StaticImageData } from "next/image";
import React, { useState } from "react";

import Image from "next/image";
import PlayerImage from "@/public/dashboard/player/ellipse-2374.png";

interface iScoutData {
  image: string | StaticImageData;
  name: string;
  age: number;
  role: string;
  mentality: number;
  balance: number;
  composure: number;
  aggression: number;
}

const ScoutCardSection: React.FC = () => {
  const [scoutData, setScoutData] = useState<iScoutData[]>(
    Array(3).fill({
      image: PlayerImage,
      name: "Andrew Tate",
      age: 22,
      role: "Defender",
      mentality: 70,
      balance: 85,
      composure: 55,
      aggression: 20,
    })
  );

  return (
    <div className="flex flex-col justify-center items-center w-full relative gap-6 pl-12 pr-[50px] pt-3 pb-5 rounded-2xl bg-white border-2 border-border-gray shadow-custom-2">
      <p className="text-xl font-bold text-left text-black">SCOUT REPORT</p>
      <div className="flex justify-start items-start opacity-[0.88] gap-8">
        <div className="grid grid-cols-3 gap-5">
          {scoutData.map((data, i) => (
            <ScoutCard data={data} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ScoutCard: React.FC<{ data: iScoutData }> = ({ data }) => {
  return (
    <div className="w-[180px] flex flex-col shadow-custom-2 justify-start items-center relative gap-4 p-2 rounded-xl bg-white border-[0.48px] border-border-gray">
      <img className="flex-grow-0 flex-shrink-0" src="ellipse-2374.png" />
      <div className="flex flex-col justify-start items-center gap-3 w-full">
        <div className="flex flex-col justify-start items-center relative">
          <p className="text-lg font-medium text-left text-black">
            {data.name}
          </p>
          <div className="flex flex-col justify-start items-center relative">
            <p className="opacity-[0.96] text-base text-left text-black">
              {data.age} years
            </p>
            <p className="opacity-[0.92] text-xs text-left text-black">
              {data.role}
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full gap-3">
          <div className="flex w-full justify-between items-center">
            <p className="text-xs text-left text-black">Mentality</p>
            <div className="w-[75px] h-1.5">
              <ProgressBar value={data.mentality}/>
            </div>
          </div>
          <div className="flex w-full justify-between items-center">
            <p className="text-xs text-left text-black">Balance</p>
            <div className="w-[75px] h-1.5">
              <ProgressBar value={data.balance}/>
            </div>
          </div>
          <div className="flex w-full justify-between items-center">
            <p className="text-xs text-left text-black">Composure</p>
            <div className="w-[75px] h-1.5">
              <ProgressBar value={data.composure}/>
            </div>
          </div>
          <div className="flex w-full justify-between items-center">
            <p className="text-xs text-left text-black">Aggression</p>
            <div className="w-[75px] h-1.5">
              <ProgressBar value={data.aggression}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProgressBar: React.FC<{ value: number }> = ({ value }) => {
  const color = value >= 70 ? "#03E80C" : value >= 50 ? "#E8D103" : "#F22215";
  return (
    <div className="w-full bg-[#D9D9D9] h-full rounded-full">
      <div
        className="w-full h-full rounded-full"
        style={{ width: `${value}%`, backgroundColor: color }}
      />
    </div>
  );
};

export default ScoutCardSection;
