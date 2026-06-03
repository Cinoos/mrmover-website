import styles from "../../styles/ContactpageCSS/contact.module.css";

export default function ContactInfo() {
  return (
    <section className={styles.contactSection}>
      
      <h2 className={styles.title}>Get Your Free Quote</h2>
      <p className={styles.subtitle}>
        Call or text us directly for fast service and same-day availability.
      </p>

      {/* Big Phone CTA */}
      <a href="tel:4169067994" className={styles.phoneBox}>
        📞 (416) 906-7994
      </a>

      <p className={styles.subtitle}>
        Email Us
      </p>

      <a href="mailto:mrminormover21@gmail.com" className={styles.phoneBox}>
          mrminormover21@gmail.com
        </a>

      {/* Extra Info */}
      <div className={styles.contactDetails}>
        <div>
          <h4>📍 Service Area</h4>
          <p>Greater Toronto Area & Surrounding Regions</p>
        </div>

        <div>
          <h4>⏰ Availability</h4>
          <p>7 Days a Week</p>
        </div>
      </div>

    </section>
  );
}