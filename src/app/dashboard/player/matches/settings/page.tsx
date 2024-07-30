import MatchSettings from "@/src/components/dashboard/player/match-settings/MatchSettings";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Match Settings",
};

export default function MatchSettingsPage() {
  return <MatchSettings />;
}
