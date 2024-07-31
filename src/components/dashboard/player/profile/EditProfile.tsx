"use client"
import React from "react";
import BasicInfo from "./BasicInfo";
import ContactInfo from "./ContactInfo";
import PhysicalAttribute from "./PhysicalAttribute";
import MedicalInfo from "./MedicalInfo";
import PlayerPreference from "./PlayerPreference";
import EmergencyContact from "./EmergencyContact";
import AvailabilityStatus from "./AvailabilityStatus";
import Documentaiton from "./Documentation";
import PerformanceAnalysis from "./PerformanceAnalysis";
import PlayerImages from "./PlayerImages";
import PlayingHistory from "./PlayingHistory";
import ContractHistory from "./ContractHistory";
import ParentInfo from "./ParentInfo";
import PlayerBackground from "./PlayerBackground";
import NextButton from "@/src/components/reusable/NextButton";

const EditProfile = () => {
  return (
    <>
      <div className="bg-white rounded-md pt-2 pb-5">
        <div className="flex justify-between items-center pl-[24px] pr-[80px] pb-2">
          <p className="font-lato text-black text-[14px] leading-[24px] font-bold">
            Add New
          </p>
          <p className="font-lato text-[#FF0000] text-[12px] leading-[24px] font-bold">
            Delete
          </p>
        </div>

        <div>
          <hr className="w-full border-2 text-background-gray" />
        </div>

        <div className="flex flex-row justify-between px-[30px] pt-[20px] mb-16">
          <div className="flex flex-col gap-4 items-center">
            <BasicInfo />
            <ContactInfo />
            <PhysicalAttribute />
            <MedicalInfo />
          </div>

          <div className="flex flex-col gap-4 items-center">
            <EmergencyContact />
            <AvailabilityStatus />
            <Documentaiton />
            <PlayerPreference />
            <PerformanceAnalysis />
          </div>

          <div className="flex flex-col gap-4 items-center">
            <PlayerImages />
            <PlayingHistory />
            <ContractHistory />
            <ParentInfo />
            <PlayerBackground />
          </div>
        </div>

        <div className="flex justify-end pr-[30px]">
            <NextButton />
        </div>
      </div>
    </>
  );
};

export default EditProfile;
