"use client";

import React, { useState } from "react";

import Map from "./MapImage";
import Void from "@/public/images/Void.png";
import Image from "next/image";
import { MdOutlineFilterAlt } from "react-icons/md";
import { Loader } from "@mantine/core";
import AcademyCard from "./AcademyCard";
import { iAcademyResponse, useGetAcademies } from "@/src/hooks/academy";
import ViewAcademy from "./ViewAcademy";

const Academies = () => {
  const { data, loading, success } = useGetAcademies();
  const [currentAcademy, setCurrentAcademy] = useState<iAcademyResponse | null>(
    null
  );

  return (
    <>
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
              <MdOutlineFilterAlt className="text-sm text-white cursor-pointer" />
            </div>
          </div>
          <hr className="w-full bg-[#E0E0E0] my-2" />
          <div className="flex flex-col w-full h-full px-5 gap-6">
            <h2 className="text-16-19 text-dark font-bold">
              Available Academies
            </h2>
            {!loading && data.length > 0 && (
              <div className="w-full grid grid-cols-2 gap-4">
                {data.map((academy, i) => (
                  <AcademyCard
                    key={i}
                    academy={academy}
                    onSelected={() => {
                      setCurrentAcademy(academy);
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
                  There are no academies available yet
                </h2>
              </div>
            )}
          </div>
        </div>
        <Map />
      </div>
      {currentAcademy !== null && (
        <ViewAcademy
          academy={currentAcademy}
          onClose={() => setCurrentAcademy(null)}
        />
      )}
    </>
  );
};

export default Academies;
