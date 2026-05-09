import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/01_NavBar.module.css";

interface NavBarProps {
  openQuote: () => void;
}

export default function NavBar({ openQuote }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };


  return (
    <nav className={styles.navbar}>

      <div className={styles.logo}>
        <Link href="/">
          <Image src="/LOGO.png" alt="logo" width={80} height={80} />
        </Link>
      </div>

      {/* Hamburger */}
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Links */}
      <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
        <li><Link href="/" onClick={closeMenu} >Home</Link></li>
        <li><Link href="/services" onClick={closeMenu} >Services</Link></li>
        <li><Link href="/about" onClick={closeMenu} >About</Link></li>
        <li><Link href="/gallery" onClick={closeMenu} >Gallery</Link></li>
        <li><Link href="/reviews" onClick={closeMenu} >Reviews</Link></li>
        <li><Link href="/contact" onClick={closeMenu} >Contact/Pricing</Link></li>

        <li>
          <button
            className={styles.quoteBtn}
            onClick={openQuote}
          >
            FREE QUOTE
          </button>
        </li>
      </ul>

    </nav>
  );
}