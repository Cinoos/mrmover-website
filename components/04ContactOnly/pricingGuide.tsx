import styles from "../../styles/ContactpageCSS/pricingGuide.module.css";

interface PricingStep {
  number: string;
  title: string;
  description: string;
}

export const pricingSteps: PricingStep[] = [
  {
    number: "01",
    title: "Pickup & Drop-Off Locations",
    description:
      "Provide the full address of where you are moving from and where you are moving to. This allows us to calculate travel time and distance accurately."
  },
  {
    number: "02",
    title: "Detailed Item List",
    description:
      "Send a complete list of all items being moved, including the exact number of boxes (e.g., 10 boxes) and any furniture or large appliances. Accurate counts help us provide an exact quote."
  },
  {
    number: "03",
    title: "Building Access Information",
    description:
      "Let us know if there is elevator access or stairs at both locations. Please also mention any inclines, long hallways, or limited parking that may affect the move."
  },
  {
    number: "04",
    title: "Additional Services",
    description:
      "Inform us if you require furniture disassembly, reassembly, packing assistance, or special handling for fragile or heavy items."
  }
];

export default function PricingGuide() {
  return (
    <section className={styles.pricingGuide}>
      <h2 className={styles.title}>How Pricing Works</h2>

      <div className={styles.steps}>
        {pricingSteps.map((step, index) => (
          <div key={index} className={styles.step}>
            <div className={styles.number}>{index + 1}</div>

            <div className={styles.content}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}