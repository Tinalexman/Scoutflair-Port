"use client";

import React, { useState } from "react";

import Image from "next/image";

import FormationImage from "@/public/dashboard/player/Group 1000001949.png";

interface iFormationData {
  formation: string;
  win: number;
  scored: number;
  conceeded: number;
}

const Formations = () => {
  const [formationData, setFormationData] = useState<iFormationData[]>([
    {
      formation: "4-3-3",
      win: 86,
      scored: 56,
      conceeded: 16,
    },
    {
      formation: "4-4-2",
      win: 72,
      scored: 34,
      conceeded: 15,
    },
    {
      formation: "3-5-2",
      win: 45,
      scored: 24,
      conceeded: 14,
    },
    {
      formation: "3-4-3",
      win: 79,
      scored: 32,
      conceeded: 13,
    },
    {
      formation: "5-4-1",
      win: 34,
      scored: 30,
      conceeded: 11,
    },
    {
      formation: "4-5-1",
      win: 54,
      scored: 19,
      conceeded: 10,
    },
  ]);

  return (
    <div className="flex flex-col h-[510px] rounded-[16px] border-2 border-border-gray shadow-custom-2 items-center bg-white">
      <h2 className="text-black text-lg font-bold py-3">Team Formations</h2>
      <div className="bg-primary-2 bg-opacity-[0.96] w-full py-4 pl-6 pr-4 flex items-center">
        <p className="text-white text-sm w-1/4 text-start">Formations</p>
        <p className="text-white text-sm w-1/4 text-center">Win Rate</p>
        <p className="text-white text-sm w-1/4 text-center">Goals Scored</p>
        <p className="text-white text-sm w-1/4 text-end">Goals Conceeded</p>
      </div>
      <div className="flex flex-col gap-5 px-5 py-5 w-full">
        {formationData.map((fd, i) => (
          <div
            key={i}
            className="flex items-center w-full border border-border-gray py-1 px-2 rounded-[8px]"
          >
            <div className="flex w-1/4 items-center gap-2">
              <Image
                src={FormationImage}
                alt="formation image"
                className="w-5 h-8"
                width={32}
                height={20}
              />
              <p className="text-black text-[16px] font-semibold">
                {fd.formation}
              </p>
            </div>

            <p className="w-1/4 text-center text-black text-[16px] font-semibold">
              {fd.win}%
            </p>
            <p className="w-1/4 text-center text-black text-[16px] font-semibold">
              {fd.scored}
            </p>
            <p className="w-1/4 pl-10 text-center text-black text-[16px] font-semibold">
              {fd.conceeded}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Formations;
