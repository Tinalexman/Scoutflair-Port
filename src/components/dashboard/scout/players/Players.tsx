import React from "react";

import PlayerCard, { iPlayer } from "./PlayerCard";
import { IoSearchOutline } from "react-icons/io5";

import { TbColorFilter } from "react-icons/tb";

import Pic from "@/public/dashboard/scout/ellipse-2374.png";
import Country from "@/public/images/twemoji_flag-nigeria.png";

const Players = () => {
  const players: iPlayer[] = Array(30).fill({
    image: Pic,
    country: Country,
    firstName: "John",
    lastName: "Doe",
    role: "Midfielder",
    jersey: 23,
    age: 18,
    height: 164,
    weight: 55,
  });

  return (
    <div className="w-full flex flex-col gap-4 p-6">
      <div className="w-full shadow-custom rounded-[1rem] py-4 px-5 bg-white flex flex-col gap-5">
        <h2 className="text-dark font-bold text-16-19">Available Players</h2>
        <div className="w-full flex items-center justify-between">
          <div className="relative w-[92%]">
            <input
              className="h-8 rounded w-full border pl-11 bg-white pr-4 text-14-16 border-border-gray placeholder:text-placeholder text-12-14 font-lato text-dark"
              placeholder="Search for players"
            />
            <IoSearchOutline className="absolute inset-y-1/2 -translate-y-1/2 left-4 text-lg text-placeholder" />
          </div>

          <div className="size-8 grid place-content-center bg-primary-2 rounded ">
            <TbColorFilter className="text-2xl text-white cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-4 gap-3">
        {players.map((player, i) => (
          <PlayerCard key={i} player={player} />
        ))}
      </div>
    </div>
  );
};

export default Players;
