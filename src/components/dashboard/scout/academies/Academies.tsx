"use client";

import React, { useState } from "react";
import Map from "@/src/components/reusable/MapImage";
import Void from "@/public/images/Void.png";
import Image from "next/image";
import Link from "next/link";
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
    <div
      className={`w-full h-[100vh] grid ${
        currentAcademy === null ? "grid-cols-1" : "grid-cols-2"
      } gap-6 p-6 transition-all duration-300 ease-out`}
    >
      <div className="flex flex-col h-full w-full shadow-custom rounded-[1rem] py-4 bg-white ">
        {currentAcademy === null && (
          <>
            <div className="flex flex-col w-full h-full px-5 gap-6">
              <div className="w-full items-center flex justify-between">
                <h2 className="text-16-19 text-dark font-bold">
                  Available Academies
                </h2>
                <Link
                  href={"/dashboard/scout/academies/add"}
                  className="border-primary-2 border rounded px-2 py-1 text-primary-2 text-12-14"
                >
                  Add New
                </Link>
              </div>
              {!loading && data.length > 0 && (
                <div
                  className={`w-full grid ${
                    currentAcademy === null ? "grid-cols-4" : "grid-cols-2"
                  } gap-4 transition-all duration-300 ease-out`}
                >
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
          </>
        )}
        {currentAcademy !== null && (
          <ViewAcademy
            academy={currentAcademy}
            onClose={() => setCurrentAcademy(null)}
          />
        )}
      </div>
      {currentAcademy !== null && (
        <Map
          latitude={Number.parseFloat(currentAcademy.latitude)}
          longitude={Number.parseFloat(currentAcademy.longitude)}
        />
      )}
    </div>
  );
};

export default Academies;
