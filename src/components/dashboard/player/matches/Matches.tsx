import UpcomingMatchBanner from "@/src/components/reusable/UpcomingMatchBanner";
import React from "react";

const Matches = () => {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col gap-5 w-2/3">
        <UpcomingMatchBanner />
        {/* <StandingsTable />
        <ScoutCardSection /> */}
      </div>
      <div className="flex flex-col gap-5 w-1/3">
        {/* <LatestNewsCard />
        <TopScorerCard /> */}
      </div>
    </div>
  );
};

export default Matches;
