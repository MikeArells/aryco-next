import { createClient } from "@/lib/supabase/client";
import { NewsFormData } from "@/types/newsForm";

const supabase = createClient();

export async function createNews(
  
  formData: NewsFormData
) {
  console.log("🔥 CREATE NEWS EJECUTÁNDOSE");
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Debes iniciar sesión.");
  }

  const imageUrls: string[] = [];

  for (const file of formData.newsImage) {
    const fileName = `${user.id}/${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from("news")
      .upload(fileName, file);

    if (error) {
      throw error;
    }

    const { data } = supabase.storage
      .from("news")
      .getPublicUrl(fileName);

    imageUrls.push(data.publicUrl);
  }

  const payload = {
    ...formData,
    newsImage: imageUrls,
    user_id: user.id,
  };

  const { error } = await supabase
    .from("news")
    .insert([payload]);

  if (error) {
    throw error;
  }

  return payload;
}

export async function getNews() {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data;
}

export async function getNewsById(id: number) {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function getNewsBySlug(slug: string) {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function updateNews(
  id: number,
  updates: Partial<NewsFormData>
) {
  console.log("🟢 UPDATE NEWS", id);
  const { data, error } = await supabase
    .from("news")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function deleteNews(id: number) {
  const { error } = await supabase
    .from("news")
    .delete()
    .eq("id", id);

  if (error) {
    throw error;
  }
}