"use client";

import React, {useState} from "react";

import Image from "next/image";

import FormationImage from "@/public/dashboard/player/Group 1000001949.png";

const Formation = () => {

  const [currentFormation, setCurrentFormation] = useState<string>("4-4-2")
  const [currentFormationWinRate, setCurrentFormationWinRate] = useState<number>(60)
  const [lastFormation, setLastFormation] = useState<string>("4-3-3")
  const [lastMatchStatus, setLastMatchStatus] = useState<string>("Win")

  return (
    <div className="flex flex-col">
      <div className="w-full h-[100px] bg-[url('../../public/dashboard/player/formation background.jpeg')] bg-cover bg-no-repeat bg-center">
        <div className="w-full h-full overflow-hidden text-white text-xl font-bold bg-[#041931]/90 flex justify-center items-center">
          TEAM FORMATION
        </div>
      </div>
      <div className="w-full flex flex-col py-2 px-4 shadow-custom-2 gap-4 overflow-hidden rounded-b-2xl bg-white border-2 border-border-gray">
        <Image
          src={FormationImage}
          alt="formation"
          className="w-full h-auto "
        />
        <div className="flex gap-3 w-full">
          <div className="flex flex-col gap-3 text-[12px] text-black text-opacity-80 font-bold">
            <p>Most Used Formation</p>
            <p>Recent Formations</p>
          </div>
          <div className="w-[1px] h-full bg-black" />
          <div className="flex flex-col gap-3 text-[12px] text-black text-opacity-80 font-bold">
            <p>{currentFormation} ({"Win Rate: " + currentFormationWinRate + "%"})</p>
            <p>Last Match: {lastFormation} ({lastMatchStatus})</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formation;
