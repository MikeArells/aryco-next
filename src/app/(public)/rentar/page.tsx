"use client";

import Script from "next/script";
// import { supabase } from "@/lib/supabase";
import type { Propiedad } from "@/types/propiedad";
import styles from "./rentar.module.css";
import { useEffect, useState, useMemo} from "react";
import PropertyMap from "@/components/PropertyMap";
import PropertyList from "@/components/PropertyList/PropertyList";
import Filters from "@/components/Filters/Filters";
import { createClient } from "@/lib/supabase/client";

const supabase = createClient();




export default function RentarPage() {

  const [propiedades, setPropiedades] = useState<Propiedad[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Estados de los filtros
  const [ciudad, setCiudad] = useState("");
  const [precio, setPrecio] = useState("");
  const [recamaras, setRecamaras] = useState("");
  const [tipoPropiedad, setTipoPropiedad] = useState("");

  useEffect(() => {

    async function cargarPropiedades() {

      const { data, error } = await supabase
            .from("propiedades")
            .select("*")
            .eq("transaccion", "EN RENTA");

          if (error) {
            console.error(error);
            setError(error.message);
            return;
          }

          setPropiedades(data);
          console.log(data); // Para comprobar que llegan

        }

    cargarPropiedades();
  }, []);

  const propiedadesFiltradas = useMemo(() => {
  let filtradas = propiedades;

  if (ciudad) {
    filtradas = filtradas.filter(
      (p) =>
        p.subtitulo?.toLowerCase().includes(ciudad.toLowerCase())
    );
  }

  if (precio) {
    filtradas = filtradas.filter(
      (p) => Number(p.precio) <= Number(precio)
    );
  }

  if (recamaras) {
    filtradas = filtradas.filter(
      (p) => Number(p.recamaras) >= Number(recamaras)
    );
  }

  if (tipoPropiedad) {
    filtradas = filtradas.filter(
      (p) => p.tipoPropiedad?.toLowerCase().includes(tipoPropiedad.toLowerCase())
    );
  }

  return filtradas;
}, [propiedades, ciudad, precio, recamaras, tipoPropiedad]);

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
      

         {/* FILTROS */}
   <Filters
      ciudad={ciudad}
      setCiudad={setCiudad}
      precio={precio}
      setPrecio={setPrecio}
      recamaras={recamaras}
      setRecamaras={setRecamaras}
      tipoPropiedad={tipoPropiedad}
      setTipoPropiedad={setTipoPropiedad}
    />

    {/* MAPA + LISTA */}

    {error && (
      <div className="alert alert-danger">
        {error}
      </div>
    )}

    <section className={styles.propertiesSection}>
      <div className="row h-100 g-0">

        {/* MAPA */}
        <div className={`col-12 col-lg-6 h-100 ${styles.mapCol}`}> 
          <div className={styles.mapWrapper}>
              <PropertyMap propiedades={propiedadesFiltradas} />
          </div>
        </div>

        {/* LISTA */}
        <div className="col-12 col-lg-6 h-100">
          <PropertyList propiedades={propiedadesFiltradas} />
        </div>

      </div>
    </section>
        
        {/* </div> */}
      {/* </section> */}

      {/* Scripts externos */}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" />
      <Script src="https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js" />
      <Script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.1/mapbox-gl-geocoder.min.js" />
    </>
  );
}