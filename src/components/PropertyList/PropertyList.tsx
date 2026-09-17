"use client";

import Image from "next/image";
// import type { PropiedadL } from "@/types/propiedad";
import styles from "@/app/(public)/comprar/comprar.module.css";
import Link from "next/link";
import type { PropiedadListado } from "@/types/propiedad";

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // quita acentos
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

interface PropertyListProps {
  propiedades: PropiedadListado[];
}

export default function PropertyList({
  propiedades,
}: PropertyListProps) {
  
  return (
    <div className={styles.listWrapper}>

      {/* <h3 className="title-prop">
        Propiedades en venta en Aguascalientes.
      </h3> */}

      <div className={styles.propertyList}>

        <div className="row row-cols-1 row-cols-sm-2 g-3">

          {propiedades.map((propiedad) => {

           const slug = slugify(propiedad.titulo ?? "");

          console.log({
            id: propiedad.id,
            titulo: propiedad.titulo,
            images: propiedad.images,
          });

          return (
            <div className="col" key={propiedad.id}>
              <Link
                href={`/comprar/${propiedad.id}/${slug}`}
                className="text-decoration-none text-dark"
              >

              <div className="card shadow-sm">

                <Image
                  src={propiedad.images[0]}
                  alt={propiedad.titulo ?? ""}
                  width={500}
                  height={320}
                  sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, 500px"
                  className="card-img-top"
                />

                  <div className="card-body">

                    <div className={styles.priceRow}>
                      <span className={styles.price}>
                        $
                        {Number(propiedad.precio).toLocaleString("es-MX")}
                      </span>

                      <span className={styles.status}>
                        {propiedad.transaccion}
                      </span>
                    </div>

                    <div className={styles.details}>
                      {propiedad.recamaras} recamaras · {propiedad.banos} baño
                    </div>

                    <div className={styles.location}>
                      📍 {propiedad.subtitulo}
                    </div>

                  </div>

                </div>
              </Link>
            </div>
          );
        })}

        </div>

      </div>

    </div>
  );
}