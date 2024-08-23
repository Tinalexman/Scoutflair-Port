import React from "react";

interface iBadge {
  label: string;
  sub: string;
  value: number;
  color: string;
}

const Badges = () => {
  const badges: iBadge[] = [
    {
      label: "Experience",
      value: 0,
      sub: "Professional",
      color: "#FF0000",
    },
    {
      label: "Transfers",
      value: 0,
      sub: "Successful",
      color: "#008000",
    },
    {
      label: "Accuracy",
      value: 0,
      sub: "Scouting",
      color: "#04377C",
    },
  ];

  return (
    <div className="w-full h-[8.5rem] shadow-custom rounded-[1rem] py-4 px-5 bg-white flex flex-col justify-between">
      <h2 className="text-dark font-bold text-16-19">Scout&apos;s Badges</h2>
      <div className="h-[4rem] w-full grid grid-cols-3 gap-6">
        {badges.map((badge, index) => (
          <div
            key={index}
            className="w-full py-2 px-1.5 rounded-lg text-dark flex flex-col bg-white shadow-custom-1"
          >
            <h4 className="text-10-12 font-semibold">{badge.label}</h4>
            <h1 className="w-full text-end text-32-38 font-bold text-opacity-[0.88]">
              {badge.value.toString().padStart(2, "0")}
            </h1>
            <h4
              className="text-4-4 font-semibold"
              style={{ color: badge.color }}
            >
              {badge.sub}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Badges;
