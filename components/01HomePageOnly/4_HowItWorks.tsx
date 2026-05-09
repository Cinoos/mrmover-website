import styles from "../../styles/HomepageCSS/howitworks.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.howItWorks}>
      <h2>How It Works</h2>

      <div className={styles.timeline}>
        <div className={styles.step}>
        <div className={styles.circle}>1</div>
        <p className={styles.stepText}>Request a Quote</p>
        </div>

        <div className={styles.step}>
          <div className={styles.circle}>2</div>
          <p>Schedule Move</p>
        </div>

        <div className={styles.step}>
          <div className={styles.circle}>3</div>
          <p>We Move You</p>
        </div>

        <div className={styles.step}>
          <div className={styles.circle}>4</div>
          <p>Settle In</p>
        </div>
      </div>
    </section>
  );
}