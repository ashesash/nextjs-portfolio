'use client'
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Button from './ui/Button';
import Title from './ui/Title';
import BackgroundScene from './ui/BackgroundScene';

// Custom hook for parallax effect
function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

const ParallaxCard = ({
    image,
    title,
    tech,
    description,
    gitUrl,
    projectUrl,
    isImageLeft
}) => {
    const containerRef = useRef(null);

    // Scroll progress within the specific container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Smooth spring for scroll progress
    const smoothScrollProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Parallax effects
    const imageParallax = useParallax(smoothScrollProgress, 100);
    const detailsParallax = useParallax(smoothScrollProgress, -200);

    // Scale effect
    const scale = useTransform(
        smoothScrollProgress,
        [0, 0.4, 1],
        [0.4, 1, 0.5]
    );

    const techWords = tech.split(" ");

    return (
        <div
            ref={containerRef}
            // className={`flex ${isImageLeft ? 'flex-row' : 'flex-row-reverse'} w-full h-screen sticky top-0 snap-start ${isImageLeft ? 'bg-custom-indigo_dye' : 'bg-custom-prussian_blue'} dark:bg-cyan-950`}
            className={`flex ${isImageLeft ? 'flex-row' : 'flex-row-reverse'} w-full h-screen sticky top-0 snap-start bg-white`}
        >
            {/* Image Section */}
            <div className={`w-2/3 flex items-center justify-center overflow-hidden `}>
                {/* <div className={`w-2/3 flex items-center justify-center rounded-lg overflow-hidden ${isImageLeft ? 'bg-custom-vivid_sky_blue' : 'bg-custom-indigo_dye'}`}> */}
                <motion.div
                    style={{
                        y: imageParallax,
                        scale,
                    }}
                    className="w-full h-full flex items-center justify-center"
                >
                    <div className="relative w-full h-full">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            priority
                            className="object-contain "
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Details Section */}
            <div className="w-1/3 flex items-center justify-center px-10 h-screen ">
                <motion.div
                    style={{
                        y: detailsParallax,
                    }}
                    className="text-center"
                >
                    {/* <h3 className="text-xl text-black tracking-wider">{title}</h3> */}
                    <Title level='h4'>{title}</Title>
                    <p className="pb-4 text-black text-justify">{description}</p>
                    <Title level='h6'>Tech Used</Title>
                    <p className="pb-4 text-black">{tech}</p>
                    <div className="flex justify-center space-x-4">
                        {gitUrl && (
                            <Button>
                                <Link href={gitUrl}>
                                    Github
                                </Link>
                            </Button>
                        )}
                        {projectUrl && (
                            <Button>
                                <Link href={projectUrl}>
                                    Website
                                </Link>
                            </Button>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ParallaxCard;