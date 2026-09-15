"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import styles from "./home.module.css";

import Footer from "@/components/Footer/Footer";
import FeaturedProperties from "@/components/Home/FeaturedProperties/FeaturedProperties";
import MortgagePartner from "@/components/Home/MortgagePartner/MortgagePartner";
import LatestNews from "@/components/Home/LatestNews/LatestNews";

import type { Propiedad } from "@/types/propiedad";
import { News } from "@/types/news";

interface HomeClientProps {
  news: News[];
  properties: Propiedad[];
}

export default function HomeClient({
  news,
  properties,
}: HomeClientProps) {

  const [busqueda, setBusqueda] = useState("");
  const [tipo, setTipo] = useState("");

  const router = useRouter();

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (busqueda.trim()) {
      params.set("ciudad", busqueda.trim());
    }

    if (tipo) {
      params.set("tipo", tipo);
    }

    const query = params.toString();

    router.push(query ? `/comprar?${query}` : "/comprar");
  };

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
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
            </div>

            <select
              className={styles.searchSelect}
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
            >
              <option value="">
                Tipo de propiedad
              </option>

              <option value="Casa">
                Casa
              </option>

              <option value="Departamento">
                Departamento
              </option>

              <option value="Terreno">
                Terreno
              </option>
            </select>

            <button
              type="button"
              className={styles.searchButton}
              onClick={handleSearch}
            >
              Buscar
            </button>

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

      <div className="container">

        {/* PROPIEDADES */}
        <FeaturedProperties properties={properties} />

        {/* NOTICIAS */}
        <LatestNews news={news} />

        {/* PARTNERS */}
        <MortgagePartner />

      </div>

      <br />

      <Footer />
    </>
  );
}