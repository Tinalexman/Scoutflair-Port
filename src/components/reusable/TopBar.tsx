import React from "react";

import { IoMdNotificationsOutline } from "react-icons/io";

import { IoSearchOutline, IoChevronDownCircleOutline } from "react-icons/io5";

import Image from "next/image";

import { useCurrentUserStore } from "@/src/stores/userStore";

const TopBar: React.FC = () => {
  const role = useCurrentUserStore((state) => state.role);
  const image = useCurrentUserStore((state) => state.image);
  const names = useCurrentUserStore((state) => state.name);

  return (
    <div className="flex justify-between items-center w-full bg-white shadow-custom h-16 px-6">
      <div className="relative w-[30%]">
        <input
          className="h-10 rounded-full w-full border pl-11 bg-[#F5F6FA] pr-4 text-14-16 border-border-gray placeholder:text-placeholder font-lato text-dark"
          placeholder="Search"
        />
        <IoSearchOutline className="absolute inset-y-1/2 -translate-y-1/2 left-4 text-xl text-placeholder" />
      </div>
      <div className="w-fit flex items-center gap-12">
        <div className="w-fit flex gap-8 items-center">
          <IoMdNotificationsOutline className="text-2xl text-black" />
        </div>
        <div className="flex gap-3 items-center w-fit">
          {image ? (
            <Image
              src={image}
              alt="user image"
              className="rounded-full size-11 object-cover"
              width={44}
              height={44}
            />
          ) : (
            <div className="rounded-full size-11 text-white text-16-19 font-bold bg-primary-2 grid place-content-center">
              {names.substring(0, 1)}
            </div>
          )}

          <div className="flex flex-col gap-1">
            <h3 className="text-dark font-lato font-bold text-14-16">
              {names}
            </h3>
            <p className="text-placeholder text-12-14 font-semibold">{role}</p>
          </div>
          <IoChevronDownCircleOutline className="text-2xl text-[#5C5C5C]" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
