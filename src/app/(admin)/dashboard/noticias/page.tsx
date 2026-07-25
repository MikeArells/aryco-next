import Sidebar from "@/components/Admin/Sidebar/Sidebar";
import NewsForm from "@/components/Admin/NewsForm/NewsForm";

export default function NewsPage() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <main style={{ flex: 1, padding: "40px" }}>
        <NewsForm />
      </main>
    </div>
  );
}
