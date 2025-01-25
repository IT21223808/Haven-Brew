import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

type Props = {};

export default function Hero({}: Props) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Ensure animations happen only once
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="flex bg-[#a77158] flex-row items-center justify-center px-20 mt-19 w-full z-[20]">
      {/* Left Section */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        {/* Text Section */}
        <div
          data-aos="fade-down"
          className="py-[8px] px-[7px] opacity-[0.9]"
        ></div>

        <div
          data-aos="fade-right"
          className="flex flex-col pt-10 gap-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            START{" "}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-amber-900"
              data-aos="zoom-out"
              data-aos-delay="300"
            >
              YOU DAY
            </span>{" "}
            WITH COFFEE
          </span>
        </div>

        <p
          data-aos="fade-right"
          data-aos-delay="400"
          className="text-xl text-gray-700 my-5 max-w-[600px]"
        >
          "Made using only the finest coding & design practices there are,
          Corretto is sure to make a perfect main ingredient for creating an
          irresistible coffee shop website."
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="mb-10 flex flex-col items-center sm:flex-row gap-3"
        >
          <Link
            href="/"
            className="inline-flex relative z-9 h-10 rounded-xl p-px shadow-lg bg-gradient-to-b from-white to-zinc-300"
          >
            <div className="flex items-center gap-1 px-6 font-medium rounded-xl whitespace-nowrap bg-white text-black">
              <span>Shop Now</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div
        data-aos="zoom-in"
        data-aos-delay="600"
        className="w-full h-full mt-20 flex justify-center items-center"
      >
        <Image src="/coffee.png" alt="coffee" height={500} width={600} />
      </div>
    </div>
  );
}
