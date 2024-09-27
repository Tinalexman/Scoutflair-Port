import React, { FC, useEffect, useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Modal, Loader } from "@mantine/core";
import { useGetPlayerNamesList } from "@/src/hooks/player";
import { useCreateScoutTask } from "@/src/hooks/scout";
import Swal from "sweetalert2";

const AddTask: FC<{ close: () => void }> = ({ close }) => {
  const { loading: loadingPlayers, data } = useGetPlayerNamesList();
  const [playerId, setPlayerId] = useState<number>(-1);
  const {
    loading: loadingCreation,
    success: createdTask,
    create,
    data: error,
  } = useCreateScoutTask();

  useEffect(() => {
    if (!loadingCreation && createdTask) {
      Swal.fire({
        title: "Success!",
        text: "Task created successfully!",
        icon: "success",
      });
      setTimeout(() => {
        close();
      }, 1000);
    }

    if (!loadingCreation && !createdTask) {
      const message = error?.response?.data?.message ?? "An error occurred.";
      Swal.fire({
        title: "Oops...",
        text: message,
        icon: "error",
      });
    }
  }, [loadingCreation, createdTask]);

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
            {loadingPlayers && (
              <div className="w-full h-40 grid place-content-center">
                <Loader color="primary.8" />
              </div>
            )}
            {!loadingPlayers && (
              <div className="w-full flex flex-col gap-4">
                <div className="w-full flex items-center justify-between">
                  <h2 className="text-dark font-bold text-16-19">
                    Add New Task
                  </h2>
                  <IoMdCloseCircleOutline
                    onClick={close}
                    className="cursor-pointer text-dark"
                    size={24}
                  />
                </div>

                <select
                  value={playerId}
                  onChange={(e) => {
                    setPlayerId(Number.parseInt(e.target.value));
                  }}
                  className="w-full rounded-lg border bg-white placeholder:text-placeholder text-dark text-14-16 font-semibold placeholder:text-opacity-[0.88] border-border-gray h-10 px-2"
                >
                  <option
                    value={-1}
                    className="cursor-pointer text-16-19 text-dark font-semibold"
                  >
                    Select a player
                  </option>
                  {data.map((player, i) => (
                    <option
                      key={i}
                      value={player.playerUserId}
                      className="cursor-pointer text-16-19 text-dark font-semibold"
                    >
                      {player.fullName}
                    </option>
                  ))}
                </select>

                <button
                  onClick={() => {
                    if (playerId !== -1) {
                      create(playerId);
                    }
                  }}
                  className="w-full bg-primary-2 grid place-content-center rounded-lg text-white text-14-24 h-12"
                >
                  {loadingCreation ? <Loader color="white.6" /> : "Add"}
                </button>
              </div>
            )}
          </div>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default AddTask;
