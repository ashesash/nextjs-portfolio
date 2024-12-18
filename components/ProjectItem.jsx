import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const ProjectItem = ({ title, backgroundImg, tech, gitUrl, projectUrl, isImageLeft }) => {
    return (
        <div className={`relative flex ${isImageLeft ? 'flex-row' : 'flex-row-reverse'} w-full h-[100%] justify-center py-40`}>
            <Image className='w-2/3 relative rounded-xl items-start' src={backgroundImg} alt='/' />
            <div className='w-1/3 relative'>
                <h3 className='text-xl text-black tracking-wider text-center'>{title}</h3>
                <p className='pb-4 text-black text-center'>{tech}</p>
                <Link href={gitUrl}>
                    <p className='text-center py-3 my-10 rounded-xl bg-white text-gray-700 font-bold text-lg cursor-pointer'>Github</p>
                </Link>
                {projectUrl && (
                    <Link href={projectUrl}>
                        <p className='text-center py-3 rounded-xl bg-white text-gray-700 font-bold text-lg cursor-pointer'>Live Demo</p>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default ProjectItem;