import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerContent}>
        <span>© 2025 Aryco, Inc</span>

        <span className={styles.footerCenter}>
            Designed by: Astruck Labs
        </span>

            <div className={styles.socialIcons}>
                <a 
                href="https://www.instagram.com/arellanoycia/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
                </a>

                <a
                href="https://www.facebook.com/profile.php?id=100095554081624"
                target="_blank"
                rel="noopener noreferrer"
                >
                <i className="bi bi-facebook"></i>
                </a>

                <a
                href="https://www.tiktok.com/@arycobr?is_from_webapp=1&sender_device=pc&web_id=7210591556780425222"
                target="_blank"
                rel="noopener noreferrer"
                >
                <i className="bi bi-tiktok"></i>
                </a>
            </div>
        </div>
    </footer>
    );
}