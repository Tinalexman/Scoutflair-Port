import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";

export interface iPlayer {
  image: string | StaticImageData;
  country: string | StaticImageData;
  firstName: string;
  lastName: string;
  role: string;
  jersey: number;
  age: number;
  height: number;
  weight: number;
}

const PlayerCard: FC<{ player: iPlayer }> = ({ player }) => {
  return (
    <div className="w-full h-[8.5rem] shadow-custom rounded-[1rem] py-4 px-5 gap-4 bg-white flex justify-between items-center">
      <Image
        src={player.image}
        alt="player image"
        className="size-[6rem] border rounded-full border-secondary-3 object-cover"
        width={100}
        height={100}
      />
      <div className="w-full flex flex-col gap-3">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col">
            <h2 className="text-dark font-semibold text-14-16">
              {player.firstName} {player.lastName}
            </h2>
            <h3 className="text-placeholder text-8-11">
              {player.role}, No {player.jersey}
            </h3>
          </div>
          <Image
            src={player.country}
            alt="country-image"
            width={16}
            height={16}
            className="size-4 object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-dark font-semibold text-10-12 text-opacity-[0.88]">
            AGE: {player.age} yrs
          </h2>
          <h3 className="text-placeholder text-8-11">
            {player.height}cm {player.weight}kg
          </h3>
        </div>

        <div className="px-3 py-2 border rounded-full border-secondary-3 font-medium text-10-12 cursor-pointer grid place-content-center text-dark text-opacity-[0.88]">
          View Profile
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
