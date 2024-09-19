"use client";

import Image from "next/image";
import React, { FC, useEffect, useState } from "react";

import { convertDateFullAndTime } from "@/src/functions/dateFunctions";

import { FaHeart, FaRegHeart, FaRegComment } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { PiShareFatFill, PiShareFatLight } from "react-icons/pi";
import {
  iPlayerSpotlightResponse,
  useAddPlayerSpotlightComment,
  useGetCurrentPlayerSpotlights,
  useGetPlayerSpotlights,
  useGetPlayerSpotlightComments,
  iPostComment,
} from "@/src/hooks/player";
import { Loader } from "@mantine/core";
import { useGlobalData } from "@/src/stores/globalStore";
import { IoMdClose } from "react-icons/io";
import Void from "@/public/images/Void.png";
import { useCurrentUserStore } from "@/src/stores/userStore";

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

const PostContainer: FC<{
  post: iPlayerSpotlightResponse;
  userImage: string;
  username: string;
  currentPlayer: boolean;
}> = ({ post, userImage, username, currentPlayer }) => {
  const [comment, setComment] = useState<string>("");
  const [showComments, setShowComments] = useState<boolean>(false);
  const [totalComments, setTotalComments] = useState<number>(post.commentCount);

  const {
    loading: loadingGetComments,
    success: getCommentSuccess,
    data: postComments,
    get: getComments,
  } = useGetPlayerSpotlightComments(post.id);
  const {
    loading: loadingAddComment,
    success: addCommentSuccess,
    add: addComment,
  } = useAddPlayerSpotlightComment();

  useEffect(() => {
    if (!loadingAddComment && addCommentSuccess) {
      setComment("");
      setShowComments(false);
      setTotalComments((prev) => prev + 1);
    }
  }, [loadingAddComment, addCommentSuccess]);

  useEffect(() => {
    if (!loadingGetComments && getCommentSuccess) {
      setShowComments(true);
    }
  }, [getCommentSuccess, loadingGetComments]);

  return (
    <div className="w-full shadow-custom rounded-[1rem] py-4 px-5 gap-4 bg-white flex flex-col">
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
          <div className="rounded size-9 text-white text-16-19 font-bold bg-primary-2 grid place-content-center">
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
        <p
          onClick={() => {
            setShowComments(false);
            getComments();
          }}
          className="cursor-pointer hover:text-primary-2 hover:font-semibold transition-all duration-300 ease-out"
        >
          {totalComments} comments
        </p>
        <p>{post.shareCount} shares</p>
      </div>
      <hr className="w-full bg-border-gray" />
      <div className="w-full flex items-center justify-between text-12-14 font-medium text-dark">
        <div className="w-fit items-center gap-1 flex">
          <FaRegHeart className="text-16-19" />
          <p>Like</p>
        </div>
        <div
          className="w-fit items-center gap-1 flex cursor-pointer"
          onClick={() => {
            setShowComments(false);
            getComments();
          }}
        >
          <FaRegComment className="text-16-19" />
          <p>Comments</p>
        </div>
        <div className="w-fit items-center gap-1 flex">
          <PiShareFatLight className="text-16-19" />
          <p>Shares</p>
        </div>
      </div>
      <hr className="w-full bg-border-gray" />
      {loadingGetComments && (
        <div className="w-full h-20 grid place-content-center">
          <Loader color="primary.6" />
        </div>
      )}
      {showComments && postComments.length > 0 && (
        <div className="w-full h-32 gap-4 flex flex-col">
          <div className="w-full justify-between items-center flex">
            <h2 className="text-16-19 text-dark font-semibold">Comments</h2>
            <IoMdClose
              size={20}
              className="text-dark cursor-pointer"
              onClick={() => setShowComments(false)}
            />
          </div>
          <div className="max-h-24 overflow-y-scroll flex flex-col gap-3 scrollbar-thin scrollbar-webkit px-4">
            {postComments.map((pc, i) => {
              return <CommentContainer key={i} comment={pc} />;
            })}
          </div>
        </div>
      )}
      {!currentPlayer && (
        <div className="w-full flex items-center justify-between">
          {userImage ? (
            <Image
              src={userImage}
              alt="poster image"
              className="size-9 rounded"
              width={36}
              height={36}
            />
          ) : (
            <div className="rounded size-9 text-white text-16-19 font-bold bg-primary-2 grid place-content-center">
              {username.substring(0, 1)}
            </div>
          )}
          <input
            className="h-8 rounded w-[calc(100%-6rem)] px-2 bg-[#F5F6FA] text-14-16  placeholder:text-placeholder font-lato text-dark"
            placeholder="What's happening?"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <button
            disabled={loadingAddComment}
            onClick={() => {
              const res = comment.trim();
              if (res.length === 0) return;
              addComment({ mediaUrl: "", spotLightPostId: post.id, text: res });
            }}
            className="rounded size-9 bg-primary-2 text-white font-medium text-16-19 grid place-content-center"
          >
            {loadingAddComment ? (
              <Loader color="white.6" size={24} />
            ) : (
              <BsFillSendFill fill="#FFFFFF" size={16} />
            )}
          </button>
        </div>
      )}
    </div>
  );
};

const CommentContainer: FC<{ comment: iPostComment }> = ({ comment }) => {
  return (
    <div className="w-full flex gap-2">
      {comment.userImageUrl ? (
        <Image
          src={comment.userImageUrl}
          alt="poster image"
          className="size-6 rounded"
          width={24}
          height={24}
        />
      ) : (
        <div className="rounded size-6 text-white text-10-12 font-bold bg-primary-2 grid place-content-center">
          {comment.userFullName.substring(0, 1)}
        </div>
      )}
      <div className="flex flex-col gap-1">
        <h2 className="text-dark text-12-14 font-bold">
          {comment.userFullName}
        </h2>
        <p className="text-dark text-10-15">{comment.text}</p>
      </div>
    </div>
  );
};

export default Posts;
