import React, { Suspense } from "react";

import { Loader } from "@mantine/core";
import Info from "./Info";
import Badges from "./Badges";
import KeyMetrics from "./KeyMetrics";
import Clips from "./Clips";
import SkillMetrics from "./Skill";
import Traits from "./Traits";

const Statistics = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Content />{" "}
    </Suspense>
  );
};

const Content = () => {
  return (
    <div className="w-full grid grid-cols-[2fr_1fr] gap-6 p-6">
      <div className="flex flex-col gap-6 w-full">
        <Info />
        <KeyMetrics />
        <Clips />
      </div>
      <div className="flex flex-col gap-6 w-full">
        <Badges />
        <SkillMetrics />
        <Traits />
      </div>
    </div>
  );
};

export default Statistics;
