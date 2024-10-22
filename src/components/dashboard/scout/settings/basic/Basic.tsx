"use client";

import React, { FC, useRef, useState } from "react";
import Image from "next/image";

import ProfileImageOrTextAvatar from "@/src/components/reusable/ProfileImageOrTextAvatar";

const Basic: FC<{
  values: any;
  handleChange: (e: any) => void;
  setFieldValue: (key: string, value: any) => void;
}> = ({ values, handleChange, setFieldValue }) => {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [fileImageData, setFileImageData] = useState<string>("");

  return (
    <div className="flex flex-col gap-3 w-full ">
      <h2 className="text-dark text-12-14 font-semibold pl-5">
        Basic Information
      </h2>
      <div className="w-full grid grid-cols-[1fr_1.5fr_1.5fr] gap-4 px-5">
        <div className="h-10 flex items-center">
          <h2 className="text-14-16 font-semibold text-placeholder">
            Full Name
          </h2>
        </div>
        <input
          type="text"
          name="firstName"
          placeholder="Enter First Name"
          value={values.firstName}
          onChange={handleChange}
          className="w-full rounded-lg border bg-white placeholder:text-placeholder text-dark text-14-16 font-semibold placeholder:text-opacity-[0.88] border-border-gray h-10 px-2"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Enter Last Name"
          value={values.lastName}
          onChange={handleChange}
          className="w-full rounded-lg border bg-white placeholder:text-placeholder text-dark text-14-16 font-semibold placeholder:text-opacity-[0.88] border-border-gray h-10 px-2"
        />
        <div className="h-10 flex items-center">
          <h2 className="text-14-16 font-semibold text-placeholder">Contact</h2>
        </div>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={values.email}
          readOnly={true}
          onChange={handleChange}
          className="w-full rounded-lg border bg-white placeholder:text-placeholder text-dark text-14-16 font-semibold placeholder:text-opacity-[0.88] border-border-gray h-10 px-2"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Enter Phone Number"
          value={values.phone}
          onChange={handleChange}
          className="w-full rounded-lg border bg-white placeholder:text-placeholder text-dark text-14-16 font-semibold placeholder:text-opacity-[0.88] border-border-gray h-10 px-2"
        />
        <div className="h-10 flex items-center">
          <h2 className="text-14-16 font-semibold text-placeholder">Avatar</h2>
        </div>
        <div className="w-full flex gap-3 items-center">
          {fileImageData ? (
            <Image
              src={fileImageData}
              alt="user image"
              className="rounded-full size-11 object-cover"
              width={44}
              height={44}
            />
          ) : (
            <ProfileImageOrTextAvatar
              image={values.image}
              name={values.firstName}
              radius="rounded-full"
              size="size-11"
            />
          )}
          <div
            onClick={() => fileRef.current?.click()}
            className="text-primary-2 border border-primary-2 px-3 py-1 rounded-md text-10-12 cursor-pointer font-bold"
          >
            Upload
          </div>
          <div
            onClick={() => {
              setFieldValue("image", "");
              setFileImageData("");
            }}
            className="text-error border border-error px-3 py-1 rounded-md text-10-12 cursor-pointer font-bold"
          >
            Remove
          </div>
          <input
            type="file"
            accept="image/*"
            ref={fileRef}
            style={{ display: "none" }}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                  setFieldValue("image", file);
                  setFileImageData(reader.result as string);
                };
              }
            }}
          />
        </div>
      </div>

      <hr className="w-full bg-[#E0E0E0] mt-1.5 mb-2" />
    </div>
  );
};

export default Basic;
