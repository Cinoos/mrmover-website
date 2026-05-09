import styles from "../../styles/AboutpageCSS/aboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.hero}>

      {/* Headline */}
      <h1 className={styles.title}>Mr. Minor Mover</h1>

      <h2 className={styles.subtitle}>About Us</h2>

      {/* Short statement */}
      <p className={styles.text}>
        Reliable, affordable, and careful moving services across the Greater Toronto Area. We specialize in furniture moves, apartment relocations, and small deliveries with a focus on professionalism and care.
      </p>

    </section>
  );
}