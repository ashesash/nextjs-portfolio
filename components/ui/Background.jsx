import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Background = () => {
    const { scrollYProgress } = useScroll();

    // Define size animation using scroll position
    const yellowSize = useTransform(scrollYProgress, [0, 0.5, 0.7, 1], ['600px', '2200px', '2000px', '0px']);
    const blueSize = useTransform(scrollYProgress, [0, 0.5, 0.8, 0.9], ['800px', '9000px', '4000px', '0px']);

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
                        #eafafe,
                        #d5f5fc,
                        #c0f0fb,
                        #abebfa,
                        #96e6f8,
                        #4bd5f3,
                        #0ebae0,
                        #0a7c96,
                        #053e4b
                    )`,
                }}
                className="absolute blur-sm top-0 right-0 rounded-full transform translate-x-1/3 -translate-y-1/3 onMouseMove={handleMouseMove}"
            />
            <motion.div
                style={{
                    width: blueSize,
                    height: blueSize,
                    background: `radial-gradient(
                        circle at ${mousePosition.x}% ${mousePosition.y}%, 
                        #5ccbff,
                        #0ab1ff,
                        #007db8,
                        #004666,
                        #003852,
                        #002a3d,
                        #001c29
                    )`,
                }}
                className="absolute blur-sm bottom-0 left-0 rounded-full transform -translate-x-1/3 translate-y-1/3 onMouseMove={handleMouseMove}"
            />
            <motion.div
                style={{
                    width: blueSize,
                    height: blueSize,
                    background: `radial-gradient(
                        circle at ${mousePosition.x}% ${mousePosition.y}%, 
                        #5ccbff,
                        #0ab1ff,
                        #007db8,
                        #004666,
                        #003852,
                        #002a3d,
                        #001c29
                    )`,
                }}
                className="absolute blur-sm top-20 left-0 rounded-full transform translate-x-1/3 translate-y-1/3 onMouseMove={handleMouseMove}"
            />
            <motion.div
                style={{
                    width: blueSize,
                    height: blueSize,
                    background: `radial-gradient(
                        circle at ${mousePosition.x}% ${mousePosition.y}%, 
                        #5ccbff,
                        #0ab1ff,
                        #007db8,
                        #004666,
                        #003852,
                        #002a3d,
                        #001c29
                    )`,
                }}
                className="absolute blur-sm bottom-0 left-0 rounded-full transform -translate-x-1/3 translate-y-1/3 onMouseMove={handleMouseMove}"
            />
        </div>
    );
};

export default Background;

