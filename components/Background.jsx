import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { blue } from '@mui/material/colors';

const Background = () => {
    const { scrollYProgress } = useScroll();

    // Define size animation using scroll position
    const yellowSize = useTransform(scrollYProgress, [0, 0.5, 1], ['800px', '2200px', '500px']);
    const blueSize = useTransform(scrollYProgress, [0, 0.5, 1], ['1200px', '9000px', '300px']);

    // State to track mouse position
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            const x = (event.clientX / window.innerWidth) * 100; // Convert to percentage
            const y = (event.clientY / window.innerHeight) * 100; // Convert to percentage
            setMousePosition({ x, y });
        };

        // Add event listener to the window
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            className="fixed inset-0 -z-10 overflow-hidden w-full"
        >
            <motion.div
                style={{
                    width: yellowSize,
                    height: yellowSize,
                    background: `radial-gradient(
                        circle at ${mousePosition.x}% ${mousePosition.y}%, 
                        #f6c7e9,
                        #ed8fd4,
                        #e457be,
                        #d623a6,
                        #a01a7d,
                        #7e1562,
                        #5f0f4a,
                        #3f0a31
                    )`,
                }}
                className="absolute top-0 right-0 rounded-full transform translate-x-1/3 -translate-y-1/3 onMouseMove={handleMouseMove}"
            />
            <motion.div
                style={{
                    width: blueSize,
                    height: blueSize,
                    background: `radial-gradient(
                        circle at ${mousePosition.x}% ${mousePosition.y}%, 
                        #ade5ff,
                        #5ccbff,
                        #0ab1ff,
                        #007db8,
                        #004666,
                        #003852,
                        #002a3d,
                        #001c29
                    )`,
                }}
                className="absolute bottom-0 left-0 rounded-full transform -translate-x-1/3 translate-y-1/3 onMouseMove={handleMouseMove}"
            />
        </div>
    );
};

export default Background;

