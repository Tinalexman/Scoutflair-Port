import SettingsPage from "@/src/components/dashboard/player/settings/Settings";
import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Settings"
}

export default function PlayerSettings() {
    return <SettingsPage />
}