import Image from 'next/image';
import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaGithub } from 'react-icons/fa';
import {SiJavascript, SiNextdotjs, SiTailwindcss, SiDjango, SiInsomnia, SiCplusplus, SiPostgresql} from 'react-icons/si';


const Skills = () => {
    return (
        <div id='skills' className='w-full pb-20 px-5 md:py-2'>
            <div className='max-w-7xl mx-auto flex flex-col justify-center pt-20'>
                <h1 className='text-xl tracking-widest uppercase text-[#4d797b] font-bold'>
                    Skills
                </h1>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div className='p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 items-center justify-center'>
                            <div className='m-auto'>
                                <FaHtml5 size={30} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='font-bold text-xs md:text-base'>HTML</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <FaCss3Alt size={30} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='font-bold text-xs md:text-base'>CSS</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <SiJavascript size={25} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='font-bold text-xs md:text-base'>JavaScript</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <FaReact size={30} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='font-bold text-xs md:text-base'>React</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <SiNextdotjs size={25} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='font-bold text-xs md:text-base'>Next</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <SiTailwindcss size={25} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='font-bold text-xs md:text-base'>Tailwind</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <FaPython size={30} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='font-bold text-xs md:text-base'>Python</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <SiDjango size={25} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='font-bold text-xs md:text-base'>Django</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <SiInsomnia size={25} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='font-bold text-xs md:text-base'>Insomnia</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <SiCplusplus size={25} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='font-bold text-xs md:text-base'>C++</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 pl-1 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 md:p-6'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <SiPostgresql size={25} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='font-bold text-xs md:text-base'>PostgreSQL</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <FaGithub size={30} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='font-bold text-xs md:text-base'>Github</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
