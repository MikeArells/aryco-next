"use client";

import { useState } from "react";
import styles from "./NewsForm.module.css";
import { createNews } from "@/services/newsService";
import { NewsFormData } from "@/types/newsForm";
import { News } from "@/types/news";

interface NewsFormProps {
  news?: News;
}

export default function NewsForm({ news }: NewsFormProps) {
  const [formData, setFormData] = useState<NewsFormData>({
    title: news?.title ?? "",
    category: news?.category ?? "",
    summary: news?.summary ?? "",
    author: news?.author ?? "",
    readTime: news?.readTime ?? null,
    content: news?.content ?? "",
    slug: news?.slug ?? "",
    newsImage: [],
  });

  const numericFields = ["readTime"];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    let newValue: string | number | null = value;

    if (numericFields.includes(name)) {
      newValue = value === "" ? null : Number(value);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = e.target.files;

    if (!files) return;

    setFormData((prev) => ({
      ...prev,
      newsImage: Array.from(files),
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const news = await createNews(formData);

      console.log(news);

      alert("Noticia publicada correctamente.");
    } catch (error) {
      console.error(error);

      alert(
        error instanceof Error
          ? error.message
          : "Ocurrió un error."
      );
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Publicar noticia</h1>

      <p className={styles.subtitle}>
        Completa la información de la noticia.
      </p>

      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        {/* Título */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            Título
          </label>

          <input
            className={styles.input}
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        {/* Categoría */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            Categoría
          </label>

          <select
            className={styles.select}
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona</option>
            <option value="NOTICIAS">Noticias</option>
            <option value="TENDENCIAS">Tendencias</option>
            <option value="NACIONAL">Nacional</option>
            <option value="INTERNACIONAL">Internacional</option>
          </select>
        </div>

        {/* Autor */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            Autor
          </label>

          <input
            className={styles.input}
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>

        {/* Tiempo de lectura */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            Tiempo de lectura (min)
          </label>

          <input
            className={styles.input}
            type="number"
            name="readTime"
            value={formData.readTime ?? ""}
            onChange={handleChange}
          />
        </div>

        {/* Slug */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            Slug
          </label>

          <input
            className={styles.input}
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            placeholder="mercado-inmobiliario-2026"
            required
          />
        </div>

        {/* Resumen */}
        <div className={styles.inputGroupFull}>
          <label className={styles.label}>
            Resumen
          </label>

          <textarea
            className={styles.textarea}
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            rows={4}
            required
          />
        </div>

        {/* Contenido */}
        <div className={styles.inputGroupFull}>
          <label className={styles.label}>
            Contenido
          </label>

          <textarea
            className={styles.textarea}
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows={12}
            required
          />
        </div>

        {/* Imágenes */}
        <div className={styles.inputGroupFull}>
          <label className={styles.label}>
            Imágenes
          </label>

          <input
            className={styles.input}
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        <div className={styles.actions}>
          <button
            type="submit"
            className={styles.submitButton}
          >
            Publicar noticia
          </button>
        </div>
      </form>
    </div>
  );
}