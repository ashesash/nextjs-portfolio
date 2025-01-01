'use client';
import React, { useRef } from 'react';
import { motion, useTransform, useScroll, useSpring } from 'framer-motion';
import Title from './ui/Title';
const About = () => {
    const paragraph1 =
        'I’ve lived in a few different places before settling in Sydney—India, Bahrain, Canada, and Sweden—each one leaving its mark on me and shaping the way I approach life and work. These experiences have given me a unique perspective and a love for diverse cultures, which is why I’m so happy to now call Sydney home.';
    const paragraph2 =
        'Currently, I’m a Full Stack Developer at Meydit, where I work on everything from revamping the frontend and improving backend notifications to integrating machine learning into new products.';
    const paragraph3 =
        'When I’m not coding, I’m likely modding mechanical keyboards, playing guitar, sketching, or getting creative with polymer clay. I also love building small coding projects in my spare time, so if you’re interested in collaborating or building something cool together, feel free to reach out!';
    const containerRef = useRef(null);
    // Scroll progress within the specific container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'], // When the div enters and exits the viewport
    });
    const smoothScrollProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 40, 80, 0]);
    const textOpacity = useTransform(scrollYProgress, [0.2, 0.4], [1, 0]);
    const aboutScale = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
    const aboutOpacity1 = useTransform(smoothScrollProgress, [0.35, 0.4], [0, 1]);
    const aboutOpacity2 = useTransform(smoothScrollProgress, [0.4, 0.45], [0, 1]);
    const aboutOpacity3 = useTransform(smoothScrollProgress, [0.45, 0.5], [0, 1]);
    return (
        <div id="about" className="relative w-full min-h-screen snap-mandatory snap-y scroll-smooth overflow-hidden" ref={containerRef}>
            <div className=" w-screen h-screen grid place-items-center py-40 snap-start z-0 sticky top-40">
                <Title level="h2">
                    <motion.div
                        style={{
                            scale,
                            opacity: textOpacity,
                        }}
                    >
                        About
                    </motion.div>
                </Title>
            </div>
            <motion.div
                style={{
                    scale: aboutScale,
                }}
                className="w-full h-screen snap-start -z-10"
            >
                <div className="inset-0 flex justify-center items-center text-gray-900 dark:text-[#ecf0f3] text-sm md:text-lg -z-10 h-full px-10">
                    <div className="max-w-3xl text-justify my-96 sticky top-20 snap-end">
                        <motion.p
                            style={{
                                opacity: aboutOpacity1,
                            }}
                        >{paragraph1}</motion.p>
                        <br />
                        <motion.p
                            style={{
                                opacity: aboutOpacity2,
                            }}
                        >{paragraph2}</motion.p>
                        <br />
                        <motion.p
                            style={{
                                opacity: aboutOpacity3,
                            }}
                        >{paragraph3}</motion.p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
export default About;