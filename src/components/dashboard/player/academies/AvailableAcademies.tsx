"use client";

import React, { useState } from "react";

import Image, { StaticImageData } from "next/image";

import ClubLogo from "@/public/images/twemoji_flag-nigeria.png";

interface iClub {
  image: StaticImageData | string;
  name: string;
  address: string;
}

const AvailableAcademies = () => {
  const [clubs, setClubs] = useState<iClub[]>(
    Array(14).fill({
      image: ClubLogo,
      name: "Scoutflair Football Academy",
      address:
        "Ahmadu Bello way, behind government secondary scchool, Jabi, Abuja., Nigeria.",
    })
  );

  return (
    <div className="flex flex-col rounded-tl-[16px] rounded-bl-[16px] overflow-hidden border-2 border-border-gray shadow-custom-2 items-center bg-white">
      <div className="bg-primary-2 bg-opacity-[0.96] py-2 w-full">
        <h2 className="text-white text-lg font-bold py-3 px-5">
          Available Academies
        </h2>
      </div>
      <div className="flex flex-col w-full">
        {clubs.map((n, i) => (
          <div
            key={i}
            className="text-black flex flex-col gap-1 items-start w-full py-2 px-2 border-b-2 border-border-gray"
          >
            <div className="flex gap-2 w-fit items-center ">
              <Image
                src={n.image}
                alt="image"
                className="size-5 object-cover"
                width={20}
                height={20}
              />
              <h2 className=" font-bold text-[16px] leading-6">{n.name}</h2>
            </div>
            <p className="text-[12px] leading-4">{n.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableAcademies;
