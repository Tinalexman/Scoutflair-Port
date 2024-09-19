"use client";

import Image from "next/image";
import React, { FC, useEffect } from "react";

import {
  useGetCurrentPlayerSpotlights,
  useGetPlayerSpotlights,
} from "@/src/hooks/player";
import { Loader } from "@mantine/core";
import { useGlobalData } from "@/src/stores/globalStore";
import Void from "@/public/images/Void.png";
import { useCurrentUserStore } from "@/src/stores/userStore";

import PostContainer from "./PostContainer";

const Posts: FC<{ currentPlayer: boolean }> = ({ currentPlayer }) => {
  const refreshPosts = useGlobalData((state) => state.shouldRefreshPosts);
  const userImage = useCurrentUserStore((state) => state.image);
  const username = useCurrentUserStore((state) => state.name);

  const {
    loading: loadingAllSpotlights,
    data: allPosts,
    get: getAllPosts,
  } = useGetPlayerSpotlights();
  const {
    loading: loadingPlayerSpotlights,
    data: playerPosts,
    get: getPlayerPosts,
  } = useGetCurrentPlayerSpotlights();

  useEffect(() => {
    if (currentPlayer) {
      getPlayerPosts();
    } else {
      getAllPosts();
    }
  }, [refreshPosts]);

  if (loadingAllSpotlights || loadingPlayerSpotlights) {
    return (
      <div className="w-full grid place-content-center h-80">
        <Loader color="primary.6" />
      </div>
    );
  }

  const posts = currentPlayer ? playerPosts : allPosts;

  if (!loadingAllSpotlights && !loadingPlayerSpotlights && posts.length === 0) {
    return (
      <div className="w-full h-[30rem] flex flex-col shadow-custom justify-center items-center gap-5 sticky top-6 bg-white rounded-xl">
        <Image
          src={Void}
          alt="no posts"
          width={100}
          height={100}
          className="w-40 h-auto object-cover"
        />

        <h2 className="text-dark text-16-19 font-medium">
          There are no posts yet
        </h2>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-6">
      {posts.map((post, i) => (
        <PostContainer
          key={i}
          post={post}
          username={username}
          userImage={userImage}
          currentPlayer={currentPlayer}
        />
      ))}
    </div>
  );
};

export default Posts;
