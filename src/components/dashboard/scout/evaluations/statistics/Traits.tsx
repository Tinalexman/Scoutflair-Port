"use client";

import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa6";

interface iTrait {
  name: string;
  value: number;
}

const Traits = () => {
  const [traits, setTraits] = useState<iTrait[]>([
    {
      name: "Speed",
      value: 3,
    },
    {
      name: "Stamina",
      value: 4,
    },
    {
      name: "Leadership",
      value: 5,
    },
    {
      name: "Work Rate",
      value: 5,
    },
    {
      name: "Composure",
      value: 4,
    },
    {
      name: "Agility",
      value: 3,
    },
    {
      name: "Tactical Awareness",
      value: 4,
    },
  ]);

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
                    <FaStar className="text-14-16 text-secondary-3" />
                  ) : (
                    <FaRegStar className="text-14-16 text-placeholder" />
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
