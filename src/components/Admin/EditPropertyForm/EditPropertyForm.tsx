"use client";

import { useState } from "react";
import { PropertyFormData } from "@/types/propertyForm";
import styles from "./EditPropertyForm.module.css";
import { updateProperty } from "@/services/propertyService";
import { Propiedad } from "@/types/propiedad";
import PropertyImagesEditor from "@/components/Admin/PropertyImagesEditor/PropertyImagesEditor";

interface EditPropertyFormProps {
  property: Propiedad;
}

export default function EditPropertyForm({ 
    property,
 }: EditPropertyFormProps) {
  const [formData, setFormData] = useState<PropertyFormData>({
  titulo: property.titulo,
  subtitulo: property.subtitulo,
  transaccion: property.transaccion,
  precio: property.precio,
  tipoPropiedad: property.tipoPropiedad,
  terreno: property.terreno,
  construccion: property.construccion,

  ocupacion: property.ocupacion ?? "",
  pago: property.pago ?? "",
  descripcion: property.descripcion ?? "",
  maps_url: property.maps_url ?? "",
  video: property.video ?? "",

  servicios: property.servicios,
  recamaras: property.recamaras,
  banos: property.banos,
  carros: property.carros,
  images: [],
});

const [existingImages, setExistingImages] = useState<string[]>(
  property.images ?? []
);

const [newImages, setNewImages] = useState<File[]>([]);

  const numericFields = [
    "precio",
    "terreno",
    "construccion",
    "recamaras",
    "banos",
    "carros",

  ];


// HANDLE CHANGE  
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

// handleSubmit()
const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  try {
    await updateProperty(
    property.id,
    formData,
    property.images,
    existingImages,
    newImages
  );


    console.log(property);

    alert("Propiedad actualizada correctamente.");
  } catch (error) {
    console.error(error);

    alert(
      error instanceof Error
        ? error.message
        : "Ocurrió un error."
    );
  }
};
  
const availableServices = [
  "Agua",
  "Luz",
  "Internet",
  "Gas",
  "Vigilancia 24/7",
  "Mantenimiento",
  "Limpieza",
  ];


