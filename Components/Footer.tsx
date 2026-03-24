import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TiSocialFacebook } from 'react-icons/ti';
import { FaPinterest, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-300 text-sm rounded-l-lg rounded-r-lg">
      <hr className="w-full border-none bg-gradient-to-r from-black/0 via-black/30 to-black/0" />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-5 py-12 
      flex flex-col md:flex-row gap-10 justify-between">

        {/* 🔹 Logo Section */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <Link href="#home" className="flex items-center justify-center md:justify-start space-x-3">
            <Image
              src="/logo2.png"
              alt="Coffee Shop Logo"
              width={70}
              height={70}
              className="rounded-full"
            />
            <span className="font-bold text-3xl mb-6 text-amber-900">
              HAVEN-BREW
            </span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="mt-4 text-2xl font-serif text-orange-800">
              Savor the warmth of every brew.
            </p>
            <p className="font-serif text-xl font-bold text-amber-900">
              Handcrafted coffee and freshly baked treats to fuel your day.
            </p>
          </motion.div>
        </div>

        {/* 🔹 Links Section */}
        <div className="flex flex-col text-2xl md:flex-row gap-10 w-full md:w-1/3 items-center md:items-start text-center md:text-left">
          {/* Explore */}
          <div>
            <h3 className="mb-4 font-bold">Explore</h3>
            <ul className="space-y-2">
              <li><Link href="/menu">Menu</Link></li>
              <li><Link href="/our-story">Our Story</Link></li>
              <li><Link href="/locations">Visit Us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 font-bold">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/terms">Terms & Conditions</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* 🔹 Contact Section */}
        <div className="w-full md:w-1/3 text-center text-2xl md:text-left">
          <h3 className="mb-4 font-bold">Get in Touch</h3>

          <p className="font-mono text-base">
            <span className="block">123 Brew St, Colombo</span>
            <span className="block">havenbrew@example.com</span>
            <span className="block">+94 011-123-4567</span>
          </p>

          <p className="mt-2 font-serif">
            Open Daily: 8:00 AM - 8:00 PM
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start mt-4 space-x-5">
            <Link href="#"><TiSocialFacebook className="h-6 w-6 hover:text-yellow-600" /></Link>
            <Link href="#"><FaPinterest className="h-6 w-6 hover:text-yellow-600" /></Link>
            <Link href="#"><FaYoutube className="h-6 w-6 hover:text-yellow-600" /></Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;