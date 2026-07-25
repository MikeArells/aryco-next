import Sidebar from "@/components/Admin/Sidebar/Sidebar";
import NewsList from "@/components/Admin/NewsList/NewsList";
import { getNews } from "@/services/newsService";

export default async function EditNewsPage() {

    const news = await getNews();

    return (

        <div style={{ display: "flex" }}>

            <Sidebar />

            <main
                style={{
                    flex: 1,
                    padding: "40px",
                }}
            >

            <h1>Noticias</h1>

            <p
            style={{
                margin: "10px 0 20px",
                fontSize: "16px",
                color: "#555",
            }}
            >
            Total de noticias: <strong>{news.length}</strong>
            </p>

            <NewsList news={news} />

            </main>

        </div>

    );

}