"use client";
import DatePickerComponent from "@/src/components/reusable/DatePickerComponent";
import React, { useState } from "react";
import Select, { SingleValue } from "react-select";
import countryList from "react-select-country-list";

type CountryOption = {
    label: string;
    value: string;
  };

const BasicInfo = () => {
    const [location, setLocation] = useState<CountryOption | null>(null);

    const countries = countryList().getData();

  return (
    <>
      <div className="border rounded-lg border-border-gray px-[20px] py-2 shadow-custom font-lato w-[330px]">
        <div className="mb-4">
          <h2 className="font-lato font-bold text-[18px] leading-[27px] text-black mb-[16px]">
            Basic Information
          </h2>
          <div>
            <p className="text-black font-normal text-base mb-[8px]">
              First Name:
            </p>
            <input
              type="text"
              name="first_name"
              placeholder="Enter your first name"
              className="rounded-[10px] border border-border-black h-[40px] w-full pl-4 outline-none"
            />
          </div>

          <div className="mt-[16px]">
            <p className="text-black font-normal text-base mb-[8px]">
              Last Name:
            </p>
            <input
              type="text"
              name="last_name"
              placeholder="Enter your last name"
              className="rounded-[10px] border border-border-black h-[40px] w-full pl-4 outline-none"
            />
          </div>

          <div className="mt-[16px]">
            <p className="text-black font-normal text-base">
              Date Of Birth:
            </p>
            <DatePickerComponent />
          </div>

          <div className="mt-[16px]">
            <p className="text-black font-normal text-base mb-[8px]">
              Place Of Birth:
            </p>
            <input
              type="text"
              name="place_of_birth"
              placeholder=""
              className="rounded-[10px] border border-border-black h-[40px] w-full pl-4 outline-none"
            />
          </div>

          <div className="mt-[16px]">
            <label className="text-black font-normal text-base mb-[8px]">
              Nationality
            </label>
            <Select
              options={countries}
              value={location}
              onChange={(option) => setLocation(option as SingleValue<CountryOption>)}
              placeholder="Select Your Location"
              className="text-black"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicInfo;
