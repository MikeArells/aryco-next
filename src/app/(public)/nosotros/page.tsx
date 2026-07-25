import Script from "next/script";
import Image from "next/image";
import styles from "./nosotros.module.css";

export default function NosotrosPage() {
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

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.overlay}></div>

        <Image
          src="/aboutUs.jpg"
          alt="Nosotros"
          fill
          className={styles.heroImage}
        />

        <div className={styles.heroContent}>
          <h1>SOMOS ARYCO ASESORES</h1>

          <a href="#about" className={styles.heroArrow}>
            ↓
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className={styles.about}>
        <div className="container">
          <header className={styles.aboutHeader}>
            <h2>SOBRE NOSOTROS</h2>

            <p>
              Aryco (Arellano & Cía) es una inmobiliaria con más de 20 años de
              experiencia, especializada en los sectores habitacional,
              comercial e industrial, creada para atender la creciente demanda
              de servicios inmobiliarios confiables y profesionales.
            </p>
          </header>

          <div className={styles.aboutGrid}>
            <article className={styles.aboutBlock}>
              <h3>MISIÓN</h3>
              <p>
                Nuestra misión es brindar soluciones inmobiliarias con más de
                20 años de experiencia, apoyándonos en un equipo experto en
                áreas legales, comerciales y tecnológicas.
              </p>
            </article>

            <article className={styles.aboutBlock}>
              <h3>VISIÓN</h3>
              <p>
                Nuestra visión es consolidarnos como una de las inmobiliarias
                más confiables e innovadoras de la región, impulsando el
                desarrollo habitacional, comercial e industrial.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className={styles.values}>
        <div className="container">
          <h2 className={styles.valuesTitle}>VALORES</h2>

          <div className={styles.valuesGrid}>
            <article>
              <h3>Integridad</h3>
              <p>Actuamos con honestidad y transparencia.</p>
            </article>

            <article>
              <h3>Profesionalismo</h3>
              <p>Brindamos servicios respaldados por amplia experiencia.</p>
            </article>

            <article>
              <h3>Innovación</h3>
              <p>Aplicamos tecnología propia para optimizar procesos.</p>
            </article>

            <article>
              <h3>Confianza</h3>
              <p>Cuidamos cada detalle en cada operación.</p>
            </article>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <span>© 2025 Aryco, Inc</span>

          <span className={styles.footerCenter}>
            Designed by: Astruck Labs
          </span>

          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/arellanoycia/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100095554081624"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-facebook"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}