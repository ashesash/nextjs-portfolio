import { cubicBezier, motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
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
                className="relative rounded-lg overflow-hidden"
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
                    boxShadow: isHovered
                        ? 'grey 0 0 30px 5px, white 0 0 0 1px, #47d4ff 0 30px 60px 0'
                        : 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px'
                }}
            >
                    {image && (
                        <div className="relative">
                            <Image
                                src={image}
                                alt={header || "Project Image"}
                                layout="intrinsic"
                                priority
                                className={`object-cover ${imageClassName}`}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    )}
                {/* {header && (
                    <motion.div
                        className="absolute bottom-0 p-5 text-white"
                        animate={{
                            y: isHovered ? '0%' : '40%',
                        }}
                        transition={{
                            duration: 0.6,
                            ease: [0.215, 0.61, 0.355, 1],
                            delay: isHovered ? 0 : 1.6,
                        }}
                    >
                        <div className="relative z-10">
                            <h1 className="text-2xl font-bold" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                                {header}
                            </h1>
                            {content && (
                                <motion.p
                                    className="mt-2"
                                    style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
                                    animate={{
                                        opacity: isHovered ? 1 : 0,
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        ease: [0.215, 0.61, 0.355, 1],
                                        delay: isHovered ? 0 : 1.6,
                                    }}
                                >
                                    {content}
                                </motion.p>
                            )}
                        </div>
                        <motion.div
                            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/60"
                            style={{ mixBlendMode: 'overlay' }}
                            animate={{
                                opacity: isHovered ? 1 : 0,
                                y: isHovered ? '0%' : '100%',
                            }}
                            transition={{
                                duration: 5,
                                ease: [0.445, 0.05, 0.55, 0.95],
                                delay: isHovered ? 0 : 1,
                            }}
                        />
                    </motion.div>
                )} */}
            </motion.div>
        </div>
    );
}

export default HoverCard;