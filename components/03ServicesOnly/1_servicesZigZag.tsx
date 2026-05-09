import Image from "next/image";
import styles from "../../styles/ServicepageCSS/service.module.css";

interface Service {
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    title: "Local Moving",
    description:
      "Fast and reliable residential moves across the GTA including apartments, condos, and homes.",
    image: "/local.jpg"
  },
  {
    title: "Commercial Moving",
    description:
      "Office and business relocations handled efficiently with minimal downtime and careful equipment handling.",
    image: "/commercial.jpg"
  },
  {
    title: "Furniture Moving",
    description:
      "Safe transport of sofas, beds, tables, and heavy furniture with proper protection and handling.",
    image: "/stuff.jpg"
  },
  {
    title: "Packing Services",
    description:
      "Professional packing using high-quality materials to ensure everything is secure during transport.",
    image: "/packing.jpg"
  },
  {
    title: "Long Distance Moving",
    description:
      "Reliable intercity and provincial moves with organized planning and safe delivery. If needed we provide 1-4 trailers to move your items",
    image: "/long.jpg"
  }
];

export default function ServicesZigZag() {
  return (
    <section className={styles.services}>

      <h2 className={styles.title}>Our Services</h2>

      {services.map((service, index) => {
        const reversed = index % 2 !== 0;

        return (
          <div
  key={index}
  className={`${styles.row} ${reversed ? styles.reverse : ""} ${
    index % 2 === 0 ? styles.light : styles.dark
  }`}
>

            {/* IMAGE */}
            <div className={styles.imageContainer}>
              <Image
                src={service.image}
                alt={service.title}
                fill
                className={styles.image}
              />
            </div>

            {/* TEXT */}
            <div className={styles.textContainer}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>

          </div>
        );
      })}

    </section>
  );
}