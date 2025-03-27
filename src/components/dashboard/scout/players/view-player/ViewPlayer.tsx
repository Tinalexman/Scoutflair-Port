"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Loader } from "@mantine/core";
import Banner from "./Banner";
import Bio from "./Bio";
import Posts from "@/components/reusable/post/Posts";
import { useGetPlayerByEmail } from "@/hooks/player";

const ViewPlayer = () => {
  return (
    <Suspense fallback={<Loader color="primary.6" />}>
      <ViewPlayerContent />
    </Suspense>
  );
};

const ViewPlayerContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const playerEmail: string | null = searchParams.get("email");
  const { loading, data, success, get } = useGetPlayerByEmail();

  useEffect(() => {
    if (playerEmail === null) {
      router.back();
    } else {
      get(playerEmail);
    }
  }, [router]);

  return (
    <div className="w-full flex flex-col gap-6 p-6">
      <Banner data={data} />
      <div className="w-full grid grid-cols-[1fr_2fr] gap-6">
        <div className="sticky top-6 self-start">
          <Bio data={data} />
        </div>
        <Posts playerEmail={playerEmail!} />
      </div>
    </div>
  );
};

export default ViewPlayer;
