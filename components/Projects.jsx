import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProjectItem from './ProjectItem';
import Blog from '../public/assets/project/blog.png'
import Todo from '../public/assets/project/flaskTodo.png'
import AI from '../public/assets/project/generativeAI.png'
import Learnable from '../public/assets/project/learnable.png'
// import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaGithub } from 'react-icons/fa';
// import {SiJavascript, SiNextdotjs, SiTailwindcss, SiDjango, SiInsomnia, SiCplusplus, SiPostgresql} from 'react-icons/si';

const Projects = () => {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <h1 className='text-xl tracking-widest uppercase text-[#4d797b] font-bold'>
                    Projects
                </h1>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItem
                        title='Generative AI COVID Measures recommender'
                        backgroundImg={AI}
                        projectUrl='https://github.com/ashesash/quantium-govhack-2023'
                        tech='Python, Flask, ChatGPT API'
                    />
                    <ProjectItem
                        title='Workshop Sig up Platform'
                        backgroundImg={Learnable}
                        projectUrl='https://github.com/ashesash/react-mentoring-platform'
                        tech='HTML, CSS, React JS, Django'

                    />
                    <ProjectItem
                        title='She Codes News Blog'
                        backgroundImg={Blog}
                        projectUrl='https://github.com/ashesash/she-codes-django-news-project'
                        tech='HTML, CSS, Django'

                    />
                    <ProjectItem
                        title='To Do List'
                        backgroundImg={Todo}
                        projectUrl='https://github.com/ashesash/toDoList'
                        tech='Flask, Semantic UI'

                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
