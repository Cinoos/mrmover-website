import React from "react";
import ServicesZigZag from "../components/03ServicesOnly/1_servicesZigZag"
import ServicesHero from "../components/03ServicesOnly/0_ServicesHero"


interface HomeProps {
  openQuote: () => void;
}

export default function Services({ openQuote }: HomeProps) {
  return (
    <div>
     <ServicesHero openQuote={openQuote}/>
     <ServicesZigZag />
     

   
    
    </div>
  );
}
