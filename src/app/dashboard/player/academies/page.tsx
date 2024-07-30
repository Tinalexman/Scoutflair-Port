import Academies from "@/src/components/dashboard/player/academies/Academies";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academies",
};

export default function PlayerAcademiesPage() {
  return <Academies />;
}
