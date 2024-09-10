"use client"; // Only if using App Router
import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { useCurrentUserStore, usePlayerDataStore } from "../stores/userStore";
import Scout from "@/public/dashboard/scout/ellipse-2386.png";
import Player from "@/public/dashboard/player/player portrait.png";

import { useGetPlayer } from "@/src/hooks/player";

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

      console.log(data);

      useCurrentUserStore.setState({
        role: "PLAYER",
        name: data?.fullName,
      });

      usePlayerDataStore.setState({
        role: data?.position,
        age: 22,
        bio: data?.biography,
        dob: new Date(date),
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
        role: "Midfielder",
        age: 22,
        bio: "Lorem ipsum dolor sit amet consectetur. Nunc malesuada ultricies amet metus viverra posuere a elit id. Ut vitae in diam risus urna. Mattis tempor convallis in eget suspendisse est eu. Odio fermentum at laoreet feugiat. Odio fermentum at .",
        dob: new Date(),
        nationality: "Nigerian",
        foot: "Right",
        height: 167,
        weight: 60,
        recommendedName: "Joshua Fayomi",
        recommendedEmail: "johnfayomi@mail.com",
        recommendedPhone: "+234901234567",
        jersey: 8,
        status: "Independent",
        fbLink: "https://www.facebook.com/peteAbass",
        igLink: "https://www.instagram.com/peteabass",
        xLink: "https://twitter.com/peteabass",
        ttLink: "https://www.tiktok.com/peteabass",
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
