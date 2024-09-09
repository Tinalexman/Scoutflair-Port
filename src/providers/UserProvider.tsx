"use client"; // Only if using App Router
import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { useCurrentUserStore, usePlayerDataStore } from "../stores/userStore";
import Scout from "@/public/dashboard/scout/ellipse-2386.png";
import Player from "@/public/dashboard/player/player portrait.png";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  useEffect(() => {
    determineUser();
  }, []);

  const determineUser = () => {
    const current = pathName.split("/")[2];

    if (current === "player") {
      useCurrentUserStore.setState({
        role: "PLAYER",
        name: "Pete Abass",
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
