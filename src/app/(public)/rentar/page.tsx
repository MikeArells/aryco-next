import type { Metadata } from "next";
import RentarClient from "./rentarClient";

export const metadata: Metadata = {
  title: "Rentar",
  description: "Propiedades en renta en Aguascalientes.",
};

export default function RentarPage() {
  return <RentarClient />;
}

