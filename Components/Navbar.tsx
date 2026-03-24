"use client";
import Image from 'next/image';
import React, { useState } from "react";
import { IoSearchSharp, IoCart } from "react-icons/io5";
import { TfiMenu } from "react-icons/tfi";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

/* ✅ CART DRAWER COMPONENT */
const CartDrawer = ({ isOpen, onClose }: any) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <motion.div
        className="fixed inset-0 bg-black/40 z-[60]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={onClose}
      />

      {/* Side Drawer */}
      <motion.div
        className="fixed top-0 right-0 w-[350px] h-full bg-white z-[70] shadow-2xl p-5 flex flex-col"
        initial={{ x: 400 }}
        animate={{ x: 0 }}
        exit={{ x: 400 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="flex justify-end">
          <AiOutlineClose
            className="text-3xl cursor-pointer hover:text-red-500"
            onClick={onClose}
          />
        </div>

        <h1 className="text-2xl font-bold mt-2 border-b pb-3">Your Cart</h1>

        {/* Example Item */}
        <div className="mt-5 flex flex-col gap-5 overflow-y-auto">
          <div className="flex items-center gap-4 border-b pb-3">
            <Image
              src="/coffee/caramel.jpg"
              alt="product"
              width={60}
              height={60}
              className="rounded-md"
            />
            <div>
              <h2 className="font-semibold">Caramel Latte</h2>
              <p className="text-sm text-gray-600">Rs 1200</p>
            </div>
          </div>
        </div>

        <button className="mt-auto w-full bg-[#4e2e1f] text-white py-3 rounded-lg hover:bg-yellow-700 transition">
          Checkout
        </button>
      </motion.div>
    </>
  );
};

const Navbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    console.log("Searching for:", searchInput);
  };

  return (
    <div className='w-screen h-[95px] fixed top-0 shadow-lg shadow-[#4e2e1f]/50 bg-[#4e2e1f] backdrop-blur-md z-50'>
      {/* Centered container */}
      <div className='max-w-screen-xl mx-auto h-full flex items-center justify-between px-6 lg:px-20'>

        {/* Logo */}
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }}>
          <Image
            src="/logo2.png"
            alt="logo"
            width={120}
            height={30}
            priority
            onClick={() => handleScroll("home")}
            className='flex items-center cursor-pointer pt-7 hover:animate-slowspin'
          />
        </motion.div>

        {/* Desktop Menu */}
        <motion.div className='hidden md:flex items-center space-x-8 bg-[#0300145e] px-6 py-2 rounded-full text-gray-200'>
          {["home", "products", "about", "FAQ"].map((link, index) => (
            <button
              key={index}
              onClick={() => handleScroll(link)}
              className="text-white font-serif hover:text-yellow-600 transition"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Search + Cart */}
        <motion.div className="hidden md:flex items-center space-x-5">
          <form onSubmit={handleSearch} className="flex items-center bg-gray-100 rounded-full px-5 py-2 w-[90%] max-w-[250px]">
            <input
              type="text"
              placeholder="Search..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="flex-grow bg-transparent outline-none text-black"
            />
            <button type="submit">
              <IoSearchSharp className="h-6 w-6 text-black" />
            </button>
          </form>

          <button
            onClick={() => setCartOpen(true)}
            className="hover:text-yellow-600"
          >
            <IoCart className="h-6 w-6 text-white" />
          </button>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.div
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <TfiMenu className="h-6 w-6 text-white" />
        </motion.div>

      </div>

      {/* ✅ MOBILE MENU (Right Sidebar) */}
      {/* Full-screen mobile menu */}
{menuOpen && (
  <motion.div
    className="fixed inset-0 bg-[#4e2e1f] z-50 flex flex-col justify-center items-center"
    initial={{ x: '100%' }}
    animate={{ x: 0 }}
    exit={{ x: '100%' }}
    transition={{ type: 'tween', duration: 0.5 }}
  >
    {/* Close Button */}
    <AiOutlineClose
      className="absolute top-10 right-8 text-3xl text-white bg-[#4e2e1f] cursor-pointer hover:text-yellow-500"
      onClick={() => setMenuOpen(false)}
    />

    {/* Menu Links */}
<div className="flex flex-col space-y-14 text-4xl bg-[#4e2e1f] w-2/3 h-screen mt-96 ml-60 font-semibold text-white text-center">
  {["home", "products", "about", "FAQ"].map((link, index) => (
    <button
      key={index}
      onClick={() => {
        handleScroll(link);
        setMenuOpen(false);
      }}
      className="hover:text-yellow-400 transition py-3"
    >
      {link.charAt(0).toUpperCase() + link.slice(1)}
    </button>
  ))}
</div>
  </motion.div>
)}

      {/* Cart Drawer Component */}
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
};

export default Navbar;