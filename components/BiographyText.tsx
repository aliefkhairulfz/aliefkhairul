'use client';

import { motion, Variants } from 'framer-motion';

const text =
    'I am a dedicated JavaScript Developer focused on turning that philosophy into functional, maintainable web applications. As an Informatics graduate with a passion for Fullstack Web Development, I specialize in bridging the gap between intuitive user experiences and robust backend systems. Whether it is a simple interface or a complex architecture, my goal is to build digital products that are secure, scalable, and genuinely useful.';

export function BiographyText() {
    const words = text.split(' ');

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.2 * i },
        }),
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            display: 'inline-block',
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            display: 'inline-block',
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <div className="absolute top-[18%] sm:top-1/4 md:top-1/3 left-0 ml-4 sm:ml-6 max-w-62.5 sm:max-w-xl flex flex-col gap-2 font-mono text-sm sm:text-sm text-neutral-500 uppercase tracking-wider z-20">
            <motion.p variants={container} initial="hidden" animate="visible" className="leading-relaxed normal-case text-neutral-600">
                {words.map((word, index) => (
                    <motion.span variants={child} key={index} style={{ marginRight: '4px' }}>
                        {word}
                    </motion.span>
                ))}
            </motion.p>
        </div>
    );
}
