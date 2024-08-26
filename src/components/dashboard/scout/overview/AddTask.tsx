import React, { FC } from "react";

import { Modal } from "@mantine/core";

const AddTask: FC<{ close: () => void }> = ({ close }) => {
  return (
    <Modal.Root
      opened={true}
      onClose={close}
      centered
      padding={0}
      top={0}
      size={"50vw"}
      radius={16}
    >
      <Modal.Overlay />
      <Modal.Content>
        <Modal.Body>
          <div className="w-full bg-white px-8 py-6"></div>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default AddTask;
