"use client";

import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import styles from "./Filters.module.css";

interface FiltersProps {
  ciudad: string;
  setCiudad: React.Dispatch<React.SetStateAction<string>>;

  // precio: string;
  // setPrecio: React.Dispatch<React.SetStateAction<string>>;

  // precioMin: string;
  // setPrecioMin: React.Dispatch<React.SetStateAction<string>>;

  // precioMax: string;
  // setPrecioMax: React.Dispatch<React.SetStateAction<string>>;

  precioMin: string;
  precioMax: string;
  onApplyPrice: (min: string, max: string) => void;
  onClearPrice: () => void;

  recamaras: string;
  setRecamaras: React.Dispatch<React.SetStateAction<string>>;

  tipoPropiedad: string;
  setTipoPropiedad: React.Dispatch<React.SetStateAction<string>>;
}

const formatPrice = (value: string) => {
  const numbers = value.replace(/\D/g, "");

  if (!numbers) return "";

  return new Intl.NumberFormat("en-US").format(Number(numbers));
};

export default function Filters({
  ciudad,
  setCiudad,

  precioMin,
  precioMax,
  onApplyPrice,
  onClearPrice,
  
  recamaras,
  setRecamaras,
  tipoPropiedad,
  setTipoPropiedad,
}: FiltersProps) {
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  // Filtros adicionales
  const [banos, setBanos] = useState("");
  const [estacionamientos, setEstacionamientos] = useState("");

  // const [precioMin, setPrecioMin] = useState("");
  // const [precioMax, setPrecioMax] = useState("");

  // precio max y min
  const [priceOpen, setPriceOpen] = useState(false);

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Sincronización con ComprarClient
  // useEffect(() => {
  //   setMinPrice(precioMin);
  //   setMaxPrice(precioMax);
  // }, [precioMin, precioMax]);
  
  // const [appliedPrice, setAppliedPrice] = useState({
  //   min: "",
  //   max: "",
  // });

  // superficie min y max
  const [superficieMin, setSuperficieMin] = useState(precioMin);
  const [superficieMax, setSuperficieMax] = useState(precioMax);

  const [alberca, setAlberca] = useState(false);
  const [jardin, setJardin] = useState(false);
  const [terraza, setTerraza] = useState(false);
  const [amueblado, setAmueblado] = useState(false);

  const limpiarFiltros = () => {
    setBanos("");

    setEstacionamientos("");

    setPriceOpen(false);
    setMinPrice("");
    setMaxPrice("");

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

          {/* Precio max y min */}
          <div className={styles.priceFilter}>
            <button
              type="button"
              className={`${styles.searchSelect} ${
                styles.priceButton
              } ${priceOpen ? styles.priceActive : ""}`}
              onClick={() => setPriceOpen(!priceOpen)}
            >
              <span>Precio</span>

              <svg
                className={`${styles.priceArrow} ${
                  priceOpen ? styles.priceArrowOpen : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {priceOpen && (
              <div className={styles.priceDropdown}>
                <h3>Rango de precios</h3>

                <p className={styles.priceDescription}>
                  Define el presupuesto de tu próxima propiedad.
                </p>

                <div className={styles.priceInputs}>
                  <div>
                    <label>Precio mínimo</label>
                    <div className={styles.priceInputWrapper}>
                      <span>$</span>
                      <input
                        type="text"
                        inputMode="numeric"
                        placeholder="Sin mínimo"
                        value={minPrice}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, "");
                          setMinPrice(formatPrice(value));
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label>Precio máximo</label>
                    <div className={styles.priceInputWrapper}>
                      <span>$</span>
                      <input
                          type="text"
                          inputMode="numeric"
                          placeholder="Sin máximo"
                          value={maxPrice}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, "");
                            setMaxPrice(formatPrice(value));
                          }}
                      />
                    </div>
                  </div>
                </div>

                <div className={styles.priceActions}>
                  <button
                    type="button"
                    onClick={() => {
                      setMinPrice("");
                      setMaxPrice("");
                      onClearPrice();
                      setPriceOpen(false);
                    }}
                  >
                    Limpiar
                  </button>

                  <button
                    type="button"
                    className={styles.applyPrice}
                    onClick={() => {
                      if (
                        minPrice !== "" &&
                        maxPrice !== "" &&
                        Number(minPrice.replace(/,/g, "")) >
                        Number(maxPrice.replace(/,/g, ""))
                      ) {
                        alert("El precio mínimo no puede ser mayor al máximo.");
                        return;
                      }

                      onApplyPrice(
                        minPrice.replace(/,/g, ""),
                        maxPrice.replace(/,/g, "")
                      );
                      setPriceOpen(false);
                    }}
                  >
                    Aplicar filtros
                  </button>
                </div>
              </div>
            )}
          </div>


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
            <option value="Rancho">Rancho</option>
            <option value="Local">Local</option>
            <option value="Bodega">Bodega</option>
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

        {/*==========================
         PANEL DE FILTROS ADICIONALES
         ========================= */}
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
              {/* <div className={styles.filterGroup}>
                <label htmlFor="precioMin">
                  Precio mínimo
                </label>

                <input
                  id="precioMin"
                  type="number"
                  placeholder="$ Mínimo"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
              </div> */}

              {/* PRECIO MÁXIMO */}
              {/* <div className={styles.filterGroup}>
                <label htmlFor="precioMax">
                  Precio máximo
                </label>

                <input
                  id="precioMax"
                  type="number"
                  placeholder="$ Máximo"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div> */}

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