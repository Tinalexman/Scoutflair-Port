"use client";

import React, { useState } from "react";

import { IoIosArrowForward } from "react-icons/io";
import Image, { StaticImageData } from "next/image";

import TopPlayerImage from "@/public/dashboard/player/soccer-game-concept.png";
import PlayerImage2 from "@/public/dashboard/player/ellipse-2373.png";

import TeamImage from "@/public/dashboard/player/dinamo-zagreb-1.png";

interface iTopScorer {
  name: string;
  image: StaticImageData | string;
  teamLogo: StaticImageData | string;
  teamName: string;
  goals: number;
}

const TopScorerCard: React.FC = () => {
  const [topScorers, setTopScorers] = useState<iTopScorer[]>([
    {
      name: "Lionel Messi",
      image: TopPlayerImage,
      teamName: "Inter Miami",
      teamLogo: TeamImage,
      goals: 34,
    },
    {
      name: "Cristiano Ronaldo",
      teamName: "Manchester United",
      image: PlayerImage2,
      teamLogo: TeamImage,
      goals: 32,
    },
    {
      name: "Kylian Mbappe",
      teamName: "Paris Saint-Germain",
      image: PlayerImage2,
      teamLogo: TeamImage,
      goals: 27,
    },
    {
      name: "Kevin DeBruyne",
      teamName: "Manchester City",
      image: PlayerImage2,
      teamLogo: TeamImage,
      goals: 22,
    },
  ]);

  return (
    <div className="font-lato w-full flex flex-col justify-start items-start rounded-bl-2xl rounded-br-2xl bg-white border-2 border-[#d1d1d1] rounded-2xl shadow-lg">
      <div className="flex w-full justify-between items-center p-5 gap-8">
        <div>
          <p className="text-xl font-bold text-black">TOP SCORER</p>
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <p className="text-base text-black opacity-92">View All</p>
          <IoIosArrowForward size={"16px"} className="text-black" />
        </div>
      </div>
      <div className=" w-full h-36 bg-[url('../../public/dashboard/player/frame-1000001965.png')] bg-cover bg-no-repeat bg-center overflow-hidden shadow-md">
        <div className="relative w-full h-full inset-0 bg-[#041931]/[0.88] flex items-center justify-end pr-4">
          <Image
            src={topScorers[0].image}
            className="w-[300px] h-auto absolute -left-10 bottom-0 object-cover rounded-2xl"
            alt="soccer game concept"
            width={100}
            height={100}
          />
          <div className="">
            <p className="text-lg font-medium text-white">
              {topScorers[0].name}
            </p>
            <p className="text-sm font-medium text-white">
              {topScorers[0].goals} Goals
            </p>
          </div>
          <Image
            src={topScorers[0].teamLogo}
            className="size-4 absolute right-4 top-4"
            alt="team logo"
            width={16}
            height={16}
          />
        </div>
      </div>
      <div className="flex flex-col p-4 gap-6 w-full">
        {topScorers.slice(1).map((scorer, index) => (
          <div
            key={index}
            className="flex justify-between items-center w-full gap-4"
          >
            <div className="flex items-center gap-3">
              <Image
                className="size-12 rounded-full"
                src={scorer.image}
                width={48}
                height={48}
                alt="profile"
              />
              <div className="flex flex-col">
                <p className="text-lg font-medium text-black">{scorer.name}</p>
                <div className="flex items-center gap-2">
                  <Image
                    src={scorer.teamLogo}
                    width={20}
                    height={20}
                    className="size-5 object-cover"
                    alt="flag"
                  />
                  <p className="text-sm text-black opacity-88">
                    {scorer.teamName}
                  </p>
                </div>
              </div>
            </div>
            <p className="text-base font-medium text-black opacity-92">
              {scorer.goals} Goals
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopScorerCard;
