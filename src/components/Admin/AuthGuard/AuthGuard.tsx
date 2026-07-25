"use client";

import { useEffect, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
// import { supabase } from "@/lib/supabase";
import { createClient } from "@/lib/supabase/client";

const supabase = createClient();

interface AuthGuardProps {
  children: ReactNode;
}

export default function AuthGuard({
  children,
}: AuthGuardProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  async function checkUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.replace("/login");
      return;
    }

    setLoading(false);
  }

  checkUser();
}, [router]);

if (loading) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "20px",
      }}
    >
      Verificando sesión...
    </div>
  );
}

  return <>{children}</>;
}