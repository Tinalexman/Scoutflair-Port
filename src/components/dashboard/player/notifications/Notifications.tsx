"use client";
import { Checkbox } from "@mantine/core";
import React, { useState } from "react";
import FixtureNotification from "./FixtureNotification";
import NI from "@/public/images/Ellipse_2391.png";
import Dinamo from "@/public/images/Dinamo_Zagreb.png";
import Kashima from "@/public/images/Kashima_Antlers.png";

const NotificationsPage = () => {
  const [checked, setChecked] = useState(false);

  const fixtures = [
    {
      id: 1,
      homeTeam: "Deltas FC",
      awayTeam: "Kashima Antlers",
      rescheduleDate: "13-07-2024",
      homeTeamLogo: Dinamo,
      awayTeamLogo: Kashima,
      LeagueLogo: NI,
    },
    {
      id: 2,
      homeTeam: "Deltas FC",
      awayTeam: "Kashima Antlers",
      rescheduleDate: "13-07-2024",
      homeTeamLogo: Dinamo,
      awayTeamLogo: Kashima,
      LeagueLogo: NI,
    },
    {
      id: 3,
      homeTeam: "Deltas FC",
      awayTeam: "Kashima Antlers",
      rescheduleDate: "13-07-2024",
      homeTeamLogo: Dinamo,
      awayTeamLogo: Kashima,
      LeagueLogo: NI,
    },
    {
      id: 4,
      homeTeam: "Deltas FC",
      awayTeam: "Kashima Antlers",
      rescheduleDate: "13-07-2024",
      homeTeamLogo: Dinamo,
      awayTeamLogo: Kashima,
      LeagueLogo: NI,
    },
    {
      id: 5,
      homeTeam: "Deltas FC",
      awayTeam: "Kashima Antlers",
      rescheduleDate: "13-07-2024",
      homeTeamLogo: Dinamo,
      awayTeamLogo: Kashima,
      LeagueLogo: NI,
    },
    {
      id: 6,
      homeTeam: "Deltas FC",
      awayTeam: "Kashima Antlers",
      rescheduleDate: "13-07-2024",
      homeTeamLogo: Dinamo,
      awayTeamLogo: Kashima,
      LeagueLogo: NI,
    },
    {
      id: 7,
      homeTeam: "Deltas FC",
      awayTeam: "Kashima Antlers",
      rescheduleDate: "13-07-2024",
      homeTeamLogo: Dinamo,
      awayTeamLogo: Kashima,
      LeagueLogo: NI,
    },
    {
      id: 8,
      homeTeam: "Deltas FC",
      awayTeam: "Kashima Antlers",
      rescheduleDate: "13-07-2024",
      homeTeamLogo: Dinamo,
      awayTeamLogo: Kashima,
      LeagueLogo: NI,
    },
    {
      id: 9,
      homeTeam: "Deltas FC",
      awayTeam: "Kashima Antlers",
      rescheduleDate: "13-07-2024",
      homeTeamLogo: Dinamo,
      awayTeamLogo: Kashima,
      LeagueLogo: NI,
    },
    {
      id: 10,
      homeTeam: "Deltas FC",
      awayTeam: "Kashima Antlers",
      rescheduleDate: "13-07-2024",
      homeTeamLogo: Dinamo,
      awayTeamLogo: Kashima,
      LeagueLogo: NI,
    },
    {
      id: 11,
      homeTeam: "Deltas FC",
      awayTeam: "Kashima Antlers",
      rescheduleDate: "13-07-2024",
      homeTeamLogo: Dinamo,
      awayTeamLogo: Kashima,
      LeagueLogo: NI,
    },
    {
      id: 12,
      homeTeam: "Deltas FC",
      awayTeam: "Kashima Antlers",
      rescheduleDate: "13-07-2024",
      homeTeamLogo: Dinamo,
      awayTeamLogo: Kashima,
      LeagueLogo: NI,
    },
    {
      id: 13,
      homeTeam: "Deltas FC",
      awayTeam: "Kashima Antlers",
      rescheduleDate: "13-07-2024",
      homeTeamLogo: Dinamo,
      awayTeamLogo: Kashima,
      LeagueLogo: NI,
    },
    {
      id: 14,
      homeTeam: "Deltas FC",
      awayTeam: "Kashima Antlers",
      rescheduleDate: "13-07-2024",
      homeTeamLogo: Dinamo,
      awayTeamLogo: Kashima,
      LeagueLogo: NI,
    },
  ];

  return (
    <div className="flex flex-row gap-6 p-5">
      <div className="flex flex-col gap-2">
        <div className="font-lato w-[250px]">
          <div className="bg-primary-2 rounded-tl-xl border py-2 pl-[20px]">
            <p className="font-bold text-[20px] leading-[32px] text-white">
              FILTER
            </p>
          </div>
          <div className="py-4 pl-[20px] bg-white flex flex-col gap-4">
            <div className="text-black text-[18px] leading-[21px]">
              <Checkbox color="black" label="All" className="" />
            </div>

            <div className="text-black text-[18px] leading-[21px]">
              <Checkbox color="black" label="Updates" className="" />
            </div>

            <div className="text-black text-[18px] leading-[21px]">
              <Checkbox color="black" label="Comments" className="" />
            </div>

            <div className="text-black text-[18px] leading-[21px]">
              <Checkbox color="black" label="Mentions" className="" />
            </div>
          </div>
        </div>

        <div className="font-lato w-[250px]">
          <div className="bg-white border py-2 pl-[20px]">
            <p className="font-bold text-[20px] leading-[32px] text-primary-2">
              PREFERENCES
            </p>
          </div>
          <div>
            <hr />
          </div>
          <div className="py-4 pl-[20px] bg-white flex flex-col gap-4">
            <div className="text-black text-[18px] leading-[21px]">
              <Checkbox color="black" label="SMS" className="" />
            </div>

            <div className="text-black text-[18px] leading-[21px]">
              <Checkbox color="black" label="Email" className="" />
            </div>

            <div className="text-black text-[18px] leading-[21px]">
              <Checkbox color="black" label="Push" className="" />
            </div>

            <div className="text-black text-[18px] leading-[21px]">
              <Checkbox color="black" label="In-App" className="" />
            </div>
          </div>
        </div>

        <div className="font-lato w-[250px]">
          <div className="bg-white border py-2 pl-[20px]">
            <p className="font-bold text-[20px] leading-[32px] text-primary-2">
              HISTORY
            </p>
          </div>
          <div>
            <hr />
          </div>
          <div className="py-4 pl-[20px] bg-white flex flex-col gap-4">
            <div className="text-black text-[18px] leading-[21px]">
              <Checkbox color="black" label="Archived" className="" />
            </div>

            <div className="text-black text-[18px] leading-[21px]">
              <Checkbox color="black" label="Activity Logs" className="" />
            </div>

            <div className="text-black text-[18px] leading-[21px]">
              <Checkbox color="black" label="System Alerts" className="" />
            </div>

            <div className="text-black text-[18px] leading-[21px]">
              <Checkbox color="black" label="Recent Activity" className="" />
            </div>
          </div>
        </div>

        <div className="font-lato w-[250px]">
          <div className="bg-white border py-2 pl-[20px]">
            <p className="font-bold text-[20px] leading-[32px] text-primary-2">
              TEMPLATES
            </p>
          </div>
          <div>
            <hr />
          </div>
          <div className="py-4 pl-[20px] bg-white flex flex-col gap-4">
            <div className="text-black text-[18px] leading-[21px]">
              <Checkbox color="black" label="General" className="" />
            </div>

            <div className="text-black text-[18px] leading-[21px]">
              <Checkbox color="black" label="Reminder" className="" />
            </div>

            <div className="text-black text-[18px] leading-[21px]">
              <Checkbox color="black" label="Feedback" className="" />
            </div>

            <div className="text-black text-[18px] leading-[21px]">
              <Checkbox color="black" label="Promotional" className="" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full">
        {fixtures.map((fixture) => (
          <FixtureNotification
            key={fixture.id}
            homeTeam={fixture.homeTeam}
            awayTeam={fixture.awayTeam}
            rescheduleDate={fixture.rescheduleDate}
            homeTeamLogo={fixture.homeTeamLogo}
            awayTeamLogo={fixture.awayTeamLogo}
            LeagueLogo={fixture.LeagueLogo}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationsPage;
