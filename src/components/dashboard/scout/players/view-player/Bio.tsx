"use client";

import React, { FC } from "react";

import Image, { StaticImageData } from "next/image";

import ProfileIcon from "@/public/icons/Player Bio Profile.svg";
import DobIcon from "@/public/icons/Player Bio Dob.svg";
import CountryIcon from "@/public/icons/Player Bio Country.svg";
import FootIcon from "@/public/icons/Player Bio Foot.svg";
import HeightIcon from "@/public/icons/Player Bio Height.svg";
import WeightIcon from "@/public/icons/Player Bio Weight.svg";

import FBIcon from "@/public/icons/Facebook Icon.svg";
import TTIcon from "@/public/icons/Tiktok Icon.svg";
import IGIcon from "@/public/icons/IG Icon.svg";

import Link from "next/link";

import { convertDateFull } from "@/functions/dateFunctions";
import { iPlayerResponse } from "@/hooks/player";

interface iBio {
  image: StaticImageData;
  text: string;
}

const Bio: FC<{ data: iPlayerResponse }> = ({ data }) => {
  const bioData: iBio[] = [
    {
      image: ProfileIcon,
      text: data.fullName,
    },
    {
      image: DobIcon,
      text: convertDateFull(data.dob),
    },
    {
      image: CountryIcon,
      text: data.nationality,
    },
    {
      image: FootIcon,
      text: data.preferredFoot,
    },
    {
      image: HeightIcon,
      text: `${data.height}cm`,
    },
    {
      image: WeightIcon,
      text: `${data.weight}kg`,
    },
  ];

  return (
    <div className="w-full h-fit shadow-custom rounded-[1rem] pt-4 pb-8 bg-white flex flex-col">
      <h2 className="text-16-19 text-dark font-bold ml-5">Player Details</h2>
      <div className="flex flex-col w-full mt-6 gap-4 px-5 ">
        <h2 className="text-dark text-14-16 font-medium">Biography</h2>
        <p className="text-12-18 text-dark">{data.biography}</p>
      </div>
      <hr className="bg-[#E0E0E0] w-full my-3" />
      <h2 className="text-dark text-14-16 font-medium pl-5">About</h2>
      <div className="flex flex-col w-full mt-4 gap-1 px-5 ">
        {bioData.map((data, index) =>
          data.text ? (
            <div key={index} className="w-full flex items-center py-1 gap-2">
              <Image
                src={data.image}
                alt="data icon"
                width={32}
                height={32}
                className="size-10"
              />
              <p className="text-12-18 text-dark font-medium">{data.text}</p>
            </div>
          ) : (
            <div key={index} />
          )
        )}
      </div>
      <hr className="bg-[#E0E0E0] w-full my-3" />
      <h2 className="text-dark text-14-16 font-medium pl-5">Social Media</h2>
      <div className="w-full flex items-center gap-2 px-5 mt-4">
        <Link
          href={data.igUrl ?? "#"}
          target="__blank"
          className="border border-border-gray rounded-full w-[5.5rem] cursor-pointer h-7 flex justify-center items-center gap-1"
        >
          <Image
            src={IGIcon}
            alt="instagram icon"
            className="size-5"
            width={20}
            height={20}
          />
          <p className="font-medium text-dark text-10-12">Instagram</p>
        </Link>
        <Link
          href={data.ticTokUrl ?? "#"}
          target="__blank"
          className="border border-border-gray rounded-full w-[5.5rem] cursor-pointer h-7 flex justify-center items-center gap-1"
        >
          <Image
            src={TTIcon}
            alt="tiktok icon"
            className="size-5"
            width={20}
            height={20}
          />
          <p className="font-medium text-dark text-10-12">Tiktok</p>
        </Link>
        <Link
          href={data.facebookUrl ?? "#"}
          target="__blank"
          className="border border-border-gray rounded-full w-[5.5rem] cursor-pointer h-7 flex justify-center items-center gap-1"
        >
          <Image
            src={FBIcon}
            alt="facebook icon"
            className="size-5"
            width={20}
            height={20}
          />
          <p className="font-medium text-dark text-10-12">Facebook</p>
        </Link>
      </div>
    </div>
  );
};

export default Bio;
