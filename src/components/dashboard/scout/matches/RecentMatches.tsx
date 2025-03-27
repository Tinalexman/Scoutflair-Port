"use client";

import React, { useState } from "react";

import Image, { StaticImageData } from "next/image";
import Void from "@/public/images/Void.png";
import CupImage from "@/public/dashboard/scout/Ellipse 2381.png";

import { FaStar } from "react-icons/fa";
import { useGetPreviousMatches } from "@/hooks/match";

import { Loader } from "@mantine/core";

interface iCupInfo {
  image: StaticImageData | string;
  name: string;
  type: string;
}

const RecentMatches = () => {
  const [cupInfo, setCupInfo] = useState<iCupInfo>({
    image: CupImage,
    name: "Fayomi's Cup",
    type: "Local Championship",
  });

  const { loading, data, success } = useGetPreviousMatches();

  return (
    <div className="w-full shadow-custom rounded-[1rem] py-4  bg-white flex flex-col gap-3">
      <h2 className="text-dark font-bold text-16-19 px-5">Recent Matches</h2>
      {!loading && data.length > 0 && (
        <div className="w-full flex justify-between items-center px-5">
          <div className="flex w-fit items-center gap-1">
            <Image
              src={CupImage}
              alt="cup image"
              width={36}
              height={36}
              className="size-9"
            />
            <div className="flex flex-col">
              <h3 className="font-semibold text-10-12 text-dark">
                {cupInfo.name}
              </h3>
              <p className="text-8-9 text-placeholder">{cupInfo.type}</p>
            </div>
          </div>
          <p className="text-10-12 text-dark">View All</p>
        </div>
      )}
      {!loading && data.length > 0 && (
        <div className="flex flex-col w-full">
          {data.map((rc, i) => (
            <div
              key={i}
              className={`w-full flex justify-between items-center px-5 py-2 border-border-gray ${
                i !== data.length - 1 && "border-b"
              }`}
            >
              <div className="flex gap-3 w-[10%] items-center">
                <FaStar className="text-12-14 text-secondary-3" />
                <h3 className="text-14-16 text-placeholder">FT</h3>
              </div>

              <div className="flex gap-1 w-[40%] items-center">
                <Image
                  src={rc.homeTeamLogoUrl}
                  alt="home logo"
                  className="size-4 rounded-full object-cover"
                  width={16}
                  height={16}
                />
                <h3 className="text-14-16 text-placeholder">{rc.homeTeam}</h3>
              </div>
              <div className="px-3 py-1 text-dark rounded-lg bg-[#B1D4E0] text-10-12">
                {rc.homeTeamScore ?? 0}:{rc.awayTeamScore ?? 0}
              </div>
              <div className="flex gap-1 w-[40%] items-center justify-end">
                <h3 className="text-14-16 text-placeholder">{rc.awayTeam}</h3>
                <Image
                  src={rc.awayTeamLogoUrl}
                  alt="away logo"
                  className="size-4 rounded-full object-cover"
                  width={16}
                  height={16}
                />
              </div>
            </div>
          ))}
        </div>
      )}
      {loading && (
        <div className="w-full h-40 grid place-content-center">
          <Loader color="primary.6" />
        </div>
      )}
      {!loading && data.length === 0 && (
        <div className="w-full flex flex-col justify-center items-center gap-5 my-16">
          <Image
            src={Void}
            alt="no matches"
            width={100}
            height={100}
            className="w-32 h-auto object-cover"
          />

          <h2 className="text-dark text-10-12 font-medium">
            There are no recent matches yet
          </h2>
        </div>
      )}
    </div>
  );
};

export default RecentMatches;
