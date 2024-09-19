"use client";

import React from "react";
import Ads from "../common/Ads";
import Feeds from "../common/Feeds";
import Posts from "../common/Posts";

import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import CreateNewPost from "./CreateNewPost";

const Spotlight = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <div className="w-full p-6 gap-6 grid grid-cols-[2fr_1fr]">
        <div className="w-full flex flex-col gap-6">
          <div
            onClick={open}
            className="h-10 rounded-lg w-full border bg-white cursor-text px-4 text-14-16 border-border-gray text-placeholder font-lato flex items-center"
          >
            Post something...
          </div>
          <Posts />
        </div>

        <div className="w-full flex flex-col gap-6">
          <Feeds />
          <Ads />
        </div>
      </div>
      {opened && (
        <Modal.Root padding={0} opened={opened} onClose={close} centered>
          <Modal.Overlay />
          <Modal.Content>
            <Modal.Body>
              <CreateNewPost close={close} />
            </Modal.Body>
          </Modal.Content>
        </Modal.Root>
      )}
    </>
  );
};

export default Spotlight;
