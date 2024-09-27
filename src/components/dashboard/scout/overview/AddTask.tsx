import React, { FC } from "react";

import { Modal, Loader } from "@mantine/core";
import { useGetScoutsPlayers } from "@/src/hooks/scout";

const AddTask: FC<{ close: () => void }> = ({ close }) => {
  const { loading, data, success } = useGetScoutsPlayers();
  return (
    <Modal.Root
      opened={true}
      onClose={close}
      centered
      padding={0}
      top={0}
      radius={16}
    >
      <Modal.Overlay />
      <Modal.Content>
        <Modal.Body>
          <div className="w-full bg-white px-8 py-6">
            {
              loading && <div className="w-full h-40 grid place-content-center">
                <Loader color="primary.8"/>
                 </div>
            }

          </div>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default AddTask;
