import Sidebar from "@/components/Admin/Sidebar/Sidebar";
import PropertyForm from "@/components/Admin/PropertyForm/PropertyForm";

export default function PropertiesPage() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <main style={{ flex: 1, padding: "40px" }}>
        <PropertyForm />
      </main>
    </div>
  );
}

