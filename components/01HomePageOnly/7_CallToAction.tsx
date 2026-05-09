import styles from "../../styles/HomepageCSS/cta.module.css";

interface CTAProps {
  openQuote?: () => void;
}

export default function CTA({ openQuote }: CTAProps) {
  return (
    <section className={styles.cta}>
      <h2>Ready to Move?</h2>

      <p>
        Get a fast, free, no-obligation quote today.  
        Professional moving made simple.
      </p>

      <button className={styles.ctaBtn} onClick={openQuote}>
        GET A FREE QUOTE
      </button>
    </section>
  );
}