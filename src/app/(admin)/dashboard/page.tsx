import AdminDashboard from "@/components/Admin/Dashboard/AdminDashboard";
import { getProperties } from "@/services/propertyService";

export default async function AdminPage() {

  const properties = await getProperties();

  return (
    <AdminDashboard properties={properties} />
  );
}