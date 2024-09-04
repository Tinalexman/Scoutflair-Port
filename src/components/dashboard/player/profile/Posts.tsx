"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

import Poster from "@/public/dashboard/player/poster.png";
import Game from "@/public/dashboard/player/game.jpeg";
import { convertDateFullAndTime } from "@/src/functions/dateFunctions";

import { FaHeart, FaRegHeart, FaRegComment } from "react-icons/fa";

import { PiShareFatFill, PiShareFatLight } from "react-icons/pi";

interface iPost {
  posterImage: string | StaticImageData;
  posterName: string;
  timestamp: Date;

  images: (string | StaticImageData)[];

  content: string;
  comments: number;
  shares: number;
}

const Posts = () => {
  const [posts, setPosts] = useState<iPost[]>(
    Array(5).fill({
      posterImage: Poster,
      posterName: "Peters Samuel",
      timestamp: new Date(),
      images: [Game],
      content:
        "Lorem ipsum dolor sit amet consectetur. Nunc malesuada ultricies amet metus viverra posuere a elit id. Ut vitae in diam risus urna. Mattis tempor convallis in eget suspendisse est eu. Odio fermentum at laoreet feugiat. Odio fermentum at .",
      comments: 2,
      shares: 5,
    })
  );

  return (
    <div className="w-full flex flex-col gap-6">
      {posts.map((post, i) => (
        <div
          className="w-full shadow-custom rounded-[1rem] py-4 px-5 gap-4 bg-white flex flex-col"
          key={i}
        >
          <div className="flex gap-4 h-9">
            <Image
              src={post.posterImage}
              alt="poster image"
              className="size-9 rounded"
              width={36}
              height={36}
            />
            <div className="flex flex-col">
              <h2 className="text-dark text-16-19 font-bold">
                {post.posterName}
              </h2>
              <p className="text-8-9 text-placeholder ">
                {convertDateFullAndTime(post.timestamp)}
              </p>
            </div>
          </div>
          <p className="text-12-18 text-dark">{post.content}</p>
          {post.images.length > 0 && (
            <Image
              src={post.images[0]}
              alt="post image"
              width={300}
              height={100}
              className="w-full rounded-xl object-cover h-48"
            />
          )}
          <div className="w-full text-12-14 text-placeholder justify-end items-center flex gap-3">
            <p>{post.comments} comments</p>
            <p>{post.shares} shares</p>
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
