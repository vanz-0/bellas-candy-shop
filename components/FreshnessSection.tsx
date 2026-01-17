'use client';

import { motion } from 'framer-motion';
import { Product } from '@/data/products';

interface Props {
    product: Product;
}

export default function FreshnessSection({ product }: Props) {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-fredoka font-bold mb-6">
                        {product.freshnessSection.title}
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-10">
                        {product.freshnessSection.description}
                    </p>

                    {/* Pairing Ideas */}
                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-fredoka font-semibold mb-4 text-bella-orange">
                                Perfect Pairings
                            </h3>
                            <ul className="space-y-2 text-left">
                                {product.pairingIdeas.map((idea, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <span className="text-bella-orange mt-1">•</span>
                                        <span className="text-gray-700">{idea}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-fredoka font-semibold mb-4 text-bella-pink">
                                Perfect For
                            </h3>
                            <ul className="space-y-2 text-left">
                                {product.occasions.map((occasion, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <span className="text-bella-pink mt-1">•</span>
                                        <span className="text-gray-700">{occasion}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
