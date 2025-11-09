import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IoCart, IoSearchSharp } from 'react-icons/io5';
import { TiSocialFacebook } from 'react-icons/ti';
import { FaPinterest, FaYoutube } from 'react-icons/fa';

function Footer() {
  
  return (
    <div>
      <footer className=" relative  bg-cover bg-center h-[full] bg-gray-300 text-sm z-20">
        <hr className=" relative w-full border-none bg-gradient-to-r from-black/0 via-black/30 to-black/0 dark:from-white/0 dark:via-white/25 dark:to-white/0" />
        <div className=" relative w-full max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-5 py-20 flex flex-col sm:flex-row gap-10 justify-between">
          {/* Logo and Description */}
          <div>
            <Link href="#home" className=" relative flex items-center space-x-0 pl-0 pb-50">
              <Image
                src="/logo2.png" // Replace with your coffee shop logo
                alt="Coffee Shop Logo"
                width={80}
                height={90}
                priority={true} 
                className=" flex relative rounded-full mb-0 pt-0"
              />
              <span className="fle relative font-bold pt-25 pb-5 text-3xl text-amber-900 dark:text-white">
                HAVEN-BREW
              </span>
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className=" relative font-serif text-lg text-orange-800 pl-9">
                Savor the warmth of every brew.</p>
              <p className="  relative font-serif text-lg font-bold text-amber-900 pl-9 ">Handcrafted coffee and freshly baked treats to fuel your day.</p>
            </motion.div>

          </div>

          {/* Links */}
          <div className=" relative flex flex-wrap sm:gap-x-12 gap-y-6 sm:mt-0">
            <div className=" relativew-1/2 sm:w-auto text-black font-serif ">
              <h3 className=" relative dark:text-white mb-4">Explore</h3>
              <ul className="space-y-2">
                <li>
                  <Link className=" relative flex items-start button-hover" href="/menu">
                    <span>Menu</span>
                  </Link>
                </li>
                <li>
                  <Link className=" relative flex items-start button-hover" href="/our-story">
                    <span>Our Story</span>
                  </Link>
                </li>
                <li>
                  <Link className=" relative flex items-start button-hover" href="/locations">
                    <span>Visit Us</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className=" relative w-1/2  text-black   sm:w-auto font-serif">
              <h3 className="relative dark:text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link className=" relativeflex items-start button-hover" href="/terms">
                    <span>Terms & Conditions</span>
                  </Link>
                </li>
                <li>
                  <Link className="flex items-start button-hover" href="/privacy">
                    <span>Privacy Policy</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-black  font-serif relative dark:text-white mb-4">Get in Touch</h3>
            <p className="leading-relaxed relative font-mono text-black e ">
              <span className="block ">ADDRESS:123 Brew St,Coffee City,Colombo</span>
              <span className="block">EMAIL:havenbrew@example.com</span>
              <span className="block ">PHONE NO:+94 011-123-4567</span>
            </p>
            <p className="mt-2 relative text-black  font-serif ">Open Daily: 8:00 AM - 8:00 PM</p>
            <motion.div className="hidden relative md:flex mt-3 items-center space-x-6">
                    {/* Cart Icon */}
                    <Link href="#facebook" className="flex items-center space-x-1 text-black  hover:text-yellow-600">
                        <TiSocialFacebook className="h-7 w-7 fill-current" />
                    </Link>
                    <Link href="#cart" className="flex items-center space-x-1 text-black  hover:text-yellow-600">
                        <FaPinterest className="h-7 w-7 fill-current" />
                    </Link>
                    <Link href="#cart" className="flex items-center space-x-1 text-black  hover:text-yellow-600">
                        <FaYoutube className="h-7 w-7 fill-current" />
                    </Link>
                </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
