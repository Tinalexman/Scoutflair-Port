"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import TeamLogo from "@/public/dashboard/player/dinamo-zagreb-1.png";

interface iTeamStanding {
  logo: StaticImageData | string;
  name: string;
  mp: number;
  w: number;
  d: number;
  l: number;
  gf: number;
  ga: number;
  gd: number;
  pts: number;
}

const StandingsTable = () => {
  const [clubs, setClubs] = useState<iTeamStanding[]>(
    Array(10).fill({
      logo: TeamLogo,
      name: "Deltas FC",
      mp: 65,
      w: 45,
      d: 10,
      l: 10,
      gf: 150,
      ga: 34,
      gd: 45,
      pts: 65,
    })
  );

  return (
    <div className="w-full h-[540px] shadow-custom-2 overflow-hidden rounded-2xl bg-white border-2 border-border-gray">
      <div className="flex flex-col justify-center items-start gap-6 px-6 py-2 bg-white">
        <div className="h-16 w-full flex justify-between items-center">
          <p className="text-xl font-bold text-left text-black">
            LEAGUE STANDING
          </p>
          <div className="flex w-fit items-center gap-1 cursor-pointer">
            <p className="opacity-[0.92] text-lg text-left text-black">
              2023/2024
            </p>
            <IoIosArrowDown size={"16px"} className="text-black" />
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center opacity-[0.88] gap-4">
          <div className="flex flex-col justify-start items-center relative gap-1.5 w-full">
            <div className="flex justify-between items-center w-full">
              <p className="text-sm font-semibold text-left text-black">Club</p>
              <div className="w-fit flex gap-8 justify-center items-center ">
                <p className="text-sm font-semibold text-left text-black">MP</p>
                <p className="text-sm font-semibold text-left text-black">W</p>
                <p className="text-sm font-semibold text-left text-black">D</p>
                <p className="text-sm font-semibold text-left text-black">L</p>
                <p className="text-sm font-semibold text-left text-black">GF</p>
                <p className="text-sm font-semibold text-left text-black">GA</p>
                <p className="text-sm font-semibold text-left text-black">GD</p>
                <p className="text-sm font-semibold text-left text-black">
                  Pts
                </p>
              </div>
            </div>
            <div className="w-full h-[1px] bg-black bg-opacity-[0.64]" />
          </div>
          <div className="flex flex-col gap-3 w-full">
            {clubs.map((club, index) => (
              <div className="flex w-full justify-between items-center" key={index}>
                <div className="flex items-center gap-3 w-fit">
                  <p className="text-sm font-semibold text-left text-black w-[25px]">
                    {index + 1}.
                  </p>
                  <Image
                    src={club.logo}
                    width={21}
                    height={21}
                    alt="Team Logo"
                    className="w-[21px] h-[21px] object-cover"
                  />
                  <p className="opacity-[0.84] text-lg font-medium text-left text-black">
                    {club.name}
                  </p>
                </div>
                <div className="flex items-center w-fit gap-8">
                  <p className="opacity-80 text-sm text-left text-black">
                    {club.mp}
                  </p>
                  <p className="opacity-80 text-sm text-left text-black">
                    {club.w}
                  </p>
                  <p className="opacity-80 text-sm text-left text-black">
                    {club.d}
                  </p>
                  <p className="opacity-80 text-sm text-left text-black">
                    {club.l}
                  </p>
                  <p className="opacity-80 text-sm text-left text-black">
                    {club.gf}
                  </p>
                  <p className="opacity-80 text-sm text-left text-black">
                    {club.ga}
                  </p>
                  <p className="opacity-80 text-sm text-left text-black">
                    {club.gd}
                  </p>
                  <p className="opacity-80 text-sm text-left text-black">
                    {club.pts}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandingsTable;
