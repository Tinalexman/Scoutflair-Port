import Image, { StaticImageData } from "next/image";
import React from "react";
import { MdOutlineUpdate } from "react-icons/md";

import Pic from "@/public/dashboard/scout/ellipse-2374.png";
import { convertTime } from "functions/dateFunctions";

interface iUpdate {
  image: string | StaticImageData;
  content: string;
  date: Date;
}

const Updates = () => {
  const updates: iUpdate[] = Array(5).fill({
    image: Pic,
    content:
      "Scoutflair will roll out new features next month, will be available for premium users only",
    date: new Date(),
  });
  return (
    <div className="w-full shadow-custom rounded-[1rem] py-4 bg-white flex flex-col gap-4">
      <div className="w-full justify-between items-center flex px-5">
        <div className="flex gap-1 w-fit items-center text-dark">
          <MdOutlineUpdate size={22} />
          <h2 className=" font-bold text-16-19">Updates</h2>
        </div>
        <h4 className="text-dark text-10-12">View All</h4>
      </div>
      <div className="flex flex-col">
        {updates.map((update, i) => (
          <div
            key={i}
            className="w-full flex px-2 justify-between items-center border border-x-0 border-b-0 border-border-gray"
          >
            <div className="w-[90%] h-12 pl-2 flex gap-1 items-center">
              <Image
                src={update.image}
                alt="player-image"
                width={36}
                height={36}
                className="size-9 object-cover rounded-full"
              />
              <p className="text-14-16 text-dark ">{update.content}</p>
            </div>
            <p className="text-placeholder text-10-12">
              {convertTime(update.date)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Updates;
