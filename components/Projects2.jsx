import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ParallaxCard from './ParallaxCard';
import Blog from '../public/assets/project/news.png';
import Meydit from '../public/assets/project/meydit.png';
import AI from '../public/assets/project/aiTravelbot.png';
import Learnable from '../public/assets/project/learnable.png';
import Portfolio from '../public/assets/project/portfolio.png';

const Projects2 = () => {
    const container = useRef(null);

    // Track the scroll position of the entire Projects section
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "start end"], // Trigger as section enters viewport
    });

    // Sticky heading stays still
    const headingY = useTransform(scrollYProgress, [0.2, 0.8], ["20%", "-10%"]);
    // const headingY = useTransform(scrollYProgress, [0, 0.2], ["0%", "-50%"]);

    // Cards parallax effect
    const cardsY = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

    return (
        <div id="projects" className="my-10" ref={container}>
            <motion.h1
                style={{
                    y: headingY,
                }}
                className="text-center uppercase text-cyan-500 bg-black"
            >
                Projects
            </motion.h1>
            <div className='sticky top-0'>
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
    );
};

export default Projects2;

const items = [
    {
        id: 1,
        title: 'Meydit',
        img: Meydit,
        projectUrl: 'https://meyd.it',
        tech: 'ReactJS, Next.js, Redux, Stripe',
        description: 'A marketplace for makers.',
    },
    {
        id: 2,
        title: 'GenerativeAI Travel Planner',
        img: AI,
        gitUrl: 'https://github.com/ashesash/quantium-govhack-2023',
        projectUrl: 'https://linkedin.com',
        tech: 'Python, Flask, ChatGPT API',
        description: 'AI-powered travel planning app.',
    },
    {
        id: 3,
        title: 'Thunder News Blog',
        img: Blog,
        gitUrl: 'https://github.com/ashesash/she-codes-django-news-project',
        projectUrl: 'https://linkedin.com',
        tech: 'HTML, CSS, Django',
        description: 'A news blog built with Django.',
    },
    {
        id: 4,
        title: 'Workshop Sign-up Platform',
        img: Learnable,
        gitUrl: 'https://github.com/ashesash/react-mentoring-platform',
        projectUrl: 'https://linkedin.com',
        tech: 'HTML, CSS, React, Django',
        description: 'A platform for registering workshops.',
    },
    {
        id: 5,
        title: 'Portfolio Website',
        img: Portfolio,
        gitUrl: 'https://github.com/ashesash/toDoList',
        tech: 'Python, Flask, ChatGPT API',
        description: 'My personal portfolio website.',
    },
];
