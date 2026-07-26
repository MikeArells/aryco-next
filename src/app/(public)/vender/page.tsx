import type { Metadata } from "next";
import VenderClient from "./venderClient";

export const metadata: Metadata = {
  title: "Vender",
  description: "Vende tu propiedad en Aguascalientes.",
};

export default function VenderPage() {
  return <VenderClient />;
}

