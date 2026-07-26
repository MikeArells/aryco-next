
"use client";

import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

const supabase = createClient();

export default function BlogPage() {
  type News = {
  id: number;
  title: string;
  summary: string;
  description: string;
  readTime: number;
  category: string;
  newsImage: string[];
  slug: string;
};

const [news, setNews] = useState<News[]>([]);
const featured = news[0]; // Assuming the first article is the featured one

  useEffect(() => {
  async function fetchNews() {
    const { data, error } = await supabase
      .from("news")
      .select("*");

    if (error) {
      console.log(error);
      return;
    }

    if (data) {
      setNews(data);
    }
  }

  fetchNews();
}, []);

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

      {/* NOSCRIPT */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-NXVB4N8G"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      {/* NAV */}
     
      {/* CONTENIDO */}
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

        <div className="row3">

          {/*============
              NOTICIAS 
          ==============*/}

            {/* RECENT */}

          <div className="recentNews">
            <h5>Noticias</h5>
              {news
                .filter((article) => article.category?.toLowerCase() === "noticias")
                .map((article) => (
                  <a
                    key={article.id}
                    href={`/blog/${article.slug}`}
                    className="newsLink"
                  >
                    <div className="newsItem">
                      <span className="category">{article.category}</span>

                      <h6>{article.title}</h6>

                      <span>
                        {article.readTime} min
                        {article.readTime === 1 ? "" : "s"} lectura
                      </span>
                    </div>
                  </a>
              ))}
          </div>

            {/* FEATURED NEWS */}

          <div className="featuredNews">
            {featured && (
              <Link href={`/blog/${featured.slug}`} className="newsLink">
                <Image
                  className="featPhoto"
                  src={
                    Array.isArray(featured.newsImage)
                      ? featured.newsImage[0]
                      : featured.newsImage
                  }
                  alt={featured.title}
                  width={800}
                  height={500}
                />

                <span className="category">{featured.category}</span>
                <h4>{featured.title}</h4>
                <p>{featured.summary}</p>
              </Link>
            )}

              {/* FOUR CARDS */}
            <div className="cards-container">
              {news.slice(1, 5).map((article) => {
                const imageUrl = Array.isArray(article.newsImage)
                  ? article.newsImage[0]
                  : article.newsImage;

                return (
                  <a
                    key={article.id}
                    href={`/blog/${article.slug}`}
                    className="card newsLink"
                  >
                    <Image 
                      src={imageUrl} 
                      alt={article.title} 
                      width={400}
                      height={300}
                    />
                    <div className="card-content">
                      <span className="category">{article.category}</span>
                      <h5>{article.title}</h5>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

              {/* TRENDS */}

          <div className="trends">
            <h5>Tendencias</h5>
              {news
                .filter((article) => article.category?.toLowerCase() === "tendencias")
                .map((article) => (
                  <a
                    key={article.id}
                    href={`/blog/${article.slug}`}
                    className="newsLink"
                  >
                    <div className="newsItem">
                      <span className="category">{article.category}</span>

                      <h6>{article.title}</h6>

                      <span>
                        {article.readTime} min
                        {article.readTime === 1 ? "" : "s"} lectura
                      </span>
                    </div>
                  </a>
              ))}
          </div>

        </div>

        <div className="moreSection">
          <h3>Más noticias</h3>
          <div id="moreNewsContainer" className="moreNewsGrid"></div>
        </div>

        <div className="moreNews"></div>

      </div>

      {/* Bootstrap */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />

      {/* Supabase */}
      {/* <Script
        src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"
        strategy="afterInteractive"
      /> */}

      {/* Tus scripts */}
      {/* <Script src="/JS/supabaseClient.js" strategy="afterInteractive" />
      <Script src="/JS/news.js" strategy="afterInteractive" /> */}
    </>
  );
}