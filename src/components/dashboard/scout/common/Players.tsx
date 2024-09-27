"use client";

import React, { useState } from "react";

import Image, { StaticImageData } from "next/image";

import { FaStar } from "react-icons/fa";
import { RiMedalLine } from "react-icons/ri";

import PlayerOne from "@/public/dashboard/scout/ellipse-2373.png";
import PlayerTwo from "@/public/dashboard/scout/ellipse-2374.png";
import { useGetScoutPlayerMetrics } from "@/src/hooks/scout";
import { Loader } from "@mantine/core";

const Players = () => {
  const { loading, data, success } = useGetScoutPlayerMetrics();
  const [total, setTotal] = useState<number>(150);
  const [ratings, setRatings] = useState<number>(4);

  return (
    <div className="w-full h-full shadow-custom rounded-[1rem] py-4 px-5 bg-white flex flex-col justify-between">
      {!loading && (
        <>
          <div className="w-full justify-between items-center flex">
            <h2 className="text-dark font-bold text-16-19">
              Total Players Scouted
            </h2>
            <RiMedalLine className="text-dark text-2xl" />
          </div>
          <div className="flex w-full justify-between">
            <div className="w-full justify-between flex flex-col ">
              <div className="flex w-fit ">
                {data.imageUrls.map((player, index) =>
                  player ? (
                    <div className="size-8 rounded-full bg-primary-2" />
                  ) : (
                    <Image
                      src={player}
                      key={index}
                      alt="player"
                      width={32}
                      height={32}
                      className={`size-8 rounded-full object-cover`}
                    />
                  )
                )}
              </div>
              <div className="flex w-fit gap-1">
                {Array(5)
                  .fill(0)
                  .map((num, index) => (
                    <FaStar
                      key={index}
                      size={20}
                      className={`${
                        index + 1 <= ratings
                          ? "text-[#FFD700]"
                          : "text-border-gray"
                      }`}
                    />
                  ))}
              </div>
            </div>
            <div className="w-full items-end flex flex-col justify-between">
              <h1 className="text-primary-2 text-48-57 font-bold">
                {data.playerScoutedNumber}
              </h1>
              <p className="text-12-14 text-placeholder font-medium">
                Players Scouted
              </p>
            </div>
          </div>
        </>
      )}
      {loading && (
        <div className="w-full h-full grid place-content-center">
          <Loader color="primary.6" />
        </div>
      )}
    </div>
  );
};

export default Players;
