import React, { Suspense } from "react";
import { Loader } from "@mantine/core";
import Gallery from "./Gallery";
import Info from "./Info";
import Trending from "./Trending";
import History from "./History";

const Reports = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Content />
    </Suspense>
  );
};

const Content = () => {
  return (
    <div className="w-full grid grid-cols-[2fr_1fr] gap-6 p-6">
      <Info />
      <div className="flex flex-col gap-6">
        <History />
        <Gallery />
        <Trending />
      </div>
    </div>
  );
};

export default Reports;
