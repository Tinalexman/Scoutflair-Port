"use client";

import React, { useState } from "react";

import Image, { StaticImageData } from "next/image";

import Player from "@/public/dashboard/player/player.png";
import Logo1 from "@/public/dashboard/player/club-américa-1.png";
import Logo2 from "@/public/dashboard/player/dinamarca-1.png";
import { convertDateWithJustSlashes } from "@/src/functions/dateFunctions";

interface iMatch {
  homeLogo: StaticImageData | string;
  awayLogo: StaticImageData | string;
  homeName: string;
  awayName: string;
  date: Date;
}

const UpcomingMatches = () => {
  const [matches, setMatches] = useState<iMatch[]>(
    Array(5).fill({
      homeLogo: Logo1,
      awayLogo: Logo2,
      homeName: "Josh FC",
      awayName: "Drift SC",
      date: new Date(),
    })
  );

  return (
    <div className="flex flex-col bg-white border border-border-gray shadow-custom-2 rounded-2xl overflow-hidden h-full">
      <div className="bg-primary-2 bg-opacity-[0.96] h-[120px] w-full relative overflow-hidden">
        <div className="size-[180px] absolute -right-10 -top-5 rounded-full bg-pale-green" />

        <div className="flex pl-5 pr-7 w-full h-full z-5 absolute justify-between items-center">
          <div className="flex flex-col gap-3">
            <h2 className="text-white text-lg font-semibold">
              Upcoming <br />
              Football Matches
            </h2>
            <p className="text-white text-[10px]">
              Don&apos;t Miss The Action!!!
            </p>
          </div>
          <Image src={Player} alt="player" className="w-[60px] h-[74px]" />
        </div>
      </div>
      <div className="flex flex-col w-full gap-5 px-8 py-5 text-black">
        {matches.map((match, i) => (
          <div key={i} className="flex flex-col gap-2 w-full">
            <p className="text-[12px]">
              {convertDateWithJustSlashes(match.date)}
            </p>
            <div className="flex w-full items-center justify-between">
              <div className="flex flex-col gap-1 items-center">
                <Image
                  src={match.homeLogo}
                  alt={match.homeName}
                  width={32}
                  height={32}
                  className="rounded-full object-cover size-8"
                />
                <p className="text-[16px] font-inter font-medium text-black">
                  {match.homeName}
                </p>
              </div>

              <h2 className="text-black text-lg font-bold">VS</h2>

              <div className="flex flex-col gap-1 items-center">
                <Image
                  src={match.awayLogo}
                  alt={match.awayName}
                  width={32}
                  height={32}
                  className="rounded-full object-cover size-8"
                />
                <p className="text-[16px] font-inter font-medium text-black">
                  {match.awayName}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingMatches;
