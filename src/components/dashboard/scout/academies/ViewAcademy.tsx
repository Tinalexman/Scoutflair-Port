import { iAcademyResponse } from "@/src/hooks/academy";
import React, { FC } from "react";
import Image from "next/image";
import { IoMdArrowBack } from "react-icons/io";
import { MdEdit } from "react-icons/md";

const ViewAcademy: FC<{ academy: iAcademyResponse; onClose: () => void }> = ({
  academy,
  onClose,
}) => {
  const academyData: {
    value: string | number;
    key: string;
  }[] = [
    {
      key: "Academy Name",
      value: academy.name,
    },
    {
      key: "Coach Name",
      value: academy.principalOrCoach,
    },
    {
      key: "Address",
      value: academy.address,
    },
    {
      key: "Description",
      value: academy.description,
    },

    {
      key: "State",
      value: academy.state,
    },
    {
      key: "L.G.A",
      value: academy.lga,
    },
    {
      key: "Geo Location",
      value: `${academy.latitude}, ${academy.longitude}`,
    },
    {
      key: "Number of Players",
      value: academy.playersCount,
    },
    {
      key: "Total Matches",
      value: academy.totalMatches,
    },
    {
      key: "Win Count",
      value: academy.winCount,
    },
    {
      key: "Lost Count",
      value: academy.lostCount,
    },
    {
      key: "Graduated Count",
      value: academy.graduatedCount,
    },
    {
      key: "Completed Count",
      value: academy.completedCount,
    },
  ];

  return (
    <div className="w-full p-6 flex flex-col gap-5 bg-white">
      <div className="w-full flex items-center justify-between">
        <div className="w-fit flex gap-2 items-center">
          <IoMdArrowBack
            className="cursor-pointer text-dark"
            onClick={onClose}
            size={26}
          />
          <h2 className="text-[#0C1017BF] font-bold text-16-19">
            Academy Details
          </h2>
        </div>
        <MdEdit
          className="cursor-pointer text-dark"
          onClick={() => {
            const payload = Buffer.from(JSON.stringify(academy)).toString(
              "base64"
            );

            window.location.assign(
              `/dashboard/scout/academies/edit?data=${payload}`
            );
          }}
          size={22}
        />
      </div>

      <Image
        src={academy.imageUrl ?? ""}
        alt="pitch image"
        width={500}
        height={500}
        className="rounded-xl w-full h-auto"
      />

      <div className="w-full flex flex-col gap-4">
        {academyData.map((data, i) => (
          <div
            key={i}
            className={`w-full text-12-14 flex items-center justify-between py-2 rounded px-4 ${
              i % 2 === 0
                ? "bg-primary-2 text-white"
                : "border border-primary-2 text-dark"
            }`}
          >
            <p>{data.key}:</p>
            <p>{data.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAcademy;
