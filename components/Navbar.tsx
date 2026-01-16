'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

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
                    <Link href="/" className="flex items-center gap-3">
                        <div className="relative w-12 h-12">
                            <img
                                src="/logo.png"
                                alt="Bella's Candy Shop Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>

                        <span className="text-2xl font-fredoka font-bold bg-gradient-to-r from-bella-pink via-bella-orange to-bella-yellow bg-clip-text text-transparent">
                            Bella's Candy Shop
                        </span>
                    </Link>

                    {/* Navigation Links */}
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

                    {/* CTA Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative px-6 py-3 rounded-full bg-gradient-to-r from-bella-orange to-bella-yellow text-white font-semibold shadow-lg overflow-hidden group"
                    >
                        <span className="relative z-10">Order Now</span>
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-bella-pink to-bella-orange"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.button>
                </div>
            </div>
        </motion.nav>
    );
}
