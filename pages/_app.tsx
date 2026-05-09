import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import NavBar from "../components/01_NavBar";
import Footer from "../components/03_Footer";
import QuoteModal from "../components/02_QuoteModal";

export default function App({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavBar openQuote={() => setIsOpen(true)} />
      <Component {...pageProps} openQuote={() => setIsOpen(true)} />
      <Footer />
      {isOpen && <QuoteModal closeQuote={() => setIsOpen(false)} />}
    </>

  );
}
