import PasswordResetTokenPage from "@/src/components/auth/PasswordResetTokenPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset your password",
};

export default function Onboarding() {
  return <PasswordResetTokenPage />;
}