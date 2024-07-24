import OverviewPage from "@/src/components/dashboard/player/overview/OverviewPage";
import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Player Overview"
}

export default function PlayerOverview() {
    return <OverviewPage />
}