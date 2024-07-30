"use client";

import React, { useState } from "react";

import Image, { StaticImageData } from "next/image";

import ClubLogo from "@/public/dashboard/player/Frame 1000002576.png";
import ClubHeader from "@/public/dashboard/player/Frame 1000002575 (2).png";
import { convertDate } from "@/src/functions/dateFunctions";

interface iInfo {
  logo: string | StaticImageData;
  academy: string;
  address: string;
  longitude: string;
  latitude: string;
  founded: Date;
  principal: string;
  manager: string;
  graduated: number;
  won: number;
  nickname: string;
  highestScorer: string;
  lost: number;
  color: string;
}

const Information = () => {
  const [info, setInfo] = useState<iInfo>({
    academy: "Scoutflair Football Academy",
    address:
      "Ahmadu Bello way, behind government secondary scchool, Jabi, Abuja., Nigeria.",
    latitude: "12.34 N",
    longitude: "56.78 W",
    founded: new Date(),
    principal: "Joshua Fayomi",
    manager: "Rahul Singh",
    graduated: 2000,
    won: 576,
    nickname: "Fayomi Boys",
    highestScorer: "Peters Ameh",
    lost: 45,
    color: "Blue and White",
    logo: ClubLogo,
  });

  return (
    <div className="flex flex-col rounded-tr-[16px] overflow-hidden border-2 border-border-gray shadow-custom-2 items-center bg-white">
      <div className="bg-primary-2 bg-opacity-[0.96] py-2 w-full">
        <h2 className="text-white text-lg font-bold py-3 px-5">Information</h2>
      </div>
      <div className="flex w-full pl-5">
        <div className="w-1/4 flex flex-col gap-4 pr-5 py-4 text-black">
          <div className="flex flex-col">
            <h2 className="font-bold text-[16px] leading-6">Club Name:</h2>
            <p className="text-[12px] leading-[14.4px]">{info.academy}</p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-[16px] leading-6">Address:</h2>
            <p className="text-[12px] leading-[14.4px]">{info.address}</p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-[16px] leading-6">
              GPS Coordinates:
            </h2>
            <p className="text-[12px] leading-[14.4px]">
              Latitude: {info.latitude}
            </p>
            <p className="text-[12px] leading-[14.4px]">
              Longitude: {info.longitude}
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-[16px] leading-6">Founded:</h2>
            <p className="text-[12px] leading-[14.4px]">
              {convertDate(info.founded)}
            </p>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-0">
          <Image src={ClubHeader} alt="Header" className="w-full" />
          <div className="w-full grid grid-cols-2 gap-5 text-black">
            <div className="flex flex-col">
              <h2 className="font-bold text-[16px] leading-6">Founder:</h2>
              <p className="text-[12px] leading-[14.4px]">{info.principal}</p>
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold text-[16px] leading-6">Matches Lost:</h2>
              <p className="text-[12px] leading-[14.4px]">{info.lost}</p>
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold text-[16px] leading-6">
                Academy Principal:
              </h2>
              <p className="text-[12px] leading-[14.4px]">{info.manager}</p>
            </div>

            <div className="flex flex-col">
              <h2 className="font-bold text-[16px] leading-6">
                All Time Scored:
              </h2>
              <p className="text-[12px] leading-[14.4px]">
                {info.highestScorer}
              </p>
            </div>

            <div className="flex flex-col">
              <h2 className="font-bold text-[16px] leading-6">Graduated:</h2>
              <p className="text-[12px] leading-[14.4px]">{info.graduated}</p>
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold text-[16px] leading-6">Team Color:</h2>
              <p className="text-[12px] leading-[14.4px]">{info.color}</p>
            </div>

            <div className="flex flex-col">
              <h2 className="font-bold text-[16px] leading-6">Matches Won:</h2>
              <p className="text-[12px] leading-[14.4px]">{info.won}</p>
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold text-[16px] leading-6">Nickname:</h2>
              <p className="text-[12px] leading-[14.4px]">{info.nickname}</p>
            </div>
          </div>
        </div>
        <Image
          src={info.logo}
          alt="Logo"
          className="w-1/4 h-full object-cover"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default Information;
