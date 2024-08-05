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
    link: "/dashboard/player/overview",
  },
  {
    name: "Analytics",
    icon: AnalyticsIcon,
    link: "/dashboard/player/analytics",
  },
];

const main: iNavItem[] = [
  {
    name: "Profile",
    icon: ProfileIcon,
    link: "/dashboard/player/profile",
  },
  {
    name: "Tactics",
    icon: TacticsIcon,
    link: "/dashboard/player/tactics",
  },
  {
    name: "Matches",
    icon: MatchesIcon,
    link: "/dashboard/player/matches",
  },
  {
    name: "Academies",
    icon: AcademicIcon,
    link: "/dashboard/player/academies",
  },
  {
    name: "Football Clubs",
    icon: FootballClubIcon,
    link: "/dashboard/player/football-clubs",
  },
];

const resources: iNavItem[] = [
  {
    name: "Messages",
    icon: MessagesIcon,
    link: "/dashboard/player/messages",
  },
  {
    name: "Notifications",
    icon: NotificationsIcon,
    link: "/dashboard/player/notifications",
  },
  {
    name: "Settings",
    icon: SettingsIcon,
    link: "/dashboard/player/settings",
  },
];

const PlayerLayout: FC<iAuthLayout> = ({ children }) => {
  return (
    <div className="w-[100vw] h-[100vh] font-lato bg-gradient-to-b from-white to-background-gray flex justify-between">
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
        <div className="h-[calc(100vh-5rem+85px)] overflow-y-scroll w-full mt-[80px] ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PlayerLayout;
