import React, { useState } from "react";
import Logo from "./Logo";
import Image, { StaticImageData } from "next/image";

import SignOutIcon from "@/public/icons/Sign Out Icon.svg";

export interface iNavItem {
  name: string;
  icon: StaticImageData;
}

export interface iNavSection {
  name: string;
  items: iNavItem[];
}

const SideBar: React.FC<{ sections: iNavSection[] }> = ({ sections }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <div className="w-[280px] h-[100vh] flex flex-col rounded-tr-3xl rounded-br-3xl bg-[#041931] relative">
      <Logo />
      <div className="w-full h-fit flex flex-col gap-5 scrollbar-custom overflow-y-scroll">
        {sections.map((navSection, index) => (
          <>
            <div className="flex flex-col gap-2">
              <div className="opacity-[0.72] text-[12px] text-white pl-6">
                <p>{navSection.name}</p>
              </div>
              {navSection.items.map((item, i) => {
                const trueIndex =
                  sections
                    .slice(0, index)
                    .reduce((sum, section) => sum + section.items.length, 0) +
                  i;

                return (
                  <NavComponent
                    key={i}
                    item={item}
                    active={currentIndex === trueIndex}
                    setActive={() => {
                      setCurrentIndex(trueIndex);
                    }}
                  />
                );
              })}
            </div>

            <hr className="border-white border-opacity-[0.56]" />
          </>
        ))}

        <div
          className={`nav-item text-white leading-5 px-6 pt-2 pb-6 flex gap-2 items-center font-bold cursor-pointer`}
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
  setActive: () => void;
}> = ({ item, active, setActive }) => {
  return (
    <div
      className={`nav-item text-white leading-5 border-white border-x-0 border-y-[1px] px-6 py-2 flex gap-2 items-center cursor-pointer ${
        active ? " border-opacity-20" : "border-opacity-0"
      } relative`}
      style={{
        background: active
          ? "linear-gradient(128.61deg, rgba(1,14,29,0.24) -10.42%, rgba(255,255,255,0.24) 140.66%) "
          : "none",
      }}
      onClick={setActive}
    >
      <Image
        src={item.icon}
        alt={item.name}
        className="size-6"
        width={32}
        height={32}
      />
      <p>{item.name}</p>
      {active && (
        <div className="absolute z-10 -right-[10px] size-5 flex justify-center items-center bg-primary-2 rounded-full">
          <div className="size-[10px] bg-secondary rounded-full" />
        </div>
      )}
    </div>
  );
};

export default SideBar;
