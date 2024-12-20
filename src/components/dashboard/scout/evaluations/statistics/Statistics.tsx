"use client";

import React, { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader } from "@mantine/core";
import Info from "./Info";
import Badges from "./Badges";
import KeyMetrics from "./KeyMetrics";
import Clips from "./Clips";
import SkillMetrics from "./Skill";
import Traits from "./Traits";
import { useGetScoutsPlayerDetails } from "@/src/hooks/scout";
import Swal from "sweetalert2";

const Statistics = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Content />
    </Suspense>
  );
};

const Content = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get("id");

  const { data, loading, get: getPlayer } = useGetScoutsPlayerDetails();

  const navigateBack = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "An error occurred. Please try again",
    });
    router.back();
  };

  useEffect(() => {
    if (id === null) {
      navigateBack();
    } else {
      getPlayer(id);
    }
  }, [router]);

  if (loading) {
    return (
      <div className="w-full h-[calc(100vh-4rem)] grid place-content-center">
        <Loader color="primary.6" />
      </div>
    );
  }

  return (
    <div className="w-full grid grid-cols-[2fr_1fr] gap-6 p-6">
      <div className="flex flex-col gap-6 w-full">
        <Info data={data} />
        <KeyMetrics data={data} />
        {/* <Clips /> */}
      </div>
      <div className="flex flex-col gap-6 w-full">
        {/* <Badges /> */}
        <SkillMetrics data={data} />
        <Traits data={data} />
      </div>
    </div>
  );
};

export default Statistics;
