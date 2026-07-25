"use client";

import Image from "next/image";
import { useRef } from "react";
import styles from "./PropertyImagesEditor.module.css";

interface Props {
  existingImages: string[];
  setExistingImages: React.Dispatch<React.SetStateAction<string[]>>;

  newImages: File[];
  setNewImages: React.Dispatch<React.SetStateAction<File[]>>;
}

export default function PropertyImagesEditor({
  existingImages,
  setExistingImages,
  newImages,
  setNewImages,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddImages = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = e.target.files;


    if (!files) return;

    setNewImages((prev) => [
      ...prev,
      ...Array.from(files),
    ]);

    e.target.value = "";
  };

  const removeExistingImage = (index: number) => {
    setExistingImages((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };

  const removeNewImage = (index: number) => {
    setNewImages((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };

  return (
    <div className={styles.container}>
      <label className={styles.title}>
        Imágenes ({existingImages.length + newImages.length})
      </label>

      <div className={styles.grid}>
        {existingImages.map((image, index) => (
          <div className={styles.card} key={image}>
            <Image
              src={image}
              alt=""
              fill
              className={styles.image}
            />

            <button
              type="button"
              className={styles.remove}
              onClick={() => removeExistingImage(index)}
            >
              ×
            </button>
          </div>
        ))}

        {newImages.map((image, index) => (
          <div className={styles.card} key={index}>
            <Image
              src={URL.createObjectURL(image)}
              alt=""
              fill
              className={styles.image}
            />

            <button
              type="button"
              className={styles.remove}
              onClick={() => removeNewImage(index)}
            >
              ×
            </button>
          </div>
        ))}

        <div
          className={styles.addCard}
          onClick={() => inputRef.current?.click()}
        >
          <span className={styles.plus}>＋</span>

          <p>Add photo</p>

          <input
            ref={inputRef}
            hidden
            type="file"
            multiple
            accept="image/*"
            onChange={handleAddImages}
          />
        </div>
      </div>
    </div>
  );
}