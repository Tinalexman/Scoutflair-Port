"use client";

import React from "react";

import { convertTime } from "@/src/functions/dateFunctions";
import { useGetScoutActivityFeed } from "@/src/hooks/scout";
import ProfileImageOrTextAvatar from "@/src/components/reusable/ProfileImageOrTextAvatar";
import { Loader } from "@mantine/core";

const Feed = () => {
  const { loading, data: activities } = useGetScoutActivityFeed();

  return (
    <div className="w-full h-[60vh] overflow-y-scroll scrollbar-custom shadow-custom rounded-[1rem] py-4 px-5 gap-5 bg-white flex flex-col ">
      <div className="w-full justify-between items-center flex">
        <h2 className="text-dark font-bold text-16-19">Activity Feed</h2>
        <h4 className="text-dark text-10-12">View All</h4>
      </div>
      {!loading && (
        <div className="w-full flex flex-col gap-4">
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
    </div>
  );
};

export default Feed;
