import styles from "../../styles/ServicepageCSS/serviceHero.module.css";

interface ServicesHeroProps {
  openQuote: () => void;
}

export default function ServicesHero({ openQuote }: ServicesHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>

      <h1>Let Us Handle It</h1>
        <p>
          From local moves to long-distance relocations, we handle your
          belongings with care, speed, and reliability across the GTA.
        </p>

      <button onClick={openQuote} className={styles.button}>
        GET A FREE QUOTE
      </button>
    </div>
    </section>
  );
}