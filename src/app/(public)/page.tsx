import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.css";
import Footer from "@/components/Footer/Footer";
import FeaturedProperties from "@/components/Home/FeaturedProperties/FeaturedProperties";
import MortgagePartner from "@/components/Home/MortgagePartner/MortgagePartner";
import LatestNews from "@/components/Home/LatestNews/LatestNews";
import { getProperties } from "@/lib/properties";
import { getNews } from "@/services/newsService";

export default async function Home() {
  const news = await getNews();
  const properties = await getProperties();

  return (
    <>

      <div className={styles.hero}>
    <Image
      src="/Material/imgHero1.jpeg"
      alt="Propiedad en Aguascalientes"
      fill
      priority
      className={styles.heroImage}
    />

    <div className={styles.heroOverlay}></div>

    <div className={styles.heroContent}>

      <span className={styles.heroEyebrow}>
        ARYCO BIENES RAÍCES
      </span>

      <h1>
        Encuentra el hogar
        <br />
        de tus sueños
      </h1>

      <p className={styles.heroDescription}>
        Descubre propiedades seleccionadas en Aguascalientes
        y encuentra el espacio ideal para ti.
      </p>

      {/* BUSCADOR */}
      <div className={styles.heroSearch}>

        <div className={styles.searchInput}>
          <span>⌕</span>

          <input
            type="text"
            placeholder="Buscar por ciudad, zona o colonia..."
          />
        </div>

        <select className={styles.searchSelect} defaultValue="">
          <option value="" disabled>
            Tipo de propiedad
          </option>

          <option value="casa">Casa</option>
          <option value="departamento">Departamento</option>
          <option value="terreno">Terreno</option>
        </select>

        <Link
          href="/comprar"
          className={styles.searchButton}
        >
          Buscar
        </Link>

      </div>

      {/* ESTADÍSTICAS */}
      <div className={styles.heroStats}>

        <div className={styles.stat}>
          <strong>Compra</strong>
          <span>Encuentra tu propiedad</span>
        </div>

        <div className={styles.stat}>
          <strong>Renta</strong>
          <span>Encuentra tu próximo hogar</span>
        </div>

        <div className={styles.stat}>
          <strong>Vende</strong>
          <span>Te ayudamos a vender</span>
        </div>

      </div>

    </div>
  </div>

      {/* PROPIEDADES */}
      <div className="container">

        {/* PROPIEDADES */}
        <FeaturedProperties properties={properties} />

        {/* <div className="row">

          {[1,2,3].map((id) => (
            <div className="col-md-4" key={id}>
              <Link href={`/property/${id}`}>
                <div className="card shadow-sm">
                  <Image
                    src="/Material/imgHero1.jpeg"
                    alt="propiedad"
                    width={400}
                    height={250}
                  />
                  <div className="card-body">
                    <p>$1,200,000</p>
                    <p>3 habitaciones · 1 baño</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}

        </div> */}

        {/* NOTICIAS */}
        <LatestNews news={news} />

        {/* PARTNERS */}
        < MortgagePartner />

      </div>

      <br />
      <Footer />
    </>
  );
}