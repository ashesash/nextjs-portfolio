'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion, useTransform, useScroll, useSpring } from 'framer-motion';
import Title from './ui/Title';

const About = () => {
    const paragraph1 =
        "I've lived in a few different places before settling in Sydney—India, Bahrain, Canada, and Sweden—each one leaving its mark on me and shaping the way I approach life and work.These experiences have given me a unique perspective and a love for diverse cultures, which is why I'm so happy to now call Sydney home.";
    const paragraph2 =
        "Currently, I'm a Full Stack Developer at Meydit, where I work on everything from revamping the frontend and improving backend notifications to integrating machine learning into new products.";
    const paragraph3 =
        "When I'm not coding, I'm likely modding mechanical keyboards, playing guitar, sketching, or getting creative with polymer clay. I also love building small coding projects in my spare time, so if you're interested in collaborating or building something cool together, feel free to reach out!";

    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'], // Changed to end end for full scroll range
    });

    const smoothScrollProgress = useSpring(scrollYProgress, {
        stiffness: 40,
        damping: 30,
        restDelta: 0.001
    });

    // Adjusted scale values and ranges
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 30, 80]);
    const textOpacity = useTransform(scrollYProgress, [0.2, 0.4], [1, 0]);
    const aboutScale = useTransform(smoothScrollProgress, [0.3, 0.4], [0, 1]);
    const aboutOpacity1 = useTransform(smoothScrollProgress, [0.55, 0.65], [0, 1]);
    const aboutOpacity2 = useTransform(smoothScrollProgress, [0.65, 0.75], [0, 1]);
    const aboutOpacity3 = useTransform(smoothScrollProgress, [0.75, 0.85], [0, 1]);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (isMobile) {
        return (
            <div id="about" className="relative w-full min-h-screen overflow-hidden" ref={containerRef}>
                <div className="sticky top-1/2 w-full grid place-items-center z-10">
                    <Title level="h2">About</Title>
                </div>
                <motion.div
                    className="relative mt-[100vh] py-20 px-6"
                    style={{ scale: aboutScale }}
                >
                    <div className="max-w-3xl mx-auto space-y-6 text-gray-900 dark:text-[#ecf0f3] text-sm md:text-lg">
                        <motion.p style={{ opacity: aboutOpacity1 }}>{paragraph1}</motion.p>
                        <motion.p style={{ opacity: aboutOpacity2 }}>{paragraph2}</motion.p>
                        <motion.p style={{ opacity: aboutOpacity3 }}>{paragraph3}</motion.p>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div id="about" className="relative w-full min-h-[100vh] overflow-hidden" ref={containerRef}>
            <div className="sticky top-0 h-screen w-full flex items-center justify-center">
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
                className="relative py-2 px-6"
                style={{ scale: aboutScale }}
            >
                <div className="max-w-3xl mx-auto space-y-6 text-gray-900 dark:text-[#ecf0f3] md:text-lg mb-40">
                    <motion.p style={{ opacity: aboutOpacity1 }}>{paragraph1}</motion.p>
                    <motion.p style={{ opacity: aboutOpacity2 }}>{paragraph2}</motion.p>
                    <motion.p style={{ opacity: aboutOpacity3 }}>{paragraph3}</motion.p>
                </div>
            </motion.div>
        </div>
    );
};

export default About;