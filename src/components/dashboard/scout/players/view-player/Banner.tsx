"use client";

import React, { FC } from "react";

import Image from "next/image";

import Field from "@/public/dashboard/player/field.jpeg";

import ProfileImageOrTextAvatar from "@/src/components/reusable/ProfileImageOrTextAvatar";
import { iPlayerResponse } from "@/src/hooks/player";
import { getYearDifference } from "@/src/functions/dateFunctions";

const Banner: FC<{ data: iPlayerResponse }> = ({ data }) => {
  const age = getYearDifference(new Date(), new Date(data.dob));
  return (
    <div className="w-full shadow-custom rounded-[1rem] gap-6 bg-white flex flex-col overflow-hidden">
      <Image
        src={Field}
        alt="field"
        className="w-full h-44 object-cover"
        width={300}
        height={120}
      />
      <div className="w-full flex flex-col relative pt-12 pb-6">
        <div className="absolute -top-6 left-4 -translate-y-1/2">
          <ProfileImageOrTextAvatar
            image={data.imageUrl}
            name={data.fullName}
            radius="rounded-full"
            size="size-28"
            text="text-48-57"
          />
        </div>
        <div className="w-full flex flex-col gap-2 pl-4">
          <h2 className="text-20-24 font-bold text-dark">{data.fullName}</h2>
          <div className="text-placeholder text-14-16 font-medium">
            <p>
              {data.position}, No. {data.jerseyNumber}
            </p>
            <p>{age} yrs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
