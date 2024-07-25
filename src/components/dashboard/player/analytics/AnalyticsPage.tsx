import React from "react";
import MatchResults from "./MatchResults";
import Details from "./Details";
import Formation from "./Formation";
import Metrics from "./Metrics";
import Performance from "./Performance";

const AnalyticsPage = () => {
  return (
    <div className="flex gap-5 font-lato">
      <div className="flex flex-col gap-5 w-2/3">
        <Details />
        <MatchResults />
        <Performance />
      </div>
      <div className="flex flex-col gap-5 w-1/3">
        <Metrics />
        <Formation />
      </div>
    </div>
  );
};

export default AnalyticsPage;
