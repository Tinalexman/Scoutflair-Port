import LandingPage from "../components/home/LandingPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Onboarding() {
  return <LandingPage />;
}