"use client"
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const PasswordManagement = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <div className="border rounded-lg border-border-gray px-[20px] py-4 shadow-custom font-lato w-[300px]">
        <h2 className="font-lato font-bold text-[18px] leading-[27px] text-black mb-[16px]">
          Password Management
        </h2>

        <div className="mt-[16px]">
          <label className="text-black font-normal text-base mb-[8px]">
            Current Password
          </label>
          <div className="relative">
            <input
              type={showCurrentPassword ? "text" : "password"}
              name="current_password"
              placeholder="*************"
              className="rounded-[10px] border border-border-black h-[40px] w-full pl-4 outline-none"
            />
            <span
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
            >
              {showCurrentPassword ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </span>
          </div>
        </div>

        <div className="mt-[16px]">
          <label className="text-black font-normal text-base mb-[8px]">
            New Password
          </label>
          <div className="relative">
            <input
              type={showNewPassword ? "text" : "password"}
              name="new_password"
              placeholder="*************"
              className="rounded-[10px] border border-border-black h-[40px] w-full pl-4 outline-none"
            />
            <span
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowNewPassword(!showNewPassword)}
            >
              {showNewPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
        </div>

        <div className="mt-[16px]">
          <label className="text-black font-normal text-base mb-[8px]">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirm_password"
              placeholder="*************"
              className="rounded-[10px] border border-border-black h-[40px] w-full pl-4 outline-none"
            />
            <span
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </span>
          </div>
        </div>

        <div className="mt-8">
        <button className="flex items-center justify-center w-full h-[40px] text-black bg-white rounded-lg border border-primary-2">
            <p className="font-lato font-normal text-base">Save Changes</p>
            </button>
        </div>
      </div>
    </>
  );
};

export default PasswordManagement;
