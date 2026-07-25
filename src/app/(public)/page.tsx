import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.css";

export default function Home() {
  return (
    <>

    <div className={styles.hero}>
        <Image
          src="/Material/imgHero1.jpeg"
          alt="Hero"
          fill
          priority
          className={styles.heroImage}
        />
      {/* HERO */}
      <div className="container text-center py-5">
        <h1>Compra, vende o renta</h1>
        <p>La propiedad que buscabas a un solo click</p>

        <a
          href="https://wa.me/524492335540"
          className="btn btn-primary"
          target="_blank"
        >
          Contactar
        </a>
      </div>
    </div>

      {/* PROPIEDADES */}
      <div className="container">
        <h1>Propiedades en el norte de Aguascalientes</h1>

        <div className="row">

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

        </div>

        <h1>Propiedades en el sur de Aguascalientes</h1>
        <div className="row">

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

        </div>

      </div>

      {/* FOOTER */}
      <footer className="text-center py-4">
        <p>© 2025 Aryco</p>
      </footer>
    </>
  );
}