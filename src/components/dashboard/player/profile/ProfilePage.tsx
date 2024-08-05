"use client";
import Image from "next/image";
import React from "react";
import PlayerImg from "@/public/images/passport.png";
import NigFlag from "@/public/images/twemoji_flag-nigeria.png";
import LineChart from "@/src/components/reusable/LineChart";
import Link from "next/link";
import Vid1 from "@/public/images/vid1.png";
import Vid2 from "@/public/images/vid2.png";
import Vid3 from "@/public/images/vid3.png";
import pvid1 from "@/public/images/pvid1.png";
import pvid2 from "@/public/images/pvid2.png";
import pvid3 from "@/public/images/pvid3.png";
import { DonutChart } from "@mantine/charts";
import { data } from "@/src/data/data";
import "@mantine/charts/styles.css";
import { MdArrowRightAlt } from "react-icons/md";
import HighlightCard from "@/src/components/reusable/HightlightCard";
import BackButton from "@/src/components/reusable/BackButton";
import NextButton from "@/src/components/reusable/NextButton";

const ProfilePage = () => {
  const highlightCardsData = [
    {
      videoSrc: Vid1,
      profileSrc: pvid1,
      uploaderName: "Michael Hamps",
      uploadDate: "Today",
    },
    {
      videoSrc: Vid2,
      profileSrc: pvid2,
      uploaderName: "Mitchel Abram",
      uploadDate: "Today",
    },
    {
      videoSrc: Vid3,
      profileSrc: pvid3,
      uploaderName: "Abigail davis",
      uploadDate: "Today",
    },
  ];

  return (
    <div className="flex flex-col p-5">
      <div className="bg-slate-900 text-white w-full flex items-center gap-20 h-[200px] rounded-lg px-5">
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

      <div className="mt-5 flex items-center justify-between">
        <div className="w-[70%] h-[275px] bg-white rounded-xl">
          {/* <LineChart /> */}
        </div>

        <div className="w-[25%] flex items-center flex-col justify-center mt-2 h-[275px] bg-white rounded-xl">
          <h2 className="text-black text-[18px] leading-[23px] font-lato font-bold mb-5">
            Goals Percentage
          </h2>
          <div className="relative">
            <DonutChart data={data} startAngle={180} endAngle={0} />
            <h2 className="text-black text-[32px] leading-[41px] font-lato font-bold absolute top-12 left-12">
              84%
            </h2>
          </div>
          <Link
            className=" flex gap-2 text-14 font-normal leading-[18px]"
            href={""}
          >
            All Goals{" "}
            <span>
              <MdArrowRightAlt />
            </span>
          </Link>
        </div>
      </div>

      <div className="mt-5 px-5 py-6 w-[100%] bg-white flex flex-col gap-4 rounded-xl">
        <div className="flex items-center justify-between">
          <span className="text-black rounded-2xl border border-[#D1D1D1] w-[230px] h-[180px] py-3 pl-2 flex flex-col justify-between">
            <h5 className="font-lato font-extrabold text-[20px] leading-[30px]">
              Goals Scored
            </h5>
            <h1 className="text-black font-lato font-normal text-[48px] leading-[57px]">
              67
            </h1>
          </span>
          <span className="text-black rounded-2xl border border-[#D1D1D1] w-[230px] h-[180px] py-3 pl-2 flex flex-col justify-between">
            <h5 className="font-lato font-extrabold text-[20px] leading-[30px]">
              Total Shots
            </h5>
            <h1 className="text-black font-lato font-normal text-[48px] leading-[57px]">
              99
            </h1>
          </span>
          <span className="text-black rounded-2xl border border-[#D1D1D1] w-[230px] h-[180px] py-3 pl-2 flex flex-col justify-between">
            <h5 className="font-lato font-extrabold text-[20px] leading-[30px]">
              Hat-tricks
            </h5>
            <h1 className="text-black font-lato font-normal text-[48px] leading-[57px]">
              07
            </h1>
          </span>
          <span className="text-black rounded-2xl border border-[#D1D1D1] w-[230px] h-[180px] py-3 pl-2 flex flex-col justify-between">
            <h5 className="font-lato font-extrabold text-[20px] leading-[30px]">
              Free Kick Goals
            </h5>
            <h1 className="text-black font-lato font-normal text-[48px] leading-[57px]">
              10
            </h1>
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-black rounded-2xl border border-[#D1D1D1] w-[230px] h-[180px] py-3 pl-2 flex flex-col justify-between">
            <h5 className="font-lato font-extrabold text-[20px] leading-[30px]">
              Minutes Played
            </h5>
            <h1 className="text- black font-lato font-normal text-[48px] leading-[57px]">
              4500
            </h1>
          </span>
          <span className="text-black rounded-2xl border border-[#D1D1D1] w-[230px] h-[180px] py-3 pl-2 flex flex-col justify-between">
            <h5 className="font-lato font-extrabold text-[20px] leading-[30px]">
              Shot Accuracy
            </h5>
            <h1 className="text-black font-lato font-normal text-[48px] leading-[57px]">
              72%
            </h1>
          </span>
          <span className="text-black rounded-2xl border border-[#D1D1D1] w-[230px] h-[180px] py-3 pl-2 flex flex-col justify-between">
            <h5 className="font-lato font-extrabold text-[20px] leading-[30px]">
              Penalty Goals
            </h5>
            <h1 className="text-black font-lato font-normal text-[48px] leading-[57px]">
              12
            </h1>
          </span>
          <span className="text-black rounded-2xl border border-[#D1D1D1] w-[230px] h-[180px] py-3 pl-2 flex flex-col justify-between">
            <h5 className="font-lato font-extrabold text-[20px] leading-[30px]">
              Conversion Rate
            </h5>
            <h1 className="text-black font-lato font-normal text-[48px] leading-[57px]">
              80%
            </h1>
          </span>
        </div>
      </div>

      <div className="mt-5 px-3 py-6 w-[100%] bg-white rounded-xl">
        <h2 className="font-lato font-bold text-[20px] leading-[23px] mb-2 text-black">
          Highlights
        </h2>
        <div className="flex justify-end">
          <Link
            href={""}
            className="font-lato font-normal text-[14px] leading-[16px]"
          >
            View All
          </Link>
        </div>

        <div className="flex mt-5 flex-wrap gap-4">
          {highlightCardsData.map((card, index) => (
            <HighlightCard
              key={index}
              videoSrc={card.videoSrc}
              profileSrc={card.profileSrc}
              uploaderName={card.uploaderName}
              uploadDate={card.uploadDate}
            />
          ))}
        </div>
      </div>

      <div className="flex mt-10 justify-between items-center">
        <BackButton />
        <Link href={"/dashboard/player/edit-profile"}>
          <NextButton />
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;
