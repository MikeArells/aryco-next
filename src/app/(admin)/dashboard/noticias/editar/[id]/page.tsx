import { notFound } from "next/navigation";

import Sidebar from "@/components/Admin/Sidebar/Sidebar";
import EditNewsForm from "@/components/Admin/EditNewsForm/EditNewsForm";

import { getNewsById } from "@/services/newsService";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditNewsPage({ params }: PageProps) {
  const { id } = await params;

  const news = await getNewsById(Number(id));

  if (!news) {
    notFound();
  }

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <main style={{ flex: 1, padding: "40px" }}>
        <EditNewsForm news={news} />
      </main>
    </div>
  );
}