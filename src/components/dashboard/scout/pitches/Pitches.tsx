"use client";

import React, { useState } from "react";

import Map from "@/components/reusable/MapImage";
import Image from "next/image";
import { MdOutlineFilterAlt } from "react-icons/md";
import Void from "@/public/images/Void.png";
import PitchCard from "./PitchCard";
import { iLocalPitchResponse, useGetLocalPitches } from "@/hooks/pitch";
import { Loader } from "@mantine/core";
import ViewPitch from "./ViewPitch";
import Link from "next/link";

const Pitches = () => {
  const { data, loading } = useGetLocalPitches();
  const [currentPitch, setCurrentPitch] = useState<iLocalPitchResponse | null>(
    null
  );

  return (
    <div
      className={`w-full h-[100vh] grid ${
        currentPitch === null ? "grid-cols-1" : "grid-cols-2"
      } gap-6 p-6 transition-all duration-300 ease-out`}
    >
      <div className="flex flex-col h-full w-full shadow-custom rounded-[1rem] py-4 bg-white ">
        {currentPitch === null && (
          <>
            <div className="flex flex-col w-full px-5 gap-6 h-full">
              <div className="w-full items-center flex justify-between">
                <h2 className="text-16-19 text-dark font-bold">
                  Available Pitches
                </h2>
                <Link
                  href={"/dashboard/scout/pitches/add"}
                  className="border-primary-2 border rounded px-2 py-1 text-primary-2 text-12-14"
                >
                  Add New
                </Link>
              </div>
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
          </>
        )}
        {currentPitch !== null && (
          <ViewPitch
            pitch={currentPitch}
            onClose={() => setCurrentPitch(null)}
          />
        )}
      </div>
      {currentPitch !== null && (
        <Map
          latitude={Number.parseFloat(currentPitch.latitude)}
          longitude={Number.parseFloat(currentPitch.longitude)}
        />
      )}
    </div>
  );
};

export default Pitches;
