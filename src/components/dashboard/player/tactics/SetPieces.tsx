"use client";

import React, { useState } from "react";

interface iPieceData {
  name: string;
  win: number;
  scored: number;
  conceeded: number;
}

const SetPieces = () => {
  const [pieceData, setPieceData] = useState<iPieceData[]>([
    {
      name: "Corners",
      win: 7,
      scored: 5,
      conceeded: 56,
    },
    {
      name: "Free Kicks",
      win: 4,
      scored: 2,
      conceeded: 60,
    },
    {
      name: "Throw Ins",
      win: 67,
      scored: 12,
      conceeded: 55,
    },
    {
      name: "Goal Kicks",
      win: 35,
      scored: 12,
      conceeded: 78,
    },
    {
      name: "Penalty Kicks",
      win: 24,
      scored: 3,
      conceeded: 92,
    },
  ]);

  return (
    <div className="flex flex-col h-[370px] rounded-[16px] overflow-hidden border-2 border-border-gray shadow-custom-2 items-center bg-white">
      <div className="bg-primary-2 bg-opacity-[0.96] py-2 w-full">
        <h2 className="text-white text-lg text-center font-bold py-3">Set Pieces</h2>
      </div>
      <div className="flex flex-col gap-5 px-5 py-5 w-full">
        {pieceData.map((fd, i) => (
          <div
            key={i}
            className="flex items-center w-full border border-border-gray py-1 px-2 rounded-[8px]"
          >
            <p className=" w-1/4 text-black text-[16px] font-semibold">
              {fd.name}
            </p>

            <p className="w-1/4 text-center text-black text-[16px] font-semibold">
              {fd.win}
            </p>
            <p className="w-1/4 text-center text-black text-[16px] font-semibold">
              {fd.scored}
            </p>
            <p className="w-1/4 pl-10 text-center text-black text-[16px] font-semibold">
              {fd.conceeded}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SetPieces;
