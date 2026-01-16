'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Product } from '@/data/products';

interface Props {
    product: Product;
}

export default function ProductTextOverlays({ product }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    // Section 1: 0-25%
    const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25, 0.35], [0, 1, 1, 0]);
    // Section 2: 25-50%
    const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.5, 0.6], [0, 1, 1, 0]);
    // Section 3: 50-75%
    const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.75, 0.85], [0, 1, 1, 0]);
    // Section 4: 75-100%
    const opacity4 = useTransform(scrollYProgress, [0.75, 0.85, 1], [0, 1, 1]);

    const sections = [
        { ...product.section1, opacity: opacity1 },
        { ...product.section2, opacity: opacity2 },
        { ...product.section3, opacity: opacity3 },
        { ...product.section4, opacity: opacity4 },
    ];

    return (
        <div ref={containerRef} className="fixed inset-0 pointer-events-none z-10">
            {sections.map((section, index) => (
                <motion.div
                    key={index}
                    style={{ opacity: section.opacity }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
                >
                    <h2 className="text-5xl md:text-7xl font-fredoka font-bold text-white mb-4 drop-shadow-2xl">
                        {section.title}
                    </h2>
                    {section.subtitle && (
                        <p className="text-xl md:text-3xl text-white/90 max-w-2xl drop-shadow-lg">
                            {section.subtitle}
                        </p>
                    )}
                </motion.div>
            ))}
        </div>
    );
}
