"use client"; // Only if using App Router
import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { useCurrentUserStore, usePlayerDataStore } from "../stores/userStore";
import Scout from "@/public/dashboard/scout/ellipse-2386.png";
import Player from "@/public/dashboard/player/player portrait.png";

import { useGetPlayer } from "@/src/hooks/player";
import { getYearDifference } from "../functions/dateFunctions";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const { data, get, success } = useGetPlayer();

  useEffect(() => {
    get();
    determineUser();
  }, []);

  useEffect(() => {
    if (success) {
      const date: string = data?.dob!;
      useCurrentUserStore.setState({
        role: "PLAYER",
        name: data?.fullName,
        image: data?.imageUrl,
      });

      const dob = new Date(date);
      const years = getYearDifference(dob, new Date());

      usePlayerDataStore.setState({
        role: data?.position,
        age: years,
        bio: data?.biography,
        dob: dob,
        email: data?.email,
        nationality: data?.nationality,
        foot: data?.preferredFoot,
        height: Number(data?.height),
        weight: Number(data?.weight),
        recommendedName: "",
        recommendedEmail: "",
        recommendedPhone: "",
        jersey: Number(data?.jerseyNumber),
        status: "",
        fbLink: data?.facebookUrl ?? "",
        igLink: data?.igUrl ?? "",
        xLink: data?.xurl ?? "",
        ttLink: data?.ticTokUrl ?? "",
      });
    }
  }, [data, success]);

  const determineUser = () => {
    const current = pathName.split("/")[2];

    if (current === "player") {
      useCurrentUserStore.setState({
        role: "PLAYER",
        name: "",
      });

      usePlayerDataStore.setState({
        role: "",
        age: 0,
        bio: "",
        dob: new Date(),
        nationality: "",
        foot: "",
        height: 0,
        weight: 0,
        recommendedName: "",
        recommendedEmail: "",
        recommendedPhone: "",
        jersey: 0,
        status: "",
        fbLink: "",
        igLink: "",
        xLink: "",
        ttLink: "",
      });
    } else if (current === "scout") {
      useCurrentUserStore.setState({
        role: "SCOUT",
        name: "Josh Fayomi",
      });
    } else if (current === "coach") {
    }
  };

  return <>{children}</>;
}
