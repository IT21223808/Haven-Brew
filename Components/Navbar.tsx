"use client";
import Image from 'next/image';
import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { TfiMenu } from "react-icons/tfi";
import { IoCart } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai"; // Close icon (X)
import Link from 'next/link';
import { motion } from "framer-motion";
import { div } from 'framer-motion/client';


const Navbar = () => {
    const [searchInput, setSearchInput] = useState("");
    const [menuOpen, setMenuOpen] = useState(false); // State to track menu status

    const handleSearch = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log("Searching for:", searchInput);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle the menu open/close state
    };
    const handleScroll = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false); // Close menu on mobile
        }
    };
    return (
        <div className='w-screen h-[75px] fixed top-0 shadow-lg shadow-[#4e2e1f]/50 bg-[#4e2e1f] backdrop-blur-md z-50 px-10'>
            <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>

                {/* Logo Section */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href='#home' className='h-auto w-auto flex flex-row items-center'>
                        <Image
                            src="/logo2.png"
                            alt="logo"
                            width={100}
                            height={40}
                            priority={true} 
                            // style={{ width: "150px", height: "auto" }}
                            onClick={() => handleScroll("home")}
                            className='flex items-center cursor-pointer pt-4 hover:animate-slowspin'
                        />
                    </Link>
                </motion.div>

                {/* Desktop Navigation Links */}
                <motion.div className='hidden md:flex items-center w-[400px]  h-auto flex-row justify-between space-x-6 border-[#4e2e1f] bg-[#0300145e] mr-[10px] px-[20px] py-[10px] rounded-full text-gray-200' initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                    {["home", "products", "about", "FAQ"].map((link, index) => (
                        <button
                            key={index}
                            onClick={() => handleScroll(link)}
                            className="text-white font-serif hover:text-yellow-600"
                        >
                            {link.charAt(0).toUpperCase() + link.slice(1)}
                        </button>
                    ))}
                            {/* <Link href='#home' className='cursor-pointer font-serif'>Home</Link>
                            {/* <Link href='#blog' className='cursor-pointer font-serif'>Blog</Link> */}
                            {/* <Link href='#products' className='cursor-pointer font-serif'>Product</Link>
                            <Link href='#about' className='cursor-pointer font-serif'>About</Link>
                            <Link href='#FAQ' className='cursor-pointer font-serif'>FAQ</Link> */} 
                       
                 
                </motion.div>

                {/* Search Bar and Cart Icon (Visible on all sizes) */}
                <motion.div className="hidden md:flex items-center space-x-5">
                    {/* Search Bar */}
                    <form
                        onSubmit={handleSearch}
                        className="flex items-center bg-gray-100 rounded-full px-5 py-2 w-[90%]"
                    >
                        <input
                            type="text"
                            placeholder="Search for products..."
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            className="flex-grow bg-transparent outline-none text-black"
                        />
                        <button type="submit" className="text-black hover:text-yellow-600">
                            <IoSearchSharp className="h-6 w-6" />
                        </button>
                    </form>

                    {/* Cart Icon */}
                    <Link href="#cart" className="flex items-center space-x-1 hover:text-yellow-600">
                        <IoCart className="h-6 w-6" />
                    </Link>
                </motion.div>

                {/* Mobile Menu Icon */}
                <motion.div
                    className="md:hidden flex items-center space-x-3"
                    onClick={toggleMenu} // Toggle menu open/close
                    animate={{ rotate: menuOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <TfiMenu className="h-6 w-6 text-white" />
                </motion.div>

            </div>

            {/* Overlay when Menu is Open (Mobile) */}
            {menuOpen && (
                <motion.div
                    className="fixed inset-0  opacity-50 z-40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3,ease: "ease-in-out-quad" }}
                    onClick={toggleMenu} // Close menu when overlay is clicked
                />
            )}

            {/* Slide-In Menu (Mobile View) */}
            {menuOpen && (
                <motion.div
                    className="fixed top-0 right-0 w-[250px] h-[400px] bg-[#4e2e1f] text-white shadow-md flex flex-col p-5 z-50"
                    initial={{ x: 250, borderRadius: "0% 0% 50% 50%" }}
                    animate={{ x: 0, borderRadius: "0% 0% 0% 0%" }}
                    exit={{ x: 250, borderRadius: "0% 0% 50% 50%" }}
                    transition={{
                        duration: 0.6,
                        ease: [0.76, 0, 0.24, 1], // Smooth cubic-bezier curve
                    }}>

                    {/* Close Button (X) */}
                    <motion.div
                        className="flex justify-end"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        <AiOutlineClose
                            className="text-white text-3xl cursor-pointer hover:text-yellow-600"
                            onClick={toggleMenu} // Close the menu when clicked
                        />
                    </motion.div>

                    {/* Menu Items */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <div className="mt-8 flex flex-col  space-y-10">
                            {["home", "products", "about", "FAQ"].map((link, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleScroll(link)}
                                    className="text-lg hover:text-yellow-600"
                                >
                                    {link.charAt(0).toUpperCase() + link.slice(1)}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}

export default Navbar;
