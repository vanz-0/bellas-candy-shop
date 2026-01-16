'use client';

import { motion } from 'framer-motion';
import { Product } from '@/data/products';

interface Props {
    product: Product;
}

export default function BuyNowSection({ product }: Props) {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-bella-pink/10 to-bella-orange/10 rounded-3xl p-10 md:p-12 border-2 border-bella-orange/20"
                    >
                        {/* Header */}
                        <div className="text-center mb-10">
                            <h2 className="text-4xl md:text-5xl font-fredoka font-bold mb-4">
                                Get Yours Today
                            </h2>
                            <p className="text-xl text-gray-600">
                                Next-Day Delivery Guaranteed in Nairobi
                            </p>
                        </div>

                        {/* Pricing */}
                        <div className="text-center mb-8">
                            <div className="text-5xl font-bold text-bella-orange mb-2">
                                {product.buyNowSection.price}
                            </div>
                            <div className="text-gray-600">{product.buyNowSection.unit}</div>
                        </div>

                        {/* Pack Sizes */}
                        <div className="flex flex-wrap justify-center gap-4 mb-10">
                            {product.buyNowSection.packSizes.map((size, index) => (
                                <div
                                    key={index}
                                    className="px-6 py-3 bg-white rounded-full border-2 border-bella-orange text-gray-700 font-medium"
                                >
                                    {size}
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="text-center mb-10">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-12 py-5 rounded-full bg-gradient-to-r from-bella-orange to-bella-yellow text-white text-xl font-bold shadow-2xl"
                            >
                                Add to Cart
                            </motion.button>
                        </div>

                        {/* Delivery & Return Info */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl">
                                <h3 className="font-fredoka font-semibold text-lg mb-2 text-bella-orange">
                                    📦 Delivery Promise
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {product.buyNowSection.deliveryPromise}
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl">
                                <h3 className="font-fredoka font-semibold text-lg mb-2 text-bella-pink">
                                    ✓ Return Policy
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {product.buyNowSection.returnPolicy}
                                </p>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="mt-8 text-center text-gray-600">
                            <p className="mb-2">Questions? Call us at <span className="font-semibold text-bella-orange">0717835323</span></p>
                            <p className="text-sm">Operating Hours: Tue-Sat 9:00-19:30, Mon/Sun 12:00-18:00</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
