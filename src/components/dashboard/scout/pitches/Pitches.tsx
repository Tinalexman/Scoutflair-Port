import React from "react";

import Map from "./MapImage";
import img from "@/public/dashboard/scout/Stadium.png";
import { TbColorFilter } from "react-icons/tb";

import PitchCard, { iPitch } from "./PitchCard";

const Pitches = () => {
  const pitches: iPitch[] = Array(20).fill({
    img,
    name: "Js. Fayomi Stadium",
    location: "Lagos, Nigeria",
    year: 2023,
    capacity: 500,
    facilities: "Good",
    rating: 4.5,
    liked: true,
  });

  return (
    <div className="w-full grid grid-cols-2 gap-6 p-6">
      <div className="flex flex-col h-full w-full shadow-custom rounded-[1rem] py-4  bg-white ">
        <div className="w-full grid grid-cols-[1fr_1fr_1fr_0.4fr] gap-6 px-5">
          <div className="text-8-9 text-dark flex flex-col gap-0.5">
            <p>Pitches Location</p>
            <select
              value={""}
              className="bg-white border-border-gray border rounded-lg h-6"
            >
              <option value="">Choose</option>
            </select>
          </div>
          <div className="text-8-9 text-dark flex flex-col gap-0.5">
            <p>Pitches Quality</p>
            <select
              value={""}
              className="bg-white border-border-gray border rounded-lg h-6"
            >
              <option value="">Choose</option>
            </select>
          </div>
          <div className="text-8-9 text-dark flex flex-col gap-0.5">
            <p>Pitches Current State</p>
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
          <h2 className="text-16-19 text-dark font-bold">Available Pitches</h2>
          <div className="w-full grid grid-cols-2 gap-4">
            {pitches.map((pitch, i) => (
              <PitchCard key={i} pitch={pitch} />
            ))}
          </div>
        </div>
      </div>
      <Map />
    </div>
  );
};

export default Pitches;
