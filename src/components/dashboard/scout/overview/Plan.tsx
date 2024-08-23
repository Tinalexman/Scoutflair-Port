"use client";

import React from "react";

import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import Image, { StaticImageData } from "next/image";

import Nigeria from "@/public/dashboard/scout/twemoji_flag-nigeria.png";
import Pic from "@/public/dashboard/scout/ellipse-2374.png";

import { FaStar } from "react-icons/fa";

import { useCurrentUserStore } from "@/src/stores/userStore";

interface iPlayer {
  firstName: string;
  lastName: string;
  image: string | StaticImageData;
  country: string | StaticImageData;
  role: string;
  team: string;
  rating: number;
  weight: number;
  height: number;
  games: number;
  assists: number;
  goals: number;
}

interface iTopPlayer {
  firstName: string;
  lastName: string;
  image: string | StaticImageData;
  country: string | StaticImageData;
  role: string;
}

const Plan = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const image = useCurrentUserStore((state) => state.image);
  const firstName = useCurrentUserStore((state) => state.firstName);
  const lastName = useCurrentUserStore((state) => state.lastName);

  const players: iPlayer[] = Array(4).fill({
    firstName: "Abubakar",
    lastName: "Kabir",
    team: "Scoutflair FC",
    country: Nigeria,
    image: Pic,
    rating: 5,
    role: "MidFielder",
    height: 178,
    weight: 69,
    games: 50,
    assists: 15,
    goals: 5,
  });

  const topPlayers: iTopPlayer[] = Array(3).fill({
    firstName: "Abubakar",
    lastName: "Kabir",
    image: Pic,
    country: Nigeria,
    role: "MidFielder",
  });

  return (
    <div className="w-full shadow-custom rounded-[1rem] py-4 px-5 bg-white flex flex-col ">
      <div className="w-full justify-between items-center flex">
        <div className="flex gap-1 w-fit items-center text-dark">
          <HiOutlineClipboardDocumentCheck size={22} />
          <h2 className=" font-bold text-16-19">Scouting Plan</h2>
        </div>
        <div
          onClick={open}
          className="text-primary-2 border-2 border-primary-2 px-3 py-1 rounded-md text-10-12 cursor-pointer font-bold"
        >
          Add Task
        </div>
      </div>
      <hr className="bg-placeholder my-3" />
      <div className="flex gap-2 items-center">
        <Image
          src={image}
          alt="scout"
          width={32}
          height={32}
          className="size-8 object-cover rounded-full"
        />
        <h3 className="text-dark font-lato text-12-14">
          {firstName} {lastName}
        </h3>
      </div>
      <div className="mt-3 w-full h-[14rem] grid grid-cols-4 gap-6 ">
        {players.map((player, index) => (
          <div
            key={index}
            className="bg-[#FFFAFA] border-[0.5px] rounded-[1rem] w-full h-full gap-3 flex flex-col items-center p-3"
          >
            <div className="w-full flex justify-between items-center">
              <h3 className="text-12-14 font-medium text-dark">
                {player.team}
              </h3>
              <Image
                src={player.country}
                alt="country"
                width={16}
                height={16}
                className="size-4 object-cover rounded-full"
              />
            </div>
            <div className="w-full h-full items-center flex flex-col">
              <div className="flex flex-col items-center gap-1 w-full">
                <Image
                  src={player.image}
                  alt="player-image"
                  width={60}
                  height={60}
                  className="size-14 object-cover rounded-full"
                />
                <div className="flex flex-col gap-0.5 w-full items-center">
                  <div className="flex w-fit gap-1">
                    {Array(5)
                      .fill(0)
                      .map((num, index) => (
                        <FaStar
                          key={index}
                          size={10}
                          className={`${
                            index + 1 <= player.rating
                              ? "text-[#FFD700]"
                              : "text-border-gray"
                          }`}
                        />
                      ))}
                  </div>
                  <h2 className="text-semibold text-dark text-12-14">
                    {player.firstName} {player.lastName}
                  </h2>
                </div>
              </div>
              <hr className="bg-placeholder my-1.5 w-full" />
              <div className="w-full flex flex-col items-center gap-2">
                <div className="w-full flex flex-col gap-1 items-center">
                  <h3 className="text-10-12 font-bold text-primary-2">
                    {player.role}
                  </h3>
                  <div className="w-fit flex gap-3 items-center text-8-9 font-medium text-dark">
                    <p>Height {player.height}</p>
                    <p>Weight {player.weight}</p>
                  </div>
                </div>
                <div className="flex flex-col w-full items-center gap-1.5">
                  <h2 className="text-10-12 font-medium text-dark">
                    Academy Stats
                  </h2>
                  <div className="flex w-full justify-between items-center text-8-9 font-medium text-dark">
                    <div className="flex flex-col items-center">
                      <p>{player.games}</p>
                      <p>Games</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <p>{player.assists}</p>
                      <p>Assists</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <p>{player.goals}</p>
                      <p>Goals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="bg-placeholder my-3.5" />
      <h2 className="text-dark font-bold text-16-19">Top 3 Players</h2>
      <div className="mt-2 w-full grid grid-cols-3 gap-6">
        {topPlayers.map((tp, i) => (
          <div
            key={i}
            className="bg-white border-[0.5px] shadow-custom rounded-[1rem] w-full h-[3.5rem] gap-3 flex justify-between items-center p-2"
          >
            <Image
              src={tp.image}
              alt="player-image"
              width={40}
              height={40}
              className="size-10 object-cover rounded-full"
            />
            <Image
              src={tp.country}
              alt="country"
              width={16}
              height={16}
              className="size-4 object-cover rounded-full"
            />
            <div className="flex flex-col items-end">
              <h2 className="text-bold text-dark text-12-14">
                {tp.firstName} {tp.lastName}
              </h2>
              <p className="text-8-9 font-bold text-primary-2">{tp.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plan;
