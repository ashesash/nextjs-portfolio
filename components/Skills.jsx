import Image from 'next/image';
import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaGithub } from 'react-icons/fa';
import {SiJavascript, SiNextdotjs, SiTailwindcss, SiDjango, SiInsomnia, SiCplusplus, SiPostgresql} from 'react-icons/si';


const Skills = () => {
    return (
        <div id='skills' className='w-full py-36 md: px-2'>
            <div className='max-w-7xl mx-auto flex flex-col justify-center '>
                <h1 className='px-2 text-xl tracking-widest uppercase text-[#4d797b] font-bold'>
                    Skills
                </h1>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div className='p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <FaHtml5 size={30} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <FaCss3Alt size={30} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <SiJavascript size={25} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>JavaScript</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <FaReact size={30} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>React</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <SiNextdotjs size={25} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Next</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <SiTailwindcss size={25} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Tailwind</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <FaPython size={30} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Python</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <SiDjango size={25} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Django</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <SiInsomnia size={25} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Insomnia</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <SiCplusplus size={25} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>C++</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <SiPostgresql size={25} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>PostgreSQL</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <FaGithub size={30} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Github</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
