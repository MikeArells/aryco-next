import Script from "next/script";
import styles from "./vender.module.css";

export default function ContactPage() {
  return (
    <div className={styles.pageWrapper}>
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

      {/* NAVBAR */}
      {/* <section className={styles.gradientBackground}>
        <div className="container">
          <header className="d-flex flex-wrap align-items-center justify-content-between py-3">
            
            <ul className="nav col-6 col-md-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link href="/comprar" className="nav-link px-5 text-white">
                  Comprar
                </Link>
              </li>
              <li>
                <Link href="/rentar" className="nav-link px-5 text-white">
                  Rentar
                </Link>
              </li>
              <li>
                <Link href="/vender" className="nav-link px-5 text-white">
                  Vender
                </Link>
              </li>
            </ul>

            <div className="logo">
                <Link href="/">
                    <Image 
                    src="/Arellano-cia.jpg" 
                    alt="Logo" 
                    width={180}
                    height={60}
                    className="logo h-auto"/>
                </Link>
            </div>

            <ul className="nav col-6 col-md-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link href="/blog" className="nav-link px-5 text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="nav-link px-5 text-white">
                  Nosotros
                </Link>
              </li>
            </ul>

            <div className="col-md-3 text-end">
              <button className="btn btn-outline-primary me-4" disabled>
                Cotizar seguro
              </button>
              <Link href="/register" className="btn btn-primary">
                Iniciar sesión
              </Link>
            </div>
          </header>
        </div>
      </section> */}

      {/* FORMULARIO */}
      <main className={styles.contactSection}>
        <div className={styles.contactForm}>
          <h2>Contactanos</h2>

          <form>
            <div className={styles.formRow}>
              <input
                className={styles.input}
                name="Nombre"
                type="text"
                placeholder="Nombre"
                required
              />

              <input
                className={styles.input}
                name="email"
                type="email"
                placeholder="Email"
                required
              />
            </div>

            <div className={styles.formRow}>
              <select className={styles.select} name="CodigoPais">
                <option value="+52">🇲🇽 +52</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+34">🇪🇸 +34</option>
              </select>

              <input
                className={styles.input}
                name="Telefono"
                type="tel"
                placeholder="Teléfono"
                required
              />
            </div>

            <textarea
              className={styles.textarea}
              name="message"
              placeholder="Escribe tu mensaje aquí..."
              required
            />

            <button className={styles.btnEmail} type="submit">
              ✉️ Envia tu correo.
            </button>

            <a
            href="https://wa.me/524492335540?text=Hola,%20quiero%20vender%20un%20inmueble"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnWhatsapp}
            >
            📱 Contactar por WhatsApp.
            </a>
          </form>
        </div>
      </main>

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
    </div>
  );
}