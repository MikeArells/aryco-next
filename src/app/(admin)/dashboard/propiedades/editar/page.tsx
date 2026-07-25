import Sidebar from "@/components/Admin/Sidebar/Sidebar";
import PropertyList from "@/components/Admin/PropertyList/PropertyList";
import { getProperties } from "@/services/propertyService";

export default async function EditPropertiesPage() {
  const properties = await getProperties();

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <main style={{ flex: 1, padding: "40px" }}>
        <h2>Propiedades registradas</h2>

        <p
          style={{
            margin: "10px 0 20px",
            fontSize: "16px",
            color: "#555",
          }}
        >
          Total de propiedades: <strong>{properties.length}</strong>
        </p>

        <PropertyList properties={properties} />
      </main>
    </div>
  );
}