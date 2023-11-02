import React from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, Fa500Px, FaGithub } from 'react-icons/fa'
import {ImProfile} from 'react-icons/im'
import Link from 'next/link'
// import Resume from '../public/assets/Tech'

const Main = () => {
    return (
        <div id='home' className='pt-15 w-full h-screen text-center'>
            <div className='max-w-7xl w-full h-screen mx-auto p-2 flex justify-center items-center'>
                <div class='fade-up'>
                    <p className='uppercase text-sm tracking-widest text-gray-500 py-2 dark:text-[#ecf0f3]'>Let&#39;s build great products</p>
                    <h1 className='py-4 text-gray-700]'>Hi, I&#39;m <span className='text-[#4d797b]'>Ash!</span></h1>
                    <h1 className='py-2 text-gray-700]'>A Software Engineer</h1>
                    <p className='text-sm tracking-widest text-gray-500 py-4 max-w-[70%] m-auto dark:text-[#ecf0f3]'>I&#39;m a software engineer with keen interest in full stack development and data engineering.</p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
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
                        <Link href='/assets/TechCV_ASahu.pdf ' download='asahuResume.pdf'>
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
    );
};

export default Main