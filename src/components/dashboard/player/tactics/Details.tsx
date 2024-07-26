"use client";

import { StaticImageData } from "next/image";
import React, { useState } from "react";

import Image from "next/image";
import Flag from "@/assets/twemoji_flag-nigeria.png";
import Logo from "@/public/dashboard/player/dinamo-zagreb-1.png";

import { LiaTrophySolid } from "react-icons/lia";

interface iDetail {
  logo: string | StaticImageData;
  name: string;
  flag: string | StaticImageData;
  trophies: number;
  formation: string;
  setPiece: string;
  winRate: number;
  manager: string;
  players: number;
  goalsScored: number;
  lossRates: number;
  goalsConceeded: number;
}

const Details = () => {
  const [detail, setDetail] = useState<iDetail>({
    logo: Logo,
    name: "Delta FC",
    flag: Flag,
    trophies: 4,
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
    <div className="bg-primary bg-opacity-[96] text-white w-full flex items-center justify-between px-10 h-[200px] rounded-lg">
      <div className="w-fit flex items-center gap-3">
        <Image
          src={detail.logo}
          alt="logo"
          className="size-24 object-cover"
          width={96}
          height={96}
        />
        <div className="flex flex-col justify-between items-start">
          <h2 className="text-white text-xl font-bold">{detail.name}</h2>
          <Image
            src={detail.flag}
            alt="logo"
            className="size-6"
            width={24}
            height={24}
          />
          <p className="text-sm text-white text-opacity-[0.72]">
            Championship Trophies
          </p>
          <div className="flex gap-1 items-center w-fit">
            {Array(detail.trophies)
              .fill(0)
              .map((_, i) => (
                <LiaTrophySolid className="text-white" size={"20px"}/>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
