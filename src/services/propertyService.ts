// import { supabase } from "@/lib/supabase";
import { PropertyFormData } from "@/types/propertyForm";
import { createClient } from "@/lib/supabase/client";

const supabase = createClient();

export async function createProperty(
  formData: PropertyFormData
) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Debes iniciar sesión.");
  }

  const imageUrls: string[] = [];

  for (const file of formData.images) {
    const fileName = `${user.id}/${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from("propiedades")
      .upload(fileName, file);

    if (error) {
      throw error;
    }

    const { data } = supabase.storage
      .from("propiedades")
      .getPublicUrl(fileName);

    imageUrls.push(data.publicUrl);
  }

  const payload = {
    ...formData,
    images: imageUrls,
    user_id: user.id,
  };

  const { error } = await supabase
    .from("propiedades")
    .insert([payload]);

  if (error) throw error;

  return payload;
}


export async function getProperties() {
  const { data, error } = await supabase
    .from("propiedades")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data;
}

export async function getProperty(id: number) {
  const { data, error } = await supabase
    .from("propiedades")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw error;
  }

  return data;
}

function getStoragePathFromUrl(url: string) {
  const marker = "/storage/v1/object/public/propiedades/";

  const index = url.indexOf(marker);

  if (index === -1) {
    throw new Error("URL de imagen inválida.");
  }

  return url.substring(index + marker.length);
}

export async function updateProperty(
  id: number,
  formData: PropertyFormData,
  originalImages: string[],
  existingImages: string[],
  newImages: File[]
) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Debes iniciar sesión.");
  }

  // 1. Detectar imágenes eliminadas
  const imagesToDelete = originalImages.filter(
    (image) => !existingImages.includes(image)
  );

  // 2. Eliminarlas del bucket
  if (imagesToDelete.length > 0) {
    const paths = imagesToDelete.map(getStoragePathFromUrl);

    const { error } = await supabase.storage
      .from("propiedades")
      .remove(paths);

    if (error) throw error;
  }

  // 3. Subir imágenes nuevas
  const uploadedUrls: string[] = [];

  for (const file of newImages) {
    const fileName = `${user.id}/${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from("propiedades")
      .upload(fileName, file);

    if (error) throw error;

    const { data } = supabase.storage
      .from("propiedades")
      .getPublicUrl(fileName);

    uploadedUrls.push(data.publicUrl);
  }

  // 4. Combinar imágenes existentes + nuevas
  const finalImages = [
    ...existingImages,
    ...uploadedUrls,
  ];

  // 5. Actualizar propiedad
  const { error } = await supabase
    .from("propiedades")
    .update({
      titulo: formData.titulo,
      subtitulo: formData.subtitulo,
      transaccion: formData.transaccion,
      precio: formData.precio,
      tipoPropiedad: formData.tipoPropiedad,
      terreno: formData.terreno,
      construccion: formData.construccion,
      ocupacion: formData.ocupacion,
      pago: formData.pago,
      descripcion: formData.descripcion,
      maps_url: formData.maps_url,
      video: formData.video,
      servicios: formData.servicios,
      recamaras: formData.recamaras,
      banos: formData.banos,
      carros: formData.carros,
      images: finalImages,
    })
    .eq("id", id);

  if (error) throw error;
}