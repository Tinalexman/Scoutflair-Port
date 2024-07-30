import React from "react";
import UpcomingMatchBanner from "../../../reusable/UpcomingMatchBanner";
import StandingsTable from "./StandingsTable";
import LatestNewsCard from "./LatestNewsCard";
import ScoutCardSection from "./ScoutCardSection";
import TopScorerCard from "./TopScorersCard";

const OverviewPage = () => {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col gap-5 w-2/3">
        <UpcomingMatchBanner />
        <StandingsTable />
        <ScoutCardSection />
      </div>
      <div className="flex flex-col gap-5 w-1/3">
        <LatestNewsCard />
        <TopScorerCard />
      </div>
    </div>
  );
};

export default OverviewPage;
