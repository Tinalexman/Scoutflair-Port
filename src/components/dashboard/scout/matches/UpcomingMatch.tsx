"use client";

import React from "react";

import { convertDateFullAndTime } from "@/src/functions/dateFunctions";
import Image from "next/image";

import UpcomingMatch from "@/public/dashboard/player/unsplash_t8vre7qpm2m.png";

import { IoCalendarNumberOutline } from "react-icons/io5";
import { TbSoccerField } from "react-icons/tb";
import { iMatchResponse } from "@/src/hooks/match";
import { Loader } from "@mantine/core";

const UpcomingMatchBanner: React.FC<{
  data: iMatchResponse[];
  loading: boolean;
}> = ({ data, loading }) => {
  return (
    <div className="w-full h-[12rem] relative overflow-hidden font-lato rounded-2xl shadow-custom-2 bg-[url('../../public/dashboard/player/upcoming-matches-banner.jpeg')] bg-cover bg-no-repeat bg-center">
      <div className="w-full h-full absolute left-0 top-0 text-white overflow-hidden flex flex-col gap-2 rounded-lg bg-[#041931]/90 p-5">
        {loading && (
          <div className="w-full h-full grid place-content-center">
            <Loader color="white.6" />
          </div>
        )}

        {!loading && data.length > 0 && (
          <>
            <p className="text-16-19 font-semibold text-left">
              {data[0].homeTeam} vs {data[1].awayTeam}
            </p>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 items-center text-12-14">
                <IoCalendarNumberOutline className="text-14-16" />
                <p>
                  {convertDateFullAndTime(
                    new Date(`${data[0].date}${data[0].dateTime}`)
                  )}
                </p>
              </div>
              <div className="flex gap-2 items-center text-12-14">
                <TbSoccerField className="text-14-16" />
                <p>{data[0].stadiumPitch}</p>
              </div>
            </div>
            <button className="mt-2 border border-secondary-3 h-6 rounded-full w-24 text-10-12 font-medium">
              PREVIEW
            </button>
          </>
        )}
        {!loading && data.length === 0 && (
          <div className="w-full h-full grid place-content-center">
            <p className="text-12-14 font-semibold text-left">
              No upcoming matches
            </p>
          </div>
        )}
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
