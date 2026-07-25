import Sidebar from "@/components/Admin/Sidebar/Sidebar";
// import PropertyForm from "@/components/Admin/PropertyForm/PropertyForm";
import EditPropertyForm from "@/components/Admin/EditPropertyForm/EditPropertyForm";
import { getProperty } from "@/services/propertyService";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditPropertyPage({
  params,
}: Props) {
  const { id } = await params;

  const property = await getProperty(Number(id));

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <main style={{ flex: 1, padding: "40px" }}>
        {/* <PropertyForm property={property} /> */}
        <EditPropertyForm property={property} />
      </main>
    </div>
  );
}