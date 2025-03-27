"use client";

import { ReactNode, FC } from "react";

import SideBar, { iNavItem } from "@/components/reusable/SideBar";
import TopBar from "@/components/reusable/TopBar";

import SpotlightIcon from "@/public/icons/Spotlight Icon.svg";
import ProfileIcon from "@/public/icons/Profile Icon.svg";
import GalleryIcon from "@/public/icons/Gallery Icon.svg";
import SettingsIcon from "@/public/icons/Settings Icon.svg";
import { usePathname } from "next/navigation";

interface iAuthLayout {
  children: ReactNode;
}

const items: iNavItem[] = [
  {
    name: "Spotlight",
    icon: SpotlightIcon,
    link: "/dashboard/player/spotlight",
  },
  {
    name: "Profile",
    icon: ProfileIcon,
    link: "/dashboard/player/profile",
  },
  {
    name: "Gallery",
    icon: GalleryIcon,
    link: "/dashboard/player/gallery",
  },
  {
    name: "Settings",
    icon: SettingsIcon,
    link: "/dashboard/player/settings",
  },
];

const PlayerLayout: FC<iAuthLayout> = ({ children }) => {
  const pathName = usePathname();

  const determineIndex = () => {
    const current = pathName.split("/")[3];
    switch (current) {
      case "spotlight":
        return 0;
      case "profile":
        return 1;
      case "gallery":
        return 2;
      case "settings":
        return 3;
    }

    return -1;
  };

  const page = determineIndex();

  return (
    <div className="w-[100vw] h-[100vh] font-lato bg-background-gray flex justify-between relative">
      <SideBar items={items} active={page} />
      <div className="w-[80%] h-[100vh] flex flex-col justify-between overflow-y-scroll">
        <div className="sticky top-0 z-10">
          <TopBar />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default PlayerLayout;
