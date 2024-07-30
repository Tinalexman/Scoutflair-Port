import Tactics from "@/src/components/dashboard/player/tactics/Tactics";
import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Tactics"
}

export default function PlayerTacticsPage() {
    return <Tactics />
}