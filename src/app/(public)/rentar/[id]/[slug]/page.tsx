import Script from "next/script";
import { getProperty } from "@/lib/properties";

export default async function PropertyPage({
  params,
}: {
  params: Promise<{
    id: string;
    slug: string;
  }>;
}) {
  const { id } = await params;

  const property = await getProperty(id);

  return (
    <>
    {/* Google Tag Manager */}
      <Script id="gtm" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NXVB4N8G');
        `}
      </Script>

      {/* NAV */}
      
      {/* REST */}
    <main>
      <h1>{property.titulo}</h1>

      <p>{property.subtitulo}</p>

      <h2>
        $
        {property.precio.toLocaleString("es-MX")}
      </h2>

      <p>{property.descripcion}</p>
    </main>

    </>
  );
}