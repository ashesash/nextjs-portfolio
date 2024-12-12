import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ParallaxCard from './ParallaxCard';
import Blog from '../public/assets/project/news.png'
import Meydit from '../public/assets/project/meydit.png'
import AI from '../public/assets/project/aiTravelbot.png'
import Learnable from '../public/assets/project/learnable.png'
import Portfolio from '../public/assets/project/portfolio.png'

const Projects = () => {
    return (
        <div id='projects' className='w-full snap-mandatory snap-y'>
            <div className='mx-auto snap-start'>
                <h1 className='text-center tracking-widest uppercase text-cyan-500 font-bold mx-6 py-10'>
                    Projects
                </h1>
                <div className="flex flex-col top-20 items-center snap-start">
                    {items.map((card, index) => (
                        <ParallaxCard
                            key={index}
                            image={card.img}
                            title={card.title}
                            tech={card.tech}
                            description={card.description}
                            gitUrl={card.gitUrl}
                            projectUrl={card.projectUrl}
                            isImageLeft={index % 2 === 0}
                        />
                    ))}
                </div>
            </div>
        </div >
    );
};

export default Projects;

const items = [
    {
        id: 1,
        title: 'Meydit',
        img: Meydit,
        projectUrl: 'https://meyd.it',
        tech: 'REACTJS NEXTJS REDUX YARN STRIPE',
        description: 'This app is great I loved making this app what a fun app yay this is fun what a good app This app is great I loved making this app what a fun app yay this is fun what a good app'
    },
    {
        id: 2,
        title: 'GenerativeAI Travel planner app',
        img: AI,
        gitUrl: 'https://github.com/ashesash/quantium-govhack-2023',
        projectUrl: 'https://linkedin.com',
        tech: 'Python, Flask, ChatGPT API',
        description: 'This app is great I loved making this app what a fun app yay this is fun what a good app This app is great I loved making this app what a fun app yay this is fun what a good app'
    },

    {
        id: 3,
        title: 'Thunder News Blog',
        img: Blog,
        gitUrl: 'https://github.com/ashesash/she-codes-django-news-project',
        projectUrl: 'https://linkedin.com',
        tech: 'HTML, CSS, Django',
        description: 'This app is great I loved making this app what a fun app yay this is fun what a good app This app is great I loved making this app what a fun app yay this is fun what a good app'
    },
    {
        id: 4,
        title: 'Workshop Sign up Platform',
        img: Learnable,
        gitUrl: 'https://github.com/ashesash/react-mentoring-platform',
        projectUrl: 'https://linkedin.com',
        tech: 'HTML, CSS, React JS, Django',
        description: 'This app is great I loved making this app what a fun app yay this is fun what a good app This app is great I loved making this app what a fun app yay this is fun what a good app'
    },
    {
        id: 5,
        title: 'Portfolio website',
        img: Portfolio,
        gitUrl: 'https://github.com/ashesash/toDoList',
        // projectUrl: 'https://linkedin.com',
        tech: 'Python, Flask, ChatGPT API',
        description: 'This app is great I loved making this app what a fun app yay this is fun what a good app This app is great I loved making this app what a fun app yay this is fun what a good app'
    },

];
