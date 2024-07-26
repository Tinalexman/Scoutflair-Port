import AboutPage from "@/src/components/about/AboutPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};

export default function Onboarding() {
  return <AboutPage />;
}