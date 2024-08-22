import React from "react";
import Logo from "./Logo";
import Image, { StaticImageData } from "next/image";

import Link from "next/link";

import SignOutIcon from "@/public/icons/Sign Out Icon.svg";

export interface iNavItem {
  name: string;
  icon: StaticImageData;
  link: string;
}

const SideBar: React.FC<{ items: iNavItem[]; active: number }> = ({
  items,
  active,
}) => {
  return (
    <div className="w-[320px] h-[100vh] flex flex-col gap-12 bg-primary-2 pl-10 py-5">
      <Logo />
      <div className="w-full h-fit flex flex-col">
        {items.map((item, i) => {
          return <NavComponent key={i} item={item} active={i === active} />;
        })}

        <div
          className={`nav-item hover:scale-105 scale-100 transition-transform ease-out duration-200 text-white h-12 leading-5 px-4 flex gap-2 items-center cursor-pointer`}
          onClick={() => {}}
        >
          <Image
            src={SignOutIcon}
            alt="sign out"
            className="size-6"
            width={32}
            height={32}
          />
          <p>Sign Out</p>
        </div>
      </div>
    </div>
  );
};

const NavComponent: React.FC<{
  item: iNavItem;
  active: boolean;
}> = ({ item, active }) => {
  return (
    <Link
      href={item.link}
      className={`nav-item hover:scale-105 scale-100 transition-transform ease-out duration-200 text-white h-12 leading-5 px-4 flex gap-2 items-center cursor-pointer ${
        active &&
        "bg-primary-4 border-[3px] border-y-0 border-r-0 border-secondary-3 rounded"
      }`}
    >
      <Image
        src={item.icon}
        alt={item.name}
        className="size-6"
        width={32}
        height={32}
      />
      <p>{item.name}</p>
    </Link>
  );
};

export default SideBar;
