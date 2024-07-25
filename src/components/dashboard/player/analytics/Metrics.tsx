"use client";

import React, { useState } from "react";

interface iMetric {
  name: string;
  goals: number;
  assists: number;
  accuracy: number;
}

const Metrics = () => {
  const [metrics, setMetrics] = useState<iMetric[]>(
    Array(6).fill({
      name: "Player 6",
      goals: 5,
      assists: 4,
      accuracy: 79,
    })
  );

  return (
    <div className="flex flex-col">
      <div className="w-full h-[100px] bg-[url('../../public/dashboard/player/frame-1000001965.png')] bg-cover bg-no-repeat bg-center">
        <div className="w-full h-full overflow-hidden text-white text-xl font-bold bg-[#041931]/90 flex justify-center items-center">
          PLAYER PEFORMANCE METRICS
        </div>
      </div>
      <div className="w-full flex flex-col py-2 px-4 shadow-custom-2 gap-4 overflow-hidden rounded-b-2xl bg-white border-2 border-border-gray">
        {metrics.map((mt, i) => (
          <div
            key={i}
            className={`flex justify-between items-center pb-2 ${i !== metrics.length - 1 && "border-b-[1px] border-black-56"}`}
          >
            <p className="text-[16px] text-black">{mt.name}</p>
            <div className="flex gap-6 w-fit font-medium">
              <div className="flex flex-col items-center">
                <p className="text-[12px] text-black">Goals</p>
                <p className="text-[12px] text-black">{mt.goals}</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-[12px] text-black">Assists</p>
                <p className="text-[12px] text-black">{mt.assists}</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-[12px] text-black">Pass Accuracy</p>
                <p className="text-[12px] text-black">{mt.accuracy}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Metrics;
