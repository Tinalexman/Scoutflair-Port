import { iAcademyResponse } from "@/src/hooks/academy";
import { Modal } from "@mantine/core";
import React, { FC } from "react";

import { IoMdClose } from "react-icons/io";

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
      key: "State",
      value: academy.state,
    },
    {
      key: "L.G.A",
      value: academy.lga,
    },
    {
      key: "Country",
      value: academy.country,
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
      key: "Facilities",
      value: "Good",
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
                Academy Details
              </h2>
              <IoMdClose
                className="cursor-pointer text-dark"
                onClick={onClose}
                size={26}
              />
            </div>
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
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default ViewAcademy;
