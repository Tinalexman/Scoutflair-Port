import React from "react";

import Map from "./MapImage";
import img from "@/public/dashboard/scout/Academy 1.png";
import { TbColorFilter } from "react-icons/tb";

import AcademyCard, { iAcademy } from "./AcademyCard";

const Academies = () => {
  const academies: iAcademy[] = Array(20).fill({
    img,
    name: "Valuegate Academy",
    location: "Lagos, Nigeria",
    age: "10-15 y.o",
    size: "50 Players",
    facilities: "Good",
    rating: 4.5,
    liked: true,
  });

  return (
    <div className="w-full grid grid-cols-2 gap-6 p-6">
      <div className="flex flex-col h-full w-full shadow-custom rounded-[1rem] py-4  bg-white ">
        <div className="w-full grid grid-cols-[1fr_1fr_1fr_0.4fr] gap-6 px-5">
          <div className="text-8-9 text-dark flex flex-col gap-0.5">
            <p>Academy Location</p>
            <select
              value={""}
              className="bg-white border-border-gray border rounded-lg h-6"
            >
              <option value="">Choose</option>
            </select>
          </div>
          <div className="text-8-9 text-dark flex flex-col gap-0.5">
            <p>Facilities Quality</p>
            <select
              value={""}
              className="bg-white border-border-gray border rounded-lg h-6"
            >
              <option value="">Choose</option>
            </select>
          </div>
          <div className="text-8-9 text-dark flex flex-col gap-0.5">
            <p>Academic Level</p>
            <select
              value={""}
              className="bg-white border-border-gray border rounded-lg h-6"
            >
              <option value="">Choose</option>
            </select>
          </div>
          <div className="size-6 mt-3 grid place-content-center bg-primary-2 rounded ">
            <TbColorFilter className="text-sm text-white cursor-pointer" />
          </div>
        </div>
        <hr className="w-full bg-[#E0E0E0] my-2" />
        <div className="flex flex-col w-full px-5 gap-6">
          <h2 className="text-16-19 text-dark font-bold">
            Available Academies
          </h2>
          <div className="w-full grid grid-cols-2 gap-4">
            {academies.map((academy, i) => (
              <AcademyCard key={i} academy={academy} />
            ))}
          </div>
        </div>
      </div>
      <Map />
    </div>
  );
};

export default Academies;
