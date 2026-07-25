
import type { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { createClient } from "@/lib/supabase/server";

// const supabase = createClient();

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

// type Article = {
//   id: number;
//   title: string;
//   category: string;
//   author: string;
//   date: string;
//   content: string;
//   newsImage: string[];
//   slug: string;
// };

// import { useParams } from "next/navigation";

// type Props = {
//   params: Promise<{ slug: string }>;
// };

// export async function generateMetadata(
//   { params }: Props
// ): Promise<Metadata> {
//   const { slug } = await params;

//   const { data } = await supabase
//     .from("news")
//     .select("*")
//     .eq("slug", slug)
//     .single();

//   if (!data) {
//     return {
//       title: "Artículo no encontrado",
//     };
//   }

//   return {
//     title: data.title,
//     description: data.summary,
//     openGraph: {
//       title: data.title,
//       description: data.summary,
//       images: data.newsImage,
//       type: "article",
//     },
//   };
// }

// export default function ArticlePage() {
//   const params = useParams();
//   const slug = params.slug as string;

//   const [article, setArticle] = useState<Article | null>(null);
//   const [popular, setPopular] = useState<Article[]>([]);

//   useEffect(() => {
//     async function fetchData() {
//       const { data, error } = await supabase
//         .from("news")
//         .select("*");

//       if (error) {
//         console.error(error);
//         return;
//       }

//       const found = data.find((item) => item.slug === slug);
//       setArticle(found || null);

//       console.log("Artículo encontrado:", found);
//       console.log("Imagen completa:", found?.newsImage);
//       console.log("Primera imagen:", found?.newsImage?.[0]);

//       const popularArticles = data.slice(0, 5);
//       setPopular(popularArticles);
//     }

//     if (slug) fetchData();
//   }, [slug]);

//   if (!article) return <p>Cargando artículo...</p>;

//   return (

//     <>
//       {/* Google Tag Manager */}
//       <Script id="gtm-script" strategy="afterInteractive">
//         {`
//           (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//           new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//           j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//           'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//           })(window,document,'script','dataLayer','GTM-NXVB4N8G');
//         `}
//       </Script>

//       {/* NOSCRIPT */}
//       <noscript>
//         <iframe
//           src="https://www.googletagmanager.com/ns.html?id=GTM-NXVB4N8G"
//           height="0"
//           width="0"
//           style={{ display: "none", visibility: "hidden" }}
//         ></iframe>
//       </noscript>

//       {/* NAV */}
//       <section id="title" className="gradient-background">
//         <div className="container">
//           <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
            
//             <div className="hamburger d-md-none" id="hamburger">
//               <span></span>
//               <span></span>
//               <span></span>
//             </div>

//             <div className="nav-wrapper" id="nav-wrapper">

//               <ul className="nav col-6 col-md-auto mb-2 justify-content-center mb-md-0">
//                 <li><Link href="/comprar" className="nav-link px-5 text-white">Comprar</Link></li>
//                 <li><Link href="/rentar" className="nav-link px-5 text-white">Rentar</Link></li>
//                 <li><Link href="/vender" className="nav-link px-5 text-white">Vender</Link></li>
//               </ul>

//               <div className="logo">
//                 <Link href="/">
//                   <Image 
//                     src="/Arellano-cia.jpg" 
//                     alt="Logo" 
//                     width={180}
//                     height={60}
//                     className="logo"/>
//                 </Link>
//               </div>

//               <ul className="nav col-6 col-md-auto mb-2 justify-content-center mb-md-0">
//                 <li><Link href="/blog" className="nav-link px-5 text-white">Blog</Link></li>
//                 <li><Link href="/nosotros" className="nav-link px-5 text-white">Nosotros</Link></li>
//               </ul>

//               <div className="col-md-3 text-end">
//                 <button className="btn btn-outline-primary me-4" disabled>
//                   Cotizar seguro
//                 </button>
//                 <Link href="/register" className="btn btn-primary">
//                   Iniciar sesión
//                 </Link>
//               </div>

//             </div>
//           </header>
//         </div>
//       </section>

//     <div className="containerNews">
//       <div className="ArticuloRow3">
//         <div className="articleContainer">

          

//           {/* ARTÍCULO */}
//           <article className="articleMain">
//             <span className="articleCategory">{article.category}</span>

//             <a
//               href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="shareBtn"
//             >
//               <i className="bi bi-facebook"></i> 
//             </a>

//             <h1 className="articleTitle">{article.title}</h1>

//             <div className="articleMeta">
//               <span>{article.author}</span>
//               <br />
//               <span>{article.date}</span>
//             </div>

//             {article.newsImage ? (
//               <Image
//                 src={article.newsImage?.[0] || "/default-news.jpg"}
//                 alt={article.title}
//                 className="articleImage"
//                 width={600}
//                 height={200}
//               />
//             ) : null}

//             <div className="articleContent">
//               {article.content}
//             </div>
//           </article>

//           {/* SIDEBAR */}
//           <aside className="sidebar">
//             <h3 className="sidebarTitle">Artículos populares</h3>

//             {popular.map((item) => (
//               <Link
//                 key={item.id}
//                 href={`/blog/${item.slug}`}
//                 className="newsLink"
//               >
//                 <div className="newsItem">
//                   <span>{item.category}</span>
//                   <h6>{item.title}</h6>
//                 </div>
//               </Link>
//             ))}
//           </aside>

//         </div>

//         {/* CTA */}
//         <div className="ctaContainer">
//           <h2>¿List@ para encontrar tu próxima casa?</h2>
//           <p>
//             Explora las mejores propiedades en Aguascalientes seleccionadas para ti.
//           </p>

//           <Link href="/comprar" className="ctaButton">
//             Ver casas disponibles
//           </Link>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }