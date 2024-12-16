import React, { FC } from "react";

import { FaStar, FaMedal } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { iAcademyResponse } from "@/src/hooks/academy";
import ProfileImageOrTextAvatar from "@/src/components/reusable/ProfileImageOrTextAvatar";

const AcademyCard: FC<{
  academy: iAcademyResponse;
  onSelected: () => void;
}> = ({ academy, onSelected }) => {
  return (
    <div
      onClick={onSelected}
      className={`hover:bg-secondary hover:bg-opacity-20 bg-white shadow-custom rounded-xl flex gap-5 px-3 py-2 cursor-pointer`}
    >
      <div className="w-10 flex flex-col items-center gap-1">
        <ProfileImageOrTextAvatar
          image={academy.imageUrl}
          name={academy.name}
          radius="rounded"
          size="size-10"
        />
        <div className="items-center justify-center flex w-fit gap-0.5">
          <p className="text-8-9 text-dark font-medium">{academy.rating}</p>
          <FaStar size={8} className={`text-secondary-3`} />
        </div>
      </div>
      <div className="w-[calc(100%-3.75rem)] flex flex-col justify-between">
        <div className="flex flex-col gap-1 w-full">
          <div className="flex justify-between items-center w-full">
            <h2 className="text-12-14 font-semibold text-dark line-clamp-1">
              {academy.name}
            </h2>
            <div className="p-2 bg-primary-2 rounded size-4 grid place-content-center">
              <FaMedal className={`text-white`} size={10} />
            </div>
          </div>
          <div className="flex items-center w-fit gap-0.5">
            <IoLocationOutline className={`text-dark`} size={10} />
            <h2 className="text-8-9 text-dark line-clamp-1">
              {academy.address}
            </h2>
          </div>
        </div>
        <div className="w-full grid grid-cols-3 text-8-9 text-dark">
          <div className="flex flex-col w-full">
            <h3 className="text-8-9">Players:</h3>
            <p className="text-6-7">{academy.playersCount}</p>
          </div>
          <div className="flex flex-col w-full">
            <h3 className="text-8-9">Wins:</h3>
            <p className="text-6-7">{academy.winCount}</p>
          </div>
          <div className="flex flex-col w-full">
            <h3 className="text-8-9">Gradudated:</h3>
            <p className="text-6-7">{academy.graduatedCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyCard;
