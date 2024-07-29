import Clubs from "@/src/components/dashboard/player/clubs/Clubs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Player Football Clubs",
};

export default function PlayerClubsPage() {
  return <Clubs />;
}
