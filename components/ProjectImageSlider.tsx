'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectImageSliderProps {
    images: string[];
    alt: string;
    index?: number;
}

const variants = {
    enter: {
        x: '100%',
        opacity: 0.5,
    },
    center: {
        x: 0,
        opacity: 1,
    },
    exit: {
        x: '-100%',
        opacity: 0.5,
    },
};

export function ProjectImageSlider({ images, alt, index = 0 }: ProjectImageSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!images || images.length <= 1) return;

        // Offset the start time based on the card's index so they don't slide simultaneously
        const startDelay = index * 1000;
        
        let interval: NodeJS.Timeout;
        
        const timeout = setTimeout(() => {
            interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 5000); // Change image every 5 seconds
            
            // Do the first slide immediately after the initial delay
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, startDelay);

        return () => {
            clearTimeout(timeout);
            if (interval) clearInterval(interval);
        };
    }, [images, index]);

    if (!images || images.length === 0) {
        return <div className="w-full h-full bg-neutral-900" />;
    }

    return (
        <>
            <AnimatePresence initial={false} mode="popLayout">
                <motion.div
                    key={currentIndex}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: 'tween', ease: 'easeInOut', duration: 0.8 },
                        opacity: { duration: 0.8 },
                    }}
                    className="absolute inset-0 w-full h-full"
                >
                    <Image
                        src={images[currentIndex]}
                        alt={`${alt} slide ${currentIndex + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={currentIndex === 0}
                    />
                </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-neutral-900/30 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
            
            {/* Dots */}
            {images.length > 1 && (
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20 pointer-events-none">
                    {images.map((_, dotIndex) => (
                        <div
                            key={dotIndex}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                dotIndex === currentIndex ? 'bg-neutral-200 scale-125' : 'bg-neutral-500/70'
                            }`}
                        />
                    ))}
                </div>
            )}
        </>
    );
}
