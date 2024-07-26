import AnalyticsPage from "@/src/components/dashboard/player/analytics/AnalyticsPage";
import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Player Analytics"
}

export default function PlayerAnalytics() {
    return <AnalyticsPage />
}