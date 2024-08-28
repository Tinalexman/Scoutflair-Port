"use client";

import React, { useState, FC } from "react";

import PlayerImage from "@/public/dashboard/scout/Rectangle 13.png";
import Image, { StaticImageData } from "next/image";
import { convertDateWithSlashes } from "@/src/functions/dateFunctions";

interface iPlayerInfo {
  image: string | StaticImageData;
  firstName: string;
  lastName: string;
  dob: Date;
  nationality: string;
  team: string;
  position: string;
  appearance: number;
  height: number;
  weight: number;
  foot: string;
  strength: string[];
  weakness: string[];
  comments: string[];
}

const Info = () => {
  const [playerInfo, setPlayerInfo] = useState<iPlayerInfo>({
    image: PlayerImage,
    firstName: "Adams",
    lastName: "Taylor",
    nationality: "Nigeria",
    team: "Liverpool",
    position: "Midfielder",
    appearance: 20,
    height: 160,
    weight: 69,
    dob: new Date(),
    foot: "Right",
    strength: Array(3).fill(
      "Lorem ipsum dolor sit amet consectetur. Nunc malesuada ultricies amet metus viverra posuere a elit id. Ut vitae in diam risus urna. Mattis tempor convallis in eget suspendisse est eu. Odio fermentum at laoreet feugiat."
    ),
    weakness: Array(3).fill(
      "Lorem ipsum dolor sit amet consectetur. Nunc malesuada ultricies amet metus viverra posuere a elit id. Ut vitae in diam risus urna. Mattis tempor convallis in eget suspendisse est eu. Odio fermentum at laoreet feugiat."
    ),
    comments: Array(3).fill(
      "Lorem ipsum dolor sit amet consectetur. Nunc malesuada ultricies amet metus viverra posuere a elit id. Ut vitae in diam risus urna. Mattis tempor convallis in eget suspendisse est eu. Odio fermentum at laoreet feugiat."
    ),
  });

  return (
    <div className="w-full shadow-custom rounded-[1rem] py-4 px-5 gap-5 bg-white flex flex-col justify-between">
      <h2 className="text-dark font-bold text-16-19">Player Information</h2>
      <div className="w-full flex gap-6 items-center p-4">
        <Image
          src={playerInfo.image}
          alt={""}
          width={110}
          height={110}
          className="size-[18rem] object-cover rounded"
        />
        <div className="w-[calc(100%-19.5rem)] border border-border-gray flex flex-col text-14-16 text-dark">
          <div className="flex items-center px-2 border-b border-border-gray">
            <p className="font-semibold w-[45%] border-r border-border-gray py-1">
              Name
            </p>
            <p className="w-[70%] py-1 pl-2">
              {playerInfo.firstName} {playerInfo.lastName}
            </p>
          </div>
          <div className="flex items-center px-2 border-b border-border-gray">
            <p className="font-semibold w-[45%] border-r border-border-gray py-1">
              Date of Birth
            </p>
            <p className="w-[70%] py-1 pl-2">
              {convertDateWithSlashes(playerInfo.dob)}
            </p>
          </div>
          <div className="flex items-center px-2 border-b border-border-gray">
            <p className="font-semibold w-[45%] border-r border-border-gray py-1">
              Nationality
            </p>
            <p className="w-[70%] py-1 pl-2">{playerInfo.nationality}</p>
          </div>
          <div className="flex items-center px-2 border-b border-border-gray">
            <p className="font-semibold w-[45%] border-r border-border-gray py-1">
              Team
            </p>
            <p className="w-[70%] py-1 pl-2">{playerInfo.team}</p>
          </div>
          <div className="flex items-center px-2 border-b border-border-gray">
            <p className="font-semibold w-[45%] border-r border-border-gray py-1">
              Position
            </p>
            <p className="w-[70%] py-1 pl-2">{playerInfo.position}</p>
          </div>
          <div className="flex items-center px-2 border-b border-border-gray">
            <p className="font-semibold w-[45%] border-r border-border-gray py-1">
              Appearance
            </p>
            <p className="w-[70%] py-1 pl-2">{playerInfo.appearance}</p>
          </div>
          <div className="flex items-center px-2 border-b border-border-gray">
            <p className="font-semibold w-[45%] border-r border-border-gray py-1">
              Height
            </p>
            <p className="w-[70%] py-1 pl-2">{playerInfo.height}cm</p>
          </div>
          <div className="flex items-center px-2 border-b border-border-gray">
            <p className="font-semibold w-[45%] border-r border-border-gray py-1">
              Weight
            </p>
            <p className="w-[70%] py-1 pl-2">{playerInfo.weight}kg</p>
          </div>
          <div className="flex items-center px-2 ">
            <p className="font-semibold w-[45%] border-r border-border-gray py-1">
              Preferred Foot
            </p>
            <p className="w-[70%] py-1 pl-2">{playerInfo.foot}</p>
          </div>
        </div>
      </div>
      <h2 className="text-dark font-bold text-16-19">Psychological Insights</h2>
      <div className="px-4 w-full flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h2 className="text-dark font-semibold text-14-16">Strengths</h2>
          {playerInfo.strength.map((strength, index) => (
            <p key={index} className="text-black text-opacity-80 text-12-16">
              &#8226; {strength}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-dark font-semibold text-14-16">Weaknesses</h2>
          {playerInfo.weakness.map((weakness, index) => (
            <p key={index} className="text-black text-opacity-80 text-12-16">
              &#8226; {weakness}
            </p>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col gap-1">
        <h2 className="text-dark font-bold text-16-19">
          Scout&apos;s Comments
        </h2>
        <div className="p-4">
          {playerInfo.comments.map((comment, index) => (
            <p key={index} className="text-black text-opacity-80 text-12-16">
              &#8226; {comment}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;