// handleServiceChange()
const handleServiceChange = (service: string) => {
  setFormData((prev) => {
    const exists = prev.servicios.includes(service);

    return {
      ...prev,
      servicios: exists
        ? prev.servicios.filter((s) => s !== service)
        : [...prev.servicios, service],
    };
  });
};

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Editar propiedad</h1>

      <p className={styles.subtitle}>
        Completa los datos de la propiedad.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          {/* Título */}
          <div className={styles.inputGroup}>
            <label htmlFor="titulo" className={styles.label}>
              Título
            </label>

            <input
              className={styles.input}
              id="titulo"
              name="titulo"
              type="text"
              value={formData.titulo}
              onChange={handleChange}
              required
            />
          </div>

          {/* Subtítulo */}
          <div className={styles.inputGroup}>
            <label htmlFor="subtitulo" className={styles.label}>
              Subtítulo
            </label>

            <input
              className={styles.input}
              id="subtitulo"
              name="subtitulo"
              type="text"
              value={formData.subtitulo}
              onChange={handleChange}
              required
            />
          </div>

          {/* Transacción */}
          <div className={styles.inputGroup}>
            <label htmlFor="transaccion" className={styles.label}>
              Transacción
            </label>

            <select
              className={styles.select}
              id="transaccion"
              name="transaccion"
              value={formData.transaccion}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona</option>
              <option value="EN VENTA">En venta</option>
              <option value="EN RENTA">En renta</option>
            </select>
          </div>

          {/* Precio */}
          <div className={styles.inputGroup}>
            <label htmlFor="precio" className={styles.label}>
              Precio
            </label>
            <input
              className={styles.input}
              id="precio"
              name="precio"
              type="number"
              value={formData.precio ?? ""}
              onChange={handleChange}
              required
            />
          </div>

          {/* Tipo de propiedad */}
          <div className={styles.inputGroup}>
            <label htmlFor="tipoPropiedad" className={styles.label}>
              Tipo de propiedad
            </label>

            <select
              className={styles.select}
              id="tipoPropiedad"
              name="tipoPropiedad"
              value={formData.tipoPropiedad}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona</option>
              <option value="CASA">Casa</option>
              <option value="DEPARTAMENTO">Departamento</option>
              <option value="BODEGA">Bodega</option>
              <option value="TERRENO">Terreno</option>
              <option value="NAVE INDUSTRIAL">Nave Industrial</option>
              <option value="RANCHO">Rancho</option>
              <option value="EDIFICIO">Edificio</option>
            </select>
          </div>
        </div>

        <div className={styles.inputGroup}>
            <label htmlFor="terreno" className={styles.label}>
                Terreno (m²)
            </label>

            <input
                className={styles.input}
                id="terreno"
                name="terreno"
                type="number"
                step="0.01"
                value={formData.terreno ?? ""}
                onChange={handleChange}
            />
        </div>

        <div className={styles.inputGroup}>
            <label htmlFor="construccion" className={styles.label}>
                Construcción (m²)
            </label>

            <input
                className={styles.input}
                id="construccion"
                name="construccion"
                type="number"
                step="0.01"
                value={formData.construccion ?? ""}
                onChange={handleChange}
            />
        </div>

        <div className={styles.inputGroup}>
            <label htmlFor="ocupacion" className={styles.label}>
                Ocupación
            </label>

            <input
                className={styles.input}
                id="ocupacion"
                name="ocupacion"
                type="text"
                value={formData.ocupacion ?? ""}
                onChange={handleChange}
            />
        </div>

        <div className={styles.inputGroup}>
            <label htmlFor="pago" className={styles.label}>
                Forma de pago
            </label>

            <input
                className={styles.input}
                id="pago"
                name="pago"
                type="text"
                value={formData.pago ?? ""}
                onChange={handleChange}
                required
            />
        </div>

        <div className={styles.inputGroupFull}>
            <label htmlFor="descripcion" className={styles.label}>
                Descripción
            </label>

            <textarea
                className={styles.textarea}
                id="descripcion"
                name="descripcion"
                value={formData.descripcion ?? ""}
                onChange={handleChange}
                required
            />
        </div>

        <div className={styles.inputGroup}>
            <label htmlFor="maps_url" className={styles.label}>
                URL de Google Maps
            </label>

            <input
                className={styles.input}
                id="maps_url"
                name="maps_url"
                type="url"
                value={formData.maps_url ?? ""}
                onChange={handleChange}
            />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="video" className={styles.label}>
            URL del video
          </label>

          <input
            className={styles.input}
            id="video"
            name="video"
            type="url"
            value={formData.video ?? ""}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroupFull}>
          <label className={styles.label}>
            Servicios
          </label>

          <div className={styles.servicesGrid}>
            {availableServices.map((service) => (
              <label
                key={service}
                className={styles.checkbox}
              >
                <input
                  type="checkbox"
                  checked={formData.servicios.includes(service)}
                  onChange={() => handleServiceChange(service)}
                />

                {service}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="recamaras" className={styles.label}>
            Recámaras
          </label>

          <input
            className={styles.input}
            id="recamaras"
            name="recamaras"
            type="number"
            value={formData.recamaras ?? ""}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="banos" className={styles.label}>
            Baños
          </label>

          <input
            className={styles.input}
            id="banos"
            name="banos"
            type="number"
            step="0.5"
            value={formData.banos ?? ""}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="carros" className={styles.label}>
            Cajones
          </label>

          <input
            className={styles.input}
            id="carros"
            name="carros"
            type="number"
            value={formData.carros ?? ""}
            onChange={handleChange}
          />
        </div>

        <PropertyImagesEditor
          existingImages={existingImages}
          setExistingImages={setExistingImages}
          newImages={newImages}
          setNewImages={setNewImages}
        />

        <div className={styles.actions}>
          <button
            type="submit"
            className={styles.submitButton}
          >
            Guardar propiedad
          </button>
        </div>
        
      </form>
    </div>
  );
}