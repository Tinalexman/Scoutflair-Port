import Image from "next/image";
import React, { FC } from "react";
import { iPostComment } from "@/src/hooks/player";

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

export default CommentContainer;
