import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { FC } from "react";

export interface iPlayer {
  image: string | StaticImageData;
  country: string | StaticImageData;
  nationality: string;
  firstName: string;
  lastName: string;
  role: string;
  jersey: number;
  age: number;
  id: string;
}

const PlayerCard: FC<{ player: iPlayer }> = ({ player }) => {
  return (
    <div className="w-full h-[8.5rem] shadow-custom rounded-[1rem] py-2 px-3 gap-4 bg-white flex justify-between items-center">
      <Image
        src={player.image}
        alt="player image"
        className="size-[7.25rem] object-cover"
        width={120}
        height={120}
      />
      <div className="w-full flex flex-col gap-4 py-1">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col">
            <p className="text-14-16 text-dark text-opacity-[0.88]">
              {player.firstName}
            </p>
            <p className="text-16-19 text-dark font-bold">{player.lastName}</p>
          </div>
          <p className="text-24-28 text-dark font-bold">{player.jersey}</p>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex flex-col items-center w-fit gap-0.5">
            <h2 className="text-10-12 text-opacity-[0.92] font-semibold text-dark">
              AGE
            </h2>
            <p className="text-8-9 text-dark">{player.age}</p>
          </div>
          <div className="flex flex-col items-center w-fit">
            <h2 className="text-10-12 text-opacity-[0.92] font-semibold text-dark">
              NATIONALITY
            </h2>
            <div className="flex items-center gap-1">
              <p className="text-8-9 text-dark">{player.nationality}</p>
              <Image
                src={player.country}
                alt="country-image"
                width={12}
                height={12}
                className="size-3 object-cover rounded"
              />
            </div>
          </div>
          <div className="flex flex-col items-center w-fit gap-0.5">
            <h2 className="text-10-12 text-opacity-[0.92] font-semibold text-dark">
              POSITION
            </h2>
            <p className="text-8-9 text-dark">{player.role}</p>
          </div>
        </div>

        <div className="w-full flex items-center justify-between gap-4">
          <Link
            href={`/dashboard/scout/evaluations/reports?id=${player.id}`}
            className="w-full py-2 border rounded-full border-secondary-3 grid place-content-center font-medium text-10-12 text-dark text-opacity-[0.8]"
          >
            Reports
          </Link>
          <Link
            href={`/dashboard/scout/evaluations/statistics?id=${player.id}`}
            className="w-full py-2 border rounded-full border-secondary-3 grid place-content-center font-medium text-10-12 text-dark text-opacity-[0.8]"
          >
            Statistics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
