import type { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { createClient } from "@/lib/supabase/server";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params;
  

  const supabase = await createClient();

  const { data } = await supabase
    .from("news")
    .select("*")
    .eq("slug", slug)
    .single();

  console.log(
  "COLUMNAS DISPONIBLES:",
  Object.keys(data || {})
);

console.log(
  "IMAGEN:",
  JSON.stringify(data?.newsImage)
);

  if (!data) {
    return {
      title: "Artículo no encontrado",
    };
  }

  return {
    title: data.title,
    description: data.summary,
    openGraph: {
      title: data.title,
      description: data.summary,
      url: `https://arycobr.com/blog/${slug}`,
      images: [
        {
          url: data.newsImage?.[0],
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
      type: "article",
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  return <ArticleClient slug={slug} />;
}