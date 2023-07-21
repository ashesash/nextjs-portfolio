import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProjectItem from './ProjectItem';
import Html from '../public/assets/skills/html5.svg';
import Css from '../public/assets/skills/css3.svg';
import Javascript from '../public/assets/skills/javascript.svg';
import ReactImg from '../public/assets/skills/react.svg';
import Tailwind from '../public/assets/skills/tailwindcss.svg';
import Github from '../public/assets/skills/github.svg';
import NextJS from '../public/assets/skills/nextdotjs.svg'
import Python from '../public/assets/skills/python.svg'
import Django from '../public/assets/skills/django.svg'
import Insomnia from '../public/assets/skills/insomnia.svg'

const Projects = () => {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#4d797b] font-bold'>
                    Projects
                </p>
                <h2 className='py-4'>What I&#39ve Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItem
                        title='Property Finder'
                        backgroundImg={Html}
                        projectUrl='/property'
                        tech='React JS'
                    />
                    <ProjectItem
                        title='Crypto App'
                        backgroundImg={Css}
                        projectUrl='/crypto'
                        tech='React JS'

                    />
                    <ProjectItem
                        title='Netflix App'
                        backgroundImg={Django}
                        projectUrl='/netflix'
                        tech='React JS'

                    />
                    <ProjectItem
                        title='Twitch UI'
                        backgroundImg={Insomnia}
                        projectUrl='/twitch'
                        tech='Next JS'

                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
