import Image, { StaticImageData } from "next/image";
import React from "react";
import { MoreIcon } from "@/src/icons";

interface FixtureNotificationProps {
    homeTeamLogo: StaticImageData;
    awayTeamLogo: StaticImageData;
    homeTeam: string;
    awayTeam: string;
    rescheduleDate: string;
    LeagueLogo: StaticImageData;
  }

const FixtureNotification: React.FC<FixtureNotificationProps>  = ({ homeTeam, awayTeam, rescheduleDate, homeTeamLogo, awayTeamLogo, LeagueLogo }) => {
  return (
    <div className="bg-white px-[20px] h-[50px] w-full flex justify-between items-center py-2 rounded-tr-xl">
      <div className="flex flex-row gap-3 ">
        <div className="pt-2">
          <Image src={LeagueLogo} alt="" className="w-[60px] h-[60px]" />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Image src={homeTeamLogo} alt={homeTeam} className="w-[28px] h-[28px]" />
            <h2 className="font-lato font-normal text-[14px] leading-[16px] text-black">
              {homeTeam}
            </h2>
          </div>
          <span className="font-lato font-normal text-[14px] leading-[16px] text-black">
            VS
          </span>
          <div className="flex items-center gap-2">
            <Image src={awayTeamLogo} alt={awayTeam} className="w-[28px] h-[28px]" />
            <h2 className="font-lato font-normal text-[14px] leading-[16px] text-black">
              {awayTeam}
            </h2>
            <p className="font-lato font-normal text-[14px] leading-[16px] text-black">
              is rescheduled to {rescheduleDate}
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <MoreIcon />
      </div>
    </div>
  );
};

export default FixtureNotification;


