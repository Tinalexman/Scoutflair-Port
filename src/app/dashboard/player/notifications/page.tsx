import NotificationsPage from "@/src/components/dashboard/player/notifications/Notifications";
import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Notifications"
}

export default function PlayerNotification() {
    return <NotificationsPage />
}