"use client";

import { useEffect } from "react";
import Hero from "@/Components/Hero";
import ProductsPage from "@/Components/Product";
import About from "@/Components/About";
import Footer from "@/Components/Footer";
import VisitUs from "@/Components/VisitUs";
import { FAQ } from "@/Components/FAQ";
import Navbar from "@/Components/Navbar";
import Aos from "aos";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Smooth easing
      once: true, // Trigger animation only once
    });
  }, []);

  return (
    <main className="w-full min-h-screen overflow-hidden">
      <Navbar />
      <section id="home" className="w-full">
        <Hero />
      </section>
      <section id="products" className="w-full">
        <ProductsPage />
      </section>
      <section id="about" className="w-full">
        <About />
      </section>
      <VisitUs />
      <FAQ />
      <section className="bg-espresso text-cream">
        <div className="mx-auto max-w-content px-4 py-section text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-caramel sm:text-sm">
            YOUR NEXT CUP
          </p>
          <h2 className="hb-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Your next favourite cup is waiting.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cream/90 sm:text-lg">
            Explore the Haven Brew menu and find something worth slowing down for.
          </p>
          <div className="mt-8">
            <a
              href="/products"
              className="hb-button border border-cream/50 bg-cream text-espresso transition-colors hover:bg-[#f4efe9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
            >
              Explore Our Menu
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
