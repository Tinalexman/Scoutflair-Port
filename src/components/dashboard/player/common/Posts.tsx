"use client";

import Image, { StaticImageData } from "next/image";
import React, { FC, useEffect } from "react";

import Poster from "@/public/dashboard/player/poster.png";
import Game from "@/public/dashboard/player/game.jpeg";
import { convertDateFullAndTime } from "@/src/functions/dateFunctions";

import { FaHeart, FaRegHeart, FaRegComment } from "react-icons/fa";

import { PiShareFatFill, PiShareFatLight } from "react-icons/pi";
import {
  useGetCurrentPlayerSpotlights,
  useGetPlayerSpotlights,
} from "@/src/hooks/player";
import { Loader } from "@mantine/core";

const Posts: FC<{ currentPlayer?: boolean }> = ({ currentPlayer }) => {
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
  }, []);

  if (loadingAllSpotlights || loadingPlayerSpotlights) {
    return (
      <div className="w-full grid place-content-center h-80">
        <Loader color="primary.6" />
      </div>
    );
  }

  const posts = currentPlayer ? playerPosts : allPosts;

  return (
    <div className="w-full flex flex-col gap-6">
      {posts.map((post, i) => (
        <div
          className="w-full shadow-custom rounded-[1rem] py-4 px-5 gap-4 bg-white flex flex-col"
          key={i}
        >
          <div className="flex gap-4 h-9">
            {post.userProfilePicUrl ? (
              <Image
                src={post.userProfilePicUrl}
                alt="poster image"
                className="size-9 rounded"
                width={36}
                height={36}
              />
            ) : (
              <div className="rounded-full size-11 text-white text-16-19 font-bold bg-primary-2 grid place-content-center">
                {post.userFullName.substring(0, 1)}
              </div>
            )}

            <div className="flex flex-col">
              <h2 className="text-dark text-16-19 font-bold">
                {post.userFullName}
              </h2>
              <p className="text-8-9 text-placeholder ">
                {convertDateFullAndTime(post.dateCreated)}
              </p>
            </div>
          </div>
          <p className="text-12-18 text-dark">{post.text}</p>
          {post.mediaUrls.length > 0 && (
            <Image
              src={post.mediaUrls[0].mediaUrl}
              alt="post image"
              width={300}
              height={100}
              className="w-full rounded-xl object-cover h-48"
            />
          )}
          <div className="w-full text-12-14 text-placeholder justify-end items-center flex gap-3">
            <p>{post.commentCount} comments</p>
            <p>{post.shareCount} shares</p>
          </div>
          <hr className="w-full bg-border-gray" />
          <div className="w-full flex items-center justify-between text-12-14 font-medium text-dark">
            <div className="w-fit items-center gap-1 flex">
              <FaRegHeart className="text-16-19" />
              <p>Like</p>
            </div>
            <div className="w-fit items-center gap-1 flex">
              <FaRegComment className="text-16-19" />
              <p>Comments</p>
            </div>
            <div className="w-fit items-center gap-1 flex">
              <PiShareFatLight className="text-16-19" />
              <p>Shares</p>
            </div>
          </div>
          <hr className="w-full bg-border-gray" />
        </div>
      ))}
    </div>
  );
};

export default Posts;
