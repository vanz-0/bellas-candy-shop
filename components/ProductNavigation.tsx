'use client';

import { motion } from 'framer-motion';
import { products } from '@/data/products';

interface Props {
    currentIndex: number;
    setCurrentIndex: (index: number) => void;
}

export default function ProductNavigation({ currentIndex, setCurrentIndex }: Props) {
    return (
        <>
            {/* Arrow Navigation */}
            <div className="fixed top-1/2 -translate-y-1/2 left-6 z-40">
                {currentIndex > 0 && (
                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={() => setCurrentIndex(currentIndex - 1)}
                        className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white hover:bg-white/30 transition shadow-lg"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </motion.button>
                )}
            </div>

            <div className="fixed top-1/2 -translate-y-1/2 right-6 z-40">
                {currentIndex < products.length - 1 && (
                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={() => setCurrentIndex(currentIndex + 1)}
                        className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white hover:bg-white/30 transition shadow-lg"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </motion.button>
                )}
            </div>

            {/* Bottom Menu */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex gap-3 bg-white/20 backdrop-blur-md border border-white/40 rounded-full px-6 py-3 shadow-2xl"
                >
                    {products.map((product, index) => (
                        <button
                            key={product.id}
                            onClick={() => setCurrentIndex(index)}
                            className={`px-6 py-2 rounded-full font-medium transition ${currentIndex === index
                                    ? 'bg-white text-gray-900 shadow-lg'
                                    : 'bg-transparent text-white hover:bg-white/20'
                                }`}
                        >
                            {product.name}
                        </button>
                    ))}
                </motion.div>
            </div>
        </>
    );
}
