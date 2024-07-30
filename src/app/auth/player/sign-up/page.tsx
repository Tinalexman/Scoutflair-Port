import PlayerSignUp from "@/src/components/auth/player/PlayerSignUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Player Sign Up",
};

export default function Onboarding() {
  return <PlayerSignUp />;
}