import type { Metadata } from "next";
import NosotrosClient from "./nosotrosClient";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce más sobre nuestra empresa.",
};

export default function NosotrosPage() {
  return <NosotrosClient />;
}
