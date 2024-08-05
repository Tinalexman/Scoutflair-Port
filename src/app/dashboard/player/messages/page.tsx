import Messages from "@/src/components/dashboard/player/messages/Messages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Messages",
};

export default function MessagesPage() {
  return <Messages />;
}
