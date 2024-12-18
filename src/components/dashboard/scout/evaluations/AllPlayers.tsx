"use client";

import React from "react";

import PlayerCard from "./PlayerCard";
import { IoPeopleOutline } from "react-icons/io5";
import { useGetScoutsPlayers } from "@/src/hooks/scout";
import { Loader } from "@mantine/core";

import Image from "next/image";
import Void from "@/public/images/Void.png";

const AllPlayers = () => {
  const { data, loading } = useGetScoutsPlayers();

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
      {loading && (
        <div className="w-full grid place-content-center h-80">
          <Loader color="primary.6" />
        </div>
      )}
      {!loading && (
        <div className="w-full grid grid-cols-2 gap-6">
          {data.map((player, i) => (
            <PlayerCard key={i} player={player} />
          ))}
        </div>
      )}
      {!loading && data.length === 0 && (
        <div className="w-full h-[30rem] flex flex-col justify-center items-center gap-5 sticky top-6">
          <Image
            src={Void}
            alt="no posts"
            width={100}
            height={100}
            className="w-40 h-auto object-cover"
          />

          <h2 className="text-dark text-12-14 font-medium">
            There are no players available at the moment
          </h2>
        </div>
      )}
    </div>
  );
};

export default AllPlayers;
