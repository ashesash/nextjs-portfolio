import React, { useRef, useState } from 'react';
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
    const titleRef = useRef(null);
    const isInView = useInView(titleRef, {
        amount: 0.9, // Trigger when 50% of the element is in view
        once: true // Only trigger once
    });
    const controls = useAnimation();

    React.useEffect(() => {
        if (isInView) {
            console.log("Title is in view");
            const animateSequence = async () => {
                controls.start("animate");
                // Hide title halfway through the animation (500ms)
                setTimeout(() => {
                    setShowTitle(false);
                }, 1100);

                // Show form slightly before animation ends (800ms)
                setTimeout(() => {
                    setShowForm(true);
                }, 1300);
            };

            animateSequence();
        }
    }, [isInView, controls]);

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
        <div className='flex h-screen w-screen place-content-center'>
            <div className='flex flex-row h-screen w-screen px-20 items-center'>
                <div className="flex flex-row pr-10">
                    <div className="hover:scale-105 ease-in duration-300 -translate-y-3">
                        <Image src={ContactImg} alt="a cartoon image of me holding a coffee" />
                    </div>
                    <div className="flex items-center justify-evenly flex-col px-2">
                        <a href="https://www.linkedin.com/in/aishwaryasahu/" target="_blank" rel="noreferrer">
                            <IconButton className='bg-[length:200%] [animation:_gradient-move_3s_infinite_linear_reverse]'>
                                <FaLinkedinIn />
                            </IconButton>
                        </a>
                        <a href="https://github.com/ashesash" target="_blank" rel="noreferrer">
                            <IconButton className='bg-[length:200%] [animation:_gradient-move_3s_infinite_linear_reverse]'>
                                <FaGithub />
                            </IconButton>
                        </a>
                        <Link href="mailto:ashsahu@outlook.com">
                            <IconButton className='bg-[length:200%] [animation:_gradient-move_3s_infinite_linear_reverse]'>
                                <AiOutlineMail />
                            </IconButton>
                        </Link>
                        <a href="https://500px.com/p/aishwaryasahu" target="_blank" rel="noreferrer">
                            <IconButton className='bg-[length:200%] [animation:_gradient-move_3s_infinite_linear_reverse]'>
                                <Fa500Px />
                            </IconButton>
                        </a>
                    </div>
                </div>
                <div className="col-span-3 lg:col-span-2 w-full h-auto shadow-md shadow-gray-100 rounded-xl lg:p-4">
                    <form method="POST" name="ContactForm" action="https://formspree.io/f/mnqrvbwy" className='p-4'>
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

    return (
        <div id="contact" ref={titleRef} className="relative">
            <div className="min-h-screen">
                {/* Title Section */}
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

                {/* Orange Overlay */}
                <motion.div
                    initial="initial"
                    animate={controls}
                    variants={slideVariants}
                    className="absolute inset-0 bg-gradient-to-r from-teal-200 via-cyan-700 to-teal-200 z-10"
                />

                {/* Contact Form Section */}
                <AnimatePresence>
                    {showForm && (
                        <motion.div
                            className="absolute top-0 left-0 w-full z-20"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ContactForm key="contact" />
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