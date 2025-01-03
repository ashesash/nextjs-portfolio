'use client'
import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll } from 'framer-motion';
import Button from './Button';
import Title from './Title';
import HoverCard from './HoverCard';

const MobileCard = ({
    i,
    image,
    title,
    tech,
    description,
    gitUrl,
    projectUrl,
    targetScale
}) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // const cardScale = useTransform(scrollYProgress, [i * .25, 1], [1, targetScale]);

    const bgColors = ['bg-blizzard-blue-300', 'bg-astro-blue-400', 'bg-blue-whale-400', 'bg-congress-blue-400'];
    const bgColorsDark = ['dark:bg-blizzard-blue-950', 'dark:bg-astro-blue-950', 'dark:bg-blue-whale-950', 'dark:bg-congress-blue-950'];

    return (
        <div className='h-[150vh] sticky top-0'>
            <motion.div
                className={`min-h-fit h-[80vh] sm:h-[100vw] px-4 py-4 flex flex-col items-center my-10 sticky rounded-xl m-4 ${bgColors[i]} ${bgColorsDark[i]}`}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: 0.5,
                }}
                variants={containerVariants}
                style={{
                    // cardScale, 
                    top: `calc(10vh + ${i * 2}vh)`
                }}
            >
                <motion.div
                    className="w-full aspect-video mb-8"
                    variants={itemVariants}
                >
                    <HoverCard
                        image={image}
                        header={title}
                        className="w-full h-full"
                        imageClassName="object-contain"
                    />
                </motion.div>

                <motion.div variants={itemVariants}>
                    <Title level='h4'>{title}</Title>
                </motion.div>

                <motion.p
                    className="text-justify mb-4"
                    variants={itemVariants}
                >
                    {description}
                </motion.p>

                <motion.div variants={itemVariants}>
                    <Title level='h6'>Tech Used</Title>
                    <p className="mb-4">{tech}</p>
                </motion.div>

                <motion.div
                    className="flex justify-center space-x-4"
                    variants={itemVariants}
                >
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
                </motion.div>
            </motion.div>
        </div>
    );
};

export default MobileCard;