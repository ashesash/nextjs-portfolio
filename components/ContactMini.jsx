import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, useScroll, useTransform, AnimatePresence, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, Fa500Px, FaGithub } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Title from './ui/Title';
import Button from './ui/Button';
import IconButton from './ui/IconButton';
import ContactImg from '../public/assets/contact.png';

const Contact = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "start start"],
    });

    const rectX = useTransform(scrollYProgress, [0.3, 0.6], ["100%", "-10%"]);
    const rectBorderRadius = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, "50%", "0%"]);
    const opacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);

    // const xTranslateContainer = useTransform(scrollYProgress, [0.7, 1], [-3000, 0]);
    const containerAnimation = useAnimation(); // For container animation
    // const isInView = useInView(containerRef, { amount: 0.95 }); // Trigger when 50% of the element is in view

    // Trigger title animation when in view
    // React.useEffect(() => {
    //     if (isInView) {
    //         containerAnimation.start({
    //             x: 0,
    //             opacity: 1,
    //             transition: {
    //                 // delay: 0.5,
    //                 duration: 1,
    //                 ease: 'easeInOut',
    //             },
    //         });
    //     }
    // }, [isInView, containerAnimation]);

    return (
        <div id="contact" className="w-full min-h-screen snap-mandatory snap-y" ref={containerRef}>
            <Title level="h2" className="h-screen my-80 py-80 snap-start">
                Get in Touch
            </Title>
            <motion.div
                className="top-1/2 left-0 h-1/2 w-screen bg-blue-500 overflow-hidden"
                style={{
                    // x: rectX,
                    borderRadius: rectBorderRadius,
                }}
            ></motion.div>
            <div className="rounded-xl p-4 grid grid-cols-7">
                <Title
                    level="h4"
                    className="origin-bottom rotate-90"
                >
                    Get in Touch
                </Title>
                {/* <div className="hover:scale-105 ease-in duration-300 items-center justify-self-center ">
                    <Image src={ContactImg}
                        className="rounded-2xl w-1/2"
                        alt="a cartoon image holding a coffee" />
                </div>
                <div className="flex items-center justify-evenly flex-col">
                    <a
                        href="https://www.linkedin.com/in/aishwaryasahu/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <IconButton>
                            <FaLinkedinIn />
                        </IconButton>
                    </a>
                    <a
                        href="https://github.com/ashesash"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <IconButton>
                            <FaGithub />
                        </IconButton>
                    </a>
                    <Link href="mailto:ashsahu@outlook.com">
                        <IconButton>
                            <AiOutlineMail />
                        </IconButton>
                    </Link>
                    <a
                        href="https://500px.com/p/aishwaryasahu"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <IconButton>
                            <Fa500Px />
                        </IconButton>
                    </a>
                </div> */}
            </div>
            <div className="col-span-3 lg:col-span-2 w-full h-auto shadow-lg shadow-gray-400 rounded-xl lg:p-4 bg-custom-vivid_sky_blue-900">
                {/* <form method="POST" name="ContactForm" action="https://formspree.io/f/mnqrvbwy" className='p-4'>
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="flex flex-col">
                        <label className="uppercase text-sm py-2">Name</label>
                        <input name="Name" className="border-2 rounded-lg p-3 flex border-gray-200" type="text" />
                    </div>
                    <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">Email</label>
                        <input name="Email" className="border-2 rounded-lg p-3 flex border-gray-200" type="email" />
                    </div>
                    <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">Message</label>
                        <textarea name="Message" className="border-2 rounded-lg p-3 flex border-gray-200" rows="5"></textarea>
                    </div>
                    <Button className="w-full text-3xl mt-4">Submit</Button>
                </form> */}
            </div>
            {/* </motion.div> */}
            {/* Scroll Up Button */}
            <div className="flex justify-center py-5 scroll-smooth snap-end">
                <Link href="/">
                    <IconButton>
                        <HiOutlineChevronDoubleUp size={20} className="m-auto" />
                    </IconButton>
                </Link>
            </div>
        </div>
    );
};

export default Contact;
