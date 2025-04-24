"use client";

import React from "react";
import UpcomingMatchBanner from "./UpcomingMatch";
import UpcomingMatches from "./UpcomingMatches";
import RecentMatches from "./RecentMatches";
import { useGetUpcomingMatches } from "@/hooks/match";

const Matches = () => {
  const { loading, data } = useGetUpcomingMatches();

  return (
    <div className="w-full flex flex-col gap-6 p-6">
      <UpcomingMatchBanner loading={loading} data={data} />
      <div className="grid grid-cols-2 w-full gap-6">
        <UpcomingMatches loading={loading} data={data} />
        <RecentMatches />
      </div>
    </div>
  );
};

export default Matches;

/*
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
*/
