"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import ProductsPage from "@/Components/Product";
import About from "@/Components/About";
import Footer from "@/Components/Footer";
import { FAQ } from "@/Components/FAQ";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Smooth easing
      once: true, // Trigger animation only once
    });
  }, []);

  return (
    <main className="h-full w-full">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="products">
        <ProductsPage />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="FAQ">
        <FAQ />
      </section>
      <Footer />
    </main>
  );
}
