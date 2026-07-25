"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./PropertyGallery.module.css";


interface Props {
  title: string;
  images: string[];
}

export default function PropertyGallery({ title, images }: Props) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <>
      {/* Imagen principal */}
      <div className={styles.mainImage}>
        <Image
          src={selectedImage}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 992px) 100vw, 70vw"
        />
      </div>

      {/* Galería */}
      <div className={styles.gallery}>
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Imagen ${index + 1}`}
            width={90}
            height={70}
            className={`${styles.thumbnail} ${
              selectedImage === img ? styles.active : ""
            }`}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
    </>
  );
}