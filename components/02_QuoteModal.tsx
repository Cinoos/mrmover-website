import React from "react";
import styles from "../styles/02_QuoteModal.module.css"

interface QuoteModalProps {
  closeQuote: () => void;
}

export default function QuoteModal({ closeQuote }: QuoteModalProps) {
  return (
    <div className={styles.overlay} onClick={closeQuote}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeBtn} onClick={closeQuote}>
          ✕
        </button>

        <h2>Get Your Free Quote</h2>
        <p>Call Or Text us:</p>
        <h3>(416) 906-7994</h3>
        <p>Email Us:</p>
        <h3>mrminormover21@gmail.com</h3>
      </div>
    </div>
  );
}


        {/* MAYBE ADD LATER */}
        { /* <form>
          <input type="text" placeholder="Full Name" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Move Details"></textarea>
          <button type="submit">Submit</button>
        </form> */}

 