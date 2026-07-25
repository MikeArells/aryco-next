import Script from 'next/script';
import styles from './property.module.css';
import { getProperty } from '@/lib/properties';
import TiktokEmbed from "@/components/TiktokEmbed/TiktokEmbed";
import PropertyGallery from "@/components/PropertyGallery/PropertyGallery";
import { FaBed, FaBath, FaCar } from "react-icons/fa";

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ id: string; slug: string }>;
}) {
  const { id } = await params;
  const property = await getProperty(id);

  return (
    <>
      <Script id='gtm' strategy='afterInteractive'>
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NXVB4N8G');
        `}
      </Script>

      <Script
        src="https://www.tiktok.com/embed.js"
        strategy="lazyOnload"
      />

      <main className={styles.container}>

        <header className={styles.header}>
          <h1 className={styles.title}>{property.titulo}</h1>
          <p className={styles.subtitle}>{property.subtitulo}</p>
        </header>

        <section className={styles.twoColumns}>

          {/* IMAGEN PRINCIPAL Y GALERIA */}
          <div>
            <PropertyGallery
              title={property.titulo}
              images={property.images}
            />
          </div>

          {/* INFORMACION */}
          <aside>
            <div className={styles.infoCard}>
              <h3>EN VENTA</h3>

              <h2>
                ${Number(property.precio).toLocaleString('es-MX')}
              </h2>

              <p><strong>Tipo de propiedad:</strong> {property.tipoPropiedad}</p>
              <p><strong>Terreno:</strong> {property.terreno} m²</p>
              <p><strong>Construcción:</strong> {property.construccion} m²</p>
              <p><strong>Ocupación:</strong> {property.ocupacion}</p>
              <p><strong>Pago:</strong> {property.pago}</p>
              <p><strong>Servicios:</strong> {property.servicios}</p>

              <div className={styles.features}>
                <div className={styles.featureItem}>
                  <span className={styles.featureTitle}>Recámaras</span>

                  <div className={styles.featureValue}>
                    <strong>{property.recamaras}</strong>
                    <FaBed />
                  </div>
                </div>

                <div className={styles.featureItem}>
                  <span className={styles.featureTitle}>Baños</span>

                  <div className={styles.featureValue}>
                    <strong>{property.banos}</strong>
                    <FaBath />
                  </div>
                </div>

                <div className={styles.featureItem}>
                  <span className={styles.featureTitle}>Cochera</span>

                  <div className={styles.featureValue}>
                    <strong>{property.carros}</strong>
                    <FaCar />
                  </div>
                </div>
              </div>

            </div>
          </aside>
        </section>

        <section className={styles.twoColumns}>
          <section className={styles.description}>
            <h2>Descripción</h2>
            <p>{property.descripcion}</p>
          </section>

          <aside>
            <div>
              <h2 className={styles.sectionTitle}>Ubicación</h2>

              <div className={styles.mapBox}>
                <iframe
                  src={property.maps_url}
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                />
              </div>
            </div>
          </aside>
        </section>

        <section className={styles.twoColumns}>

          {property.video && (
            <section className={styles.videoSection}>
              <TiktokEmbed url={property.video} />
            </section>
          )}

          <aside className={styles.contactBox}>
            <h3>Contáctanos</h3>

            <input type='text' placeholder='Nombre' />
            <input type='email' placeholder='Email' />
            <input type='tel' placeholder='Teléfono' />

            <textarea placeholder='Escribe tu mensaje...' />

            <button>Enviar</button>
          </aside>
        </section>

      </main>
    </>
  );
}