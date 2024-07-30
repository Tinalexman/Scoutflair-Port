import PasswordResetForm from "@/src/components/auth/PasswordResetForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Link Sent",
};

export default function Onboarding() {
  return <PasswordResetForm />;
}