import Image from "next/image";
import styles from "../../styles/HomepageCSS/whychoose.module.css";

export default function WhyChooseUs() {
  return (
    <section className={styles.whyChoose}>
      <div className={styles.left}>
  <div className={styles.leftContent}>
    <h2>Why Choose Us</h2>

    <ul>
      <li>✔ No hidden fees</li>
      <li>✔ Professional movers</li>
      <li>✔ Careful handling</li>
      <li>✔ Affordable pricing</li>
    </ul>
  </div>
</div>

      <div className={styles.right}>
        <Image
          src="/truck.jpg"
          alt="Moving Service"
          fill
          className={styles.image}
        />
      </div>
    </section>
  );
}