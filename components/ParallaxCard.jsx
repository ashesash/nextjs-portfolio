import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';

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
    // Scroll tracking
    // Observe scroll within this specific container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"], // Tracks scroll within container
    });


    // Parallax Effect: Move image vertically
    const translateY = useTransform(scrollYProgress, [0, 1], [-500, 500]);

    // Zoom Effect: Scale the image
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.3, 1]);

    return (
        <div className={` flex ${isImageLeft ? 'flex-row' : 'flex-row-reverse'} w-full h-screen justify-center`}>
            <div className={`w-2/3 overflow-hidden ${isImageLeft ? 'bg-lime-100' : 'bg-orange-100'}`}>
                {/* <Parallax speed={-10}> */}
                <h2 className="fade-down mt-10 tracking-wider text-center overflow-auto [writing-mode:vertical-r]">{title}</h2>
                {/* </Parallax> */}
                <motion.div
                    style={{
                        translateY,
                        scale,
                    }}
                    className="w-full h-full"
                >
                    <Image
                        className=" w-3/4 pt-20 ml-[10%] drop-shadow-2xl shadow-blue-900"
                        src={image}
                        alt={title}
                        layout="intrinsic"
                        priority />
                </motion.div>
            </div>
            <div className="w-1/3 relative px-10 pt-32 text-center overflow-hidden">
                <Parallax speed={0}>
                    {/* <h2 className="mt-10 tracking-wider">{title}</h2> */}
                    <h4 className="pb-4">{tech}</h4>
                    <p className="pb-4">{description}</p>
                    <div className="flex flex-row justify-center">
                        {gitUrl && (
                            <Link href={gitUrl}>
                                <button className='w-full p-2 text-3xl text-opacity-60 text-lime-300 mt-4 bg-gradient-to-tr from-teal-200 via-cyan-700 to-teal-200 bg-[length:200%] [animation:_gradient-button_10s_infinite_linear]'>
                                    Github
                                </button>
                            </Link>
                        )}
                        {projectUrl && (
                            <Link href={projectUrl}>
                                <button className='w-full p-2 text-3xl text-opacity-60 text-lime-300 mt-4 bg-gradient-to-tr from-teal-200 via-cyan-700 to-teal-200 bg-[length:200%] [animation:_gradient-button_10s_infinite_linear]'>
                                    Live Site
                                </button>
                            </Link>
                        )}
                    </div>
                </Parallax>
            </div >
        </div >
    );
};



export default ParallaxCard;