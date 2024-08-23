"use client";

import { StaticImageData } from "next/image";
import { ReactNode, FC, useState, useEffect } from "react";

import SideBar, { iNavItem } from "@/src/components/reusable/SideBar";
import TopBar from "@/src/components/reusable/TopBar";

import OverviewIcon from "@/public/icons/Overview Icon.svg";
import AnalyticsIcon from "@/public/icons/Analytics Icon.svg";
import ProfileIcon from "@/public/icons/Profile Icon.svg";
import TacticsIcon from "@/public/icons/Tactic Icon.svg";
import MatchesIcon from "@/public/icons/Matches Icon.svg";
import AcademicIcon from "@/public/icons/Academic Icon.svg";
import MessagesIcon from "@/public/icons/Messages Icon.svg";
import FootballClubIcon from "@/public/icons/Footbal Club Icon.svg";
import NotificationsIcon from "@/public/icons/Notifications Icon.svg";
import SettingsIcon from "@/public/icons/Settings Icon.svg";
import { usePathname } from "next/navigation";

interface iAuthLayout {
  children: ReactNode;
}

const items: iNavItem[] = [
  {
    name: "Overview",
    icon: OverviewIcon,
    link: "/dashboard/player/overview",
  },
  {
    name: "Analytics",
    icon: AnalyticsIcon,
    link: "/dashboard/player/analytics",
  },
];

const PlayerLayout: FC<iAuthLayout> = ({ children }) => {
  const pathName = usePathname();

  const determineIndex = () => {
    const current = pathName.split("/")[3];
    switch (current) {
      case "overview":
        return 0;
      case "evaluations":
        return 1;
      case "players":
        return 2;
      case "matches":
        return 3;
      case "academies":
        return 4;
      case "pitches":
        return 5;
      case "settings":
        return 6;
    }

    return -1;
  };

  const page = determineIndex();

  return (
    <div className="w-[100vw] h-[100vh] font-lato bg-gradient-to-b from-white to-background-gray flex justify-between">
      <SideBar items={items} active={page} />
      <div className="w-[80%] h-[100vh] flex flex-col justify-between">
        <TopBar />
        <div className="h-[calc(100vh-5rem+85px)] overflow-y-scroll w-full mt-[80px] ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PlayerLayout;
