import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Main = () => {
    const roles = [
        { name: "+ Mechanical Engineer" },
        { name: "+ Tinkerer" },
        { name: "+ Artist" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isInitialDelayComplete, setIsInitialDelayComplete] = useState(false);

    useEffect(() => {
        const initialDelayTimer = setTimeout(() => {
            setIsInitialDelayComplete(true);
        }, 2500);

        let intervalId;
        if (isInitialDelayComplete) {
            intervalId = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
            }, 2000);
        }

        return () => {
            clearTimeout(initialDelayTimer);
            if (intervalId) clearInterval(intervalId);
        };
    }, [roles.length, isInitialDelayComplete]);

    return (
        <div id='home' className='w-full h-screen min-h-screen flex items-center font-philosopher'>
            <div className='max-sm:flex px-4 md:px-[2%] w-full'>
                <div className='max-w-7xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut"
                        }}
                    >
                        <h1 className='py-2 md:py-4 text-6xl md:text-7xl lg:text-9xl leading-tight'>
                            Hi, I&#39;m
                            <span className='bg-gradient-to-r  from-astro-blue-200 via-blizzard-blue-600 to-astro-blue-200 bg-clip-text text-transparent bg-[length:200%] [animation:_gradient-move_3s_infinite_linear_reverse]'> Ash!</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                            delay: 1
                        }}
                    >
                        <h1 className='py-2 leading-tight text-4xl md:text-6xl lg:text-8xl'>
                            Software Engineer
                        </h1>
                    </motion.div>

                    <div className='w-full py-2 leading-normal overflow-hidden relative'>
                        <AnimatePresence mode="popLayout">
                            {isInitialDelayComplete && (
                                <motion.h1
                                    key={currentIndex}
                                    initial={{ y: 40, opacity: 1 }}
                                    animate={{ y: -1, opacity: 1 }}
                                    exit={{ y: -51, opacity: 0 }}
                                    transition={{
                                        duration: 0.7,
                                        ease: "easeOut"
                                    }}
                                    className='text-3xl md:text-6xl lg:text-8xl flex items-center'
                                >
                                    {roles[currentIndex].name}
                                </motion.h1>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;