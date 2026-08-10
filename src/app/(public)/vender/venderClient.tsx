import Script from "next/script";
import styles from "./vender.module.css";
import Footer from "@/components/Footer/Footer";


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

      <Footer />
      
    </div>
  );
}