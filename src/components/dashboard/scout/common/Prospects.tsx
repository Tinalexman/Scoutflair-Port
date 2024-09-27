"use client";

import React from "react";

import { GiSwordsEmblem } from "react-icons/gi";

import PlayerTwo from "@/public/dashboard/scout/ellipse-2374.png";
import Image, { StaticImageData } from "next/image";
import { useGetScoutPlayerProspects } from "@/src/hooks/scout";
import { Loader } from "@mantine/core";

interface iProspect {
  name: string;
  image: StaticImageData | string;
  role: string;
}

const Prospects = () => {
  const topProspects: iProspect[] = Array(3).fill({
    name: "John Doe",
    image: PlayerTwo,
    role: "10 G/A",
  });

  const { loading, data } = useGetScoutPlayerProspects();

  return (
    <div className="w-full h-full shadow-custom rounded-[1rem] py-4 px-5 bg-white flex flex-col justify-between">
      {loading && (
        <div className="w-full h-full grid place-content-center">
          <Loader color="primary.6" />
        </div>
      )}
      {!loading && (
        <>
          <div className="w-full justify-between items-center flex">
            <h2 className="text-dark font-bold text-16-19">Top Prospects</h2>
            <GiSwordsEmblem className="text-dark text-2xl" />
          </div>
          <div className="w-full grid grid-cols-3 gap-4">
            {data.map((prospect, index) => (
              <div
                key={index}
                className="w-full relative flex flex-col bg-[#FFFAFA] pb-1 rounded-xl h-[4rem] text-dark items-center justify-end"
              >
                <Image
                  src={prospect.playerImageUrl}
                  alt="player"
                  width={44}
                  height={40}
                  className="w-11 h-10 object-cover rounded-full absolute -top-1.5 left-3.75"
                />
                <p className="text-10-12 line-clamp-1 text-center">
                  {prospect.playerFullName}
                </p>
                <p className="text-8-9">{prospect.playerGA} GA</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Prospects;
