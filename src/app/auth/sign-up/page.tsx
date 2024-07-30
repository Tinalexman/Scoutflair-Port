import Home from "@/src/components/auth/SignUpSelect";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Choose your role",
};

export default function Onboarding() {
  return <Home />;
}