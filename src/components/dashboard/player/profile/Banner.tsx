"use client";

import React from "react";

import Image from "next/image";

import Field from "@/public/dashboard/player/field.jpeg";

import {
  useCurrentUserStore,
  usePlayerDataStore,
} from "@/src/stores/userStore";

const Banner = () => {
  const image = useCurrentUserStore((state) => state.image);
  const firstName = useCurrentUserStore((state) => state.firstName);
  const lastName = useCurrentUserStore((state) => state.lastName);

  const role = usePlayerDataStore((state) => state.role);
  const jersey = usePlayerDataStore((state) => state.jersey);
  const age = usePlayerDataStore((state) => state.age);

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
        <Image
          src={image}
          alt="player-picture"
          className="size-28 rounded-full border-4 border-primary-4 object-cover absolute -top-6 left-4 -translate-y-1/2"
        />

        <div className="w-full flex flex-col gap-2 pl-4">
          <h2 className="text-20-24 font-bold text-dark">
            {firstName} {lastName}
          </h2>
          <div className="text-placeholder text-14-16 font-medium">
            <p>
              {role}, No. {jersey}
            </p>
            <p>{age} yrs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
