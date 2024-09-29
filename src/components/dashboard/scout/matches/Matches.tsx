"use client";

import React from "react";
import UpcomingMatchBanner from "./UpcomingMatch";
import Articles from "./Articles";
import Reviews from "./Reviews";
import UpcomingMatches from "./UpcomingMatches";
import RecentMatches from "./RecentMatches";
import { useGetUpcomingMatches } from "@/src/hooks/match";

const Matches = () => {
  const { loading, data } = useGetUpcomingMatches();

  return (
    <div className="w-full grid grid-cols-2 gap-6 p-6">
      <div className="flex flex-col w-full gap-6">
        <UpcomingMatchBanner loading={loading} data={data} />
        <RecentMatches />
        <div className="sticky top-6">
          <UpcomingMatches loading={loading} data={data} />
        </div>
      </div>
      <div className="flex flex-col w-full gap-6">
        <Articles />
        <div className="sticky top-6">
          <Reviews />
        </div>
      </div>
    </div>
  );
};

export default Matches;
