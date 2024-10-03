"use client";

import { iPlayerFullDetails } from "@/src/hooks/scout";
import React, { useState, FC } from "react";

import { GoArrowUpRight, GoArrowDownRight } from "react-icons/go";

interface iMetric {
  name: string;
  value: number;
  increase: number;
  color: string;
}

const KeyMetrics: FC<{ data: iPlayerFullDetails | null }> = ({ data }) => {
  if (data === null) {
    return <></>;
  }

  const metrics: iMetric[] = [
    {
      name: "Goals",
      value: data.goals,
      increase: 0,
      color: "#008000",
    },
    {
      name: "Assists",
      value: data.assist,
      increase: 0,
      color: "#008000",
    },
    {
      name: "Yellow Cards",
      value: data.yellowCards,
      increase: 0,
      color: "#F2A725",
    },
    {
      name: "Red Cards",
      value: data.redCards,
      increase: 0,
      color: "#FF0000",
    },
    {
      name: "Foul Wons",
      value: data.fowlsWon,
      increase: 0,
      color: "#041931",
    },
    {
      name: "Aeriel Duels",
      value: data.aerialDuels,
      increase: 0,
      color: "#0A2A56",
    },
    {
      name: "Crosses",
      value: data.crosses,
      increase: 0,
      color: "#041931",
    },
    {
      name: "Dribbles",
      value: data.dribbles,
      increase: 0,
      color: "#008000",
    },
    {
      name: "Interceptions",
      value: data.interceptions,
      increase: 0,
      color: "#101B8C",
    },
    {
      name: "Minutes P.",
      value: data.minutes,
      increase: 0,
      color: "#12B9D7",
    },
  ];

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
