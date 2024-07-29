import BlogsPage from "@/src/components/blogs/BlogsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
};

export default function Onboarding() {
  return <BlogsPage />;
}