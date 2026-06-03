import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/GallerypageCSS/gallery.module.css";

interface GalleryImage {
  src: string;
  alt: string;
}

const images: GalleryImage[] = [
  { src: "/packed.jpg", alt: "Moving truck loaded" },
  { src: "/house.jpg", alt: "Furniture wrapped safely" },
  { src: "/local.jpg", alt: "Team carrying furniture" },
  { src: "/packing.jpg", alt: "Boxes organized for move" },
  { src: "/stuff.jpg", alt: "Apartment move setup" },
  { src: "/commercial.jpg", alt: "Truck unloading" },

  { src: "/gallery photos/20260515_191019.jpeg", alt: "Wagon" },
  { src: "/gallery photos/1000143837.jpeg", alt: "Team carrying furniture" },
  { src: "/gallery photos/1000144189.jpeg", alt: "Boxes organized for move" },
  { src: "/gallery photos/1000147414.jpeg", alt: "Boxes organized for move" },
  { src: "/gallery photos/1000148182.jpeg", alt: "Apartment move setup" },
  { src: "/gallery photos/1000148375.jpeg", alt: "Truck unloading" },
  { src: "/gallery photos/1000148401.jpeg", alt: "Moving truck loaded" },
  { src: "/gallery photos/1000148501.jpeg", alt: "Furniture wrapped safely" },
  { src: "/gallery photos/1000151399.jpeg", alt: "Boxes organized for move" },
  

];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className={styles.gallery}>
      <h2 className={styles.title}>Our Work</h2>

      <div className={styles.grid}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.imageWrapper}
            onClick={() => setSelectedImage(image.src)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={styles.image}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className={styles.lightbox}
          onClick={() => setSelectedImage(null)}
        >
          <div className={styles.lightboxContent}>
            <Image
              src={selectedImage}
              alt="Enlarged image"
              fill
              className={styles.lightboxImage}
            />
          </div>
        </div>
      )}
    </section>
  );
}