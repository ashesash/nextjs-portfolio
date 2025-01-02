'use client';
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView, AnimatePresence, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, Fa500Px, FaGithub } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Title from './ui/Title';
import Button from './ui/Button';
import IconButton from './ui/IconButton';
import ContactImg from '../public/assets/contact.png';
import { Input } from './ui/input';
import { cn } from '@/lib/utils';

const Contact = () => {
    const [showTitle, setShowTitle] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const titleRef = useRef(null);
    const isInView = useInView(titleRef, {
        amount: 0.9,
        once: true
    });
    const controls = useAnimation();

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        if (typeof window !== 'undefined') {
            checkMobile();
        }

        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (isInView) {
            const animateSequence = async () => {
                controls.start("animate");
                setTimeout(() => {
                    setShowTitle(false);
                }, 1100);

                setTimeout(() => {
                    setShowForm(true);
                }, 1300);
            };

            animateSequence();
        } else if (isMobile) {
            // On mobile
            setShowTitle(true);
            setShowForm(true);
        }
    }, [isInView, controls, isMobile]);

    const slideVariants = {
        initial: {
            x: "100%"
        },
        animate: {
            x: "-100%",
            transition: {
                duration: 1,
                delay: 0.5,
                ease: "easeInOut"
            }
        }
    };

    const ContactForm = () => (
        <div className='flex min-h-screen w-screen items-center justify-center md:px-8 md:py-8 sticky top-0'>
            <div className='flex flex-col md:flex-row w-3/4 md:w-full max-w-6xl gap-10 items-center justify-center'>
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:w-1/2">
                    <div className="hover:scale-105 ease-in duration-300">
                        <Image src={ContactImg} alt="a cartoon image of me holding a coffee" />
                    </div>
                    <div className="flex flex-row md:flex-col px-2 ">
                        <a href="https://www.linkedin.com/in/aishwaryasahu/" target="_blank" rel="noreferrer" className='py-2'>
                            <IconButton className='bg-[length:200%] [animation:_gradient-move_3s_infinite_linear_reverse]'>
                                <FaLinkedinIn />
                            </IconButton>
                        </a>
                        <a href="https://github.com/ashesash" target="_blank" rel="noreferrer" className='py-2'>
                            <IconButton className='bg-[length:200%] [animation:_gradient-move_3s_infinite_linear_reverse]'>
                                <FaGithub />
                            </IconButton>
                        </a>
                        <Link href="mailto:ashsahu@outlook.com" className='py-2'>
                            <IconButton className='bg-[length:200%] [animation:_gradient-move_3s_infinite_linear_reverse]'>
                                <AiOutlineMail />
                            </IconButton>
                        </Link>
                        <a href="https://500px.com/p/aishwaryasahu" target="_blank" rel="noreferrer" className='py-2'>
                            <IconButton className='bg-[length:200%] [animation:_gradient-move_3s_infinite_linear_reverse]'>
                                <Fa500Px />
                            </IconButton>
                        </a>
                    </div>
                </div>
                <div className="col-span-4 lg:col-span-2 w-full h-auto shadow-xl shadow-blizzard-blue-200 dark:shadow-astro-blue-900 bg-slate-50 dark:bg-slate-900 rounded-xl p-4">
                    <form method="POST" name="ContactForm" action="https://formspree.io/f/mnqrvbwy" className='lg:p-4'>
                        <input type="hidden" name="form-name" value="contact" />
                        <LabelInputContainer>
                            <div className="flex flex-col">
                                <label className="uppercase text-sm py-2 font-philosopher">Name</label>
                                <Input name="Name" className="border-2 rounded-lg p-3 flex border-gray-200" type="text" />
                            </div>
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <div className="flex flex-col py-2">
                                <label className="uppercase text-sm py-2">Email</label>
                                <Input name="Email" className="border-2 rounded-lg p-3 flex border-gray-200" type="email" />
                            </div>
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <label className="uppercase text-sm py-2">Message</label>
                            <Input
                                name="Message" className="border-2 rounded-lg p-3 flex border-gray-200" rows="5"
                            />
                        </LabelInputContainer>
                        <div className="mt-4 grid justify-items-stretch">
                            <Button className="w-full text-3xl">
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

    const Footer = () => {
        const date = new Date().getFullYear()
        return (
            <footer className='w-full py-4 mt-8'>
                <div className="flex flex-col items-center px-10 text-center text-sm text-slate-500">
                        <div> © Crafted by yours truly with Next.js, Tailwind, Motion & Netlify. {date} </div>
                    </div>
            </footer>
        )
    }

    return (
        <div id="contact" ref={titleRef} className="relative overflow-hidden">
            <div className="min-h-screen">
                {isMobile ? (
                    // Mobile layout - no animations
                    <div className="md:space-y-8 py-8">
                        <div className="text-center">
                            <Title level="h2" className="snap-start">
                                Get in Touch
                            </Title>
                        </div>
                        <ContactForm />
                        <div className="flex justify-center">
                            <Link href="/">
                                <IconButton className='bg-[length:200%] [animation:_gradient-move_3s_infinite_linear_reverse]'>
                                    <HiOutlineChevronDoubleUp size={20} className="m-auto" />
                                </IconButton>
                            </Link>
                        </div>
                    </div>
                ) : (
                    // Desktop layout - with animations
                    <div>
                        <AnimatePresence>
                            {showTitle && (
                                <motion.div
                                    className="h-screen grid place-items-center"
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Title level="h2" className="snap-start">
                                        Get in Touch
                                    </Title>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <motion.div
                            initial="initial"
                            animate={controls}
                            variants={slideVariants}
                            className="absolute inset-0 h-[150vh] z-10 bg-gradient-to-r from-astro-blue-200 to-blizzard-blue-400 dark:bg-gradient-to-r dark:from-blizzard-blue-950 dark:to-astro-blue-800"
                        />
                        <AnimatePresence>
                            {showForm && (
                                <motion.div
                                    className="absolute top-0 left-0 w-full z-20"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ContactForm />
                                    <div className="flex justify-center -translate-y-20">
                                        <Link href="/">
                                            <IconButton className='bg-[length:200%] [animation:_gradient-move_3s_infinite_linear_reverse]'>
                                                <HiOutlineChevronDoubleUp size={20} className="m-auto" />
                                            </IconButton>
                                        </Link>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};


const LabelInputContainer = ({
    children,
    className
}) => {
    return (
        (<div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>)
    );
};

export default Contact;