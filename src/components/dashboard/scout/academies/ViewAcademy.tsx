import { iAcademyResponse } from "@/src/hooks/academy";
import { Modal } from "@mantine/core";
import React, { FC } from "react";

const ViewAcademy: FC<{ academy: iAcademyResponse; onClose: () => void }> = ({
  academy,
  onClose,
}) => {
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
          <div className="w-full p-6 flex flex-col gap-5 bg-white"></div>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default ViewAcademy;
