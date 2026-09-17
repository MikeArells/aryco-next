import type { Metadata } from "next";
import RentarClient from "./rentarClient";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Rentar",
  description: "Propiedades en renta en Aguascalientes.",
};

export default function RentarPage() {
  return (
      <Suspense fallback={<div>Cargando propiedades...</div>}>
        <RentarClient />
      </Suspense>
    )
}

