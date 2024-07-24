"use client";

import { StaticImageData } from "next/image";
import { ReactNode, FC, useState, useEffect } from "react";

import SideBar, {
  iNavSection,
  iNavItem,
} from "@/src/components/reusable/SideBar";
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

interface iAuthLayout {
  children: ReactNode;
}

const insight: iNavItem[] = [
  {
    name: "Overview",
    icon: OverviewIcon,
  },
  {
    name: "Analytics",
    icon: AnalyticsIcon,
  },
];

const main: iNavItem[] = [
  {
    name: "Profile",
    icon: ProfileIcon,
  },
  {
    name: "Tactics",
    icon: TacticsIcon,
  },
  {
    name: "Matches",
    icon: MatchesIcon,
  },
  {
    name: "Academies",
    icon: AcademicIcon,
  },
  {
    name: "Football Clubs",
    icon: FootballClubIcon,
  },
];

const resources: iNavItem[] = [
  {
    name: "Messages",
    icon: MessagesIcon,
  },
  {
    name: "Notifications",
    icon: NotificationsIcon,
  },
  {
    name: "Settings",
    icon: SettingsIcon,
  },
];

const PlayerLayout: FC<iAuthLayout> = ({ children }) => {
  return (
    <div className="w-[100vw] h-[100vh] bg-white flex justify-between">
      <SideBar
        sections={[
          {
            name: "INSIGHTS",
            items: insight,
          },
          {
            name: "MAIN",
            items: main,
          },
          {
            name: "RESOURCES",
            items: resources,
          },
        ]}
      />
      <div className="w-[calc(100vw-280px)] h-[100vh] flex flex-col justify-between">
        <TopBar />
        <div className="h-full w-full bg-background-gray">{children}</div>
      </div>
    </div>
  );
};

export default PlayerLayout;
