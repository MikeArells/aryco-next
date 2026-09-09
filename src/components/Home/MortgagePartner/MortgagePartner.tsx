import Image from "next/image";
import styles from "./MortgagePartner.module.css";

export default function MortgagePartner() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.mainContent}>

          {/* INFORMACIÓN */}
          <div className={styles.info}>

            <span className={styles.eyebrow}>
              NUESTRO ALIADO
            </span>

            <h2>
              Hacemos realidad
              <span> tu próximo hogar</span>
            </h2>

            <p className={styles.description}>
              Trabajamos de la mano con Escala Financiera, un broker
              hipotecario que te acompaña durante el proceso para
              encontrar el crédito bancario que mejor se adapte a ti.
            </p>

            <div className={styles.benefits}>

              <div className={styles.benefit}>
                <div className={styles.icon}>
                  👤
                </div>

                <div>
                  <h3>Asesoría personalizada</h3>
                  <p>
                    Te orientan en cada paso del proceso.
                  </p>
                </div>
              </div>

              <div className={styles.benefit}>
                <div className={styles.icon}>
                  🏠
                </div>

                <div>
                  <h3>Múltiples opciones</h3>
                  <p>
                    Encuentra el crédito que mejor se adapte a ti.
                  </p>
                </div>
              </div>

              <div className={styles.benefit}>
                <div className={styles.icon}>
                  📄
                </div>

                <div>
                  <h3>Proceso más sencillo</h3>
                  <p>
                    Menos trámites, más tranquilidad.
                  </p>
                </div>
              </div>

            </div>

            <a
              href="https://wa.me/524492335540"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              Conoce más sobre financiamiento
              <span>→</span>
            </a>

          </div>

          {/* LOGO / IMAGEN */}
          <div className={styles.visual}>

            <div className={styles.logoCard}>
              <Image
                src="/Material/escalaFinanciera.jpg"
                alt="Escala Financiera"
                fill
                className={styles.logo}
              />
            </div>

            <div className={styles.tagline}>
              <span></span>

              <p>
                Tu hogar,
                <br />
                <strong>más cerca</strong>
              </p>
            </div>

            <div className={styles.circle}>
              <span>
                SUEÑOS
                <br />
                QUE SE
                <br />
                FINANCIAN
              </span>
            </div>

          </div>

        </div>

        {/* BENEFICIOS INFERIORES */}
        <div className={styles.bottomBar}>

          <p className={styles.bottomTitle}>
            UNA ALIANZA PARA AYUDARTE A ENCONTRAR TU HOGAR
          </p>

          <div className={styles.bottomBenefits}>

            <div>
              <span>✓</span>
              <p>Mayor seguridad</p>
            </div>

            <div>
              <span>◷</span>
              <p>Acompañamiento durante todo el proceso</p>
            </div>

            <div>
              <span>▥</span>
              <p>Soluciones a tu medida</p>
            </div>

            <div>
              <span>⌂</span>
              <p>Más oportunidades para tu futuro</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}