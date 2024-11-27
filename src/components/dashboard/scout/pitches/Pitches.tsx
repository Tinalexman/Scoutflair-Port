"use client";

import React, { useState } from "react";

import Map from "@/src/components/reusable/MapImage";
import Image from "next/image";
import { MdOutlineFilterAlt } from "react-icons/md";
import Void from "@/public/images/Void.png";
import PitchCard from "./PitchCard";
import { iLocalPitchResponse, useGetLocalPitches } from "@/src/hooks/pitch";
import { Loader } from "@mantine/core";
import ViewPitch from "./ViewPitch";

const Pitches = () => {
  const { data, loading } = useGetLocalPitches();
  const [currentPitch, setCurrentPitch] = useState<iLocalPitchResponse | null>(
    null
  );

  return (
    <>
      <div
        className={`w-full h-[100vh] grid ${
          currentPitch === null ? "grid-cols-1" : "grid-cols-2"
        } gap-6 p-6 transition-all duration-300 ease-out`}
      >
        <div className="flex flex-col h-full w-full shadow-custom rounded-[1rem] py-4 bg-white ">
          <div className="w-full grid grid-cols-[1fr_1fr_1fr_0.4fr] gap-6 px-5">
            <div className="text-8-9 text-dark flex flex-col gap-0.5">
              <p>Pitches Location</p>
              <select
                value={""}
                onChange={(e) => {}}
                className="bg-white border-border-gray border rounded-lg h-6"
              >
                <option value="">Choose</option>
              </select>
            </div>
            <div className="text-8-9 text-dark flex flex-col gap-0.5">
              <p>Pitches Quality</p>
              <select
                value={""}
                onChange={(e) => {}}
                className="bg-white border-border-gray border rounded-lg h-6"
              >
                <option value="">Choose</option>
              </select>
            </div>
            <div className="text-8-9 text-dark flex flex-col gap-0.5">
              <p>Pitches Current State</p>
              <select
                value={""}
                onChange={(e) => {}}
                className="bg-white border-border-gray border rounded-lg h-6"
              >
                <option value="">Choose</option>
              </select>
            </div>
            <div className="size-6 mt-3 grid place-content-center bg-primary-2 rounded ">
              <MdOutlineFilterAlt className="text-sm text-white cursor-pointer" />
            </div>
          </div>
          <hr className="w-full bg-[#E0E0E0] my-2" />
          <div className="flex flex-col w-full px-5 gap-6 h-full">
            <h2 className="text-16-19 text-dark font-bold">
              Available Pitches
            </h2>
            {!loading && data.length > 0 && (
              <div
                className={`w-full grid ${
                  currentPitch === null ? "grid-cols-4" : "grid-cols-2"
                } gap-4 transition-all duration-300 ease-out`}
              >
                {data.map((pitch, i) => (
                  <PitchCard
                    key={i}
                    pitch={pitch}
                    active={currentPitch !== null && pitch === currentPitch}
                    onSelected={() => {
                      setCurrentPitch(pitch);
                    }}
                  />
                ))}
              </div>
            )}
            {loading && (
              <div className="w-full h-[80vh] grid place-content-center">
                <Loader color="primary.6" />
              </div>
            )}
            {!loading && data.length === 0 && (
              <div className="w-full h-full flex flex-col justify-center items-center gap-5 my-16">
                <Image
                  src={Void}
                  alt="no matches"
                  width={100}
                  height={100}
                  className="w-32 h-auto object-cover"
                />
                <h2 className="text-dark text-10-12 font-medium">
                  There are no local pitches available yet
                </h2>
              </div>
            )}
          </div>
        </div>
        {currentPitch !== null && (
          <Map
            latitude={Number.parseFloat(currentPitch.latitude)}
            longitude={Number.parseFloat(currentPitch.longitude)}
          />
        )}
      </div>
    </>
  );
};

export default Pitches;
