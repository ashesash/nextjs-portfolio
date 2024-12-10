import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, AnimatePresence } from "framer-motion"
import AboutImg from '../public/assets/about.svg';

const About = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const { scrollYProgress } = useScroll();
    const x = `${scrollPosition}%`;
    const y = `${scrollPosition}%`;
    const scale = 1 + scrollPosition / 100;

    return (
        <div id='about' className='p-4 w-full pb-10 lg:grid md:pb-5'>
            <div className='p-2 w-[100%] lg:pl-20 col-span-3'>
                <motion.div
                    initial={{ opacity: 0, x: "-100%" }}
                    animate={{ opacity: 1, x: "40%" }}
                    transition={{ duration: 3 }}
                >
                    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0, x: "-100%", y: "-100%" }}
                            animate={{ scale: 1, opacity: 1, x: "50%", y: "50%" }}
                            transition={{ duration: 2 }}
                            style={{ position: "absolute", top: 0, left: 0 }}
                        >
                            <Image src={AboutImg} className=' rounded-xl' alt='/' />
                        </motion.div>
                    </div>
                </motion.div>

            </div>
            <div className='max-w-6xl'>
                <h1 className='uppercase px-2 text-xl tracking-widest text-[#4d797b] font-bold'>
                    About
                </h1>
                <div className='md:grid grid-cols-5 gap-1'>
                    <div className='col-span-2'>
                        <p className='px-2 max-w-2xl text-gray-600 text-justify dark:text-[#ecf0f3]'>
                            I am a Software engineer with experience in frontend and backend engineering.
                            I also have a keen interest in leveraging the power of the new developments in AI to
                            build cutting edge tools.  </p>
                        {/* <p className='px-2 max-w-2xl text-gray-600 text-justify dark:text-[#ecf0f3]'>
                            I&#39;m passionate about learning new technologies and the ever expanding nature of
                            software engineering interested me. Though I am most proficient
                            in building full stack applications using HTML, CSS, Javascript,
                            React, Django, I am  also interested in data engineering and use Python for
                            data analysis projects. I believe that being a great developer is not using one
                            specific language, but choosing the best tool for the job.
                        </p> */}
                    </div>

                </div>
            </div>
        </div >
    );
};

export default About;
