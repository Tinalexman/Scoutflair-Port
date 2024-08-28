"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

import PlayerImg from "@/public/images/passport.png";
import NigFlag from "@/public/images/twemoji_flag-nigeria.png";
import { convertDateWithSlashes } from "@/src/functions/dateFunctions";

interface iPlayerInfo {
  image: StaticImageData | string;
  country: StaticImageData | string;
  firstName: string;
  lastName: string;
  jersey: number;
  dob: Date;
  role: string;
  height: number;
  weight: number;
  appearance: number;
  foot: "Right" | "Left" | "Both";
}

const Info = () => {
  const [info, setInfo] = useState<iPlayerInfo>({
    image: PlayerImg,
    country: NigFlag,
    firstName: "Adams",
    lastName: "Taylor",
    jersey: 23,
    dob: new Date(),
    role: "Midfielder",
    height: 160,
    weight: 69,
    appearance: 20,
    foot: "Right",
  });

  return (
    <div className="w-full shadow-custom rounded-[1rem] py-4 px-5 gap-6 bg-white grid grid-cols-[1.5fr_3.5fr]">
      <div className="flex items-center gap-4">
        <Image
          className="size-[7rem]"
          src={info.image}
          alt={""}
          width={110}
          height={110}
        />
        <div className="flex flex-col gap-1">
          <p className="text-14-16 text-dark ">{info.firstName}</p>
          <h2 className="text-16-19 font-bold text-dark text-opacity-[0.92]">
            {info.lastName}
          </h2>
          <Image
            className="size-5"
            src={info.country}
            alt={""}
            width={20}
            height={20}
          />
          <h1 className="text-dark font-bold text-28-33">#{info.jersey}</h1>
        </div>
      </div>

      <div className="w-full grid grid-cols-3 gap-3">
        <div className="flex flex-col gap-2">
          <p className="text-10-12 text-opacity-[0.88] text-dark font-medium">
            DATE OF BIRTH
          </p>
          <div className="border border-border-gray w-full py-1 flex items-center justify-center rounded-md text-14-16 font-medium text-dark">
            {convertDateWithSlashes(info.dob)}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-10-12 text-opacity-[0.88] text-dark font-medium">
            HEIGHT
          </p>
          <div className="border border-border-gray w-full py-1 flex items-center justify-center rounded-md text-14-16 font-medium text-dark">
            {info.height}cm
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-10-12 text-opacity-[0.88] text-dark font-medium">
            APPEARANCE
          </p>
          <div className="border border-border-gray w-full py-1 flex items-center justify-center rounded-md text-14-16 font-medium text-dark">
            {info.appearance}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-10-12 text-opacity-[0.88] text-dark font-medium">
            POSITION
          </p>
          <div className="border border-border-gray w-full py-1 flex items-center justify-center rounded-md text-14-16 font-medium text-dark">
            {info.role}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-10-12 text-opacity-[0.88] text-dark font-medium">
            WEIGHT
          </p>
          <div className="border border-border-gray w-full py-1 flex items-center justify-center rounded-md text-14-16 font-medium text-dark">
            {info.weight}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-10-12 text-opacity-[0.88] text-dark font-medium">
            PREFERRED FOOT
          </p>
          <div className="border border-border-gray w-full py-1 flex items-center justify-center rounded-md text-14-16 font-medium text-dark">
            {info.foot}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
