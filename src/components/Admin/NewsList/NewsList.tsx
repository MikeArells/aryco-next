"use client";

import Link from "next/link";
import { News } from "@/types/news";

interface NewsListProps {
    news: News[];
}

export default function NewsList({
    news,
}: NewsListProps) {

    return (
        <table>

            <thead>
                <tr>
                    <th>Título</th>
                    <th>Categoría</th>
                    {/* <th>Autor</th> */}
                    <th></th>
                </tr>
            </thead>

            <tbody>

                {news.map((article) => (

                    <tr key={article.id}>

                        <td>{article.title}</td>

                        <td>{article.category}</td>

                        {/* <td>{article.author}</td> */}

                        <td>

                            <Link
                                href={`/dashboard/noticias/editar/${article.id}`}
                            >
                                Editar
                            </Link>

                        </td>

                    </tr>

                ))}

            </tbody>

        </table>
    );
}