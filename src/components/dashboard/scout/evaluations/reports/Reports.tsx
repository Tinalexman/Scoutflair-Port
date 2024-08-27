import React, { Suspense, FC } from "react";
import { Loader } from "@mantine/core";

const Reports = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Content />
    </Suspense>
  );
};

const Content = () => {
  return <div></div>;
};

export default Reports;
