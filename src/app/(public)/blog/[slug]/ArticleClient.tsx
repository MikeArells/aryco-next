"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
// import { supabase } from "@/lib/supabase";
import { createClient } from "@/lib/supabase/client";

type Article = {
  id: number;
  title: string;
  category: string;
  author: string;
  date: string;
  content: string;
  newsImage: string[];
  slug: string;
};

export default function ArticleClient({ slug }: { slug: string }) {
  // const supabase = createClient();

  const [article, setArticle] = useState<Article | null>(null);
  const [popular, setPopular] = useState<Article[]>([]);

  useEffect(() => {
    async function fetchData() {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("news")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();

      if (error || !data) {
        console.error(error);
        return;
      }

      console.log("Slug recibido:", slug);
      console.log("Error:", error);
      console.log("Data:", data);

      // const found = data.find((item: Article) => item.slug === slug);

      setArticle(data);
      
      const { data: popularData, error: popularError } = await supabase
    .from("news")
    .select("*")
    .limit(5);

    if (!popularError) {
  setPopular(popularData ?? []);
}

    setPopular(popularData ?? []);
    }

    if (slug) fetchData();
  }, [slug]);

  if (!article) return <p>Cargando artículo...</p>;

  const shareUrl = encodeURIComponent(
            `https://arycobr.com/blog/${article.slug}`
            );

  return (
    <>
      {/* Google Tag Manager */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NXVB4N8G');
        `}
      </Script>

      {/* NAV */}
      
      {/* FILTERS */}
      <div className="containerNews">
        <div className="row1">
          <div className="dateNews">
            <h6 id="fecha"></h6>
          </div>
          <div className="NewsTitle">
            <h1>NOTICIAS Y TENDENCIAS</h1>
          </div>
        </div>

        <div className="navNews">
          <nav className="navbarNews">
            <div className="menu">
              <a href="#">NOTICIAS</a>
              <a href="#">TENDENCIAS</a>
              <a href="#">NACIONAL</a>
              <a href="#">INTERNACIONAL</a>
              <a href="#">MÁS</a>
            </div>
          </nav>
        </div>
        <div className="ArticuloRow3">
          <div className="articleContainer">

            

            <article className="articleMain">
              <span className="articleCategory">{article.category}</span>

              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shareBtn"
              >
                <i className="bi bi-facebook"></i>
              </a>

              <h1 className="articleTitle">{article.title}</h1>

              <div className="articleMeta">
                <span>{article.author}</span>
                <br />
                <span>{article.date}</span>
              </div>

              {article.newsImage?.[0] && (
                <Image
                  src={article.newsImage[0]}
                  alt={article.title}
                  className="articleImage"
                  width={600}
                  height={200}
                />
              )}

              <div className="articleContent">
                {article.content}
              </div>
            </article>

            <aside className="sidebar">
              <h3 className="sidebarTitle">Artículos populares</h3>

              {popular.map((item) => (
                <Link
                  key={item.id}
                  href={`/blog/${item.slug}`}
                  className="newsLink"
                >
                  <div className="newsItem">
                    <span>{item.category}</span>
                    <h6>{item.title}</h6>
                  </div>
                </Link>
              ))}
            </aside>

          </div>
          
                   {/* CTA */}
         <div className="ctaContainer">
           <h2>¿List@ para encontrar tu próxima casa?</h2>
           <p>
             Explora las mejores propiedades en Aguascalientes seleccionadas para ti.
           </p>

           <Link href="/comprar" className="ctaButton">
             Ver casas disponibles
           </Link>
         </div>

        </div>
      </div>
    </>
  );
}