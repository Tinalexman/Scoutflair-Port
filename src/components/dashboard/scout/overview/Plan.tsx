"use client";

import React from "react";

import { useDisclosure } from "@mantine/hooks";

import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import Image from "next/image";

import Nigeria from "@/public/dashboard/scout/twemoji_flag-nigeria.png";

import { FaStar } from "react-icons/fa";

import { useCurrentUserStore } from "@/src/stores/userStore";
import AddTask from "./AddTask";
import ProfileImageOrTextAvatar from "@/src/components/reusable/ProfileImageOrTextAvatar";
import { useGetScoutsPlayers } from "@/src/hooks/scout";
import { Loader } from "@mantine/core";

const Plan = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const names = useCurrentUserStore((state) => state.name);
  const image = useCurrentUserStore((state) => state.image);

  const { data: players, loading } = useGetScoutsPlayers();

  return (
    <>
      <div className="w-full shadow-custom rounded-[1rem] py-4 px-5 bg-white flex flex-col ">
        <div className="w-full justify-between items-center flex">
          <div className="flex gap-1 w-fit items-center text-dark">
            <HiOutlineClipboardDocumentCheck size={22} />
            <h2 className=" font-bold text-16-19">Scouting Plan</h2>
          </div>
          <div
            onClick={open}
            className="text-primary-2 border border-primary-2 px-3 py-1 rounded-md text-10-12 cursor-pointer font-bold"
          >
            Add Task
          </div>
        </div>
        <hr className="bg-placeholder my-3" />
        <div className="flex gap-2 items-center">
          <ProfileImageOrTextAvatar
            image={image}
            name={names}
            size="size-8"
            radius="rounded-full"
            text="text-12-14"
          />
          <h3 className="text-dark font-lato text-12-14">{names}</h3>
        </div>
        {!loading && (
          <div className="mt-3 mb-4 w-full h-[13rem] grid grid-cols-4 gap-6">
            {players.slice(0, 4).map((player, index) => (
              <div
                key={index}
                className="bg-[#FFFAFA] border-[0.5px] rounded-[1rem] w-full h-full gap-3 flex flex-col items-center p-3"
              >
                <div className="w-full flex justify-between items-center">
                  <h3 className="text-12-14 font-medium text-dark">
                    {player.currentTeam}
                  </h3>
                  <Image
                    src={Nigeria}
                    alt="country"
                    width={16}
                    height={16}
                    className="size-4 object-cover rounded-full"
                  />
                </div>
                <div className="w-full h-full items-center flex flex-col">
                  <div className="flex flex-col items-center gap-1 w-full">
                    <ProfileImageOrTextAvatar
                      image={""}
                      name={player.fullName}
                      radius={"rounded-full"}
                      size={"size-14"}
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
                                index + 1 <= 4
                                  ? "text-[#FFD700]"
                                  : "text-border-gray"
                              }`}
                            />
                          ))}
                      </div>
                      <h2 className="text-semibold text-dark text-10-12">
                        {player.fullName}
                      </h2>
                    </div>
                  </div>
                  <hr className="bg-placeholder my-1.5 w-full" />
                  <div className="w-full flex flex-col items-center gap-2">
                    <div className="w-full flex flex-col gap-1 items-center">
                      <h3 className="text-8-9 font-bold text-primary-2">
                        {player.position}
                      </h3>
                      <div className="w-fit flex gap-3 items-center text-6-7 font-medium text-dark">
                        <p>Height {player.height}</p>
                        <p>Weight {player.weight}</p>
                      </div>
                    </div>
                    <div className="flex flex-col w-full items-center gap-1.5">
                      <h2 className="text-8-9 font-medium text-dark">
                        Academy Stats
                      </h2>
                      <div className="flex w-full justify-between items-center text-6-7 font-medium text-dark">
                        <div className="flex flex-col items-center">
                          <p>{player.appearances}</p>
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
        )}
        {loading && (
          <div className="w-full h-[13rem] grid place-content-center">
            <Loader color="primary.6" />{" "}
          </div>
        )}
      </div>
      {opened && <AddTask close={close} />}
    </>
  );
};

export default Plan;
