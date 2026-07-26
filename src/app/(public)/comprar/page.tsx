import type { Metadata } from "next";
import ComprarClient from "./comprarClient";

export const metadata: Metadata = {
  title: "Comprar",
  description: "Propiedades en venta en Aguascalientes.",
};

export default function ComprarPage() {
  return <ComprarClient />;
}