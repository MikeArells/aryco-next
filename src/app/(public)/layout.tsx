import Header from "@/components/Header/Header";
// import Footer from "@/components/Footer/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Aryco Bienes Raíces",
    template: "%s | Aryco Bienes Raíces",
  },
  description:
    "Compra, vende y renta propiedades en Aguascalientes.",
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />

      <main>{children}</main>

      {/* <Footer /> */}
    </>
  );
}