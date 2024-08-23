"use client";

import React, { useState } from "react";

import Image, { StaticImageData } from "next/image";

import { FaStar } from "react-icons/fa";
import { RiMedalLine } from "react-icons/ri";

import PlayerOne from "@/public/dashboard/scout/ellipse-2373.png";
import PlayerTwo from "@/public/dashboard/scout/ellipse-2374.png";

const Players = () => {
  const topPlayers: StaticImageData[] = [
    PlayerOne,
    PlayerTwo,
    PlayerOne,
    PlayerTwo,
  ];

  const [total, setTotal] = useState<number>(150);
  const [ratings, setRatings] = useState<number>(4);

  return (
    <div className="w-full h-full shadow-custom rounded-[1rem] py-4 px-5 bg-white flex flex-col justify-between">
      <div className="w-full justify-between items-center flex">
        <h2 className="text-dark font-bold text-16-19">
          Total Players Scouted
        </h2>
        <RiMedalLine className="text-dark text-2xl" />
      </div>
      <div className="flex w-full justify-between">
        <div className="w-full justify-between flex flex-col ">
          <div className="flex w-fit ">
            {topPlayers.map((player, index) => (
              <Image
                src={player}
                key={index}
                alt="player"
                width={32}
                height={32}
                className={`size-8 rounded-full object-cover`}
              />
            ))}
          </div>
          <div className="flex w-fit gap-1">
            {Array(5)
              .fill(0)
              .map((num, index) => (
                <FaStar
                  size={20}
                  className={`${
                    index + 1 <= ratings ? "text-[#FFD700]" : "text-border-gray"
                  }`}
                />
              ))}
          </div>
        </div>
        <div className="w-full items-end flex flex-col justify-between">
          <h1 className="text-primary-2 text-48-57 font-bold">{total}</h1>
          <p className="text-12-14 text-placeholder font-medium">
            Players Scouted
          </p>
        </div>
      </div>
    </div>
  );
};

export default Players;
