import { iAcademyResponse } from "@/src/hooks/academy";
import { iLocalPitchResponse } from "@/src/hooks/pitch";
import { Modal } from "@mantine/core";
import React, { FC } from "react";

import { IoMdClose } from "react-icons/io";

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
      key: "Surface Area",
      value: pitch.surface,
    },
  ];

  return (
    <Modal.Root
      opened={true}
      onClose={onClose}
      centered
      padding={0}
      top={0}
      size={"40vw"}
    >
      <Modal.Overlay />
      <Modal.Content>
        <Modal.Body>
          <div className="w-full p-6 flex flex-col gap-5 bg-white">
            <div className="w-full flex items-center justify-between">
              <h2 className="text-[#0C1017BF] font-bold text-16-19">
                Local Pitch Details
              </h2>
              <IoMdClose
                className="cursor-pointer text-dark"
                onClick={onClose}
                size={26}
              />
            </div>
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
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default ViewPitch;
