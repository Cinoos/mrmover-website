import Image from "next/image";
import styles from "../styles/03_Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.container}>

        {/* Logo + tagline */}
        <div className={styles.section}>
          <Image
            src="/LOGO.png"
            alt="Mr. Minor Mover"
            width={90}
            height={90}
          />

          <p>
            Reliable, affordable moving services across the GTA.
          </p>
        </div>

        {/* Quick links */}
        <div className={styles.section}>
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Contact */}
        <div className={styles.section}>
          <h4>Contact</h4>
          <p>(416) 906-7994</p>
          <p>Mississauga, Ontario</p>
        </div>

        {/* Services area */}
        <div className={styles.section}>
          <h4>Service Area</h4>
          <p>Toronto</p>
          <p>Brampton</p>
          <p>Mississauga</p>
          <p>GTA & Surrounding</p>
        </div>

      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Mr. Minor Mover. All rights reserved.</p>
      </div>

    </footer>
  );
}