"use client";

import React, { useState } from "react";

import Image, { StaticImageData } from "next/image";

import PlayerImage1 from "@/public/dashboard/player/ellipse-2373.png";
import PlayerImage2 from "@/public/dashboard/player/ellipse-2374.png";

interface iConnectionsData {
  playmaker: {
    image: string | StaticImageData;
    name: string;
  };
  target: {
    image: string | StaticImageData;
    name: string;
  };
  passes: number;
}

const Connections = () => {
  const [connectionData, setConnectionData] = useState<iConnectionsData[]>(
    Array(14).fill({
      passes: 56,
      playmaker: {
        image: PlayerImage1,
        name: "H. Fayomi",
      },
      target: {
        image: PlayerImage2,
        name: "A. Rahul",
      },
    })
  );

  return (
    <div className="flex flex-col h-[900px] rounded-[16px] border-2 border-border-gray shadow-custom-2 items-center bg-white">
      <h2 className="text-black text-lg font-bold py-3">Pass Connections</h2>
      <div className="bg-primary-2 bg-opacity-[0.96] w-full py-4 pl-6 pr-4 flex items-center">
        <p className="text-white text-sm w-1/3 text-start">Playmaker</p>
        <p className="text-white text-sm w-1/3 text-center">Target</p>
        <p className="text-white text-sm w-1/3 text-center">Passes</p>
      </div>
      <div className="flex flex-col gap-[22px] px-2 py-5 w-full">
        {connectionData.map((cn, i) => (
          <div key={i} className="flex items-center w-full py-1">
            <div className="w-1/3 px-1 gap-2 flex justify-center items-center">
              <Image
                src={cn.playmaker.image}
                alt="playmaker image"
                className="size-6"
                width={24}
                height={24}
              />
              <h2 className="text-black text-[14px] font-semibold">{cn.playmaker.name}</h2>
            </div>

            <div className="w-1/3 px-1 gap-2 flex justify-center items-center">
              <Image
                src={cn.target.image}
                alt="target image"
                className="size-6"
                width={24}
                height={24}
              />
              <h2 className="text-black text-[14px] font-semibold">{cn.target.name}</h2>
            </div>
           
           <h2 className="w-1/3 text-black text-[16px] text-center font-semibold">{cn.passes}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connections;
