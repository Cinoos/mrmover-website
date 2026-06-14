import styles from "../../styles/ReviewspageCSS/reviewBanner.module.css";

export default function ReviewsHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>

        {/* Main Heading */}
        <h1>
          Real Reviews From Real Customers
        </h1>

        {/* Subheading */}
        <p>
          See why customers across the GTA trust us for safe,
          reliable, and stress-free moving services.
        </p>

        {/* Stats */}
        <div className={styles.stats}>

          <div className={styles.stat}>
            <h3>⭐ 5.0</h3>
            <p>Facebook Rating</p>
          </div>

          <div className={styles.stat}>
            <h3>⭐ 5.0</h3>
            <p>Google Rating</p>
          </div>

        </div>


      </div>
    </section>
  );
}