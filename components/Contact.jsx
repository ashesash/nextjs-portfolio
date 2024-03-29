import React from 'react'
import Image from 'next/image';
import ContactImg from '../public/assets/contact.png';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, Fa500Px, FaGithub } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import {ImProfile} from 'react-icons/im'

const Contact = () => {
    return (
        <div id='contact' className='w-full lg:h-screen'>
            <div className='max-w-7xl m-auto px-5 pt-36 w-full'>
                <h1 className='text-xl tracking-widest uppercase text-[#4d797b]'>Get in touch</h1>
                <div className='grid lg:grid-cols-5 gap-8'>
                    <div className='col-span-4 lg:col-span-2 w-full h-full shadow-lg shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full'>
                            <div className='w-full h-auto m-auto shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 grid place-items-center'>
                                <Image src={ContactImg} className='rounded-xl' alt='/' />
                            </div>
                            <div>
                                {/* <h2 className='py-2'>Name Here</h2> */}
                                <h3 className='pt-10'>Let&#39;s Chat!</h3>
                                <p>I&#39;m available for freelance roles, contract or full time positions</p>
                                <div>
                                    <p className='uppercase py-6'>Connect with Me</p>
                                    <div className='flex items-center justify-between p'>
                                        <a
                                            href='https://www.linkedin.com/in/aishwaryasahu/'
                                            target='_blank'
                                            rel='noreferrer'
                                        >
                                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                                <FaLinkedinIn />
                                            </div>
                                        </a>
                                        <a
                                            href='https://github.com/ashesash'
                                            target='_blank'
                                            rel='noreferrer'
                                        >
                                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                                <FaGithub />
                                            </div>
                                        </a>
                                        <Link href='mailto:ashsahu@outlook.com'>
                                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                                <AiOutlineMail />
                                            </div>
                                        </Link>
                                        <Link href='/assets/TechCV_ASahu.pdf ' download='aSahuResume.pdf'>
                                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                                <ImProfile />
                                            </div>
                                        </Link>
                                        <a
                                            href='https://500px.com/p/aishwaryasahu'
                                            target='_blank'
                                            rel='noreferrer'
                                        >
                                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                                <Fa500Px />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-4 lg:col-span-3 w-full h-auto shadow-lg shadow-gray-400 rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form method="POST" name="ContactForm" action="https://formspree.io/f/mnqrvbwy">
                                <input type="hidden" name="form-name" value="contact" />
                                <div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input name="Name" className='border-2 rounded-lg p-3 flex border-gray-200' type='text' />
                                    </div>
                                </div>
                                <div>
                                    <div className='flex flex-col py-2'>
                                        <label className='uppercase text-sm py-2'>Email</label>
                                        <input name="Email" className='border-2 rounded-lg p-3 flex border-gray-200' type='email' />
                                    </div>
                                </div>
                                <div>
                                    <div className='flex flex-col py-2'>
                                        <label className='uppercase text-sm py-2'>Subject</label>
                                        <input name="Subject" className='border-2 rounded-lg p-3 flex border-gray-200' type='text' />
                                    </div>
                                </div>
                                <div>
                                    <div className='flex flex-col py-2'>
                                        <label className='uppercase text-sm py-2'>Message</label>
                                        <textarea name="Message" className='border-2 rounded-lg p-3 flex border-gray-200' rows='5'></textarea>
                                    </div>
                                </div>
                                <div>
                                    <button className='w-full p-4 text-gray-200 mt-4 bg-gradient-to-r from-[#4d797b] to-[#3b5152]'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center py-12 scroll-smooth'>
                    <Link href='/' >
                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp size={25} className='m-auto text-[#4d797b]' />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact