import React, { FC } from "react";

import Image, { StaticImageData } from "next/image";

import { FaStar, FaMedal } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

export interface iAcademy {
  img: string | StaticImageData;
  name: string;
  location: string;
  liked: boolean;
  rating: number;
  age: string;
  size: string;
  facilities: string;
}

const AcademyCard: FC<{ academy: iAcademy }> = ({ academy }) => {
  return (
    <div className="bg-white shadow-custom rounded-xl flex gap-5 px-3 py-2">
      <div className="w-10 flex flex-col items-center gap-1">
        <Image
          src={academy.img}
          alt="pitch image"
          width={40}
          height={40}
          className="object-cover size-10 rounded"
        />
        <div className="items-center justify-center flex w-fit gap-0.5">
          <FaStar size={8} className={`text-secondary-3`} />
          <p className="text-8-9 text-dark font-medium">{academy.rating}</p>
        </div>
      </div>
      <div className="w-[calc(100%-3.75rem)] flex flex-col justify-between">
        <div className="flex flex-col gap-1 w-full">
          <div className="flex justify-between items-center w-full">
            <h2 className="text-12-14 font-semibold text-dark">
              {academy.name}
            </h2>
            <div className="p-2 bg-primary-2 rounded size-4 grid place-content-center">
              <FaMedal className={`text-white`} size={10} />
            </div>
          </div>
          <div className="flex items-center w-fit gap-0.5">
            <IoLocationOutline className={`text-dark`} size={10} />
            <h2 className="text-8-9 text-dark">{academy.location}</h2>
          </div>
        </div>
        <div className="w-full grid grid-cols-3 text-8-9 text-dark">
          <div className="flex flex-col w-full">
            <h3 className="text-8-9">Player&apos;s age:</h3>
            <p className="text-6-7">{academy.age}</p>
          </div>
          <div className="flex flex-col w-full">
            <h3 className="text-8-9">Team&apos;s size:</h3>
            <p className="text-6-7">{academy.size}</p>
          </div>
          <div className="flex flex-col w-full">
            <h3 className="text-8-9">Facilities:</h3>
            <p className="text-6-7">{academy.facilities}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyCard;
