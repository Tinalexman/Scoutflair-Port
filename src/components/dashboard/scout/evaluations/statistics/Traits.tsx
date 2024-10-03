"use client";

import { iPlayerFullDetails } from "@/src/hooks/scout";
import React, { FC, useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa6";

interface iTrait {
  name: string;
  value: number;
}

const Traits: FC<{ data: iPlayerFullDetails | null }> = ({ data }) => {
  if (data === null) {
    return <></>;
  }

  const traits: iTrait[] = [
    {
      name: "Speed",
      value: data.speed,
    },
    {
      name: "Stamina",
      value: data.stamina,
    },
    {
      name: "Leadership",
      value: data.leader,
    },
    {
      name: "Work Rate",
      value: data.workRate,
    },
    {
      name: "Composure",
      value: data.composure,
    },
    {
      name: "Agility",
      value: data.agility,
    },
    {
      name: "Tactical Awareness",
      value: data.tacticalAwareness,
    },
  ];

  return (
    <div className="w-full shadow-custom rounded-[1rem] py-4 px-5 gap-5 bg-white flex flex-col justify-between">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-dark font-bold text-16-19">Player Traits</h2>
        <p className="text-12-14 font-medium text-dark">Edit</p>
      </div>
      <div className="flex flex-col w-full gap-3">
        {traits.map((trait, i) => (
          <div key={i} className="w-full flex items-center justify-between">
            <p className="text-12-14  text-dark">{trait.name}</p>
            <div className="w-fit flex gap-0.5 items-center">
              {Array(5)
                .fill(0)
                .map((index, id) =>
                  trait.value >= id + 1 ? (
                    <FaStar key={id} className="text-14-16 text-secondary-3" />
                  ) : (
                    <FaRegStar
                      key={id}
                      className="text-14-16 text-placeholder"
                    />
                  )
                )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Traits;
