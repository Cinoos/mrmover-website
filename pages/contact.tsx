import React from "react";
import PricingGuide from "../components/04ContactOnly/pricingGuide"
import ContactInfo from "../components/04ContactOnly/contactInfo"


interface HomeProps {
  openQuote: () => void;
}

export default function Contact({ openQuote }: HomeProps) {
  return (
    <div>
        <ContactInfo/>
     <PricingGuide/>
     
     
    
    </div>
  );
}
