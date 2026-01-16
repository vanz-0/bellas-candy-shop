'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { products } from '@/data/products';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductBottleScroll from '@/components/ProductBottleScroll';
import ProductTextOverlays from '@/components/ProductTextOverlays';
import ProductDetails from '@/components/ProductDetails';
import FreshnessSection from '@/components/FreshnessSection';
import BuyNowSection from '@/components/BuyNowSection';
import ProductNavigation from '@/components/ProductNavigation';

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentProduct = products[currentIndex];

    // Reset scroll when product changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentIndex]);

    return (
        <main className="relative min-h-screen">
            <Navbar />

            <ProductNavigation
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
            />

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentProduct.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ background: currentProduct.gradient }}
                    className="min-h-screen"
                >
                    {/* Hero Section with Scroll Animation */}
                    <div className="relative">
                        <ProductBottleScroll product={currentProduct} />
                        {/* <ProductTextOverlays product={currentProduct} /> - Removed as per user request */}
                    </div>

                    {/* Content Sections */}
                    <ProductDetails product={currentProduct} />
                    <FreshnessSection product={currentProduct} />
                    <BuyNowSection product={currentProduct} />

                    {/* Next Product CTA */}
                    {currentIndex < products.length - 1 && (
                        <section className="py-20 bg-gray-900 text-white">
                            <div className="container mx-auto px-6 text-center">
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <h2 className="text-4xl font-fredoka font-bold mb-6">
                                        Explore More Treats
                                    </h2>
                                    <p className="text-xl text-gray-300 mb-8">
                                        Discover {products[currentIndex + 1].name}
                                    </p>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setCurrentIndex(currentIndex + 1)}
                                        className="px-12 py-5 rounded-full bg-gradient-to-r from-bella-orange to-bella-yellow text-white text-xl font-bold shadow-2xl transform -skew-x-6"
                                    >
                                        <span className="block transform skew-x-6">
                                            Next Flavor →
                                        </span>
                                    </motion.button>
                                </motion.div>
                            </div>
                        </section>
                    )}

                    <Footer />
                </motion.div>
            </AnimatePresence>
        </main>
    );
}
