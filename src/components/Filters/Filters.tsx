"use client";

import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import styles from "./Filters.module.css";

interface FiltersProps {
  ciudad: string;
  setCiudad: React.Dispatch<React.SetStateAction<string>>;

  precio: string;
  setPrecio: React.Dispatch<React.SetStateAction<string>>;

  recamaras: string;
  setRecamaras: React.Dispatch<React.SetStateAction<string>>;

  tipoPropiedad: string;
  setTipoPropiedad: React.Dispatch<React.SetStateAction<string>>;
}

export default function Filters({
  ciudad,
  setCiudad,
  precio,
  setPrecio,
  recamaras,
  setRecamaras,
  tipoPropiedad,
  setTipoPropiedad,
}: FiltersProps) {
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  // Filtros adicionales
  const [banos, setBanos] = useState("");
  const [estacionamientos, setEstacionamientos] = useState("");

  const [precioMin, setPrecioMin] = useState("");
  const [precioMax, setPrecioMax] = useState("");

  const [superficieMin, setSuperficieMin] = useState("");
  const [superficieMax, setSuperficieMax] = useState("");

  const [alberca, setAlberca] = useState(false);
  const [jardin, setJardin] = useState(false);
  const [terraza, setTerraza] = useState(false);
  const [amueblado, setAmueblado] = useState(false);

  const limpiarFiltros = () => {
    setBanos("");
    setEstacionamientos("");
    setPrecioMin("");
    setPrecioMax("");
    setSuperficieMin("");
    setSuperficieMax("");
    setAlberca(false);
    setJardin(false);
    setTerraza(false);
    setAmueblado(false);
  };

  return (
    <section className="container-fluid">
      <div className={styles.filterSection}>

        {/* BARRA PRINCIPAL */}
        <div className={styles.searchBar}>

          <input
            className={styles.searchInput}
            type="text"
            placeholder="Ciudad, fraccionamiento o colonia"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
          />

          <select
            className={styles.searchSelect}
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          >
            <option value="">Precio</option>
            <option value="1000000">Hasta $1,000,000</option>
            <option value="2000000">Hasta $2,000,000</option>
            <option value="5000000">Hasta $5,000,000</option>
          </select>

          <select
            className={styles.searchSelect}
            value={recamaras}
            onChange={(e) => setRecamaras(e.target.value)}
          >
            <option value="">Recámaras</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>

          <select
            className={styles.searchSelect}
            value={tipoPropiedad}
            onChange={(e) => setTipoPropiedad(e.target.value)}
          >
            <option value="">Tipo de propiedad</option>
            <option value="Casa">Casa</option>
            <option value="Departamento">Departamento</option>
            <option value="Terreno">Terreno</option>
          </select>

          {/* BOTÓN MÁS FILTROS */}
          <button
            type="button"
            className={`${styles.moreFiltersButton} ${
              showMoreFilters ? styles.moreFiltersButtonActive : ""
            }`}
            onClick={() => setShowMoreFilters(!showMoreFilters)}
          >
            {showMoreFilters ? (
              <X size={19} strokeWidth={1.8} />
            ) : (
              <SlidersHorizontal size={19} strokeWidth={1.8} />
            )}

            <span>
              {showMoreFilters ? "Ocultar filtros" : "Más filtros"}
            </span>
          </button>

        </div>

        {/* PANEL DE FILTROS ADICIONALES */}
        {showMoreFilters && (
          <div className={styles.moreFiltersPanel}>

            <div className={styles.moreFiltersHeader}>
              <div>
                <h3>Más filtros</h3>
                <p>
                  Encuentra una propiedad que se adapte a tus necesidades.
                </p>
              </div>

              <button
                type="button"
                className={styles.clearFiltersButton}
                onClick={limpiarFiltros}
              >
                Limpiar filtros
              </button>
            </div>

            <div className={styles.additionalFilters}>

              {/* BAÑOS */}
              <div className={styles.filterGroup}>
                <label htmlFor="banos">
                  Baños
                </label>

                <select
                  id="banos"
                  value={banos}
                  onChange={(e) => setBanos(e.target.value)}
                >
                  <option value="">Cualquiera</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>
              </div>

              {/* ESTACIONAMIENTOS */}
              <div className={styles.filterGroup}>
                <label htmlFor="estacionamientos">
                  Estacionamientos
                </label>

                <select
                  id="estacionamientos"
                  value={estacionamientos}
                  onChange={(e) =>
                    setEstacionamientos(e.target.value)
                  }
                >
                  <option value="">Cualquiera</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>
              </div>

              {/* PRECIO MÍNIMO */}
              <div className={styles.filterGroup}>
                <label htmlFor="precioMin">
                  Precio mínimo
                </label>

                <input
                  id="precioMin"
                  type="number"
                  placeholder="$ Mínimo"
                  value={precioMin}
                  onChange={(e) => setPrecioMin(e.target.value)}
                />
              </div>

              {/* PRECIO MÁXIMO */}
              <div className={styles.filterGroup}>
                <label htmlFor="precioMax">
                  Precio máximo
                </label>

                <input
                  id="precioMax"
                  type="number"
                  placeholder="$ Máximo"
                  value={precioMax}
                  onChange={(e) => setPrecioMax(e.target.value)}
                />
              </div>

              {/* SUPERFICIE MÍNIMA */}
              <div className={styles.filterGroup}>
                <label htmlFor="superficieMin">
                  Superficie mínima
                </label>

                <input
                  id="superficieMin"
                  type="number"
                  placeholder="m² mínimos"
                  value={superficieMin}
                  onChange={(e) =>
                    setSuperficieMin(e.target.value)
                  }
                />
              </div>

              {/* SUPERFICIE MÁXIMA */}
              <div className={styles.filterGroup}>
                <label htmlFor="superficieMax">
                  Superficie máxima
                </label>

                <input
                  id="superficieMax"
                  type="number"
                  placeholder="m² máximos"
                  value={superficieMax}
                  onChange={(e) =>
                    setSuperficieMax(e.target.value)
                  }
                />
              </div>

            </div>

            {/* CARACTERÍSTICAS */}
            <div className={styles.featuresContainer}>

              <h4>Características</h4>

              <div className={styles.featuresList}>

                <label className={styles.checkboxOption}>
                  <input
                    type="checkbox"
                    checked={alberca}
                    onChange={(e) => setAlberca(e.target.checked)}
                  />
                  <span>Alberca</span>
                </label>

                <label className={styles.checkboxOption}>
                  <input
                    type="checkbox"
                    checked={jardin}
                    onChange={(e) => setJardin(e.target.checked)}
                  />
                  <span>Jardín</span>
                </label>

                <label className={styles.checkboxOption}>
                  <input
                    type="checkbox"
                    checked={terraza}
                    onChange={(e) => setTerraza(e.target.checked)}
                  />
                  <span>Terraza</span>
                </label>

                <label className={styles.checkboxOption}>
                  <input
                    type="checkbox"
                    checked={amueblado}
                    onChange={(e) => setAmueblado(e.target.checked)}
                  />
                  <span>Amueblado</span>
                </label>

              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}