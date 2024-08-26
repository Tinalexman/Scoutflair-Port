import React from "react";
import UpcomingMatchBanner from "./UpcomingMatch";
import Articles from "./Articles";
import Reviews from "./Reviews";
import UpcomingMatches from "./UpcomingMatches";
import RecentMatches from "./RecentMatches";

const Matches = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-6 p-6">
      <div className="flex flex-col w-full gap-6">
        <UpcomingMatchBanner />
        <RecentMatches />
        <UpcomingMatches />
      </div>
      <div className="flex flex-col w-full gap-6">
        <Articles />
        <Reviews />
      </div>
    </div>
  );
};

export default Matches;
