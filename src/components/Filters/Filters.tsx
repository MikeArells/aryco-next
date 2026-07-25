// import styles from "@/app/comprar/comprar.module.css";
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

  return (

    <section className="container-fluid">

      <div className={styles.filterSection}>

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

          {/* <button className={styles.searchButton}>
            Buscar
          </button> */}

        </div>

      </div>

    </section>

  );
}

