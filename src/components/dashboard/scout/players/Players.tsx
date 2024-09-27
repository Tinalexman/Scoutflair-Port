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
      {loading && (
        <div className="w-full grid place-content-center h-80">
          <Loader color="primary.6" />
        </div>
      )}
      <div className="w-full grid grid-cols-4 gap-3">
        {data.map((player, i) => (
          <PlayerCard key={i} player={player} />
        ))}
      </div>
      {!loading && data.length === 0 && (
        <div className="w-full h-[30rem] flex flex-col shadow-custom justify-center items-center gap-5 sticky top-6 bg-white rounded-xl">
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
  );
};

export default Players;
