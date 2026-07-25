"use client";

import { useState } from "react";
import styles from "./EditNewsForm.module.css";

import { updateNews } from "@/services/newsService";
import { News } from "@/types/news";
import { NewsFormData } from "@/types/newsForm";

interface EditNewsFormProps {
  news: News;
}

export default function EditNewsForm({ news }: EditNewsFormProps) {
  const [formData, setFormData] = useState<NewsFormData>({
    title: news.title,
    category: news.category,
    summary: news.summary,
    author: news.author,
    readTime: news.readTime,
    content: news.content,
    slug: news.slug,
    newsImage: [],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "readTime" ? (value === "" ? null : Number(value)) : value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    setFormData((prev) => ({
      ...prev,
      newsImage: Array.from(e.target.files!),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const dataToUpdate = {
        ...formData,
        newsImage:
            formData.newsImage.length > 0
            ? formData.newsImage
            : undefined,
        };

    await updateNews(news.id, dataToUpdate);

      alert("Noticia actualizada correctamente.");
    } catch (error) {
      console.error(error);
      alert(error instanceof Error ? error.message : "Ocurrió un error.");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Editar noticia</h1>

      <p className={styles.subtitle}>
        Actualiza la información de la noticia.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Título</label>
            <input className={styles.input} name="title" value={formData.title} onChange={handleChange} required />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Categoría</label>
            <select className={styles.select} name="category" value={formData.category} onChange={handleChange} required>
              <option value="formData.category">Selecciona</option>
              <option value="NOTICIAS">Noticias</option>
              <option value="TENDENCIAS">Tendencias</option>
              <option value="NACIONAL">Nacional</option>
              <option value="INTERNACIONAL">Internacional</option>
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Autor</label>
            <input className={styles.input} name="author" value={formData.author} onChange={handleChange} required />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Tiempo de lectura</label>
            <input className={styles.input} type="number" name="readTime" value={formData.readTime ?? ""} onChange={handleChange} />
          </div>

          <div className={styles.inputGroupFull}>
            <label className={styles.label}>Slug</label>
            <input className={styles.input} name="slug" value={formData.slug} onChange={handleChange} required />
          </div>

          <div className={styles.inputGroupFull}>
            <label className={styles.label}>Resumen</label>
            <textarea className={styles.textarea} name="summary" value={formData.summary} onChange={handleChange} rows={4} required />
          </div>

          <div className={styles.inputGroupFull}>
            <label className={styles.label}>Contenido</label>
            <textarea className={styles.textarea} name="content" value={formData.content} onChange={handleChange} rows={12} required />
          </div>

          <div className={styles.inputGroupFull}>
            <label className={styles.label}>Imágenes nuevas (opcional)</label>
            <input className={styles.input} type="file" multiple accept="image/*" onChange={handleImageChange} />
          </div>
        </div>

        <div className={styles.actions}>
          <button type="submit" className={styles.submitButton}>
            Guardar cambios
          </button>
        </div>

      </form>
    </div>
  );
}
