import ClubSettings from "@/src/components/dashboard/player/club-settings/ClubSettings";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Club Settings",
};

export default function AddClub() {
  return <ClubSettings />;
}
