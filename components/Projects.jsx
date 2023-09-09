import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProjectItem from './ProjectItem';
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaGithub } from 'react-icons/fa';
import {SiJavascript, SiNextdotjs, SiTailwindcss, SiDjango, SiInsomnia, SiCplusplus, SiPostgresql} from 'react-icons/si';

const Projects = () => {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <h1 className='text-xl tracking-widest uppercase text-[#4d797b] font-bold'>
                    Projects
                </h1>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItem
                        title='Property Finder'
                        // backgroundImg={Html}
                        projectUrl='/property'
                        tech='React JS'
                    />
                    <ProjectItem
                        title='Crypto App'
                        // backgroundImg={Css}
                        projectUrl='/crypto'
                        tech='React JS'

                    />
                    <ProjectItem
                        title='Netflix App'
                        // backgroundImg={Django}
                        projectUrl='/netflix'
                        tech='React JS'

                    />
                    <ProjectItem
                        title='Twitch UI'
                        // backgroundImg={Insomnia}
                        projectUrl='/twitch'
                        tech='Next JS'

                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
