"use client";

import React, { useState, useEffect } from "react";

import Analysis from "@/public/dashboard/scout/match analysis.jpeg";
import Image, { StaticImageData } from "next/image";

import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

interface iArticle {
  heading: string;
  image: StaticImageData | string;
  news: string;
  date: Date;
}

const Feeds = () => {
  const [articles, setArticles] = useState<iArticle[]>(
    Array(5).fill({
      heading: "Sport News",
      image: Analysis,
      date: new Date(),
      news: "Valuegate Football Academy Unveils New 300- Seater Local Stadium, Located in Abuja, Nigeria",
    })
  );

  TimeAgo.setDefaultLocale("en-US");
  TimeAgo.addLocale(en);
  const time = new TimeAgo("en-US");

  return (
    <div className="w-full shadow-custom rounded-[1rem] py-4 px-5 gap-6 bg-white flex flex-col">
      <div className="w-full justify-between items-center flex">
        <h2 className=" font-bold text-16-19 text-dark">Scouting Plan</h2>
        <p className="text-primary-2 text-10-12">View All</p>
      </div>
      <div className="flex flex-col w-full px-[5%]">
        {articles.map((article, i) => (
          <div key={i} className="w-full flex items-center gap-6">
            <Image
              src={article.image}
              alt="article image"
              width={64}
              height={64}
              className="object-cover size-16 rounded-md"
            />
            <div className="flex flex-col gap-2">
              <h2 className="text-10-12 font-semibold text-dark">
                {article.heading}{" "}
                <span className="text-6-7 text-dark">
                  &bull; {time.format(article.date)}
                </span>
              </h2>
              <p className="text-10-12 text-dark">
                {article.news.substring(0, 100)}...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feeds;
