import Matches from "@/src/components/dashboard/player/matches/Matches";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Player Matches",
};

export default function PlayerMatchesPage() {
  return <Matches />;
}
