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

    const imageParallax = useParallax(scrollYProgress,-600);
    const detailsParallax = useParallax(scrollYProgress, 600);
    const scale = useTransform(
        smoothScrollProgress,
        [0, 0.4, 1],
        [0.4, 0.8, 0.5]
    );

    return (
        <div
            ref={containerRef}
            className={`
        flex flex-col md:flex-row w-full h-[70vh] snap-center overflow-hidden gap-8 px-4 md:px-0
        ${isImageLeft ? 'bg-slate-200' : 'md:flex-row-reverse'}`}
        >
            {/* Image Container */}
            <div className="w-full md:w-2/3 flex items-center justify-center">
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
                    <Title level='h4'>{title}</Title>
                    <p className="pb-4 text-black text-justify">{description}</p>
                    <Title level='h6'>Tech Used</Title>
                    <p className="pb-4 text-black">{tech}</p>
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
        </div>
    );
};

export default ParallaxCard;