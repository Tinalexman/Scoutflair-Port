import ContactPage from "@/src/components/contact/ContactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function Onboarding() {
  return <ContactPage />;
}