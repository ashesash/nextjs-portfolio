'use client'
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, cubicBezier } from 'framer-motion';
import Button from './Button';
import Title from './Title';
import HoverCard from './HoverCard';

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

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const smoothScrollProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 30,
        restDelta: 0.001
    });

    const imageParallax = useParallax(scrollYProgress, 100);
    const detailsParallax = useParallax(scrollYProgress, 350);
    const scale = useTransform(
        smoothScrollProgress,
        [0, 0.4, 1],
        [0.4, 0.8, 0.5]
    );

    return (
        <div
            ref={containerRef}
            className={`flex ${isImageLeft ? 'flex-row' : 'flex-row-reverse'} w-full h-full snap-start py-20 overflow-hidden`}
        >
            <div className="w-2/3 flex items-center justify-center ">
                <motion.div
                    style={{
                        y: imageParallax,
                        scale,
                    }}
                    className="w-full h-full flex items-center justify-center"
                >
                    <div className="relative w-full h-full aspect-square">
                        <HoverCard
                            image={image}
                            header={title}
                            className="w-full h-full"
                            imageClassName="object-contain"
                        />
                    </div>
                </motion.div>
            </div>

            <div className="w-1/3 flex items-center justify-center px-20 h-screen">
                <motion.div
                    style={{
                        y: detailsParallax,
                    }}
                    className="text-center"
                >
                    <Title level='h4'>{title}</Title>
                    <p className="pb-4 text-black text-justify">{description}</p>
                    <Title level='h6'>Tech Used</Title>
                    <p className="pb-4 text-black">{tech}</p>
                    <div className="flex justify-center space-x-4">
                        {gitUrl && (
                            <Button className='bg-[length:200%] [animation:_gradient-move_5s_infinite_linear_reverse]'>
                                <Link href={gitUrl}>
                                    Github
                                </Link>
                            </Button>
                        )}
                        {projectUrl && (
                            <Button className='bg-[length:200%] [animation:_gradient-move_5s_infinite_linear_reverse]'>
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