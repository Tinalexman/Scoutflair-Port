import React from "react";
import Image, { StaticImageData } from "next/image";

import PlayerImg from "@/public/images/passport.png";
import NigFlag from "@/public/images/twemoji_flag-nigeria.png";

interface iPlayerInfo {
  image: StaticImageData | string;
  country: StaticImageData | string;
  firstName: string;
  lastName: string;
  jersey: number;
  dob: Date;
  role: string;
  height: number;
  weight: number;
  appearance: number;
  foot: "Right" | "Left" | "Both";
}

const Info = () => {
  return (
    <div className="w-full shadow-custom rounded-[1rem] py-4 px-5 gap-5 bg-white flex flex-col ">
      <div className="flex items-center flex-row gap-4">
        <Image className="w-[124px] h-[124px]" src={PlayerImg} alt={""} />
        <div className="flex flex-col gap-1">
          <p className="font-lato font-normal text-base">Henry</p>
          <h2 className="font-lato font-bold text-[20px] leading-[30px]">
            FAYOMI
          </h2>
          <Image className="w-[24px] h-[24px]" src={NigFlag} alt={""} />
          <h1 className="font-lato font-medium text-[32px] leading-[30px] text-secondary">
            #12
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex gap-[1rem] flex-row">
          <div>
            <p className="text-[10px] font-lato leading-[12px] font-normal mb-2">
              DATE OF BIRTH
            </p>
            <span className="border border-[#4BBAC1] w-[150px] h-[30px] flex items-center justify-center rounded-md font-semibold text-[14px] leading-[16px] font-lato">
              17/06/2004
            </span>
          </div>
          <div>
            <p className="text-[10px] font-lato leading-[12px] font-normal mb-2">
              POSITION
            </p>
            <span className="border border-[#4BBAC1] w-[150px] h-[30px] flex items-center justify-center rounded-md font-semibold text-[14px] leading-[16px] font-lato">
              Centre Forward
            </span>
          </div>
          <div>
            <p className="text-[10px] font-lato leading-[12px] font-normal mb-2">
              INJURIES
            </p>
            <span className="border border-[#4BBAC1] w-[150px] h-[30px] flex items-center justify-center rounded-md font-semibold text-[14px] leading-[16px] font-lato">
              Available
            </span>
          </div>
          <div>
            <p className="text-[10px] font-lato leading-[12px] font-normal mb-2">
              WEIGHT
            </p>
            <span className="border border-[#4BBAC1] w-[150px] h-[30px] flex items-center justify-center rounded-md font-semibold text-[14px] leading-[16px] font-lato">
              175 lbs (79kg)
            </span>
          </div>
        </div>

        <div className="flex gap-[1rem] flex-row">
          <div>
            <p className="text-[10px] font-lato leading-[12px] font-normal mb-2">
              NATIONALITY
            </p>
            <span className="border border-[#4BBAC1] w-[150px] h-[30px] flex items-center justify-center rounded-md font-semibold text-[14px] leading-[16px] font-lato">
              Nigerian
            </span>
          </div>
          <div>
            <p className="text-[10px] font-lato leading-[12px] font-normal mb-2">
              HEIGHT
            </p>
            <span className="border border-[#4BBAC1] w-[150px] h-[30px] flex items-center justify-center rounded-md font-semibold text-[14px] leading-[16px] font-lato">
              6&apos;2&quot; (188cm)
            </span>
          </div>
          <div>
            <p className="text-[10px] font-lato leading-[12px] font-normal mb-2">
              AGE
            </p>
            <span className="border border-[#4BBAC1] w-[150px] h-[30px] flex items-center justify-center rounded-md font-semibold text-[14px] leading-[16px] font-lato">
              20
            </span>
          </div>
          <div>
            <p className="text-[10px] font-lato leading-[12px] font-normal mb-2">
              DOMINANT FOOT
            </p>
            <span className="border border-[#4BBAC1] w-[150px] h-[30px] flex items-center justify-center rounded-md font-semibold text-[14px] leading-[16px] font-lato">
              Right
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
