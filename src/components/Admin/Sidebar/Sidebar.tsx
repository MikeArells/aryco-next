"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";
// import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const supabase = createClient();

const tabs = [
  {
    href: "/dashboard/propiedades",
    label: "Registro de propiedades",
  },
  {
    href: "/dashboard/propiedades/editar",
    label: "Editar propiedades",
  },
  {
    href: "/dashboard/analytics",
    label: "Análisis",
  },
  {
    href: "/dashboard/noticias",
    label: "Registro de noticias",
  },
  {
    href: "/dashboard/noticias/editar",
    label: "Editar noticias",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    alert("Error al cerrar sesión");
    console.error(error);
    return;
  }

  router.push("/login");
  router.refresh();
};

  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}>Panel</h2>

      <nav className={styles.menu}>
        {tabs.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className={`${styles.button} ${
              pathname === tab.href ? styles.active : ""
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </nav>

      <button className={`${styles.button} ${styles.logout}`}
      onClick={handleLogout}
      >
        Cerrar sesión
      </button>
      
    </aside>
  );
}