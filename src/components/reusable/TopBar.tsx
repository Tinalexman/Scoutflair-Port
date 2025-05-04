import React from "react";

import { IoMdNotificationsOutline } from "react-icons/io";

import { IoSearchOutline, IoChevronDownCircleOutline } from "react-icons/io5";

import Image from "next/image";

import ProfileImageOrTextAvatar from "./ProfileImageOrTextAvatar";
import { useCurrentUserStore } from "@/stores/userStore";
import { useRouter } from "next/navigation";
import { Urls } from "@/constants/constants";

const TopBar: React.FC = () => {
  const [show, setShow] = React.useState(false);
  const toggle = () => setShow((prev) => !prev);
  const role = useCurrentUserStore((state) => state.role);
  const image = useCurrentUserStore((state) => state.image);
  const names = useCurrentUserStore((state) => state.name);

  const router = useRouter();

  const switchRole = () => {
    if (role === "SCOUT") {
      setShow(false);
      router.replace(Urls.PLAYER_SPOTLIGHT);
    } else if (role === "PLAYER") {
      setShow(false);
      router.replace(Urls.SCOUT_OVERVIEW);
    }
  };

  return (
    <div className="flex justify-end items-center w-full bg-white shadow-custom h-16 px-6">
      {/* <div className="relative w-[30%]">
        <input
          className="h-10 rounded-full w-full border pl-11 bg-[#F5F6FA] pr-4 text-14-16 border-border-gray placeholder:text-placeholder font-lato text-dark"
          placeholder="Search"
        />
        <IoSearchOutline className="absolute inset-y-1/2 -translate-y-1/2 left-4 text-xl text-placeholder" />
      </div> */}
      <div className="w-fit flex items-center gap-12">
        {/* <div className="w-fit flex gap-8 items-center">
          <IoMdNotificationsOutline className="text-2xl text-black" />
        </div> */}
        <div className="flex gap-3 items-center w-fit relative">
          <ProfileImageOrTextAvatar
            image={image}
            name={names}
            radius="rounded-full"
            size="size-11"
          />

          <div className="flex flex-col gap-1 cursor-pointer" onClick={toggle}>
            <h3 className="text-dark font-lato font-bold text-14-16">
              {names}
            </h3>
            <p className="text-placeholder text-12-14 font-semibold">{role}</p>
          </div>

          {show && (
            <h3
              onClick={switchRole}
              className="hover:bg-primary hover:text-white rounded-lg bg-white w-[200px] p-4 text-dark font-lato font-bold text-14-16 absolute top-10 shadow-lg cursor-pointer right-0 "
            >
              Switch to{" "}
              {role === "SCOUT" ? "Player" : role === "PLAYER" ? "Scout" : ""}
            </h3>
          )}

          {/* <IoChevronDownCircleOutline className="text-2xl text-[#5C5C5C]" /> */}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
