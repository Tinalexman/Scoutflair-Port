import React, { FC } from "react";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { iLocalPitchResponse } from "@/hooks/pitch";

const PitchCard: FC<{
  pitch: iLocalPitchResponse;
  onSelected: () => void;
}> = ({ pitch, onSelected }) => {
  return (
    <div
      className={`bg-white hover:bg-secondary hover:bg-opacity-20 shadow-custom rounded-xl flex gap-5 px-3 py-2 cursor-pointer`}
      onClick={onSelected}
    >
      <div className="w-10 flex flex-col items-center gap-1">
        <Image
          src={pitch.imageUrl ?? ""}
          alt="pitch image"
          width={40}
          height={40}
          className="object-cover size-10 rounded"
        />
        <div className="items-center justify-center flex w-fit gap-0.5">
          <p className="text-12-14 text-dark font-medium">{pitch.rating}</p>
          <FaStar size={8} className={`text-secondary-3`} />
        </div>
      </div>
      <div className="w-[calc(100%-3.75rem)] flex flex-col gap-1 justify-between">
        <div className="flex flex-col gap-1 w-full">
          <div className="flex justify-between items-center w-full">
            <h2 className="text-12-14 font-semibold text-dark">{pitch.name}</h2>
          </div>
          <div className="flex items-center w-fit gap-0.5">
            <IoLocationOutline className={`text-dark`} size={10} />
            <h2 className="text-10-12 text-dark line-clamp-1">
              {pitch.address}
            </h2>
          </div>
        </div>
        <div className="w-full grid grid-cols-3 text-8-9 text-dark">
          <div className="flex flex-col w-full">
            <h3 className="text-8-9">Year Built:</h3>
            <p className="text-10-12">
              {new Date(pitch.estYear).getFullYear()}
            </p>
          </div>
          <div className="flex flex-col w-full">
            <h3 className="text-8-9">Length:</h3>
            <p className="text-10-12">{pitch.length}m</p>
          </div>
          <div className="flex flex-col w-full">
            <h3 className="text-8-9">Width:</h3>
            <p className="text-10-12">{pitch.width}m</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchCard;
