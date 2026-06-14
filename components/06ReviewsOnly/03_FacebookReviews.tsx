import styles from "../../styles/ReviewspageCSS/facebookReviews.module.css";

const reviews = [
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
  },
  //
  {
    text: "Jimmy is AWESOME! He is FAST He is EFFICIENT He is PUNCTUAL Above all, he is friendly and kind. He possesses excellent communication skills and to top it off, price wise very reasonable!  Thank you Jimmy! You are awesome 👌",
    author: "Zareen Moin"
  },
  {
    text: "I used Mr. Minor Mover in December 2025 and had a really great experience. The move went smoothly and was much less stressful than I expected. The team was professional, attentive, and affordable. They were also very accommodating with a few items I hadn’t originally listed, which I really appreciated. Everything was placed exactly where I wanted, and they finished on time. I was honestly very impressed and would definitely recommend them",
    author: "Dia Malaïka"
  },
  {
    text: "Great service, Jimmy and his team were quick and organized, they did a great job with a fantastic attitude",
    author: "Zuraiz Zafar"
  },
  {
    text: "Mr. Minor Mover.  Thank you for your help today.   Your expertise was appreciated by all.   I would highly recommend for your moving needs. Jimmy was quick to respond, arrived on time, pleasant and courteous.  I loved how you assessed the situation to ensure a damage free and safe move.   I Highly recommend and will definitely give ⭐⭐⭐⭐⭐",
    author: "Tracy Skinner"
  },
  {
    text: "I couldn’t be happier with Jimmy’s service! He was a true gentleman—super polite, professional, careful, and had excellent communication every step of the way. Excellent service from start to finish. Highly recommend! ⭐️⭐️⭐️⭐️⭐️.",
    author: "Silvia Peres "
  },
  {
    text: "highly recommended! amazing price and quality and care of work especially for my delicate plant i needed to move! thank you guys for having it done and carefully! Will definitely use again !",
    author: "Remy JR Sar "
  },
  {
    text: "I would recommend 100% using this gentleman, Jimmy to move your household items or pickup from one location to another. He will work with you to get the job done and is reasonably priced. I will use him again. Thank You Jimmy & crew.🌟🌟🌟🌟🌟",
    author: "Janis Hawrysio-Cullen "
  },
  {
    text: "Jimmy is amazing! Fantastic representation of what customer service should be. I can't give him enough stars. If you help with a move this is your man⭐️⭐️⭐️⭐️⭐️",
    author: "Jennifer Thompson "
  },
  {
    text: "I worked with them a couple of days ago, and they were punctual, professional, and incredibly easy to work with. We had some last-minute changes, and they handled everything with patience and flexibility they never made me feel like it was an inconvenience. This was my first time moving something this big, and they made the entire experience stress-free. They were also very affordable, which was a huge bonus. I would absolutely use them again. Book Now!",
    author: "Tara Lee "
  },
  {
    text: "A+ Service!! I highly recommend Jimmy of Mr. Minor Mover and intend to hire him for all our future moving needs. Within a day of contacting Jimmy the job was done and we couldn’t be happier with the service we received, the convenience, the reasonable cost, the job they did, all well worth it!! Jimmy and Caleb worked so well and carefully together, so efficient, patient, very strong and knowledgeable, conscientious about the job they do!! Jimmy and Caleb moved some very heavy furniture for us and were very accomodating! It was a pleasure doing business with you and we are looking forward to doing business with you again. Thank you for getting this urgent move done for us so quickly and efficiently!!",
    author: "Dawn Nichol"
  },

];

export default function FacebookReviews() {
  return (
    <section className={styles.reviewsSection}>
      <h2 className={styles.title}>Facebook Reviews</h2>

      <div className={styles.grid}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.card}>

            <div className={styles.stars}>
              ⭐⭐⭐⭐⭐
            </div>

            <p className={styles.text}>
              "{review.text}"
            </p>

            <span className={styles.author}>
              — {review.author}
            </span>

          </div>
        ))}
      </div>
    </section>
  );
}