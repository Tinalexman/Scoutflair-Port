import React from "react";
import PersonalInfo from "./PersonalInfo";
import FileUpload from "./FileUpload";
import PasswordManagement from "./PasswordManagement";
import SocialLinks from "./SocialLinks";
import ActivityLog from "./ActivityLog";

const SettingsPage = () => {
  return (
    <div className="p-5">
      <div className="bg-white rounded-md pt-2 pb-5">
        <div className="flex justify-between items-center pl-[24px] pr-[80px] pb-2">
          <p className="font-lato text-black text-[14px] leading-[24px] font-bold">
            Edit Profile
          </p>
          <p className="font-lato text-[#FF0000] text-[12px] leading-[24px] font-bold">
            Delete Profile
          </p>
        </div>

        <div>
          <hr className="w-full border-2 text-background-gray" />
        </div>

        <div className="flex flex-row justify-between px-[30px] pt-[20px] mb-16">
          <div className="flex flex-col gap-4 items-center">
            <PersonalInfo />
          </div>

          <div className="flex flex-col gap-4 items-center">
            <FileUpload />
            <PasswordManagement />
          </div>

          <div className="flex flex-col gap-4 items-center">
            <SocialLinks />
            <ActivityLog />
          </div>
        </div>

        <div className="flex justify-center">
          <button className="flex items-center justify-center w-[400px] h-[40px] bg-[#041931] text-white rounded-lg border border-black">
            <p className="font-lato font-semibold text-[14px] leading-[24px]">
              Save All Changes
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
