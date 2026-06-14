import React from "react";
import GoogleReviews from "../components/06ReviewsOnly/02_GoogleReviews";
import ReviewsHero from "../components/06ReviewsOnly/01_Banner"
import FacebookReviews from "../components/06ReviewsOnly/03_FacebookReviews"

interface HomeProps {
  openQuote: () => void;
}

export default function Reviews({ openQuote }: HomeProps) {
  return (
    <div>
     <ReviewsHero/>
     <GoogleReviews/>
     <FacebookReviews/>
     


    
    </div>
  );
}
