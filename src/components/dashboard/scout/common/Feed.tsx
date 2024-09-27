"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";

import Pic from "@/public/dashboard/scout/ellipse-2386.png";
import { convertTime } from "@/src/functions/dateFunctions";
import { useGetScoutActivityFeed } from "@/src/hooks/scout";

interface iActivity {
  image: StaticImageData | string;
  title: string;
  description: string;
  date: Date;
}

const Feed = () => {
  const activities: iActivity[] = Array(11).fill({
    date: new Date(),
    image: Pic,
    title: "John Boyega",
    description: "Submitted a report on Henry Isah",
  });

  const { loading, success, data } = useGetScoutActivityFeed();

  return (
    <div className="w-full shadow-custom rounded-[1rem] py-4 px-5 gap-5 bg-white flex flex-col ">
      <div className="w-full justify-between items-center flex">
        <h2 className="text-dark font-bold text-16-19">Activity Feed</h2>
        <h4 className="text-dark text-10-12">View All</h4>
      </div>
      <div className="w-full flex flex-col gap-4">
        {activities.map((activity, index) => (
          <div key={index} className="w-full flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <Image
                  src={activity.image}
                  alt="activity"
                  width={32}
                  height={32}
                  className="rounded-full size-8 object-cover"
                />
                <h2 className="text-14-16 font-semibold text-dark">
                  {activity.title}
                </h2>
              </div>
              <p className="text-placeholder text-12-14">
                {activity.description}
              </p>
            </div>
            <p className="text-placeholder text-10-12">
              {convertTime(activity.date)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
