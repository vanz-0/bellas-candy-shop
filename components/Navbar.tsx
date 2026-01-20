'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 relative z-50">
                        <div className="relative w-12 h-12">
                            <img
                                src="/logo-new.png"
                                alt="Bella's Candy Shop Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="https://www.bellascandies.com/" className="text-gray-700 hover:text-bella-orange transition">
                            Home
                        </Link>
                        <Link href="https://www.bellascandies.com/shop" className="text-gray-700 hover:text-bella-orange transition">
                            Shop
                        </Link>
                        <Link href="https://www.bellascandies.com/track-order" className="text-gray-700 hover:text-bella-orange transition">
                            Track Order
                        </Link>
                        <Link href="https://www.bellascandies.com/contact" className="text-gray-700 hover:text-bella-orange transition">
                            Contact
                        </Link>
                    </div>

                    {/* Desktop CTA Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden md:block relative px-6 py-3 rounded-full bg-gradient-to-r from-bella-orange to-bella-yellow text-white font-semibold shadow-lg overflow-hidden group"
                    >
                        <span className="relative z-10">Order Now</span>
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-bella-pink to-bella-orange"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.button>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden relative z-50 p-2 text-gray-700"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Mobile Menu Overlay */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : -20, pointerEvents: mobileMenuOpen ? 'auto' : 'none' }}
                        className="absolute inset-x-0 top-0 pt-24 pb-8 bg-white/95 backdrop-blur-xl border-b border-gray-100 md:hidden flex flex-col items-center gap-6 shadow-2xl"
                    >
                        <Link href="https://www.bellascandies.com/" className="text-xl font-medium text-gray-800 hover:text-bella-orange" onClick={() => setMobileMenuOpen(false)}>
                            Home
                        </Link>
                        <Link href="https://www.bellascandies.com/shop" className="text-xl font-medium text-gray-800 hover:text-bella-orange" onClick={() => setMobileMenuOpen(false)}>
                            Shop
                        </Link>
                        <Link href="https://www.bellascandies.com/track-order" className="text-xl font-medium text-gray-800 hover:text-bella-orange" onClick={() => setMobileMenuOpen(false)}>
                            Track Order
                        </Link>
                        <Link href="https://www.bellascandies.com/contact" className="text-xl font-medium text-gray-800 hover:text-bella-orange" onClick={() => setMobileMenuOpen(false)}>
                            Contact
                        </Link>
                        <button className="px-8 py-3 rounded-full bg-gradient-to-r from-bella-orange to-bella-yellow text-white font-bold shadow-md">
                            Order Now
                        </button>
                    </motion.div>
                </div>
            </div>
        </motion.nav>
    );
}
