import { createClient } from "@/lib/supabase/client";

const supabase = createClient();

export async function getProperty(id: string) {
  const { data, error } = await supabase
    .from("propiedades")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}