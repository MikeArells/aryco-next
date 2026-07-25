"use client";

import Sidebar from "../Sidebar/Sidebar";
import PropertyForm from "../PropertyForm/PropertyForm";
import PropertyList from "../PropertyList/PropertyList";
import { Propiedad } from "@/types/propiedad";
import AuthGuard from "../AuthGuard/AuthGuard";

interface AdminDashboardProps {
  properties: Propiedad[];
}

export default function AdminDashboard({
  properties,
}: AdminDashboardProps) {
  return (
    <AuthGuard>
     <div className="admin-dashboard">

      <Sidebar />

      <main className="admin-content">

        <section>
          <h1>Panel de administración</h1>
          <p>Gestiona tus propiedades</p>
        </section>

        <section>
          <PropertyForm />
        </section>

        <section>
          <PropertyList properties={properties} />
        </section>

      </main>

    </div>
    </AuthGuard>
  );
}

