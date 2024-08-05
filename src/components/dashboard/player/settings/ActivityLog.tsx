import { EditIcon, LoginIcon, LogoutIcon, MessageIcon, UploadIcon, ViewIcon } from "@/src/icons";
import Link from "next/link";
import React from "react";

const ActivityLog = () => {
    return (
        <>
        <div className="border rounded-lg border-border-gray px-[20px] py-4 shadow-custom font-lato w-[300px]">
          <h2 className="font-lato font-bold text-[18px] leading-[27px] text-black mb-[12px]">
          Activity Log
          </h2>
          <p className="font-lato font-normal text-base text-black">
          Track your activities in real time
      </p>

      <div className="mt-4">
        <div className="flex items-center justify-between pl-5">
            <p className="font-lato text-black text-[12px] leading-[14px] font-normal">Activity</p>
            <p className="font-lato text-black text-[12px] leading-[14px] font-normal">Timestamp</p>
            <Link className="font-lato text-black text-[8px] leading-[10px] font-semibold" href={""}>See All</Link>
        </div>
        <div className="flex mt-4 flex-col gap-4">
        <div className="flex items-center justify-between">
            <div className="flex gap-1 items-center">
                <LoginIcon />
                <p className="font-lato text-black text-[14px] leading-[18px] font-normal">Logged in</p>
            </div>
            <p className="font-lato text-black text-[14px] leading-[16px] font-normal">2024-02-23</p>
            <p className="font-lato text-black text-[14px] leading-[16px] font-normal">10:00 AM</p>
        </div>

        <div className="flex items-center justify-between">
            <div className="flex gap-1 items-center">
                <ViewIcon />
                <p className="font-lato text-black text-[14px] leading-[18px] font-normal">View dashboard</p>
            </div>
            <p className="font-lato text-black text-[14px] leading-[16px] font-normal">2024-02-23</p>
            <p className="font-lato text-black text-[14px] leading-[16px] font-normal">10:00 AM</p>
        </div>

        <div className="flex items-center justify-between">
            <div className="flex gap-1 items-center">
                <EditIcon />
                <p className="font-lato text-black text-[14px] leading-[18px] font-normal">Edited profile</p>
            </div>
            <p className="font-lato text-black text-[14px] leading-[16px] font-normal">2024-02-23</p>
            <p className="font-lato text-black text-[14px] leading-[16px] font-normal">10:50 AM</p>
        </div>

        <div className="flex items-center justify-between">
            <div className="flex gap-1 items-center">
                <UploadIcon />
                <p className="font-lato text-black text-[14px] leading-[18px] font-normal">Uploaded file</p>
            </div>
            <p className="font-lato text-black text-[14px] leading-[16px] font-normal">2024-02-23</p>
            <p className="font-lato text-black text-[14px] leading-[16px] font-normal">03:45 PM</p>
        </div>

        <div className="flex items-center justify-between">
            <div className="flex gap-1 items-center">
                <MessageIcon />
                <p className="font-lato text-black text-[14px] leading-[18px] font-normal">Read messages</p>
            </div>
            <p className="font-lato text-black text-[14px] leading-[16px] font-normal">2024-02-23</p>
            <p className="font-lato text-black text-[14px] leading-[16px] font-normal">09:50 PM</p>
        </div>

        <div className="flex items-center justify-between">
            <div className="flex gap-1 items-center">
                <LogoutIcon />
                <p className="font-lato text-black text-[14px] leading-[18px] font-normal">Logged out</p>
            </div>
            <p className="font-lato text-black text-[14px] leading-[16px] font-normal">2024-02-23</p>
            <p className="font-lato text-black text-[14px] leading-[16px] font-normal">11:30 PM</p>
        </div>


        </div>

      </div>
          </div>
        </>
    )
}

export default ActivityLog;