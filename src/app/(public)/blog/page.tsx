import type { Metadata } from "next";
import BlogClient from "./blogClient";

export const metadata: Metadata = {
  title: "Blog",
  description: "Noticias y tendencias en el mercado inmobiliario.",
};

export default function BlogPage() {
  return <BlogClient />;
}
