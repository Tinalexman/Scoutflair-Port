import { iLocalPitchResponse } from "@/hooks/pitch";
import React, { FC } from "react";
import { MdEdit } from "react-icons/md";
import { IoMdArrowBack } from "react-icons/io";
import Image from "next/image";

const ViewPitch: FC<{ pitch: iLocalPitchResponse; onClose: () => void }> = ({
  pitch,
  onClose,
}) => {
  const pitchData: {
    value: string | number;
    key: string;
  }[] = [
    {
      key: "Pitch Name",
      value: pitch.name,
    },
    {
      key: "Address",
      value: pitch.address,
    },
    {
      key: "State",
      value: pitch.state,
    },
    {
      key: "L.G.A",
      value: pitch.lga,
    },
    {
      key: "Geo Location",
      value: `${pitch.latitude}, ${pitch.longitude}`,
    },
    {
      key: "Length",
      value: pitch.length,
    },
    {
      key: "Width",
      value: pitch.width,
    },
    {
      key: "Surface",
      value: pitch.surface,
    },
    {
      key: "Facilities",
      value: pitch.facilities,
    },
    {
      key: "Year of Establishment",
      value: pitch.estYear,
    },
    {
      key: "Rating",
      value: pitch.rating,
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
            Local Pitch Details
          </h2>
        </div>
        <MdEdit
          className="cursor-pointer text-dark"
          onClick={() => {
            const payload = Buffer.from(JSON.stringify(pitch)).toString(
              "base64"
            );

            window.location.assign(
              `/dashboard/scout/pitches/edit?data=${payload}`
            );
          }}
          size={22}
        />
      </div>

      <Image
        src={pitch.imageUrl ?? ""}
        alt="pitch image"
        width={500}
        height={500}
        className="rounded-xl w-full h-auto"
      />

      <div className="w-full flex flex-col gap-4">
        {pitchData.map((pit, i) => (
          <div
            key={i}
            className={`w-full text-12-14 flex items-center justify-between py-2 rounded px-4 ${
              i % 2 === 0
                ? "bg-primary-2 text-white"
                : "border border-primary-2 text-dark"
            }`}
          >
            <p>{pit.key}:</p>
            <p>{pit.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewPitch;
