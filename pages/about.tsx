import React from "react";
import AboutHero from "../components/02AboutOnly/1_Hero"
import AboutBanner from "../components/02AboutOnly/0_Banner"
import AboutHistory from "../components/02AboutOnly/3_History";

interface HomeProps {
  openQuote: () => void;
}

export default function About({ openQuote }: HomeProps) {
  return (
    <div>
     <AboutBanner />
     {/* <AboutHero /> */}
     <AboutHistory/>
    </div>
  );
}