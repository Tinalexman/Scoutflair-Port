"use client";

import React, { useState } from "react";

import Image, { StaticImageData } from "next/image";
import Player from "@/public/dashboard/scout/Rectangle 14.png";

interface iReview {
  image: StaticImageData | string;
  academy: string;
  name: string;
  target: string;
  fitness: number;
  dribble: number;
  pace: number;
  composure: number;
  overall: number;
}

const Reviews = () => {
  const [reviews, setReviews] = useState<iReview[]>(
    Array(4).fill({
      image: Player,
      name: "Paul Attah",
      academy: "Scoutflair Academy",
      target: "00 G/A Promising",
      fitness: 0,
      dribble: 0,
      pace: 0,
      composure: 0,
      overall: 0,
    })
  );

  return (
    <div className="w-full shadow-custom rounded-[1rem] py-4 px-5 bg-white flex flex-col gap-6">
      <h2 className="text-dark font-bold text-16-19 px-5">Player Reviews</h2>
      <div className={` w-full flex flex-col `}>
        {reviews.map((review, i) => (
          <div
            className={`w-full flex justify-between gap-4 px-5 py-4 border-border-gray ${
              i !== reviews.length - 1 && "border-b"
            } `}
            key={i}
          >
            <div className="flex gap-1 w-fit items-center">
              <Image
                src={review.image}
                alt="image"
                width={40}
                height={40}
                className="size-[3.75rem] object-cover rounded-lg"
              />
              <div className="flex flex-col gap-1">
                <p className="text-8-9 text-primary-2 font-medium">
                  {review.academy}
                </p>
                <div className="flex flex-col">
                  <h2 className="text-14-15 text-dark font-medium">
                    {review.name}
                  </h2>
                  <p className="text-placeholder text-10-12 font-medium">
                    {review.target}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-fit gap-2">
              <div className="flex flex-col"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
