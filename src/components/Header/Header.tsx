import Link from "next/link";
import Image from "next/image";


export default function Header() {
  return (

      <section className="gradient-background">
        <div className="container">
          <header className="d-flex flex-wrap align-items-center justify-content-between py-3">

            <div className="hamburger d-md-none" id="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="nav-wrapper" id="nav-wrapper">

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
                    className="logo h-auto"/>
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