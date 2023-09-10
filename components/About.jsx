import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.svg';

const About = () => {
    return (
        <div id='about' className='p-4 w-full pb-10 lg:pb-36 md:pb-5'>
            <div className='max-w-6xl'>
                <h1 className='uppercase px-2 text-xl tracking-widest text-[#4d797b] font-bold'>
                    About
                </h1>
                <div className='md:grid grid-cols-5 gap-1'>
                    <div className='col-span-2'>
                        <p className='px-2 max-w-2xl text-gray-600 text-justify dark:text-[#ecf0f3]'>
                            I am a Mechanical engineer turned Software engineer.
                            As a Mechanical Engineer, I honed my skills in designing and optimizing complex systems.
                            Throughout my early career, I had the privilege of working on exciting
                            projects that spanned various industries, enabling me to develop a robust
                            foundation in engineering principles and project management.</p>

                        <p className='px-2 max-w-2xl text-gray-600 text-justify dark:text-[#ecf0f3]'>
                            I&#39;m passionate about learning new technologies and the ever expanding nature of
                            software engineering interested me. Though I am most proficient
                            in building full stack applications using HTML, CSS, Javascript,
                            React, Django, I am  also interested in data engineering and use Python for
                            data analysis projects. I believe that being a great developer is not using one
                            specific language, but choosing the best tool for the job.
                        </p>
                    </div>
                    <div className='p-2 w-[100%] lg:pl-20 col-span-3'>
                        <div className='shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 grid place-items-center'>
                            <Image src={AboutImg} className=' rounded-xl' alt='/' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
