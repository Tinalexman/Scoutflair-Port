import React from "react";

import Pic from "@/public/dashboard/scout/Rectangle 14.png";
import Country from "@/public/images/twemoji_flag-nigeria.png";

import PlayerCard, { iPlayer } from "./PlayerCard";
import { IoPeopleOutline } from "react-icons/io5";

const AllPlayers = () => {
  const players: iPlayer[] = Array(10).fill({
    image: Pic,
    country: Country,
    firstName: "John",
    lastName: "Doe",
    role: "Midfielder",
    nationality: "Nigerian",
    jersey: 23,
    age: 18,
    id: "id",
  });

  return (
    <div className="w-full shadow-custom rounded-[1rem] py-4 px-5 gap-5 bg-white flex flex-col ">
      <div className="w-full justify-between items-center flex">
        <div className="flex gap-1 w-fit items-center text-dark">
          <IoPeopleOutline size={22} />
          <h2 className=" font-bold text-16-19">All Players</h2>
        </div>
        <div className="text-primary-2 border border-primary-2 px-3 py-1 rounded-md text-10-12 cursor-pointer font-bold">
          Filter
        </div>
      </div>
      <div className="w-full grid grid-cols-2 gap-6">
        {players.map((player, i) => (
          <PlayerCard key={i} player={player} />
        ))}
      </div>
    </div>
  );
};

export default AllPlayers;
