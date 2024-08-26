"use client";

import React, { useState } from "react";

import {
  convertDateFull,
  convertDateWithDayName,
  convertTime,
} from "@/src/functions/dateFunctions";
import Image, { StaticImageData } from "next/image";

import Logo1 from "@/public/dashboard/player/dinamo-zagreb-1.png";
import Logo2 from "@/public/dashboard/player/kashima-antlers-1.png";
import UpcomingMatch from "@/public/dashboard/player/unsplash_t8vre7qpm2m.png";

import { IoCalendarNumberOutline } from "react-icons/io5";
import { TbSoccerField } from "react-icons/tb";

interface iClub {
  name: string;
  logo: StaticImageData | string;
}

const UpcomingMatchBanner: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [league, setLeague] = useState<string>("Uptown ScoutFlair League");
  const [stadium, setStadium] = useState<string>("Old Jabi Township Stadium");

  const [clubs, setClubs] = useState<iClub[]>([
    {
      name: "Deltas FC",
      logo: Logo1,
    },
    {
      name: "Rhinos FC",
      logo: Logo2,
    },
  ]);

  return (
    <div className="w-full h-[140px] relative overflow-hidden font-lato rounded-2xl shadow-custom-2 bg-[url('../../public/dashboard/player/upcoming-matches-banner.jpeg')] bg-cover bg-no-repeat bg-center">
      <div className="w-full h-full absolute left-0 top-0 text-white overflow-hidden flex flex-col gap-2 rounded-lg bg-[#041931]/90 p-5">
        <p className="text-16-19 font-semibold text-left">
          {clubs[0].name} vs {clubs[1].name}
        </p>
        <div className="flex flex-col gap-1 ">
          <div className="flex gap-2 items-center text-12-14">
            <IoCalendarNumberOutline className="text-14-16" />
            <p>{convertDateFull(date)}</p>
          </div>
          <div className="flex gap-2 items-center text-12-14">
            <TbSoccerField className="text-14-16" />
            <p>{stadium}</p>
          </div>
        </div>
        <button className="mt-2 border border-secondary-3 h-6 rounded-full w-24 text-10-12 font-medium">
          PREVIEW
        </button>
      </div>
      <Image
        src={UpcomingMatch}
        className="w-1/2 h-full absolute -right-10 top-0 object-cover"
        alt="Upcoming Match"
      />
    </div>
  );
};

export default UpcomingMatchBanner;
