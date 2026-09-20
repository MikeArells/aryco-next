"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./AIChat.module.css";

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);

   useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreeting(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    setOpen(true);
    setShowGreeting(false);
  };

  return (
    <>
      {!open && (
        <>
          {showGreeting && (
            <div className={styles.greeting}>
              Hola 👋 ¿En qué te puedo ayudar?
            </div>
          )}

        <button
          className={styles.chatButton}
          onClick={handleOpen}
          aria-label="Abrir asistente de Aryco"
        >
          <Image
            src="/Material/aryco-logo.png"
            alt="Aryco"
            width={58}
            height={58}
            className={styles.logo}
          />
        </button>
        </>
      )}

      {open && (
        <div className={styles.chatWindow}>
          <div className={styles.header}>
            <div className={styles.headerInfo}>
              <Image
                src="/Material/aryco-logo.png"
                alt="Aryco"
                width={38}
                height={38}
              />

              <div>
                <strong>Asistente Aryco</strong>
                <span>Encuentra tu propiedad ideal</span>
              </div>
            </div>

            <button
              className={styles.closeButton}
              onClick={() => setOpen(false)}
              aria-label="Cerrar chat"
            >
              ×
            </button>
          </div>

          <div className={styles.messages}>
            <div className={styles.botMessage}>
                <p>¡Hola! 👋 Soy el asistente de Aryco.</p>

                <p>
                    Próximamente podré ayudarte a encontrar la propiedad
                    ideal para tí.
                </p>

                <p>
                   Mientras tanto, puedes hablar directamente con nuestro equipo.
                </p>

                <a
                    href="https://wa.me/524492335540?text=Hola%20Aryco%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20una%20propiedad."
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.whatsappButton}
                >
                    <span>💬</span>
                    Hablar con Aryco por WhatsApp
                </a>

            </div>
          </div>

          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Ej. Casa de 3 recámaras..."
              disabled
            />

            <button disabled>➤</button>
          </div>
        </div>
      )}
    </>
  );
}