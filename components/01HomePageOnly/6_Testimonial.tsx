import { useEffect, useRef } from "react";
import styles from "../../styles/HomepageCSS/testimonials.module.css";

const testimonials = [
  {
    text: "I highly recommend Jimmy — he is the best! Very kind, efficient, and always willing to make things easy. Excellent prices and incredible service. ⭐️",
    author: "Shalu Tara Singh"
  },
  {
    text: "Super delighted with Mr. Minor Mover! Everything was handled carefully, pricing was fair, and there were no surprises. Highly recommend MMM.",
    author: "Shaz Mo (Feb 2026)"
  },
  {
    text: "An incredible team that made my entire moving process smooth and stress-free.",
    author: "Favour Annabelle Emha"
  }
];

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);

  // ➡️ Scroll function
  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const scrollAmount = 320;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  };

  // 🤖 Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      if (!sliderRef.current) return;

      const maxScroll =
        sliderRef.current.scrollWidth - sliderRef.current.clientWidth;

      if (sliderRef.current.scrollLeft >= maxScroll) {
        sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.testimonials}>
      <h2 className={styles.title}>What Our Customers Say</h2>

      {/* Arrows */}
      <div className={styles.arrows}>
        <button onClick={() => scroll("left")} className={styles.arrow}>
          ←
        </button>

        <button onClick={() => scroll("right")} className={styles.arrow}>
          →
        </button>
      </div>

      {/* Slider */}
      <div className={styles.slider} ref={sliderRef}>
        {testimonials.map((t, index) => (
          <div key={index} className={styles.slide}>
            <p className={styles.text}>"{t.text}"</p>
            <span className={styles.author}>— {t.author}</span>
          </div>
        ))}
      </div>
    </section>
  );
}