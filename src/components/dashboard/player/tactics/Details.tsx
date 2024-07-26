"use client";

import { StaticImageData } from "next/image";
import React, { useState } from "react";

import Image from "next/image";
import Flag from "@/assets/twemoji_flag-nigeria.png";
import Logo from "@/public/dashboard/player/dinamo-zagreb-1.png";

import { LiaTrophySolid } from "react-icons/lia";

interface iTeamDetail {
  logo: string | StaticImageData;
  name: string;
  flag: string | StaticImageData;
  trophies: number;
  details: iDetail[];
  formation: string;
  setPiece: string;
  winRate: number;
  manager: string;
  players: number;
  goalsScored: number;
  lossRates: number;
  goalsConceeded: number;
}

interface iDetail {
  name: string;
  value: any;
}

const Details = () => {
  const [detail, setDetail] = useState<iTeamDetail>({
    logo: Logo,
    name: "Delta FC",
    flag: Flag,
    trophies: 4,
    details: [
      {
        name: "BEST FORMATION",
        value: "4-4-3",
      },
      {
        name: "AVERAGE WIN RATES",
        value: "62.65%",
      },
      {
        name: "NUMBER OF PLAYERS",
        value: "50",
      },
      {
        name: "AVERAGE LOSS RATES",
        value: "37.35%",
      },
      {
        name: "FAVOURITE SET PIECES",
        value: "Penalty",
      },
      {
        name: "MANAGER",
        value: "Joshua Fayomi",
      },
      {
        name: "AVERAGE GOAL SCORED",
        value: "65%",
      },
      {
        name: "AVERAGE GOALS CONCEEDED",
        value: "35%",
      },
    ],
    formation: "4-4-3",
    setPiece: "Penalty",
    winRate: 62.65,
    manager: "Joshua Fayomi",
    players: 50,
    goalsScored: 65,
    lossRates: 37.35,
    goalsConceeded: 35,
  });

  return (
    <div className="bg-primary-2 bg-opacity-[0.96] text-white w-full flex items-center justify-between px-10 h-[200px] rounded-[16px]">
      <div className="w-fit flex items-center gap-3">
        <Image
          src={detail.logo}
          alt="logo"
          className="size-20 object-cover"
          width={80}
          height={80}
        />
        <div className="flex flex-col justify-between items-start">
          <h2 className="text-white text-lg font-bold">{detail.name}</h2>
          <Image
            src={detail.flag}
            alt="logo"
            className="size-6"
            width={24}
            height={24}
          />
          <p className="text-[12px] text-white text-opacity-[0.72]">
            Championship Trophies
          </p>
          <div className="flex gap-1 items-center w-fit">
            {Array(detail.trophies)
              .fill(0)
              .map((_, i) => (
                <LiaTrophySolid className="text-white" size={"20px"} />
              ))}
          </div>
        </div>
      </div>
      <div className="w-fit gap-6 grid grid-cols-4">
        {detail.details.map((dt, i) => (
          <div key={i} className="flex flex-col gap-1">
            <p className="text-white text-[10px] leading-3 text-opacity-[0.88]">
              {dt.name}
            </p>
            <div className="w-full text-white text-sm font-semibold border border-primary-3 rounded h-8 flex items-center justify-center">
              {dt.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
