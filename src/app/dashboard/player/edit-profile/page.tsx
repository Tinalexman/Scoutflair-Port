import EditProfile from "@/src/components/dashboard/player/profile/EditProfile";
import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Edit Profile"
}

export default function PlayerProfile() {
    return <EditProfile />
}