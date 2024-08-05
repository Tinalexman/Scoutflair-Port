import MatchResults from "@/src/components/reusable/MatchResults";
import UpcomingMatchBanner from "@/src/components/reusable/UpcomingMatchBanner";
import React from "react";
import UpcomingMatches from "./UpcomingMatches";
import Analysis from "./Analysis";

const Matches = () => {
  return (
    <div className="flex flex-col w-full p-5 gap-5">
      <div className="flex gap-5 w-full">
        <div className="flex flex-col gap-5 w-2/3">
          <UpcomingMatchBanner />
          <MatchResults />
        </div>
        <div className="w-1/3">
          <UpcomingMatches />
        </div>
      </div>
      <Analysis />
    </div>
  );
};

export default Matches;
