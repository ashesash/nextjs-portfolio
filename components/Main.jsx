import React from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn,Fa500Px,FaGithub} from 'react-icons/fa'

const Main = () => {
    return (
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-500 py-2'>Let's build great products</p>
                    <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#4d797b]'>Ash!</span></h1>
                    <h1 className='py-2 text-gray-700'>A Software Engineer</h1>
                    <p className='text-sm tracking-widest text-gray-500 py-4 max-w-[70%] m-auto'>I'm a software engineer with keen interest in full stack development and data engineering.</p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
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
    );
};

export default Main