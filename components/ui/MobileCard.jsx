'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from './Button';
import Title from './Title';
import HoverCard from './HoverCard';

const MobileCard = ({
    image,
    title,
    tech,
    description,
    gitUrl,
    projectUrl,
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

    return (
        <motion.div
            className="w-full px-4 py-8 flex flex-col items-center my-10"
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                amount: 0.5,
            }}
            variants={containerVariants}
        >
            {/* Image */}
            <motion.div
                className="w-full aspect-video mb-14"
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
                className="text-black text-justify mb-4"
                variants={itemVariants}
            >
                {description}
            </motion.p>

            <motion.div variants={itemVariants}>
                <Title level='h6'>Tech Used</Title>
                <p className="text-black mb-4">{tech}</p>
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
    );
};

export default MobileCard;