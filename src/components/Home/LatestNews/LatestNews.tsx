import Image from "next/image";
import Link from "next/link";
import type { News } from "@/types/news";
import styles from "./LatestNews.module.css";

interface LatestNewsProps {
  news: News[];
}

export default function LatestNews({ news }: LatestNewsProps) {
  const latestNews = news.slice(0, 3);

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <div>
            <h2>Noticias y consejos inmobiliarios</h2>

            <p>
              Información útil para comprar, vender o rentar
              una propiedad en Aguascalientes.
            </p>
          </div>

          <Link href="/blog" className={styles.viewAll}>
            Ver todas →
          </Link>
        </div>

        <div className={styles.grid}>
          {latestNews.map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.slug}`}
              className={styles.card}
            >
              <div className={styles.imageWrapper}>
                {article.newsImage?.length > 0 ? (
                  <Image
                    src={article.newsImage[0]}
                    alt={article.title}
                    fill
                    className={styles.image}
                  />
                ) : (
                  <Image
                    src="/Material/imgHero1.jpeg"
                    alt={article.title}
                    fill
                    className={styles.image}
                  />
                )}
              </div>

              <div className={styles.cardBody}>

                <span className={styles.category}>
                  {article.category}
                </span>

                <h3>{article.title}</h3>

                <p className={styles.summary}>
                  {article.summary}
                </p>

                <div className={styles.meta}>
                  <span>
                    {article.readTime
                      ? `${article.readTime} min de lectura`
                      : ""}
                  </span>

                  <span>
                    Leer artículo →
                  </span>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}