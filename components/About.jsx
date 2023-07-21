import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.svg';

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto grid grid-cols-2 gap-2'>
                <div className='col-span-1'>
                    <p className='uppercase text-xl tracking-widest text-[#4d797b] font-bold'>
                        About
                    </p>
                    <h2 className='py-2'>Who I Am</h2>
                    <p className='py-2 max-w-sm text-gray-600'>
                        I am a full stack engineer.
                        I&#39m passionate about learning new technologies and understand there is
                        more than one way to accomplish a task. Though I am most proficient
                        in building front-end applications using HTML, CSS, Javascript, and
                        React, I am a quick learner and can pick up new tech stacks as
                        needed. I believe that being a great developer is not using one
                        specific language, but choosing the best tool for the job.
                    </p>
                    <Link href='/#projects'>
                        <p className='py-2 text-gray-600 underline cursor-pointer'>
                            Check out some of my latest projects.
                        </p>
                    </Link>
                    <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl p-4 hover:scale-105 ease-in duration-300'>
                        <Image src={AboutImg} className='rounded-xl' alt='/' />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;
