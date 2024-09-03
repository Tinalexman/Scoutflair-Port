"use client";

import React from "react";

import {
  useCurrentUserStore,
  usePlayerDataStore,
} from "@/src/stores/userStore";

import Image, { StaticImageData } from "next/image";

import ProfileIcon from "@/public/icons/Player Bio Profile.svg";
import DobIcon from "@/public/icons/Player Bio Dob.svg";
import CountryIcon from "@/public/icons/Player Bio Country.svg";
import FootIcon from "@/public/icons/Player Bio Foot.svg";
import HeightIcon from "@/public/icons/Player Bio Height.svg";
import WeightIcon from "@/public/icons/Player Bio Weight.svg";
import StatusIcon from "@/public/icons/Player Bio Status.svg";
import { convertDateFull } from "@/src/functions/dateFunctions";

interface iBio {
  image: StaticImageData;
  text: string;
}

const Bio = () => {
  const bio = usePlayerDataStore((state) => state.bio);

  const fullName = `${useCurrentUserStore(
    (state) => state.firstName
  )} ${useCurrentUserStore((state) => state.lastName)}`;

  const bioData: iBio[] = [
    {
      image: ProfileIcon,
      text: fullName,
    },
    {
      image: DobIcon,
      text: convertDateFull(usePlayerDataStore((state) => state.dob)),
    },
    {
      image: CountryIcon,
      text: usePlayerDataStore((state) => state.nationality),
    },
    {
      image: FootIcon,
      text: usePlayerDataStore((state) => state.foot),
    },
    {
      image: HeightIcon,
      text: `${usePlayerDataStore((state) => state.height)}cm`,
    },
    {
      image: WeightIcon,
      text: `${usePlayerDataStore((state) => state.weight)}kg`,
    },
    {
      image: StatusIcon,
      text: usePlayerDataStore((state) => state.status),
    },
  ];

  return (
    <div className="w-full shadow-custom rounded-[1rem] py-4 bg-white flex flex-col">
      <h2 className="text-16-19 text-dark font-bold ml-5">Player Details</h2>
      <div className="flex flex-col w-full mt-6 gap-4 px-5 ">
        <h2 className="text-dark text-14-16 font-medium">Biography</h2>
        <p className="text-12-18 text-dark">{bio}</p>
      </div>
      <hr className="bg-[#E0E0E0] w-full my-3" />
      <h2 className="text-dark text-14-16 font-medium pl-5">About</h2>
      <div className="flex flex-col w-full mt-4 gap-1 px-5 ">
        {bioData.map((data, index) => (
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
        ))}
      </div>
    </div>
  );
};

export default Bio;
