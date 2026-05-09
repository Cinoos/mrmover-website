import styles from '../../styles/HomepageCSS/services.module.css'

interface Service {
  title: string
  description: string
}

const services: Service[] = [
  {
    title: "Local Moving",
    description: "Fast and secure moves across your city."
  },
  {
    title: "Office Moving",
    description: "Professional relocation for businesses."
  },
  {
    title: "Commercial Moving",
    description: "Expert handling of furniture and equipment."
  },
  {
    title: "Storage",
    description: "Secure storage options available."
  },
  {
    title: "Long Distance",
    description: "Reliable intercity and province moves."
  },
  {
    title: "Packing Services",
    description: "Careful packing to protect all items."
  }
]

export default function ServicesPreview() {
  return (
    <section className={styles.services}>
      <h2>Our Services</h2>

      <div className={styles.serviceGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <button className={styles.viewAll}>
  View All Services
</button>

    </section>
  )
}