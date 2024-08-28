"use client";

import React, { useState } from "react";

interface iMetric {
  name: string;
  value: number;
}

const SkillMetrics = () => {
  const [metrics, setMetrics] = useState<iMetric[]>([
    {
      name: "LONG SHOTS",
      value: 80,
    },
    {
      name: "DIRECT FREE KICKS",
      value: 70,
    },
    {
      name: "AERIAL DUELS",
      value: 94,
    },
    {
      name: "DRIBBLING",
      value: 70,
    },
    {
      name: "ONE-ON-ONE",
      value: 80,
    },
    {
      name: "HEADER",
      value: 60,
    },
    {
      name: "FITNESS",
      value: 96,
    },
    {
      name: "ACCURACY",
      value: 74,
    },
    {
      name: "SHOT POWER",
      value: 78,
    },
  ]);

  return (
    <div className="w-full shadow-custom rounded-[1rem] py-4 px-5 gap-5 bg-white flex flex-col justify-between">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-dark font-bold text-16-19">Skill Metrics</h2>
        <p className="text-12-14 font-medium text-dark">Edit</p>
      </div>
      <div className="flex flex-col w-full gap-3">
        {metrics.map((metric, i) => (
          <div
            key={i}
            className="border border-primary-2 text-dark px-1 flex items-center justify-between rounded py-1.5"
            style={{
              width: `${metric.value}%`,
            }}
          >
            <p className="text-12-14 font-semibold">{metric.name}</p>
            <p className="text-10-12 font-medium">{metric.value}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillMetrics;
