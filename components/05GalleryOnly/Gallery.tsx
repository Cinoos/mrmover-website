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
  //CHARLES ADD HERE
  { src: "/gallery photos/0DCE2395-9A1F-4108-82CA-6D6B261B4E63.jpeg", alt: "" },
  { src: "/gallery photos/9976F988-78B6-4936-95FF-8B156F248AC7.jpeg", alt: "" },
  { src: "/gallery photos/CF98B785-6EAE-41B1-A342-A5AF8A393505.jpeg", alt: "" },
  { src: "/gallery photos/4DADF4A7-82CE-43D5-B8D8-8584325E533A.jpeg", alt: "" },
  { src: "/gallery photos/7C9AF5A1-6985-4F80-8638-1232AFA28BB6.jpeg", alt: "" },
  { src: "/gallery photos/58AFC9F9-6644-4A98-87A1-0ABBC94F65B6.jpeg", alt: "" },
  { src: "/gallery photos/63A366A9-FB43-4C5F-8B8E-36FC06BEB1F6.jpeg", alt: "" },
  { src: "/gallery photos/73A7287C-1069-4E4C-B5A0-D0AF170286F3.jpeg", alt: "" },
  { src: "/gallery photos/8142CD95-464E-4CEB-83BC-3E27C9DD97D6.jpeg", alt: "" },
  { src: "/gallery photos/ADE3179A-D20C-4980-BCC0-533DDE8DC069.jpeg", alt: "" },
  { src: "/gallery photos/D4DCF2FD-030D-4727-B6D5-8CB0C75941DC.jpeg", alt: "" },
  { src: "/gallery photos/E43DF004-F5E9-4BD9-A3BA-76B821562185.jpeg", alt: "" },
  
  

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