"use client";

import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";
import type { Propiedad } from "@/types/propiedad";
import styles from "./FeaturedProperties.module.css";

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // quita acentos
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

interface FeaturedPropertiesProps {
  properties: Propiedad[];
}

export default function FeaturedProperties({
    
  properties,
}: FeaturedPropertiesProps) {

    const carouselRef = useRef<HTMLDivElement>(null);
    const featuredProperties = properties.slice(0, 5);
    
    const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const scrollAmount = carouselRef.current.clientWidth;

    carouselRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
    });
    };

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <div>
            <h2>Propiedades destacadas</h2>
            <p>
              Conoce algunas de nuestras propiedades disponibles
              en Aguascalientes.
            </p>
          </div>

          <Link href="/comprar" className={styles.viewAll}>
            Ver todas →
          </Link>
        </div>

        <div className={styles.carouselWrapper}>

          <button
            className={`${styles.arrow} ${styles.arrowLeft}`}
            aria-label="Propiedades anteriores"
            onClick={() => scrollCarousel("left")}
            >
            ‹
            </button>

          <div
            className={styles.carousel}
            ref={carouselRef}
            >
            {featuredProperties.map((propiedad) => (
              <Link
                href={`/comprar/${propiedad.id}/${slugify(propiedad.titulo)}`}
                key={propiedad.id}
                className={styles.card}
              >
                <div className={styles.imageWrapper}>
                  {propiedad.images?.length > 0 ? (
                    <Image
                      src={propiedad.images[0]}
                      alt={propiedad.titulo}
                      fill
                      className={styles.image}
                    />
                  ) : (
                    <Image
                      src="/Material/imgHero1.jpeg"
                      alt={propiedad.titulo}
                      fill
                      className={styles.image}
                    />
                  )}
                </div>

                <div className={styles.cardBody}>
                  <p className={styles.price}>
                    ${propiedad.precio.toLocaleString("es-MX")} MXN
                  </p>

                  <h3>{propiedad.titulo}</h3>

                  <p className={styles.type}>
                    {propiedad.tipoPropiedad}
                  </p>

                  <div className={styles.features}>
                    <span>
                      🛏 {propiedad.recamaras ?? 0}
                    </span>

                    <span>
                      🛁 {propiedad.banos ?? 0}
                    </span>

                    <span>
                      🚗 {propiedad.carros ?? 0}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <button
            className={`${styles.arrow} ${styles.arrowRight}`}
            aria-label="Siguiente propiedad"
            onClick={() => scrollCarousel("right")}
            >
            ›
            </button>

        </div>

      </div>
    </section>
  );
}