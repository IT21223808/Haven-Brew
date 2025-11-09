"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import 'aos/dist/aos.css';
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const phrases = ["YOUR DAY", "YOUR MORNING", "YOUR ENERGY", "YOUR MOOD"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 2000); // Changes every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen bg-[#a77158] min-h-screen flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 lg:px-20 py-20 overflow-hidden">
      {/* Left Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1
          data-aos="fade-right"
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
        >
          START{" "}
          <AnimatePresence mode="wait">
            <motion.span
              key={phrases[index]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-amber-900"
            >
              {phrases[index]}
            </motion.span>
          </AnimatePresence>{" "}
          WITH COFFEE
        </h1>

        <p
          data-aos="fade-right"
          data-aos-delay="400"
          className="text-lg md:text-xl text-gray-100 my-5 max-w-[500px]"
        >
          "Made using only the finest coding & design practices, Corretto is
          sure to make a perfect main ingredient for creating an irresistible
          coffee shop website."
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex justify-center md:justify-start"
        >
          <Link
            href="/"
            className="bg-white text-black px-6 py-3 rounded-xl shadow-lg hover:bg-gray-200 transition"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div
        data-aos="zoom-in"
        data-aos-delay="600"
        className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
      >
        <Image
          src="/coffee.png"
          alt="coffee"
          width={500}
          height={400}
          className="w-full max-w-[400px] md:max-w-[500px] h-auto"
        />
      </div>
    </div>
  );
}
