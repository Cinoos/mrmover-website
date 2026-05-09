import React from "react";
import Gallery from "../components/05GalleryOnly/Gallery"


interface HomeProps {
  openQuote: () => void;
}

export default function Contact({ openQuote }: HomeProps) {
  return (
    <div>
        <Gallery/>
     
     
    
    </div>
  );
}
