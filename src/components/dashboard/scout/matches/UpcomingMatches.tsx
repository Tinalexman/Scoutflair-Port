"use client";

import React, { useState } from "react";

import Image, { StaticImageData } from "next/image";
import CupImage from "@/public/dashboard/scout/Ellipse 2381.png";
import Logo1 from "@/public/dashboard/scout/club-américa-1.png";
import Logo2 from "@/public/dashboard/scout/dinamarca-1.png";

import { FaStar, FaRegStar } from "react-icons/fa";

interface iCupInfo {
  image: StaticImageData | string;
  name: string;
  type: string;
}

interface iMatch {
  homeLogo: StaticImageData | string;
  awayLogo: StaticImageData | string;
  homeName: string;
  awayName: string;
}

const UpcomingMatches = () => {
  const [cupInfo, setCupInfo] = useState<iCupInfo>({
    image: CupImage,
    name: "Fayomi's Cup",
    type: "Local Championship",
  });

  const [recentMatches, setRecentMatches] = useState<iMatch[]>(
    Array(5).fill({
      homeLogo: Logo1,
      awayLogo: Logo2,
      homeName: "Mickey FC",
      awayName: "St Johns's",
    })
  );

  return (
    <div className="w-full shadow-custom rounded-[1rem] py-4  bg-white flex flex-col gap-3">
      <h2 className="text-dark font-bold text-16-19 px-5">Upcoming Matches</h2>
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
      <div className="flex flex-col w-full">
        {recentMatches.map((rc, i) => (
          <div
            key={i}
            className={`w-full flex justify-between items-center px-5 py-2 border-border-gray ${
              i !== recentMatches.length - 1 && "border-b"
            }`}
          >
            <div className="flex gap-3 w-[10%] items-center">
              <FaRegStar className="text-12-14 text-dark" />
              <h3 className="text-14-16 text-placeholder">NS</h3>
            </div>

            <div className="flex gap-1 w-[30%] items-center">
              <Image
                src={rc.homeLogo}
                alt="home logo"
                className="size-4"
                width={16}
                height={16}
              />
              <h3 className="text-14-16 text-placeholder">{rc.homeName}</h3>
            </div>
            <div className="px-3 py-1 text-dark rounded-lg bg-[#B1D4E0] text-10-12">
              vs
            </div>
            <div className="flex gap-1 w-[30%] items-center justify-end">
              <h3 className="text-14-16 text-placeholder">{rc.awayName}</h3>
              <Image
                src={rc.awayLogo}
                alt="away logo"
                className="size-4"
                width={16}
                height={16}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingMatches;
