import type { Metadata } from "next";
import ComprarClient from "./comprarClient";
import { Suspense } from "react";
import AIChat from "@/components/AIChat/AIChat";

export const metadata: Metadata = {
  title: "Comprar",
  description: "Propiedades en venta en Aguascalientes.",
};

export default function ComprarPage() {
  return (
    <Suspense fallback={<div>Cargando propiedades...</div>}>
      <ComprarClient />
      <AIChat />
    </Suspense>
  );
}