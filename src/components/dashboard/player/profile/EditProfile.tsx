import React from "react";
import BasicInfo from "./BasicInfo";

const EditProfile = () => {
    return (
        <>
        <div className="bg-white rounded-md pt-2 pb-5">
            <div className="flex justify-between items-center pl-[24px] pr-[80px] pb-2">
                <p className="font-lato text-black text-[14px] leading-[24px] font-bold">Add New</p>
                <p className="font-lato text-[#FF0000] text-[12px] leading-[24px] font-bold">Delete</p>
            </div>

            <div>
                <hr className="w-full border-2 text-background-gray" />
            </div>

            <div className="flex flex-row items-center px-[30px] pt-[20px]">
                <BasicInfo />
            </div>
        </div>
        </>
    )
}

export default EditProfile;