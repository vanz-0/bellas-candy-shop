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
            {/* Bottom Menu */}
            <div className="fixed bottom-0 left-0 right-0 z-40 p-4 md:bottom-8 md:bg-transparent bg-white/90 backdrop-blur-lg border-t md:border-t-0 border-gray-200">
                <div className="flex justify-center md:items-center">
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex gap-2 md:gap-3 md:bg-white/20 md:backdrop-blur-md md:border md:border-white/40 md:rounded-full md:px-6 md:py-3 md:shadow-2xl overflow-x-auto w-full md:w-auto justify-between md:justify-center"
                    >
                        {products.map((product, index) => {
                            // Shorten names for mobile display
                            const shortName = product.id === 'wafers' ? 'Wafers' :
                                product.id === 'chocolate' ? 'Chocolate' : 'Artisan';

                            return (
                                <button
                                    key={product.id}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`px-4 py-2 rounded-full font-medium text-sm md:text-base transition whitespace-nowrap ${currentIndex === index
                                        ? 'bg-bella-orange text-white shadow-lg md:bg-white md:text-gray-900'
                                        : 'bg-gray-100 text-gray-600 md:bg-transparent md:text-white hover:bg-gray-200 md:hover:bg-white/20'
                                        }`}
                                >
                                    <span className="md:hidden">{shortName}</span>
                                    <span className="hidden md:inline">{product.name}</span>
                                </button>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </>
    );
}
