import { cubicBezier, motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { resolvedTheme } from 'next-themes'
import Image from 'next/image';

function HoverCard({ image, header, content, className = "", imageClassName = "" }) {
    const cardRef = useRef(null);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = -(e.clientX - rect.left - width / 2);
        const mouseY = -(e.clientY - rect.top - height / 2);

        setMouseX(mouseX);
        setMouseY(mouseY);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        if (isHovered === true) {
            const timer = setTimeout(() => {
                setIsHovered(false);
            }, 500);
            return () => clearTimeout(timer);
        }
        setMouseX(0);
        setMouseY(0);
    };

    return (
        <div
            ref={cardRef}
            className={`cursor-pointer ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: 'preserve-3d',
                perspective: '800px'
            }}
        >
            <motion.div
                className="relative rounded-lg overflow-hidden hover:shadow-blizzard-blue-400 dark:shadow-astro-blue-900"
                animate={{
                    rotateY: isHovered ? (mouseX / (cardRef.current?.offsetWidth ?? 1)) * -30 : 0,
                    rotateX: isHovered ? (mouseY / (cardRef.current?.offsetHeight ?? 1)) * 30 : 0,
                    scale: isHovered ? 1 : 0.9,
                }}
                transition={{
                    duration: 0.6,
                    ease: cubicBezier[0.23, 1, 0.32, 1],
                }}
                style={{
                    boxShadow: resolvedTheme === 'dark'
                    ? (isHovered 
                        ? 'grey 0 0 30px 5px, #0b74be 0 20px 40px 0'  // Dark mode + hovered
                        : '#f1f8fe 0px 20px 40px -10px') // Dark mode + not hovered
                    : (isHovered
                        ? 'grey 0 0 30px 5px, #0d4e7f 0px 20px 30px -10px' // Light mode + hovered
                        : '#0b2a46 0px 20px 40px -10px')              // Light mode + not hovered
                }}
            >
                    {image && (
                        <div className="relative">
                            <Image
                                src={image}
                                alt={header || "Project Image"}
                                width={1000} 
                                height={800} 
                                priority
                                className={`object-fit ${imageClassName}`}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    )}
            </motion.div>
        </div>
    );
}

export default HoverCard;