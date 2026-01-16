'use client';

import { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { Product } from '@/data/products';

interface Props {
    product: Product;
}

export default function ProductBottleScroll({ product }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, 119]);

    // Load images
    useEffect(() => {
        const imageArray: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 1; i <= 120; i++) {
            const img = new Image();
            img.src = `${product.folderPath}/${i}.jpg`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === 120) {
                    setImagesLoaded(true);
                }
            };
            // Handle error to prevent blank screen if images missing
            img.onerror = () => {
                console.warn(`Failed to load image: ${img.src}`);
                // Still count as loaded to avoid blocking
                loadedCount++;
                if (loadedCount === 120) {
                    setImagesLoaded(true);
                }
            };
            imageArray.push(img);
        }

        setImages(imageArray);
    }, [product.folderPath]);

    // Render frame
    useEffect(() => {
        if (!imagesLoaded || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        if (!context) return;

        const render = () => {
            const index = Math.min(Math.floor(frameIndex.get()), 119);
            const img = images[index];

            if (img && img.complete && img.naturalHeight !== 0) {
                // Set canvas size
                const container = canvas.parentElement;
                if (container) {
                    canvas.width = container.clientWidth;
                    canvas.height = container.clientHeight;

                    // Calculate scaling to fit image
                    const scale = Math.min(
                        canvas.width / img.width,
                        canvas.height / img.height
                    );

                    const x = (canvas.width / 2) - (img.width / 2) * scale;
                    const y = (canvas.height / 2) - (img.height / 2) * scale;

                    context.clearRect(0, 0, canvas.width, canvas.height);
                    context.drawImage(
                        img,
                        0,
                        0,
                        img.width,
                        img.height,
                        x,
                        y,
                        img.width * scale,
                        img.height * scale
                    );
                }
            }

            requestAnimationFrame(render);
        };

        render();
    }, [frameIndex, images, imagesLoaded]);

    return (
        <div ref={containerRef} className="relative h-[500vh]">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center">
                <div className="canvas-container w-full h-full max-w-4xl relative">
                    {/* Thumbnail / First Frame Placeholder */}
                    <img
                        src={`${product.folderPath}/1.jpg`}
                        alt={product.name}
                        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${imagesLoaded ? 'opacity-0' : 'opacity-100'}`}
                        priority="true"
                    />
                    <canvas ref={canvasRef} className="w-full h-full" />
                </div>
            </div>
        </div>
    );
}
