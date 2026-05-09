import React from "react";
import Hero from "../components/01HomePageOnly/1_Hero"
import TrustSection from "../components/01HomePageOnly/2_TrustBadge"
import ServicesPreview from "../components/01HomePageOnly/3_ServicesPreview"
import HowItWorks from "../components/01HomePageOnly/4_HowItWorks"
import WhyChooseUs from "../components/01HomePageOnly/5_WhyChooseUs"
import Testimonials from "../components/01HomePageOnly/6_Testimonial"
import CTA from "../components/01HomePageOnly/7_CallToAction";

interface HomeProps {
  openQuote: () => void;
}

export default function Home({ openQuote }: HomeProps) {
  return (
    <div>
     <Hero openQuote={openQuote} />
     <TrustSection />
     <ServicesPreview />
     <HowItWorks />
     <WhyChooseUs />
     <Testimonials />
     <CTA openQuote={openQuote}/>
     
    
    </div>
  );
}
