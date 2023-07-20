import React from 'react'
import Image from 'next/image';
import ContactImg from '../public/assets/contact.png';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, Fa500Px, FaGithub } from 'react-icons/fa'

const Contact = () => {
    return (
        <div className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <p className='text-xl tracking-widest uppercase text-[#4d797b]'>Contact</p>
                <h2 className='py-4'>Get in Touch</h2>
                <div className='grid lg:grid-cols-5 gap-8'>
                    <div className='col-span-4 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full'>
                            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                                <Image src={ContactImg} className='rounded-xl' alt='/' />
                            </div>
                            <div>
                                {/* <h2 className='py-2'>Name Here</h2> */}
                                <p>Software Engineer</p>
                                <p className='py-4'>I'm available for freelance or full time positions. Open to connecting for a chat as well!</p>
                                <div>
                                    <p className='uppercase pt-8'>Connect with Me</p>
                                    <div className='flex items-center justify-between p'>
                                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover-scale-105 ease-in duration-500'>
                                            <FaLinkedinIn />
                                        </div>
                                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover-scale-105 ease-in duration-500'>
                                            <FaGithub />
                                        </div>
                                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover-scale-105 ease-in duration-500'>
                                            <Fa500Px />
                                        </div>
                                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover-scale-105 ease-in duration-500'>
                                            <AiOutlineMail />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact