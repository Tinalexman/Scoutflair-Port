"use client";

import React from "react";

import { convertTime } from "@/functions/dateFunctions";
import { useGetScoutActivityFeed } from "@/hooks/scout";
import ProfileImageOrTextAvatar from "@/components/reusable/ProfileImageOrTextAvatar";
import { Loader } from "@mantine/core";
import Image from "next/image";
import Void from "@/public/images/Void.png";

const Feed = () => {
  const { loading, data: activities } = useGetScoutActivityFeed();

  return (
    <div
      className={`w-full ${
        activities.length === 0
          ? "h-full"
          : "max-h-[70vh] h-auto overflow-y-auto scrollbar-thin scrollbar-webkit"
      } duration-300 ease-out transition-all rounded-[1rem] py-4 px-5 gap-5 shadow-custom bg-white flex flex-col`}
    >
      <div className="w-full justify-between items-center flex">
        <h2 className="text-dark font-bold text-16-19">Activity Feed</h2>
      </div>
      {!loading && (
        <div className="w-full flex flex-col gap-4 overflow-y-scroll scrollbar-custom">
          {activities.map((activity, index) => (
            <div key={index} className="flex flex-col gap-2 w-full">
              <div className="flex gap-2 items-center w-full">
                <ProfileImageOrTextAvatar
                  image={activity.userImageUrl}
                  name={activity.userFullName}
                  size="size-8"
                  radius="rounded-full"
                />

                <div className="w-full justify-between items-center flex">
                  <h2 className="text-14-16 font-semibold text-dark">
                    {activity.userFullName}
                  </h2>
                  <p className="text-placeholder text-10-12">
                    {convertTime(new Date(activity.createdDate))}
                  </p>
                </div>
              </div>
              <p className="text-placeholder text-12-14">{activity.message}</p>
            </div>
          ))}
        </div>
      )}
      {loading && (
        <div className="w-full h-full grid place-content-center">
          <Loader color="primary.6" />
        </div>
      )}

      {!loading && activities.length === 0 && (
        <div className="w-full h-full flex flex-col justify-center items-center gap-5">
          <Image
            src={Void}
            alt="no activity"
            width={100}
            height={100}
            className="w-32 h-auto object-cover"
          />

          <h2 className="text-dark text-10-12 font-medium text-center">
            There are no activities available at the moment
          </h2>
        </div>
      )}
    </div>
  );
};

export default Feed;
