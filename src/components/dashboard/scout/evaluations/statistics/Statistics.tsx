import React, { Suspense, FC } from "react";

import { Loader } from "@mantine/core";
import Info from "./Info";

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
      </div>
      <div className="flex flex-col gap-6 w-full"></div>
    </div>
  );
};

export default Statistics;
