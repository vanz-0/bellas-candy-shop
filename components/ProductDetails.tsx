'use client';

import { motion } from 'framer-motion';
import { Product } from '@/data/products';

interface Props {
    product: Product;
}

export default function ProductDetails({ product }: Props) {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-fredoka font-bold mb-6">
                            {product.detailsSection.title}
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            {product.detailsSection.description}
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            {product.features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 text-gray-600"
                                >
                                    <svg
                                        className="w-5 h-5 text-bella-orange"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="flex gap-8">
                            {product.stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl font-bold text-bella-orange mb-1">
                                        {stat.val}
                                    </div>
                                    <div className="text-sm text-gray-500">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
                        style={{ background: product.gradient }}
                    >
                        <img
                            src={`${product.folderPath}/preview.jpg`}
                            alt={product.detailsSection.imageAlt}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
