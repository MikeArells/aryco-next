import type { Metadata } from "next";
import ComprarClient from "./comprarClient";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Comprar",
  description: "Propiedades en venta en Aguascalientes.",
};

export default function ComprarPage() {
  return (
    <Suspense fallback={<div>Cargando propiedades...</div>}>
      <ComprarClient />
    </Suspense>
  );
}