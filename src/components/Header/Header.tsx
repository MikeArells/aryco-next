"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./Header.module.css";


export default function Header() {
  const [menuOpen, setmenuOpen] = useState(false);

  return (

      <section className="gradient-background">
        <div className="container">
          <header className="d-flex flex-wrap align-items-center justify-content-between py-3">

            <button
              className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
              onClick={() => setmenuOpen(!menuOpen)}
            >
              <span />
              <span />
              <span />
            </button>

            <div className={`${styles.navWrapper} ${menuOpen ? styles.open : ""}`}>

  <ul className="nav col-6 col-md-auto mb-2 justify-content-center mb-md-0">
    <li><Link href="/comprar" className="nav-link px-5 text-white">Comprar</Link></li>
    <li><Link href="/rentar" className="nav-link px-5 text-white">Rentar</Link></li>
    <li><Link href="/vender" className="nav-link px-5 text-white">Vender</Link></li>
  </ul>

  <div className="logo">
    <Link href="/">
      <Image
        src="/Arellano-cia.jpg"
        alt="Logo"
        width={180}
        height={60}
        className="logo h-auto"
      />
    </Link>
  </div>

  <ul className="nav col-6 col-md-auto mb-2 justify-content-center mb-md-0">
    <li><Link href="/blog" className="nav-link px-5 text-white">Blog</Link></li>
    <li><Link href="/nosotros" className="nav-link px-5 text-white">Nosotros</Link></li>
  </ul>

  <div className="col-md-3 text-end">
    <button className="btn btn-outline-primary me-4" disabled>
      Cotizar seguro
    </button>

    <Link href="/login" className="btn btn-primary">
      Iniciar sesión
    </Link>
  </div>

</div>

        
          </header>
        </div>
      </section>

      );
}