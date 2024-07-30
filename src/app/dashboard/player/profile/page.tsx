import ProfilePage from "@/src/components/dashboard/player/profile/ProfilePage";
import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Profile"
}

export default function PlayerProfile() {
    return <ProfilePage />
}