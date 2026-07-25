"use client";

import Image from "next/image";
import type { Propiedad } from "@/types/propiedad";
import styles from "@/app/(public)/comprar/comprar.module.css";
import Link from "next/link";

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // quita acentos
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

interface PropertyListProps {
  propiedades: Propiedad[];
}

export default function PropertyList({
  propiedades,
}: PropertyListProps) {
  return (
    <div className={styles.listWrapper}>

      <h3 className="title-prop">
        Propiedades en venta en Aguascalientes.
      </h3>

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
                  className="card-img-top"
                />

                <div className="card-body">

                  <h5>{propiedad.titulo}</h5>

                  <p>
                    $
                    {Number(propiedad.precio).toLocaleString("es-MX")}
                  </p>

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