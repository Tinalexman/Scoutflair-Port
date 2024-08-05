"use client";
import DatePickerComponent from "@/src/components/reusable/DatePickerComponent";
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import countryList from "react-select-country-list";

const PersonalInfo = () => {
  const [location, setLocation] = useState("");
  const countries = countryList().getData();

  const [playerPosition, setPlayerPosition] = useState("");

  return (
    <>
      <div className="border rounded-lg border-border-gray px-[20px] py-4 shadow-custom font-lato w-[300px]">
          <h2 className="font-lato font-bold text-[18px] leading-[27px] text-black mb-[16px]">
            Personal Information
          </h2>
          <div>
            <p className="text-black font-normal text-base mb-[8px]">
              First Name
            </p>
            <input
              type="text"
              name="first_name"
              placeholder=""
              className="rounded-[10px] border border-border-black h-[40px] w-full pl-4 outline-none"
            />
          </div>

          <div className="mt-[16px]">
            <p className="text-black font-normal text-base mb-[8px]">
              Last Name
            </p>
            <input
              type="text"
              name="last_name"
              placeholder=""
              className="rounded-[10px] border border-border-black h-[40px] w-full pl-4 outline-none"
            />
          </div>

          <div className="mt-[16px]">
            <p className="text-black font-normal text-base mb-[8px]">
              Email Address
            </p>
            <input
              type="text"
              name="email_address"
              placeholder=""
              className="rounded-[10px] border border-border-black h-[40px] w-full pl-4 outline-none"
            />
          </div>

          <div className="mt-[16px]">
            <p className="text-black font-normal text-base mb-[8px]">
              Phone Number
            </p>
            <input
              type="text"
              name="tel"
              placeholder=""
              className="rounded-[10px] border border-border-black h-[40px] w-full pl-4 outline-none"
            />
          </div>

          <div className="mt-[16px]">
            <p className="text-black font-normal text-base mb-[8px]">
              Address
            </p>
            <input
              type="text"
              name="address"
              placeholder=""
              className="rounded-[10px] border border-border-black h-[40px] w-full pl-4 outline-none"
            />
          </div>

          <div className="mt-[16px] relative">
            <label className="text-black font-normal text-base mb-[8px]">
              Location
            </label>
            <div className="relative">
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="rounded-[10px] text-base text-black border border-border-black h-[40px] w-full pl-4 pr-10 outline-none appearance-none"
              >
                <option value="" disabled selected>
                  
                </option>
                {countries.map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>
              <FiChevronDown className="absolute right-[20px] top-1/2 transform -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          <div className="mt-[16px]">
            <p className="text-black font-normal text-base mb-[8px]">
              Currency
            </p>
            <input
              type="text"
              name="currency"
              placeholder="Nigerian Naira (₦)"
              className="rounded-[10px] border border-border-black h-[40px] w-full pl-4 outline-none"
            />
          </div>

          <div className="mt-[16px]">
            <p className="text-black font-normal text-base mb-[8px]">
              Affliation
            </p>
            <input
              type="text"
              name="affliation"
              placeholder=""
              className="rounded-[10px] border border-border-black h-[40px] w-full pl-4 outline-none"
            />
          </div>

          <div className="mt-[16px]">
            <p className="text-black font-normal text-base mb-[8px]">
              Club Company
            </p>
            <input
              type="text"
              name="club_company"
              placeholder=""
              className="rounded-[10px] border border-border-black h-[40px] w-full pl-4 outline-none"
            />
          </div>

      </div>
    </>
  );
};

export default PersonalInfo;
