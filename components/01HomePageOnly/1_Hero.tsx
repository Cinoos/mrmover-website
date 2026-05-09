import Image from "next/image";
import styles from "../../styles/HomepageCSS/hero.module.css";

interface HomeProps {
  openQuote?: () => void; // optional if you haven't wired it yet
}

export default function Hero({ openQuote }: HomeProps) {
  return (
    <section className={styles.hero}>
      
        {/* Background Image */}
      <Image
        src="/Landing.png"
        alt="Moving service"
        fill
        priority
        className={styles.heroImage}
      />

      {/* Dark overlay */}
      <div className={styles.overlay}></div>

      {/* Hero Content */}
      <div className={styles.heroContent}>
        <h1>Fast & Reliable Moving Services</h1>
        <p>
          Professional residential and commercial moving across Canada.
        </p>

        <button
          className={styles.heroBtn}
          onClick={openQuote}
        >
          FREE QUOTE
        </button>
      </div>

    </section>
  );
}