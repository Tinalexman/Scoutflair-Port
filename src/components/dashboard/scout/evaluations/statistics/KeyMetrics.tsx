"use client";

import React, { useState } from "react";

import { GoArrowUpRight, GoArrowDownRight } from "react-icons/go";

interface iMetric {
  name: string;
  value: number;
  increase: number;
  color: string;
}

const KeyMetrics = () => {
  const [metrics, setMetrics] = useState<iMetric[]>([
    {
      name: "Goals",
      value: 5,
      increase: 2,
      color: "#008000",
    },
    {
      name: "Assists",
      value: 9,
      increase: 3,
      color: "#008000",
    },
    {
      name: "Yellow Cards",
      value: 4,
      increase: 0,
      color: "#F2A725",
    },
    {
      name: "Red Cards",
      value: 6,
      increase: 0,
      color: "#FF0000",
    },
    {
      name: "Foul Wons",
      value: 2,
      increase: -5,
      color: "#041931",
    },
    {
      name: "Aeriel Duels",
      value: 10,
      increase: 5,
      color: "#0A2A56",
    },
    {
      name: "Crosses",
      value: 8,
      increase: 1,
      color: "#041931",
    },
    {
      name: "Dribbles",
      value: 8,
      increase: 2,
      color: "#008000",
    },
    {
      name: "Interceptions",
      value: 0,
      increase: 0,
      color: "#101B8C",
    },
    {
      name: "Minutes P.",
      value: 50,
      increase: 20,
      color: "#12B9D7",
    },
  ]);

  return (
    <div className="w-full shadow-custom rounded-[1rem] py-4 px-5 gap-5 bg-white flex flex-col justify-between">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-dark font-bold text-16-19">Key Metrics</h2>
        <p className="text-14-16 font-medium text-dark">Edit</p>
      </div>
      <div className="w-full grid grid-cols-5 gap-6">
        {metrics.map((metric, index) => (
          <div
            className={`w-full h-[5rem] rounded-xl bg-white shadow-custom py-3 gap-4 px-2 flex flex-col`}
            key={index}
          >
            <p className="text-14-16 font-bold" style={{ color: metric.color }}>
              {metric.name}
            </p>
            <div className="flex items-center justify-between w-full">
              <p className="text-28-33 text-dark text-opacity-[0.88]">
                {metric.value.toString().padStart(2, "0")}
              </p>
              <div className="w-fit items-center gap-0.5 flex">
                <p className="text-12-14 text-black">
                  {Math.abs(metric.increase)}%
                </p>
                {metric.increase > 0 ? (
                  <GoArrowUpRight className="text-10-12 text-green-700" />
                ) : metric.increase < 0 ? (
                  <GoArrowDownRight className="text-10-12 text-red-700" />
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyMetrics;
