'use client'
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Button from './Button';
import Title from './Title';
import HoverCard from './HoverCard';

function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

const bgColors = ['bg-slate-200', 'bg-blue-200', 'bg-green-200', 'bg-purple-200'];

const ParallaxCard = ({
    i,
    image,
    title,
    tech,
    description,
    gitUrl,
    projectUrl,
    isImageLeft,
    targetScale
}) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
        // offset: ["start end", `${100 + (i * 25)}vh end`]
    });

    const smoothScrollProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 30,
        restDelta: 0.001
    });

    const cardScale = useTransform(scrollYProgress, [i * .25, 1], [1, targetScale]);
    const imageParallax = useParallax(scrollYProgress, 100);
    const detailsParallax = useParallax(scrollYProgress, 400);
    const techParallax = useParallax(scrollYProgress, -100)
    const scale = useTransform(
        smoothScrollProgress,
        [0, 0.5, 1],
        [0.4, 0.9, 0.4]
    );


    return (
        <div className='min-h-screen sticky top-0'>
            <motion.div
                ref={containerRef}
                className={`h-3/4 py-4 m-4 rounded-xl sticky ${bgColors[i]}`}
                style={{
                    cardScale,
                    top: `calc(10vh + ${i * 2}vh)`
                }}
            >
                <Title level='h3'>{title}</Title>
                <div
                    className={`
        flex flex-col md:flex-row w-full h-[70vh] overflow-hidden px-4 md:px-0
        ${isImageLeft ? '' : 'md:flex-row-reverse'}`}
                >
                    {/* Image Container */}
                    <div className="w-full md:w-3/5 flex items-center justify-center">
                        <motion.div
                            style={{
                                y: imageParallax,
                                scale,
                            }}
                            className="w-full flex items-center justify-center"
                        >
                            <div className="relative w-full aspect-video">
                                <HoverCard
                                    image={image}
                                    header={title}
                                    imageClassName="object-contain"
                                />
                            </div>
                        </motion.div>
                    </div>
                    {/* Content Container */}
                    <div className="w-full md:w-1/3 flex items-center justify-center px-4">
                        <motion.div
                            style={{
                                y: detailsParallax,
                            }}
                            className="text-center"
                        >
                            <p className="pb-4 text-black text-justify">{description}</p>
                            <motion.div
                                style={{
                                    // y: techParallax,
                                }}
                                className="text-center overflow-hidden"
                            >
                                <Title level='h6'>Tech Used</Title>
                                <p className="pb-4 flex flex-col text-black">{tech}</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
                <div className="flex justify-center space-x-4">
                    {gitUrl && (
                        <Button className='bg-[length:200%] [animation:_gradient-move_5s_infinite_linear_reverse]'>
                            <Link href={gitUrl}>Github</Link>
                        </Button>
                    )}
                    {projectUrl && (
                        <Button className='bg-[length:200%] [animation:_gradient-move_5s_infinite_linear_reverse]'>
                            <Link href={projectUrl}>Website</Link>
                        </Button>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default ParallaxCard;