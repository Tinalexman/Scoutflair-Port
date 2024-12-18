"use client";

import React from "react";

import PlayerCard from "./PlayerCard";
import { IoSearchOutline } from "react-icons/io5";

import { TbColorFilter } from "react-icons/tb";
import { useGetPlayers } from "@/src/hooks/scout";
import { Loader } from "@mantine/core";

import Image from "next/image";
import Void from "@/public/images/Void.png";

const Players = () => {
  const { data, loading } = useGetPlayers();

  return (
    <div className="w-full flex flex-col gap-4 p-6">
      <div className="w-full shadow-custom rounded-[1rem] py-4 px-5 bg-white flex flex-col gap-5">
        <h2 className="text-dark font-bold text-16-19">Available Players</h2>
        {loading && (
          <div className="w-full grid place-content-center h-[30rem]">
            <Loader color="primary.6" />
          </div>
        )}
        <div className="w-full grid grid-cols-4 gap-3 min-h-[30rem]">
          {data.map((player, i) => (
            <PlayerCard key={i} player={player} />
          ))}
        </div>
        {!loading && data.length === 0 && (
          <div className="w-full h-[30rem] flex flex-col justify-center items-center gap-5">
            <Image
              src={Void}
              alt="no posts"
              width={100}
              height={100}
              className="w-40 h-auto object-cover"
            />

            <h2 className="text-dark text-16-19 font-medium">
              There are no players available
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Players;
