import React from 'react'
import Image from 'next/image';
import ContactImg from '../public/assets/contact.png';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, Fa500Px, FaGithub } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

const Contact = () => {
    return (
        <div id='contact' className='w-full lg:h-screen'>
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
                                <p className='py-4'>I&#39m available for freelance or full time positions. Open to connecting for a chat as well!</p>
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
                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-200' type='text' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Number</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-200' type='text' />
                                    </div>
                                </div>
                                <div>
                                    <div className='flex flex-col py-2'>
                                        <label className='uppercase text-sm py-2'>Email</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-200' type='email' />
                                    </div>
                                </div>
                                <div>
                                    <div className='flex flex-col py-2'>
                                        <label className='uppercase text-sm py-2'>Subject</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-200' type='text' />
                                    </div>
                                </div>
                                <div>
                                    <div className='flex flex-col py-2'>
                                        <label className='uppercase text-sm py-2'>Message</label>
                                        <textarea className='border-2 rounded-lg p-3 flex border-gray-200' rows='5'></textarea>
                                    </div>
                                </div>
                                <div>
                                    <button className='w-full p-4 text-gray-200 mt-4'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center py-12'>
                    <Link href='/'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover-scale-110 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp size={25} className='m-auto text-[#4d797b]'/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact