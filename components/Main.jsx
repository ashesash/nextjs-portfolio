import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import Background from './Background';

const Main = () => {

    const roles = [
        { name: "+ Mechanical Engineer" },
        { name: "+ Tinkerer" },
        { name: "+ Artist" },
        // { name: "" },
    ]

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
            if (intervalId)
                clearInterval(intervalId);
        };
    }, [roles.length, isInitialDelayComplete]);

    return (
        <div id='home' className='w-full h-screen min-h-screen'>
            <Background />
            <div className='px-[2%] text-left pt-60'>
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut"
                        }}
                    >
                        <h1 className='py-4 text-white lg:text-[150px] md:text-[100px] sm:[80px]'>
                            Hi, I&#39;m
                            <span className='bg-gradient-to-r from-teal-200 via-cyan-700 to-teal-200 bg-clip-text text-transparent bg-[length:200%] [animation:_gradient-move_3s_infinite_linear_reverse]'> Ash!</span>
                            {/* <span className=''> Ash!</span> */}
                        </h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                            delay: 1
                        }}
                    >
                        <h1 className='py-2 mix-blend-darken leading-tight text-7xl'>
                            A passionate <br /> Software Engineer
                        </h1>
                    </motion.div>
                    <div className='w-full h-24 overflow-hidden relative'>
                        <AnimatePresence mode="popLayout">
                            {isInitialDelayComplete && (
                                <motion.h1
                                    key={currentIndex}
                                    initial={{ y: 50, opacity: 1 }}
                                    animate={{ y: -1, opacity: 1 }}
                                    exit={{ y: -51, opacity: 0 }}
                                    transition={{
                                        duration: 0.7,
                                        ease: "easeOut"
                                    }}
                                    className='mix-blend-darken h-16 w-[vw] text-7xl'
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

export default Main