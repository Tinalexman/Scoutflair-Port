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
  const name = useCurrentUserStore((state) => state.name);

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
        {image ? (
          <Image
            src={image}
            alt="user image"
            className="rounded-full size-11 object-cover"
            width={44}
            height={44}
          />
        ) : (
          <div className="w-11 h-11 rounded-full bg-primary-2 flex items-center justify-center">
            <h2 className="text-16-19 font-bold text-white">
              {name.substring(0, 1)}
            </h2>
          </div>
        )}

        <div className="w-full flex flex-col gap-2 pl-4">
          <h2 className="text-20-24 font-bold text-dark">{name}</h2>
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
