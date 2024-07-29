import ServicePage from "@/src/components/services/ServicePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
};

export default function Onboarding() {
  return <ServicePage />;
}