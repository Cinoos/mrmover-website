import styles from "../../styles/HomepageCSS/trust.module.css";

export default function TrustSection() {
  return (
    <section className={styles.trustStrip}>
      <div className={styles.trustItem}>
        ⭐ <span>5-Star Rated</span>
      </div>

      <div className={styles.trustItem}>
        ✔ <span>Open 24/7</span>
      </div>

      <div className={styles.trustItem}>
        📦 <span>200+ Successful Moves</span>
      </div>

      <div className={styles.trustItem}>
        📍 <span>Serving GTA</span>
      </div>
    </section>
  );
}